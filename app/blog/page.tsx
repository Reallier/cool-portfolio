import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main>
      <Navigation />
      <Section title="博客文章">
        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map((post) => (
              <article key={post.slug} className="space-y-4 p-6 border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
                <div className="space-y-2">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-xl font-semibold text-black hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm">{post.date}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-black font-medium hover:text-gray-700 transition-colors"
                >
                  阅读全文 →
                </Link>
              </article>
            ))}
          </div>
          {allPostsData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">暂无文章</p>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}