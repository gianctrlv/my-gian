export default function BlogPage() {
  // Sample blog posts
  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      summary: "Learn how React Hooks can simplify your state management and side effects.",
      date: "Feb 10, 2026",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      summary: "A quick guide to building beautiful UI quickly with Tailwind CSS.",
      date: "Feb 12, 2026",
    },
    {
      id: 3,
      title: "JavaScript ES2026 Features",
      summary: "Explore the latest features in modern JavaScript and how to use them.",
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
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.summary}</p>
              <span className="text-gray-400 text-sm mt-3 block">{post.date}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
