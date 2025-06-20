import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  Crown,
  Trophy,
  Target,
  Calendar,
  MapPin,
  Star
} from 'lucide-react'

const Teams = () => {
  const [activeTab, setActiveTab] = useState('browse')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGame, setSelectedGame] = useState('all')

  const teams = [
    {
      id: 1,
      name: 'Elite Esports',
      game: 'Valorant',
      members: 5,
      maxMembers: 5,
      rank: 'Diamond',
      wins: 24,
      losses: 6,
      recruiting: true,
      description: 'Competitive team looking for skilled players. We practice daily and participate in tournaments.',
      requirements: ['Diamond+ rank', '18+ age', 'Good communication'],
      captain: 'ProCaptain',
      founded: '2024-06-15',
      logo: '⚡'
    },
    {
      id: 2,
      name: 'Dragon Slayers',
      game: 'League of Legends',
      members: 4,
      maxMembers: 5,
      rank: 'Platinum',
      wins: 18,
      losses: 8,
      recruiting: true,
      description: 'Friendly team focused on improvement and having fun while competing.',
      requirements: ['Platinum+ rank', 'Positive attitude', 'Available evenings'],
      captain: 'DragonMaster',
      founded: '2024-08-20',
      logo: '🐉'
    },
    {
      id: 3,
      name: 'Cyber Wolves',
      game: 'CS2',
      members: 5,
      maxMembers: 5,
      rank: 'Master',
      wins: 32,
      losses: 4,
      recruiting: false,
      description: 'Professional team competing in major tournaments. High skill level required.',
      requirements: ['Master+ rank', 'Tournament experience', 'Full commitment'],
      captain: 'WolfLeader',
      founded: '2024-03-10',
      logo: '🐺'
    },
    {
      id: 4,
      name: 'Phoenix Rising',
      game: 'Rocket League',
      members: 3,
      maxMembers: 3,
      rank: 'Champion',
      wins: 15,
      losses: 3,
      recruiting: false,
      description: 'Rocket League specialists with excellent teamwork and mechanical skills.',
      requirements: ['Champion+ rank', 'Team player', 'Consistent schedule'],
      captain: 'PhoenixFly',
      founded: '2024-09-05',
      logo: '🔥'
    }
  ]

  const myTeams = [
    {
      id: 1,
      name: 'Team Alpha',
      game: 'Valorant',
      role: 'Captain',
      members: 5,
      nextMatch: '2025-02-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Night Hawks',
      game: 'CS2',
      role: 'Member',
      members: 4,
      nextMatch: '2025-02-18',
      status: 'active'
    }
  ]

  const games = ['all', 'Valorant', 'CS2', 'League of Legends', 'Rocket League']

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.game.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGame = selectedGame === 'all' || team.game === selectedGame
    
    return matchesSearch && matchesGame
  })

  const getRankColor = (rank: string) => {
    switch (rank.toLowerCase()) {
      case 'bronze': return 'text-orange-600'
      case 'silver': return 'text-gray-400'
      case 'gold': return 'text-yellow-400'
      case 'platinum': return 'text-cyan-400'
      case 'diamond': return 'text-blue-400'
      case 'master': return 'text-purple-400'
      case 'champion': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Teams</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find your perfect team or create your own. Team up with skilled players 
            and dominate the competition together.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-dark-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'browse' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Browse Teams
            </button>
            <button
              onClick={() => setActiveTab('my-teams')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'my-teams' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My Teams
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'create' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Create Team
            </button>
          </div>
        </div>

        {/* Browse Teams Tab */}
        {activeTab === 'browse' && (
          <div>
            {/* Filters */}
            <div className="card mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search teams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field pl-10 w-full"
                  />
                </div>
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
                <button className="btn-secondary flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>More Filters</span>
                </button>
              </div>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:gaming-glow group cursor-pointer"
                >
                  {/* Team Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-lg flex items-center justify-center text-xl">
                        {team.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                          {team.name}
                        </h3>
                        <p className="text-sm text-gray-400">{team.game}</p>
                      </div>
                    </div>
                    {team.recruiting && (
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                        Recruiting
                      </span>
                    )}
                  </div>

                  {/* Team Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getRankColor(team.rank)}`}>
                        {team.rank}
                      </div>
                      <div className="text-xs text-gray-400">Rank</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">
                        {team.wins}W
                      </div>
                      <div className="text-xs text-gray-400">Wins</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-400">
                        {team.losses}L
                      </div>
                      <div className="text-xs text-gray-400">Losses</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {team.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.requirements.map((req, idx) => (
                        <span key={idx} className="bg-dark-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{team.members}/{team.maxMembers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Crown className="h-4 w-4" />
                      <span>{team.captain}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="btn-primary flex-1 text-sm py-2">
                      {team.recruiting ? 'Apply' : 'View'}
                    </button>
                    <button className="btn-secondary px-3 py-2">
                      <Star className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* My Teams Tab */}
        {activeTab === 'my-teams' && (
          <div className="space-y-6">
            {myTeams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-lg flex items-center justify-center text-2xl">
                      🏆
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{team.name}</h3>
                      <p className="text-gray-400">{team.game} • {team.role}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{team.members} members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Next match: {new Date(team.nextMatch).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn-secondary">Manage</button>
                    <button className="btn-primary">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}

            {myTeams.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No teams yet</h3>
                <p className="text-gray-500 mb-6">Join a team or create your own to get started.</p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="btn-primary"
                >
                  Browse Teams
                </button>
              </div>
            )}
          </div>
        )}

        {/* Create Team Tab */}
        {activeTab === 'create' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Create New Team</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Team Name</label>
                  <input
                    type="text"
                    placeholder="Enter team name"
                    className="input-field w-full"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Game</label>
                  <select className="input-field w-full">
                    <option value="">Select a game</option>
                    <option value="valorant">Valorant</option>
                    <option value="cs2">CS2</option>
                    <option value="lol">League of Legends</option>
                    <option value="rocket-league">Rocket League</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your team, goals, and what you're looking for in teammates"
                    className="input-field w-full resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Max Members</label>
                    <select className="input-field w-full">
                      <option value="3">3 members</option>
                      <option value="5">5 members</option>
                      <option value="6">6 members</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Required Rank</label>
                    <select className="input-field w-full">
                      <option value="">Any rank</option>
                      <option value="bronze">Bronze+</option>
                      <option value="silver">Silver+</option>
                      <option value="gold">Gold+</option>
                      <option value="platinum">Platinum+</option>
                      <option value="diamond">Diamond+</option>
                      <option value="master">Master+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Requirements</label>
                  <input
                    type="text"
                    placeholder="e.g., Good communication, Available evenings, 18+ age"
                    className="input-field w-full"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="recruiting" className="rounded" />
                  <label htmlFor="recruiting" className="text-white">
                    Open for recruitment
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary flex-1">
                    Create Team
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('browse')}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Teams