"use client";

import { useState } from "react";
import { MessageCircle, Send, Search, Clock, CheckCheck, Phone, Video } from "lucide-react";

const conversations = [
  {
    id: 1,
    shelterName: "Happy Paws Shelter",
    shelterAvatar: "HP",
    lastMessage: "Great news! Your application for Buddy has been approved. When would you like to schedule a visit?",
    time: "2 min ago",
    unread: 2,
    petName: "Buddy",
    online: true,
  },
  {
    id: 2,
    shelterName: "City Animal Rescue",
    shelterAvatar: "CA",
    lastMessage: "Thank you for your interest in Luna! We're reviewing your application.",
    time: "1 hour ago",
    unread: 0,
    petName: "Luna",
    online: false,
  },
  {
    id: 3,
    shelterName: "Furry Friends Foundation",
    shelterAvatar: "FF",
    lastMessage: "Hi Sarah! Do you have any questions about Max?",
    time: "Yesterday",
    unread: 1,
    petName: "Max",
    online: true,
  },
];

const messages = [
  { id: 1, sender: "shelter", text: "Hi Sarah! Thank you for applying to adopt Buddy. 🐕", time: "10:30 AM" },
  { id: 2, sender: "user", text: "Hi! Yes, I'm very excited about meeting Buddy. He seems like such a sweet dog!", time: "10:32 AM" },
  { id: 3, sender: "shelter", text: "He really is! He's very friendly and loves to play fetch.", time: "10:33 AM" },
  { id: 4, sender: "shelter", text: "Great news! Your application for Buddy has been approved. When would you like to schedule a visit?", time: "10:35 AM" },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="h-[calc(100vh-80px-64px)] flex gap-6">
      {/* Conversations List */}
      <div className="w-80 flex flex-col bg-card rounded-3xl shadow-card overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-coral/10">
          <h2 className="text-xl font-bold text-textPrimary flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-coral" />
            Messages
          </h2>
          {/* Search */}
          <div className="mt-3 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-bg border border-coral/10 text-sm focus:outline-none focus:ring-2 focus:ring-coral/30"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`w-full p-3 rounded-2xl flex items-start gap-3 transition-all text-left ${
                selectedConversation.id === conv.id
                  ? "bg-coral/10 shadow-sm"
                  : "hover:bg-lavender/20"
              }`}
            >
              {/* Avatar */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center font-bold text-purple-700">
                  {conv.shelterAvatar}
                </div>
                {conv.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full ring-2 ring-white" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-textPrimary text-sm">{conv.shelterName}</span>
                  <span className="text-xs text-textMuted">{conv.time}</span>
                </div>
                <div className="text-xs text-coral font-medium mb-1">Re: {conv.petName}</div>
                <p className="text-sm text-textSec truncate">{conv.lastMessage}</p>
              </div>

              {/* Unread Badge */}
              {conv.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-coral text-white text-xs flex items-center justify-center font-bold">
                  {conv.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-card rounded-3xl shadow-card overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b border-coral/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center font-bold text-purple-700">
                {selectedConversation.shelterAvatar}
              </div>
              {selectedConversation.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full ring-2 ring-white" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-textPrimary">{selectedConversation.shelterName}</h3>
              <span className="text-xs text-success font-medium">
                {selectedConversation.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-lavender/20 transition-colors">
              <Phone className="w-5 h-5 text-textSec" />
            </button>
            <button className="p-2 rounded-full hover:bg-lavender/20 transition-colors">
              <Video className="w-5 h-5 text-textSec" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-coral text-white rounded-br-md"
                    : "bg-lavender/30 text-textPrimary rounded-bl-md"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <div className={`flex items-center gap-1 mt-1 ${msg.sender === "user" ? "justify-end" : ""}`}>
                  <span className={`text-xs ${msg.sender === "user" ? "text-white/70" : "text-textMuted"}`}>
                    {msg.time}
                  </span>
                  {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-white/70" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-coral/10">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-full bg-bg border border-coral/10 focus:outline-none focus:ring-2 focus:ring-coral/30"
            />
            <button className="p-3 rounded-full bg-coral text-white shadow-btn hover:scale-105 transition-transform">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
