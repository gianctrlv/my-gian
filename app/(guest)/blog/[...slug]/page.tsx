import Link from "next/link";

export default function BlogPage() {
  // Sample blog posts
  const posts = [
    {
      id: "my-first-blog",
      title: "My First Blog",
      summary: "Learn how to start your first blog and write content that engages readers.",
      date: "Feb 10, 2026",
    },
    {
      id: "react-hooks-guide",
      title: "Understanding React Hooks",
      summary: "Simplify state and side effects in React with Hooks.",
      date: "Feb 12, 2026",
    },
    {
      id: "tailwind-css-tips",
      title: "Tailwind CSS Tips",
      summary: "Build beautiful, responsive UIs faster with Tailwind CSS.",
      date: "Feb 13, 2026",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">My Blog</h1>
      </header>

      {/* Blog Posts */}
      <section className="max-w-4xl mx-auto px-4 py-10 grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.summary}</p>
            <span className="text-gray-400 text-sm mt-3 block">{post.date}</span>

            <Link href={`/blog/${post.id}`}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
