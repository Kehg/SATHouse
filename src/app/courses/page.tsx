import Link from 'next/link'

const mathCategories = [
  {
    name: 'Algebra',
    description: 'Master algebraic concepts and problem-solving techniques.',
    subtopics: ['Linear Equations', 'Quadratic Functions', 'Polynomials', 'Rational Expressions'],
  },
  {
    name: 'Geometry',
    description: 'Explore geometric shapes, proofs, and spatial relationships.',
    subtopics: ['Triangles', 'Circles', 'Polygons', 'Transformations'],
  },
  {
    name: 'Calculus',
    description: 'Learn differential and integral calculus concepts.',
    subtopics: ['Derivatives', 'Integrals', 'Limits', 'Series'],
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Math Courses
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a category to start learning
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mathCategories.map((category) => (
            <div
              key={category.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
              <p className="mt-2 text-gray-600">{category.description}</p>
              <div className="mt-6 flex-1">
                <h3 className="text-sm font-medium text-gray-900">Topics covered:</h3>
                <ul className="mt-2 space-y-2">
                  {category.subtopics.map((subtopic) => (
                    <li key={subtopic} className="text-sm text-gray-600">
                      • {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href={`/courses/${category.name.toLowerCase()}`}
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