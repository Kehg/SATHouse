'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import {
  AcademicCapIcon,
  CalendarIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

const progressData = {
  'Algebra': {
    completed: 12,
    total: 20,
    lastLesson: 'Quadratic Functions',
  },
  'Geometry': {
    completed: 8,
    total: 15,
    lastLesson: 'Circle Theorems',
  },
  'Calculus': {
    completed: 5,
    total: 25,
    lastLesson: 'Derivatives',
  },
}

const upcomingSessions = [
  {
    id: 1,
    date: '2024-03-20',
    time: '14:00',
    instructor: 'Brandon',
    topic: 'Algebra',
    type: 'Online',
  },
  {
    id: 2,
    date: '2024-03-22',
    time: '16:00',
    instructor: 'Sarah',
    topic: 'Geometry',
    type: 'In-Person',
  },
]

const unansweredQuestions = [
  {
    id: 1,
    title: 'Understanding Quadratic Formula',
    topic: 'Algebra',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Circle Theorems Question',
    topic: 'Geometry',
    date: '2024-03-18',
  },
]

const quickLinks = [
  {
    name: 'Resume Last Lesson',
    href: '/courses/algebra/quadratic-functions',
    icon: BookOpenIcon,
  },
  {
    name: 'Book Tutoring',
    href: '/tutoring',
    icon: CalendarIcon,
  },
  {
    name: 'View Q&A',
    href: '/qa',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Edit Profile',
    href: '/account/profile',
    icon: UserCircleIcon,
  },
]

export default function AccountPage() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">My Account</h1>
          <p className="mt-4 text-lg text-gray-600">
            Track your progress and manage your learning journey
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <link.icon className="h-8 w-8 text-blue-600" />
              <span className="mt-2 text-sm font-medium text-gray-900">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-16">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-4 border-b border-gray-200">
              <Tab
                className={({ selected }) =>
                  `border-b-2 py-4 px-1 text-sm font-medium ${
                    selected
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                Progress
              </Tab>
              <Tab
                className={({ selected }) =>
                  `border-b-2 py-4 px-1 text-sm font-medium ${
                    selected
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                Upcoming Sessions
              </Tab>
              <Tab
                className={({ selected }) =>
                  `border-b-2 py-4 px-1 text-sm font-medium ${
                    selected
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                Q&A
              </Tab>
            </Tab.List>

            <Tab.Panels className="mt-8">
              {/* Progress Panel */}
              <Tab.Panel>
                <div className="space-y-8">
                  {Object.entries(progressData).map(([topic, data]) => (
                    <div
                      key={topic}
                      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{topic}</h3>
                        <span className="text-sm text-gray-500">
                          {data.completed} of {data.total} lessons completed
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="relative h-2 rounded-full bg-gray-200">
                          <div
                            className="absolute h-2 rounded-full bg-blue-600"
                            style={{ width: `${(data.completed / data.total) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-sm text-gray-500">Last lesson: {data.lastLesson}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>

              {/* Upcoming Sessions Panel */}
              <Tab.Panel>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {session.topic} with {session.instructor}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {session.date} at {session.time} ({session.type})
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                          Reschedule
                        </button>
                        <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>

              {/* Q&A Panel */}
              <Tab.Panel>
                <div className="space-y-4">
                  {unansweredQuestions.map((question) => (
                    <div
                      key={question.id}
                      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{question.title}</h3>
                        <span className="text-sm text-gray-500">{question.date}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">Topic: {question.topic}</p>
                      <div className="mt-4">
                        <Link
                          href={`/qa#question-${question.id}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-500"
                        >
                          View Question →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
} 