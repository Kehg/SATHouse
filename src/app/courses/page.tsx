// src/app/courses/[category]/[subtopic]/page.tsx

interface PageProps {
  params: {
    category: string
    subtopic: string
  }
}

// If you're using an async server component:
export default async function Page({ params }: PageProps) {
  // You can use params.category and params.subtopic here
  return (
    <div>
      <h1>
        {params.category} – {params.subtopic}
      </h1>
      {/* Render your lesson video placeholder, practice questions, etc */}
      <p>Lesson content for {params.category} / {params.subtopic} will appear here.</p>
    </div>
  )
}
