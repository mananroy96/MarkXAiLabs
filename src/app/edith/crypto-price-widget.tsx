"use client"

import { useState, useEffect } from "react"

interface CryptoCoin {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  image: string
}

const POPULAR_COIN_IDS = ["bitcoin", "ethereum", "binancecoin", "ripple", "solana"]
const NEW_LISTING_IDS = ["pepe", "bonk", "dogwifcoin", "jupiter-exchange-solana", "wormhole"]

const getCoinColor = (symbol: string): string => {
  const colors: { [key: string]: string } = {
    BTC: "bg-orange-500",
    ETH: "bg-blue-500",
    BNB: "bg-yellow-500",
    XRP: "bg-slate-600",
    SOL: "bg-purple-500",
    PEPE: "bg-green-500",
    BONK: "bg-orange-400",
    WIF: "bg-pink-500",
    JUP: "bg-blue-400",
    W: "bg-indigo-500",
  }
  return colors[symbol.toUpperCase()] || "bg-gray-500"
}

export default function CryptoPriceWidget() {
  const [coins, setCoins] = useState<CryptoCoin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"popular" | "new">("popular")
  const [showAllCoins, setShowAllCoins] = useState(false)
  const [allCoins, setAllCoins] = useState<CryptoCoin[]>([])

  const fetchCryptoData = async (coinIds: string[]) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(",")}&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch crypto data")
      }

      const data = await response.json()
      return data
    } catch (err) {
      throw new Error("Failed to load cryptocurrency data")
    }
  }

  const fetchAllCoins = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch all coins data")
      }

      const data = await response.json()
      setAllCoins(data)
    } catch (err) {
      console.error("Failed to load all coins data")
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const coinIds = activeTab === "popular" ? POPULAR_COIN_IDS : NEW_LISTING_IDS
        const data = await fetchCryptoData(coinIds)
        setCoins(data)
        setError(null)
      } catch (err) {
        setError("Failed to load cryptocurrency data")
      }
      setLoading(false)
    }

    loadData()

    // Refresh data every 30 seconds
    const interval = setInterval(loadData, 30000)

    return () => clearInterval(interval)
  }, [activeTab])

  const handleViewAll = async () => {
    if (allCoins.length === 0) {
      await fetchAllCoins()
    }
    setShowAllCoins(true)
  }

  const formatPrice = (price: number): string => {
    if (price >= 1000) {
      return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    return `$${price.toFixed(2)}`
  }

  const formatPercentage = (percentage: number): string => {
    const sign = percentage >= 0 ? "+" : ""
    return `${sign}${percentage.toFixed(2)}%`
  }

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <div className="text-white font-semibold text-lg">Popular</div>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
            </div>
            <div className="text-slate-400 font-semibold text-lg">New Listing</div>
          </div>
          <div className="text-slate-400 text-sm">View All 350+ Coins {">"}</div>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-700 rounded w-20 animate-pulse"></div>
                  <div className="h-3 bg-slate-700 rounded w-16 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="h-4 bg-slate-700 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-16 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="text-center text-red-400">{error}</div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-8">
            <button onClick={() => setActiveTab("popular")} className="relative group">
              <div
                className={`font-semibold text-lg transition-colors ${
                  activeTab === "popular" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Popular
              </div>
              {activeTab === "popular" && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
              )}
            </button>
            <button onClick={() => setActiveTab("new")} className="relative group">
              <div
                className={`font-semibold text-lg transition-colors ${
                  activeTab === "new" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                New Listing
              </div>
              {activeTab === "new" && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
              )}
            </button>
          </div>
          <button onClick={handleViewAll} className="text-slate-400 hover:text-white transition-colors text-sm">
            View All 350+ Coins {">"}
          </button>
        </div>

        {/* Crypto List */}
        <div className="space-y-4">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between py-3 hover:bg-slate-800/50 rounded-lg px-2 transition-colors"
            >
              {/* Left side - Logo and Info */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${getCoinColor(coin.symbol)} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{coin.symbol.toUpperCase().slice(0, 3)}</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold text-lg">{coin.symbol.toUpperCase()}</span>
                    <span className="text-slate-400 text-lg">{coin.name}</span>
                  </div>
                </div>
              </div>

              {/* Right side - Price and Change */}
              <div className="flex items-center space-x-8">
                <span className="text-white font-semibold text-xl">{formatPrice(coin.current_price)}</span>
                <span
                  className={`font-medium text-lg ${
                    coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formatPercentage(coin.price_change_percentage_24h)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for View All Coins */}
      {showAllCoins && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">All Cryptocurrencies</h2>
              <button onClick={() => setShowAllCoins(false)} className="text-slate-400 hover:text-white text-2xl">
                ×
              </button>
            </div>
            <div className="space-y-3">
              {allCoins.map((coin, index) => (
                <div
                  key={coin.id}
                  className="flex items-center justify-between py-2 hover:bg-slate-800/50 rounded-lg px-2 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-slate-400 text-sm w-8">#{index + 1}</span>
                    <div
                      className={`w-10 h-10 rounded-full ${getCoinColor(coin.symbol)} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-xs">{coin.symbol.toUpperCase().slice(0, 3)}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{coin.symbol.toUpperCase()}</span>
                        <span className="text-slate-400">{coin.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-white font-medium">{formatPrice(coin.current_price)}</span>
                    <span
                      className={`font-medium ${
                        coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {formatPercentage(coin.price_change_percentage_24h)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
