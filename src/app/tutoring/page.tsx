// Trivial change to force redeploy and clear Vercel cache
'use client'

import { useState } from 'react'
import { Calendar } from '@/components/Calendar'

const instructors = [
  { id: 1, name: 'Brandon', specialties: ['Algebra', 'Calculus'] },
  { id: 2, name: 'Sarah', specialties: ['Geometry', 'Statistics'] },
  { id: 3, name: 'Michael', specialties: ['Trigonometry', 'Pre-Calculus'] },
]

const topics = [
  'Algebra',
  'Geometry',
  'Calculus',
  'Statistics',
  'Trigonometry',
  'Pre-Calculus',
]

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

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Book Tutoring</h1>
          <p className="mt-4 text-lg text-gray-600">
            Schedule a one-on-one session with our expert instructors
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Calendar and Time Selection */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Select Date & Time</h2>
            <div className="mt-6">
              <Calendar
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </div>
            {selectedDate && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Available Times</h3>
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-md px-4 py-2 text-sm font-medium ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Session Details</h2>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
                  Instructor
                </label>
                <select
                  id="instructor"
                  name="instructor"
                  className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={selectedInstructor || ''}
                  onChange={(e) => setSelectedInstructor(Number(e.target.value))}
                >
                  <option value="">Select an instructor</option>
                  {instructors.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name} ({instructor.specialties.join(', ')})
                    </option>
                  ))}
                </select>
              </div>

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
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notes for Tutor
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Any specific topics or questions you'd like to cover?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book Session
              </button>
            </form>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Upcoming Sessions</h2>
          <div className="mt-6 space-y-4">
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
        </div>
      </div>
    </div>
  )
} 