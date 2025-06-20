import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Users, 
  Settings,
  Search,
  MoreVertical,
  Smile
} from 'lucide-react'

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState('')
  const [isMuted, setIsMuted] = useState(false)
  const [isInCall, setIsInCall] = useState(false)

  const chats = [
    {
      id: 1,
      name: 'Team Alpha',
      type: 'team',
      lastMessage: 'Ready for the tournament?',
      timestamp: '2 min ago',
      unread: 3,
      online: 4,
      avatar: '🏆'
    },
    {
      id: 2,
      name: 'ProGamer123',
      type: 'direct',
      lastMessage: 'GG! Great match today',
      timestamp: '5 min ago',
      unread: 0,
      online: true,
      avatar: '🎮'
    },
    {
      id: 3,
      name: 'Valorant Community',
      type: 'community',
      lastMessage: 'New patch notes are out!',
      timestamp: '1 hour ago',
      unread: 12,
      online: 156,
      avatar: '⚡'
    },
    {
      id: 4,
      name: 'Elite Squad',
      type: 'team',
      lastMessage: 'Practice at 8 PM?',
      timestamp: '2 hours ago',
      unread: 1,
      online: 2,
      avatar: '🔥'
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'TeamCaptain',
      message: 'Hey everyone! Ready for tonight\'s tournament?',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      message: 'Absolutely! I\'ve been practicing all week',
      timestamp: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'SnipeKing',
      message: 'Same here. What\'s our strategy for the first match?',
      timestamp: '10:33 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'TeamCaptain',
      message: 'Let\'s stick to our usual formation. SnipeKing on long range, ProGamer on entry',
      timestamp: '10:35 AM',
      isOwn: false
    },
    {
      id: 5,
      sender: 'You',
      message: 'Sounds good! Should we do a quick warm-up match before?',
      timestamp: '10:36 AM',
      isOwn: true
    }
  ]

  const currentChat = chats.find(chat => chat.id === selectedChat)

  const sendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-800 rounded-xl overflow-hidden shadow-2xl" style={{ height: 'calc(100vh - 8rem)' }}>
          <div className="flex h-full">
            {/* Chat List Sidebar */}
            <div className="w-80 bg-dark-900 border-r border-dark-700 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-dark-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">Messages</h2>
                  <button className="text-gray-400 hover:text-white">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search chats..."
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                {chats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 cursor-pointer border-b border-dark-700/50 ${
                      selectedChat === chat.id ? 'bg-primary-500/20 border-l-4 border-l-primary-500' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-full flex items-center justify-center text-xl">
                          {chat.avatar}
                        </div>
                        {chat.type === 'direct' && chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-900"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-medium truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-400">{chat.timestamp}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <span className="bg-primary-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                        {chat.type !== 'direct' && (
                          <div className="flex items-center space-x-1 mt-1">
                            <Users className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-500">{chat.online} online</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-dark-700 bg-dark-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-gaming-500 rounded-full flex items-center justify-center">
                      {currentChat?.avatar}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{currentChat?.name}</h3>
                      <p className="text-sm text-gray-400">
                        {currentChat?.type === 'direct' 
                          ? (currentChat.online ? 'Online' : 'Offline')
                          : `${currentChat?.online} members online`
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className={`p-2 rounded-lg transition-colors ${
                        isMuted ? 'bg-red-500 text-white' : 'bg-dark-700 text-gray-400 hover:text-white'
                      }`}
                    >
                      {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </button>
                    
                    <button
                      onClick={() => setIsInCall(!isInCall)}
                      className={`p-2 rounded-lg transition-colors ${
                        isInCall ? 'bg-green-500 text-white' : 'bg-dark-700 text-gray-400 hover:text-white'
                      }`}
                    >
                      {isInCall ? <PhoneOff className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                    </button>
                    
                    <button className="p-2 bg-dark-700 text-gray-400 hover:text-white rounded-lg">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                      {!msg.isOwn && (
                        <p className="text-xs text-gray-400 mb-1 px-3">{msg.sender}</p>
                      )}
                      <div className={`px-4 py-2 rounded-2xl ${
                        msg.isOwn 
                          ? 'bg-gradient-to-r from-primary-500 to-gaming-500 text-white' 
                          : 'bg-dark-700 text-white'
                      }`}>
                        <p>{msg.message}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-3">{msg.timestamp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-dark-700 bg-dark-800">
                <div className="flex items-center space-x-3">
                  <button className="text-gray-400 hover:text-white">
                    <Smile className="h-6 w-6" />
                  </button>
                  
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                      className="w-full bg-dark-700 border border-dark-600 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <button
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-primary-500 to-gaming-500 text-white p-3 rounded-full hover:from-primary-600 hover:to-gaming-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat