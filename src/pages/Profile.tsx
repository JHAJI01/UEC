import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Trophy, 
  Target, 
  Calendar, 
  Edit3,
  Settings,
  Award,
  TrendingUp,
  GamepadIcon,
  Star
} from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    username: 'ProGamer2025',
    email: 'progamer@uec.com',
    bio: 'Competitive gamer with 5+ years of experience in FPS and MOBA games. Always looking for new challenges!',
    favoriteGames: ['Valorant', 'CS2', 'League of Legends'],
    rank: 'Diamond',
    level: 42,
    joinDate: '2024-01-15'
  })

  const stats = [
    { label: 'Tournaments Won', value: '12', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Total Matches', value: '156', icon: Target, color: 'text-blue-400' },
    { label: 'Win Rate', value: '78%', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Current Rank', value: profile.rank, icon: Award, color: 'text-purple-400' }
  ]

  const achievements = [
    { title: 'First Victory', description: 'Won your first tournament', icon: Trophy, earned: true },
    { title: 'Team Player', description: 'Joined 5 different teams', icon: User, earned: true },
    { title: 'Sharpshooter', description: 'Achieved 90% accuracy in FPS games', icon: Target, earned: true },
    { title: 'Rising Star', description: 'Reached Diamond rank', icon: Star, earned: true },
    { title: 'Tournament Master', description: 'Win 25 tournaments', icon: Award, earned: false },
    { title: 'Legend', description: 'Reach Master rank', icon: GamepadIcon, earned: false }
  ]

  const recentMatches = [
    { game: 'Valorant', result: 'Win', score: '13-8', date: '2025-01-20', opponent: 'Team Alpha' },
    { game: 'CS2', result: 'Win', score: '16-12', date: '2025-01-19', opponent: 'Elite Squad' },
    { game: 'Valorant', result: 'Loss', score: '11-13', date: '2025-01-18', opponent: 'Pro Gamers' },
    { game: 'League of Legends', result: 'Win', score: 'Victory', date: '2025-01-17', opponent: 'Dragon Slayers' }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-dark-800"></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{profile.username}</h1>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Level {profile.level}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{profile.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.favoriteGames.map((game, index) => (
                  <span key={index} className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {game}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Member since {new Date(profile.joinDate).toLocaleDateString()}
              </p>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn-secondary flex items-center space-x-2"
              >
                <Edit3 className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button className="btn-secondary p-3">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-6">Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center p-4 bg-dark-700 rounded-lg">
                      <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Recent Matches */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-6">Recent Matches</h2>
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        match.result === 'Win' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <div className="text-white font-medium">{match.game}</div>
                        <div className="text-sm text-gray-400">vs {match.opponent}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        match.result === 'Win' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {match.result}
                      </div>
                      <div className="text-sm text-gray-400">{match.score}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(match.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        achievement.earned 
                          ? 'bg-primary-500/20 border border-primary-500/30' 
                          : 'bg-dark-700 opacity-50'
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${
                        achievement.earned ? 'text-primary-400' : 'text-gray-600'
                      }`} />
                      <div className="flex-1">
                        <div className={`font-medium ${
                          achievement.earned ? 'text-white' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full btn-primary text-left">
                  Join Tournament
                </button>
                <button className="w-full btn-secondary text-left">
                  Find Team
                </button>
                <button className="w-full btn-secondary text-left">
                  View Leaderboard
                </button>
                <button className="w-full btn-secondary text-left">
                  Start Chat
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile