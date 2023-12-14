// components/chat-assistant.tsx
import React, { useEffect, useState } from "react"

import TypingIndicator from "@/components/ui/typing"
import { Icons } from "@/components/icons"
import { UserAvatar } from "@/components/user-avatar"

interface ChatAssistantProps {
  storyId: string
}
interface User {
  id: string
  name: string | null
  image: string
}
const ChatAssistant: React.FC<ChatAssistantProps> = ({ storyId }) => {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<any[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Fetch the user data from the API when the component mounts
    fetch(`/api/users/`)
      .then((response) => response.json())
      .then((data) => {
        setUser({ id: data.userId, name: data.name, image: data.image })
      })

    // Fetch the chat history from the API when the component mounts
    fetch(`/api/ai/${storyId}`)
      .then((response) => response.json())
      .then((data) => {
        const chatMessages = data.chatMessages.reverse().map((message) => ({
          role: message.role,
          content: message.content,
        }))
        setChatHistory(chatMessages)
      })
  }, [storyId])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // Add the user's message to the chat history immediately
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { role: "user", content: message },
    ])

    // Set isTyping to true when the user sends a message
    setIsTyping(true)

    // Make a POST request to the API to send the chat message
    fetch(`/api/ai/${storyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messageType: "chat", chatMessage: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: "assistant", content: data.textOutput },
        ])
        // Set isTyping to false when the AI has responded
        setIsTyping(false)
      })

    // Clear the input field
    setMessage("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto p-4 flex-grow text-sm">
        {/* Display the chat history */}
        {chatHistory.map((chatMessage, index) => {
          return (
            <div key={index} className="flex items-start mb-4">
              <div className="bg-gray-200 rounded-lg p-2 flex">
                <div>
                  {chatMessage.role === "user" && user && (
                    <UserAvatar user={user} className="mr-2 h-6 w-6" />
                  )}
                  {chatMessage.role === "assistant" && (
                    <Icons.bot className="mr-2 h-6 w-6" />
                  )}
                </div>
                <div>
                  {chatMessage.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>{" "}
            </div>
          )
        })}
        {/* Display the typing indicator */}
        {isTyping && (
          <div className="flex items-center">
            <Icons.bot className="mr-2 h-6 w-6" />
            <TypingIndicator />
          </div>
        )}
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="flex p-4 border-t border-gray-200"
      >
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="flex-grow h-10 text-sm resize-none rounded-md border dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-50 focus:outline-none mr-2 pl-2 py-2"
          placeholder={message ? "" : "Type your message here..."}
        />
        <button type="submit">
          <Icons.send className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}

export default ChatAssistant
