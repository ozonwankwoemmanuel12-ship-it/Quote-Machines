function QuoteDisplay({
  quote,
  loading,
  error,
  onNewQuote,
  onRetry,
}) {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-[#3f4935] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      
      {/* Decorative circle */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b7c986]/20" />

      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#b7c986]/10" />

      <div className="relative z-10">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9d99d]">
              Mindful Quotes
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              A moment of reflection
            </h1>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b7c986] text-xl text-[#3f4935]">
            ✦
          </div>
        </div>

        <div className="min-h-75">
          {/* Loading */}
          {loading && (
            <div className="animate-pulse">
              <div className="mb-7 h-4 w-24 rounded-full bg-white/20" />

              <div className="space-y-4">
                <div className="h-8 max-w-3xl rounded-lg bg-white/15" />
                <div className="h-8 max-w-2xl rounded-lg bg-white/15" />
                <div className="h-8 max-w-xl rounded-lg bg-white/15" />
              </div>

              <div className="mt-10 h-4 w-40 rounded-full bg-white/20" />
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="max-w-xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold">
                We couldn't find a quote.
              </p>

              <p className="mt-2 text-sm text-white/70">
                Something went wrong while connecting to the quote service.
              </p>

              <button
                onClick={onRetry}
                className="mt-6 rounded-full bg-[#b7c986] px-5 py-2.5 text-sm font-bold text-[#35402d] transition hover:bg-[#c9d99d] focus:outline-none focus:ring-2 focus:ring-[#b7c986] focus:ring-offset-2 focus:ring-offset-[#3f4935]"
              >
                Try again
              </button>
            </div>
          )}

          {/* Quote */}
          {!loading && !error && quote && (
            <div>
              <div className="mb-5 font-serif text-6xl leading-none text-[#b7c986] sm:text-7xl">
                “
              </div>

              <blockquote className="max-w-4xl font-serif text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
                {quote.quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#b7c986]" />

                <p className="text-sm font-medium text-white/70 sm:text-base">
                  {quote.author}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* New quote button */}
        <div className="mt-10">
          <button
            onClick={onNewQuote}
            disabled={loading}
            className="group inline-flex items-center gap-3 rounded-full bg-[#b7c986] px-6 py-3.5 text-sm font-bold text-[#35402d] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#c9d99d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#b7c986] focus:ring-offset-2 focus:ring-offset-[#3f4935] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {loading ? "Loading..." : "New quote"}

            {!loading && (
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuoteDisplay;