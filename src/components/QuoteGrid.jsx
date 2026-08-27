import QuoteCard from "./QuoteCard";

function QuoteGrid({
  quotes,
  loading,
  error,
  onSelect,
}) {
  return (
    <section className="pt-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#71834e]">
          Explore
        </p>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#3f342d] sm:text-4xl">
              More words to reflect on
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#82756a]">
              Take a moment, choose a thought, and let it become your
              next little source of inspiration.
            </p>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#d9cfbf] text-xl text-[#9b8065] sm:flex">
            ✦
          </div>
        </div>
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-57.5 animate-pulse rounded-3xl border border-[#e5ddd3] bg-[#eee9e1]"
            />
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <p className="font-semibold text-red-800">
            The quote collection couldn't be loaded.
          </p>
        </div>
      )}

      {/* Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default QuoteGrid;