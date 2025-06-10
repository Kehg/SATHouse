import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const approaches = ['Brandon\'s Advanced Desmos', 'Traditional Math Approach', 'Custom Logic Methods']

export default function CoursePage({
  params,
}: {
  params: { category: string; subtopic: string }
}) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: params.category, href: `/courses/${params.category}` },
    { name: params.subtopic, href: '#' },
  ]

  return (
    <div className="bg-white">
      {/* Breadcrumb navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.name}>
              <div className="flex items-center">
                {index > 0 && (
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                )}
                <Link
                  href={breadcrumb.href}
                  className={`ml-4 text-sm font-medium ${
                    index === breadcrumbs.length - 1
                      ? 'text-gray-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                >
                  {breadcrumb.name}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {/* Course content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {params.subtopic}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose your preferred learning approach:
        </p>

        <div className="mt-8 space-y-8">
          {approaches.map((approach) => (
            <div key={approach} className="rounded-lg bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">{approach}</h2>
              <div className="mt-4 aspect-video w-full bg-gray-200 rounded-lg">
                {/* Video placeholder */}
                <div className="flex h-full items-center justify-center text-gray-500">
                  Video Player Placeholder
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-white p-6 shadow">
                <h3 className="text-lg font-medium text-gray-900">Practice Problems</h3>
                <p className="mt-2 text-gray-600">Practice problems appear here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 