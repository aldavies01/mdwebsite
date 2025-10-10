// ===============================
// src/components/news/NewsArticlePage.jsx
// ===============================
import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../../contentfulClient"; // adjust if needed

function Badge({ category }) {
  const cls = useMemo(() => {
    switch ((category || "").toLowerCase()) {
      case "award":
        return "bg-primary-gold text-primary-navy";
      case "community":
        return "bg-secondary-coral text-white";
      case "expansion":
        return "bg-secondary-teal text-white";
      case "team":
        return "bg-secondary-purple text-white";
      case "innovation":
        return "bg-primary-navy text-white";
      default:
        return "bg-gray-500 text-white";
    }
  }, [category]);
  if (!category) return null;
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${cls}`}
    >
      {category}
    </span>
  );
}

export function NewsArticlePage() {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function run() {
      try {
        setLoading(true);
        setError("");
        const res = await client.getEntries({
          content_type: "mdCareNews",
          limit: 1,
          "fields.slug": slug,
        });
        if (!mounted) return;
        const item = res.items?.[0];
        if (!item) {
          setError("That news story could not be found.");
          setEntry(null);
          return;
        }
        const mapped = {
          id: item.sys.id,
          title: item.fields.title,
          category: item.fields.category, // optional
          date: item.fields.publishedDate
            ? new Date(item.fields.publishedDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "",
          image: item.fields.coverImage?.fields?.file?.url || "",
          bodyText: item.fields.body || "", // your schema uses Text (not Rich Text)
          excerpt: item.fields.excerpt || "",
        };
        setEntry(mapped);
      } catch (e) {
        console.error(e);
        setError("We couldn't load this article. Please try again soon.");
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 w-2/3 rounded" />
            <div className="h-4 bg-gray-200 w-1/3 rounded" />
            <div className="h-64 bg-gray-200 rounded-xl" />
            <div className="h-4 bg-gray-200 w-full rounded" />
            <div className="h-4 bg-gray-200 w-5/6 rounded" />
            <div className="h-4 bg-gray-200 w-4/6 rounded" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="p-4 rounded bg-red-50 text-red-700 border border-red-100">
            {error}
          </p>
          <Link
            className="inline-block mt-6 text-primary-navy font-semibold"
            to="/news"
          >
            ← Back to news
          </Link>
        </div>
      </section>
    );
  }

  if (!entry) return null;

  return (
    <article className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-3">
          <Badge category={entry.category} />
          {entry.date && (
            <time className="text-xs text-gray-500 font-medium">
              {entry.date}
            </time>
          )}
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-primary-navy leading-tight">
          {entry.title}
        </h1>

        {entry.image && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <img
              src={`${entry.image}?w=1400&h=800&fit=fill`}
              alt={entry.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Body (plain text) */}
        <div className="prose prose-lg max-w-none mt-8 whitespace-pre-line">
          {entry.bodyText || entry.excerpt}
        </div>

        <div className="mt-10">
          <Link
            to="/about/news"
            className="inline-flex items-center text-primary-navy font-semibold"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all news
          </Link>
        </div>
      </div>
    </article>
  );
}
