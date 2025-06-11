'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, PaperClipIcon } from '@heroicons/react/24/outline'

const topics = [
  'Algebra',
  'Geometry',
  'Calculus',
  'Statistics',
  'Trigonometry',
  'Pre-Calculus',
]

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  answered: 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
}

const questions = [
  {
    id: 1,
    title: 'Understanding Quadratic Formula',
    topic: 'Algebra',
    status: 'answered',
    date: '2024-03-15',
    content: 'I\'m having trouble understanding how to apply the quadratic formula in different scenarios. Can someone explain?',
    replies: [
      {
        id: 1,
        author: 'Brandon',
        date: '2024-03-15',
        content: 'Here\'s a detailed explanation of the quadratic formula...',
        isVideo: false,
      },
      {
        id: 2,
        author: 'Sarah',
        date: '2024-03-16',
        content: 'I\'ve created a video explanation that might help...',
        isVideo: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Circle Theorems Question',
    topic: 'Geometry',
    status: 'in-progress',
    date: '2024-03-18',
    content: 'Can someone help me understand the relationship between inscribed angles and central angles?',
    replies: [
      {
        id: 1,
        author: 'Michael',
        date: '2024-03-18',
        content: 'Let me explain the relationship between these angles...',
        isVideo: false,
      },
    ],
  },
]

export default function QAPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTopic = !selectedTopic || question.topic === selectedTopic
    return matchesSearch && matchesTopic
  })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Q&A Help</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get help from our expert instructors
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Question Submission Form */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Ask a Question</h2>
              <form className="mt-6 space-y-6">
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select a topic</option>
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Question Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Brief description of your question"
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                    Question Details
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Describe your question in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Attachments
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                    <div className="text-center">
                      <PaperClipIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </div>

          {/* Questions List */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">Questions</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search questions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                    <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">All Topics</option>
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {filteredQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{question.title}</h3>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          statusColors[question.status as keyof typeof statusColors]
                        }`}
                      >
                        {question.status.charAt(0).toUpperCase() + question.status.slice(1)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{question.content}</p>
                    <div className="mt-4 space-y-4">
                      {question.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="rounded-lg bg-gray-50 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900">{reply.author}</span>
                            <span className="text-sm text-gray-500">{reply.date}</span>
                          </div>
                          {reply.isVideo ? (
                            <div className="mt-2 aspect-video w-full bg-gray-200 rounded-lg">
                              <div className="flex h-full items-center justify-center text-gray-500">
                                Video Reply Placeholder
                              </div>
                            </div>
                          ) : (
                            <p className="mt-2 text-sm text-gray-600">{reply.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 