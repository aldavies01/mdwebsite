// ===============================
// src/components/news/NewsLandingPage.jsx
// ===============================
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { client } from "../../contentfulClient";

const FETCH_LIMIT = 100; // fetch enough items to filter/paginate client-side
const PAGE_SIZE = 9;

function CategoryBadge({ category }) {
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
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${cls}`}
    >
      {category}
    </span>
  );
}

function CardSkeleton({ featured = false }) {
  return (
    <div
      className={`animate-pulse bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 ${featured ? "col-span-2" : ""}`}
    >
      <div className={featured ? "h-72 bg-gray-200" : "h-40 bg-gray-200"} />
      <div className="p-4 sm:p-6 space-y-3">
        <div className="h-4 bg-gray-200 w-24" />
        <div className="h-6 bg-gray-200 w-3/4" />
        <div className="h-4 bg-gray-200 w-full" />
        <div className="h-4 bg-gray-200 w-5/6" />
        <div className="h-8 bg-gray-200 w-28 rounded" />
      </div>
    </div>
  );
}

function useYears(items) {
  return useMemo(() => {
    const years = new Set();
    items.forEach((i) => {
      const y = new Date(i.publishedDate).getFullYear();
      if (!Number.isNaN(y)) years.add(y);
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [items]);
}

export default function NewsLandingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // URL-driven state
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const q = searchParams.get("q") || "";
  const year = searchParams.get("year") || "";
  const sort = searchParams.get("sort") || "newest";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    let mounted = true;
    async function run() {
      try {
        setLoading(true);
        setError("");
        const res = await client.getEntries({
          content_type: "mdCareNews",
          order: "-fields.publishedDate",
          limit: FETCH_LIMIT,
        });
        if (!mounted) return;
        const mapped = res.items.map((item) => ({
          id: item.sys.id,
          slug: item.fields.slug,
          publishedDate: item.fields.publishedDate,
          dateStr: new Date(item.fields.publishedDate).toLocaleDateString(
            "en-GB",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          ),
          category: item.fields.category, // optional
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          body: item.fields.body,
          image: item.fields.coverImage?.fields?.file?.url || "",
        }));
        setAllItems(mapped);
      } catch (e) {
        console.error(e);
        setError("We couldn't load news right now. Please try again soon.");
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, []);

  const years = useYears(allItems);
  const categories = useMemo(() => {
    const set = new Set();
    allItems.forEach((i) => i.category && set.add(i.category));
    return Array.from(set).sort();
  }, [allItems]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = allItems.filter((i) => {
      const matchYear = year
        ? new Date(i.publishedDate).getFullYear().toString() === year
        : true;
      const matchCategory = category
        ? (i.category || "").toLowerCase() === category.toLowerCase()
        : true;
      const hay =
        `${i.title || ""} ${i.excerpt || ""} ${i.body || ""}`.toLowerCase();
      const matchSearch = needle ? hay.includes(needle) : true;
      return matchYear && matchCategory && matchSearch;
    });
    list.sort((a, b) => {
      const da = new Date(a.publishedDate).getTime();
      const db = new Date(b.publishedDate).getTime();
      return sort === "oldest" ? da - db : db - da;
    });
    return list;
  }, [allItems, q, year, sort, category]);

  // Featured is the first filtered result
  const featured = filtered[0];

  // Popular: take next 5 most recent (excluding featured)
  const popular = useMemo(() => filtered.slice(1, 6), [filtered]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  // On page 1, skip the featured to avoid duplication
  const gridSource = page === 1 ? filtered.slice(1) : filtered;
  const pageItems = gridSource.slice(start, start + PAGE_SIZE);

  const updateParam = (key, val) => {
    const next = new URLSearchParams(searchParams);
    if (val === "" || val == null) next.delete(key);
    else next.set(key, val);
    if (["q", "year", "sort", "category"].includes(key)) next.set("page", "1");
    setSearchParams(next);
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 py-2 rounded-full text-xs font-semibold mb-4 mt-2">
            Latest Updates
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-primary-navy leading-tight">
            Company <span className="text-secondary-coral">News</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Updates, achievements, and stories from across our services.
          </p>
        </div>

        {/* Featured + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Featured */}
          <div className="lg:col-span-2">
            {loading ? (
              <CardSkeleton featured />
            ) : featured ? (
              <article className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative bg-gray-50">
                  {/* Taller, wide aspect ratio; object-contain + fit=pad prevents cropping */}
                  <div className="w-full aspect-[21/9] sm:aspect-[16/9] lg:aspect-[21/9] bg-white flex items-center justify-center">
                    {featured.image ? (
                      <img
                        src={`${featured.image}?w=1600&h=800&fit=pad&bg=rgb:ffffff`}
                        alt={featured.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-navy/10 to-secondary-teal/10" />
                    )}
                  </div>
                  <div className="absolute top-3 left-3">
                    <CategoryBadge category={featured.category} />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs text-gray-500 font-medium">
                    {featured.dateStr}
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primary-navy leading-snug">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="mt-3 text-gray-600">{featured.excerpt}</p>
                  )}
                  <Link
                    to={`/about/news/${featured.slug}`}
                    className="mt-5 inline-flex items-center text-primary-navy font-semibold"
                  >
                    Read full story
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ) : (
              !loading && (
                <div className="p-8 text-center bg-white rounded-2xl border border-gray-100">
                  <p className="text-gray-600">No articles to feature yet.</p>
                </div>
              )
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
            {/* Search + Filters Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-primary-navy mb-3">
                Search & Filters
              </h3>
              <div className="space-y-3">
                <input
                  value={q}
                  onChange={(e) => updateParam("q", e.target.value)}
                  placeholder="Search (title, body)"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-navy"
                />
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={year}
                    onChange={(e) => updateParam("year", e.target.value)}
                    className="rounded-xl border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value="">All years</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <select
                    value={sort}
                    onChange={(e) => updateParam("sort", e.target.value)}
                    className="rounded-xl border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </div>
                {categories.length > 0 && (
                  <select
                    value={category}
                    onChange={(e) => updateParam("category", e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value="">All categories</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                )}
                {(q || year || sort !== "newest" || category) && (
                  <button
                    onClick={() => setSearchParams({})}
                    className="w-full mt-1 px-3 py-2 rounded-lg border text-sm hover:bg-gray-50"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {/* Popular */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-primary-navy mb-3">
                Popular
              </h3>
              <ul className="divide-y divide-gray-100">
                {popular.length === 0 && (
                  <li className="py-2 text-gray-500 text-sm">No posts yet.</li>
                )}
                {popular.map((p) => (
                  <li key={p.id} className="py-3 flex items-start gap-3">
                    <Link
                      to={`/about/news/${p.slug}`}
                      className="flex-shrink-0 w-16 h-12 bg-gray-100 rounded overflow-hidden"
                    >
                      {p.image ? (
                        <img
                          src={`${p.image}?w=160&h=120&fit=pad&bg=rgb:ffffff`}
                          alt={p.title}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-navy/10 to-secondary-teal/10" />
                      )}
                    </Link>
                    <div className="min-w-0">
                      <Link
                        to={`/about/news/${p.slug}`}
                        className="block text-sm font-semibold text-primary-navy line-clamp-2 hover:underline"
                      >
                        {p.title}
                      </Link>
                      <div className="text-[11px] text-gray-500 mt-1">
                        {p.dateStr}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Browse by year */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-primary-navy mb-3">
                Browse by year
              </h3>
              <div className="flex flex-wrap gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => updateParam("year", String(y))}
                    className={`px-3 py-1.5 rounded-full text-sm border ${String(y) === year ? "bg-primary-navy text-white border-primary-navy" : "hover:bg-gray-50"}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags (Categories) */}
            {categories.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-primary-navy mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => {
                    const active = (c || "") === category;
                    return (
                      <button
                        key={c}
                        onClick={() => updateParam("category", c)}
                        className={`px-3 py-1.5 rounded-full text-sm border ${active ? "bg-primary-navy text-white border-primary-navy" : "hover:bg-gray-50"}`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            {/* <div className="bg-primary-navy text-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold">Stay in the loop</h3>
              <p className="text-white/90 text-sm mt-1">
                Get occasional updates about our services and community.
              </p>
              <form
                className="mt-4 space-y-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! (Hook this up to your form endpoint)");
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary-navy font-semibold px-4 py-2 rounded-xl hover:bg-white/90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </aside>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100">
            {error}
          </div>
        )}

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : pageItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <Link to={`/about/news/${item.slug}`} className="block">
                    <div className="relative h-48 bg-white flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={`${item.image}?w=900&h=600&fit=pad&bg=rgb:ffffff`}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/10 to-secondary-teal/10" />
                      )}
                      <div className="absolute top-3 left-3">
                        <CategoryBadge category={item.category} />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 font-medium">
                        {item.dateStr}
                      </div>
                      <h2 className="mt-2 text-xl font-bold text-primary-navy leading-snug">
                        {item.title}
                      </h2>
                      {item.excerpt && (
                        <p className="mt-2 text-gray-600 line-clamp-3">
                          {item.excerpt}
                        </p>
                      )}
                      <span className="mt-4 inline-flex items-center text-primary-navy font-semibold">
                        Read more
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
        </div>

        {/* Empty state */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">No news matches your filters.</p>
            <button
              onClick={() => setSearchParams({})}
              className="mt-4 px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => updateParam("page", String(Math.max(1, page - 1)))}
              className="px-3 py-2 rounded-lg border text-sm hover:bg-gray-50 disabled:opacity-40"
              disabled={page === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <button
                  key={p}
                  onClick={() => updateParam("page", String(p))}
                  className={`px-3 py-2 rounded-lg text-sm border ${active ? "bg-primary-navy text-white border-primary-navy" : "hover:bg-gray-50"}`}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() =>
                updateParam("page", String(Math.min(totalPages, page + 1)))
              }
              className="px-3 py-2 rounded-lg border text-sm hover:bg-gray-50 disabled:opacity-40"
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
