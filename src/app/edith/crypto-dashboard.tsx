interface CryptoCoin {
  symbol: string
  name: string
  price: string
  change: string
  logoColor: string
  textColor: string
}

const cryptoData: CryptoCoin[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$103,600.00",
    change: "+0.38%",
    logoColor: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,354.43",
    change: "+4.56%",
    logoColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "$661.33",
    change: "+4.95%",
    logoColor: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: "$2.38",
    change: "+2.94%",
    logoColor: "bg-slate-600",
    textColor: "text-slate-400",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$171.34",
    change: "+4.50%",
    logoColor: "bg-purple-500",
    textColor: "text-purple-500",
  },
]

export default function CryptoDashboard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 max-w-4xl mx-auto border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-8">
          <div className="relative">
            <button className="text-white font-semibold text-lg">Popular</button>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
          </div>
          <button className="text-slate-400 font-semibold text-lg hover:text-white transition-colors">
            New Listing
          </button>
        </div>
        <button className="text-slate-400 hover:text-white transition-colors text-sm">View All 350+ Coins {">"}</button>
      </div>

      {/* Crypto List */}
      <div className="space-y-4">
        {cryptoData.map((coin, index) => (
          <div
            key={coin.symbol}
            className="flex items-center justify-between py-3 hover:bg-slate-800/50 rounded-lg px-2 transition-colors"
          >
            {/* Left side - Logo and Info */}
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${coin.logoColor} flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{coin.symbol.slice(0, 3)}</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold text-lg">{coin.symbol}</span>
                  <span className="text-slate-400 text-lg">{coin.name}</span>
                </div>
              </div>
            </div>

            {/* Right side - Price and Change */}
            <div className="flex items-center space-x-8">
              <span className="text-white font-semibold text-xl">{coin.price}</span>
              <span className="text-green-400 font-medium text-lg">{coin.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
