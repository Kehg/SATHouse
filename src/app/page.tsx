'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

const mathCategories = [
  {
    name: 'Algebra',
    subtopics: [
      {
        name: 'Linear Equations',
        approaches: ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods'],
      },
      {
        name: 'Quadratic Functions',
        approaches: ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods'],
      },
    ],
  },
  {
    name: 'Geometry',
    subtopics: [
      {
        name: 'Triangles',
        approaches: ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods'],
      },
      {
        name: 'Circles',
        approaches: ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods'],
      },
    ],
  },
  {
    name: 'Calculus',
    subtopics: [
      {
        name: 'Derivatives',
        approaches: ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods'],
      },
      {
        name: 'Integrals',
        approaches: ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods'],
      },
    ],
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Master Math Your Way—Three Expert Teachers, One Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every math topic, every skill level, three teaching styles per lesson.
            </p>
          </div>
        </div>
      </div>

      {/* Math categories section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div className="space-y-6 py-8">
            {mathCategories.map((category) => (
              <Disclosure as="div" key={category.name} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{category.name}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronUpIcon
                            className={`${open ? 'rotate-180 transform' : ''} h-6 w-6`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className="space-y-6">
                        {category.subtopics.map((subtopic) => (
                          <div key={subtopic.name} className="rounded-lg bg-gray-50 p-6">
                            <h3 className="text-lg font-medium text-gray-900">{subtopic.name}</h3>
                            <div className="mt-4 space-y-4">
                              {subtopic.approaches.map((approach) => (
                                <div key={approach} className="rounded-lg bg-white p-4 shadow">
                                  <h4 className="text-sm font-medium text-gray-900">{approach}</h4>
                                  <div className="mt-4 aspect-video w-full bg-gray-200 rounded-lg">
                                    {/* Video placeholder */}
                                    <div className="flex h-full items-center justify-center text-gray-500">
                                      Video Player Placeholder
                                    </div>
                                  </div>
                                  <div className="mt-4 rounded-lg bg-gray-100 p-4">
                                    <p className="text-sm text-gray-600">Practice problems appear here</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      {/* Progress tracker */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-medium text-gray-900">Your Progress</h2>
          <div className="mt-4 space-y-4">
            {mathCategories.map((category) => (
              <div key={category.name} className="rounded-lg bg-white p-4 shadow">
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                <div className="mt-2 space-y-2">
                  {category.subtopics.map((subtopic) => (
                    <div key={subtopic.name} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{subtopic.name}</span>
                      <span className="text-sm text-gray-500">Not Started</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
