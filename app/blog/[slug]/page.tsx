import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getPostData(params.slug);

    return (
      <main>
        <Navigation />
        <Section title="">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  {post.title}
                </h1>
                <p className="text-gray-600 text-lg">{post.date}</p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <div
              className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-700 prose-strong:text-black prose-code:text-black prose-pre:bg-gray-100 prose-pre:border prose-a:text-black hover:prose-a:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors"
              >
                ← 返回文章列表
              </Link>
            </footer>
          </article>
        </Section>
      </main>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}