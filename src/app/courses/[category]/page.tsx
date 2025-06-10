import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const categoryData = {
  algebra: {
    name: 'Algebra',
    description: 'Master algebraic concepts and problem-solving techniques.',
    subtopics: [
      {
        name: 'Linear Equations',
        description: 'Learn to solve and graph linear equations and inequalities.',
      },
      {
        name: 'Quadratic Functions',
        description: 'Explore quadratic equations, functions, and their applications.',
      },
      {
        name: 'Polynomials',
        description: 'Study polynomial operations, factoring, and solving polynomial equations.',
      },
      {
        name: 'Rational Expressions',
        description: 'Work with rational expressions, equations, and their applications.',
      },
    ],
  },
  geometry: {
    name: 'Geometry',
    description: 'Explore geometric shapes, proofs, and spatial relationships.',
    subtopics: [
      {
        name: 'Triangles',
        description: 'Learn about triangle properties, congruence, and similarity.',
      },
      {
        name: 'Circles',
        description: 'Study circle properties, arcs, and sectors.',
      },
      {
        name: 'Polygons',
        description: 'Explore properties of various polygons and their measurements.',
      },
      {
        name: 'Transformations',
        description: 'Understand geometric transformations and their properties.',
      },
    ],
  },
  calculus: {
    name: 'Calculus',
    description: 'Learn differential and integral calculus concepts.',
    subtopics: [
      {
        name: 'Derivatives',
        description: 'Master the concept of derivatives and their applications.',
      },
      {
        name: 'Integrals',
        description: 'Learn about definite and indefinite integrals.',
      },
      {
        name: 'Limits',
        description: 'Understand limits and their role in calculus.',
      },
      {
        name: 'Series',
        description: 'Study infinite series and their convergence.',
      },
    ],
  },
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = categoryData[params.category as keyof typeof categoryData]
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: category.name, href: '#' },
  ]

  if (!category) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Category not found</h1>
        </div>
      </div>
    )
  }

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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{category.name}</h1>
          <p className="mt-4 text-lg text-gray-600">{category.description}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {category.subtopics.map((subtopic) => (
            <div
              key={subtopic.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{subtopic.name}</h2>
              <p className="mt-2 text-gray-600">{subtopic.description}</p>
              <div className="mt-8">
                <Link
                  href={`/courses/${params.category}/${subtopic.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 