import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Trophy, 
  Medal, 
  TrendingUp, 
  TrendingDown,
  Filter,
  Calendar,
  Target,
  Zap,
  Award
} from 'lucide-react'

const Leaderboard = () => {
  const [selectedGame, setSelectedGame] = useState('all')
  const [selectedPeriod, setSelectedPeriod] = useState('all-time')
  const [selectedCategory, setSelectedCategory] = useState('overall')

  const leaderboardData = [
    {
      rank: 1,
      username: 'ProGamer2025',
      points: 2850,
      wins: 45,
      losses: 8,
      winRate: 84.9,
      game: 'Valorant',
      change: 2,
      avatar: '👑',
      level: 67,
      tournaments: 12
    },
    {
      rank: 2,
      username: 'EliteSniper',
      points: 2720,
      wins: 42,
      losses: 12,
      winRate: 77.8,
      game: 'CS2',
      change: -1,
      avatar: '🎯',
      level: 63,
      tournaments: 10
    },
    {
      rank: 3,
      username: 'DragonSlayer',
      points: 2680,
      wins: 38,
      losses: 10,
      winRate: 79.2,
      game: 'League of Legends',
      change: 1,
      avatar: '🐉',
      level: 61,
      tournaments: 9
    },
    {
      rank: 4,
      username: 'CyberWolf',
      points: 2540,
      wins: 35,
      losses: 15,
      winRate: 70.0,
      game: 'Valorant',
      change: 0,
      avatar: '🐺',
      level: 58,
      tournaments: 8
    },
    {
      rank: 5,
      username: 'PhoenixRising',
      points: 2480,
      wins: 33,
      losses: 12,
      winRate: 73.3,
      game: 'Rocket League',
      change: 3,
      avatar: '🔥',
      level: 56,
      tournaments: 7
    },
    {
      rank: 6,
      username: 'ShadowHunter',
      points: 2420,
      wins: 31,
      losses: 14,
      winRate: 68.9,
      game: 'CS2',
      change: -2,
      avatar: '🌙',
      level: 54,
      tournaments: 6
    },
    {
      rank: 7,
      username: 'ThunderStrike',
      points: 2380,
      wins: 29,
      losses: 16,
      winRate: 64.4,
      game: 'Valorant',
      change: 1,
      avatar: '⚡',
      level: 52,
      tournaments: 6
    },
    {
      rank: 8,
      username: 'IceQueen',
      points: 2340,
      wins: 28,
      losses: 17,
      winRate: 62.2,
      game: 'League of Legends',
      change: -1,
      avatar: '❄️',
      level: 50,
      tournaments: 5
    },
    {
      rank: 9,
      username: 'BlazeFury',
      points: 2300,
      wins: 26,
      losses: 18,
      winRate: 59.1,
      game: 'Rocket League',
      change: 2,
      avatar: '🔥',
      level: 48,
      tournaments: 5
    },
    {
      rank: 10,
      username: 'NightRider',
      points: 2260,
      wins: 25,
      losses: 19,
      winRate: 56.8,
      game: 'CS2',
      change: -3,
      avatar: '🏍️',
      level: 46,
      tournaments: 4
    }
  ]

  const games = ['all', 'Valorant', 'CS2', 'League of Legends', 'Rocket League']
  const periods = ['all-time', 'monthly', 'weekly', 'daily']
  const categories = ['overall', 'wins', 'win-rate', 'tournaments']

  const filteredData = leaderboardData.filter(player => 
    selectedGame === 'all' || player.game === selectedGame
  )

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-400" />
      case 2: return <Trophy className="h-6 w-6 text-gray-400" />
      case 3: return <Medal className="h-6 w-6 text-orange-400" />
      default: return <span className="text-lg font-bold text-gray-400">#{rank}</span>
    }
  }

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30'
      case 2: return 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30'
      case 3: return 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/30'
      default: return 'bg-dark-700 border-dark-600'
    }
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-400" />
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-400" />
    return <span className="text-gray-400">-</span>
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Leaderboard</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See where you rank among the best players. Compete for the top spots 
            and earn your place in gaming history.
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredData.slice(0, 3).map((player, index) => {
            const positions = [1, 0, 2] // Second place in middle for podium effect
            const actualIndex = positions[index]
            const actualPlayer = filteredData[actualIndex]
            
            return (
              <motion.div
                key={actualPlayer.rank}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card text-center ${getRankBg(actualPlayer.rank)} ${
                  actualPlayer.rank === 1 ? 'md:order-2 transform md:scale-105' : 
                  actualPlayer.rank === 2 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                <div className="mb-4">
                  {getRankIcon(actualPlayer.rank)}
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {actualPlayer.avatar}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{actualPlayer.username}</h3>
                <p className="text-gray-400 mb-4">{actualPlayer.game}</p>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gradient">{actualPlayer.points}</div>
                  <div className="text-sm text-gray-400">Points</div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <div className="text-green-400 font-semibold">{actualPlayer.wins}W</div>
                      <div className="text-gray-400">Wins</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold">{actualPlayer.winRate}%</div>
                      <div className="text-gray-400">Win Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="input-field"
            >
              {games.map(game => (
                <option key={game} value={game}>
                  {game === 'all' ? 'All Games' : game}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="input-field"
            >
              {periods.map(period => (
                <option key={period} value={period}>
                  {period.charAt(0).toUpperCase() + period.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
            
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Rank</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Player</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Game</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Points</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">W/L</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Win Rate</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Tournaments</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Change</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((player, index) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-full flex items-center justify-center">
                          {player.avatar}
                        </div>
                        <div>
                          <div className="text-white font-medium">{player.username}</div>
                          <div className="text-sm text-gray-400">Level {player.level}</div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 px-4">
                      <span className="bg-dark-600 text-gray-300 px-2 py-1 rounded text-sm">
                        {player.game}
                      </span>
                    </td>
                    
                    <td className="py-4 px-4 text-center">
                      <div className="text-white font-bold">{player.points}</div>
                    </td>
                    
                    <td className="py-4 px-4 text-center">
                      <div className="text-sm">
                        <span className="text-green-400">{player.wins}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-red-400">{player.losses}</span>
                      </div>
                    </td>
                    
                    <td className="py-4 px-4 text-center">
                      <div className="text-white font-medium">{player.winRate}%</div>
                    </td>
                    
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Trophy className="h-4 w-4 text-yellow-400" />
                        <span className="text-white">{player.tournaments}</span>
                      </div>
                    </td>
                    
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        {getChangeIcon(player.change)}
                        {player.change !== 0 && (
                          <span className={`text-sm ${
                            player.change > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {Math.abs(player.change)}
                          </span>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Your Rank Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card mt-8 bg-gradient-to-r from-primary-500/10 to-gaming-500/10 border-primary-500/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-full flex items-center justify-center text-2xl">
                🎮
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Current Rank</h3>
                <p className="text-gray-400">Keep playing to climb higher!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient">#42</div>
              <div className="text-gray-400">out of 1,247 players</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Leaderboard