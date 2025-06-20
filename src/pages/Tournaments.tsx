import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Calendar, 
  Users, 
  DollarSign, 
  Filter,
  Search,
  Plus,
  Clock,
  MapPin
} from 'lucide-react'

const Tournaments = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGame, setSelectedGame] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const tournaments = [
    {
      id: 1,
      title: 'Valorant Champions Cup',
      game: 'Valorant',
      prize: '$10,000',
      participants: 128,
      maxParticipants: 128,
      startDate: '2025-02-15',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      organizer: 'Pro Gaming League',
      location: 'Online'
    },
    {
      id: 2,
      title: 'CS2 Major Tournament',
      game: 'CS2',
      prize: '$25,000',
      participants: 64,
      maxParticipants: 64,
      startDate: '2025-02-20',
      status: 'registration',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      organizer: 'Elite Esports',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      title: 'League of Legends Clash',
      game: 'League of Legends',
      prize: '$15,000',
      participants: 45,
      maxParticipants: 64,
      startDate: '2025-02-25',
      status: 'registration',
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg',
      organizer: 'Gaming Arena',
      location: 'Online'
    },
    {
      id: 4,
      title: 'Rocket League Championship',
      game: 'Rocket League',
      prize: '$8,000',
      participants: 32,
      maxParticipants: 32,
      startDate: '2025-01-30',
      status: 'live',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg',
      organizer: 'Speed Gaming',
      location: 'Online'
    }
  ]

  const games = ['all', 'Valorant', 'CS2', 'League of Legends', 'Rocket League']
  const statuses = ['all', 'upcoming', 'registration', 'live', 'completed']

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.game.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGame = selectedGame === 'all' || tournament.game === selectedGame
    const matchesStatus = selectedStatus === 'all' || tournament.status === selectedStatus
    
    return matchesSearch && matchesGame && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500 text-white'
      case 'registration': return 'bg-green-500 text-white'
      case 'upcoming': return 'bg-blue-500 text-white'
      case 'completed': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'Live Now'
      case 'registration': return 'Open Registration'
      case 'upcoming': return 'Upcoming'
      case 'completed': return 'Completed'
      default: return status
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Tournaments</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Compete in exciting tournaments, win prizes, and climb the ranks. 
            Join the competition or create your own tournament.
          </p>
          
          <button className="btn-primary flex items-center space-x-2 mx-auto">
            <Plus className="h-5 w-5" />
            <span>Create Tournament</span>
          </button>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tournaments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>

            {/* Game Filter */}
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

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="input-field"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : getStatusText(status)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tournament Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:gaming-glow group cursor-pointer overflow-hidden"
            >
              {/* Tournament Image */}
              <div className="relative mb-4 -mx-6 -mt-6">
                <img
                  src={tournament.image}
                  alt={tournament.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(tournament.status)}`}>
                    {getStatusText(tournament.status)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full">
                  <span className="text-white font-semibold">{tournament.game}</span>
                </div>
              </div>

              {/* Tournament Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {tournament.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <DollarSign className="h-4 w-4 text-green-400" />
                    <span>{tournament.prize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>{tournament.participants}/{tournament.maxParticipants}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span>{new Date(tournament.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-red-400" />
                    <span>{tournament.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-dark-600">
                  <p className="text-gray-400 text-sm mb-3">
                    Organized by <span className="text-white font-medium">{tournament.organizer}</span>
                  </p>
                  
                  <div className="flex space-x-2">
                    <button className="btn-primary flex-1 text-sm py-2">
                      {tournament.status === 'registration' ? 'Register' : 'View Details'}
                    </button>
                    <button className="btn-secondary px-4 py-2">
                      <Trophy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No tournaments found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or create a new tournament.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tournaments