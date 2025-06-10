'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'

interface CalendarProps {
  selected: Date | null
  onSelect: (date: Date) => void
  className?: string
}

export function Calendar({ selected, onSelect, className = '' }: CalendarProps) {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today)

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  })

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={previousMonth}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={nextMonth}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm">
        {days.map((day: Date) => (
          <button
            key={day.toString()}
            onClick={() => onSelect(day)}
            className={`
              py-1.5 hover:bg-gray-100 focus:z-10
              ${isSameMonth(day, currentMonth) ? 'bg-white' : 'bg-gray-50 text-gray-400'}
              ${isSameDay(day, today) ? 'font-semibold' : ''}
              ${selected && isSameDay(day, selected) ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
            `}
          >
            <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
          </button>
        ))}
      </div>
    </div>
  )
} 