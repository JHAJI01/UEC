import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Users, 
  MessageCircle, 
  Crown, 
  Zap, 
  Shield,
  Star,
  ArrowRight,
  Play
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Tournament Management',
      description: 'Create and join tournaments with ease. From casual matches to professional competitions.',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'Team Formation',
      description: 'Find teammates, create squads, and dominate the competition together.',
      color: 'text-blue-400'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Connect with players worldwide through text and voice chat features.',
      color: 'text-green-400'
    },
    {
      icon: Crown,
      title: 'Leaderboards',
      description: 'Track your progress and compete for the top spots in global rankings.',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'Live Streaming',
      description: 'Stream your gameplay and watch others compete in real-time.',
      color: 'text-red-400'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Fair play guaranteed with advanced anti-cheat and moderation systems.',
      color: 'text-cyan-400'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Active Players' },
    { number: '1.2K+', label: 'Tournaments' },
    { number: '500+', label: 'Teams' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Ultimate Esports</span>
                <br />
                <span className="text-white">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The one-stop platform where gamers compete, connect, and conquer. 
                Join thousands of players in the ultimate gaming experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/tournaments" className="btn-primary flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Start Playing</span>
              </Link>
              <Link to="/profile" className="btn-secondary flex items-center space-x-2">
                <span>Create Profile</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="text-gradient">Dominate</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From tournament management to team formation, we've got all the tools 
              you need to take your gaming to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:gaming-glow group cursor-pointer"
                >
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-gaming-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey today and become part of the ultimate gaming community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/profile" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Create Your Profile
              </Link>
              <Link 
                to="/tournaments" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Browse Tournaments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home