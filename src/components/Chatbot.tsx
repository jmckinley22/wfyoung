'use client'

import { useState } from 'react'

interface Message {
  text: string
  isUser: boolean
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can I help you today?', isUser: false }
  ])
  const [inputText, setInputText] = useState('')

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    // Add user message
    const userMessage = { text: inputText, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInputText('')

    // Simulate bot response
    const botResponses = {
      'hello': 'Hi there! How can I assist you with our animal wellness products?',
      'products': 'We offer a wide range of products for both equine and pet care. Would you like to learn more about a specific category?',
      'equine': 'Our equine products include grooming supplies, hoof care, joint support, and more. What specific product are you interested in?',
      'pet': 'We have various pet care products including grooming essentials, health supplements, and wellness items. What are you looking for?',
      'contact': 'You can reach us at 800-628-9653 or visit our contact page for more options.',
      'help': 'I can help you find products, answer questions about our company, or connect you with customer service. What do you need?'
    }

    // Simple response logic
    const response = { 
      text: Object.entries(botResponses).find(([key]) => 
        inputText.toLowerCase().includes(key))?.[1] || 
        "I'm not sure about that. Would you like to speak with our customer service team?",
      isUser: false 
    }

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">W.F. Young Support</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Chatbot 