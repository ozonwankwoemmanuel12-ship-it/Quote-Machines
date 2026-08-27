function QuoteCard({ quote, onSelect }) {
  return (
    <button
      onClick={() => onSelect(quote)}
      className="group flex min-h-57.5 w-full flex-col rounded-3xl border border-[#e5ddd3] bg-[#fffdf9] p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b7c986] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8fa55f] focus:ring-offset-2"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-serif text-4xl leading-none text-[#a78365]">
          “
        </span>

        <span className="rounded-full bg-[#eef2df] px-3 py-1 text-xs font-semibold text-[#596548]">
          #{quote.id}
        </span>
      </div>

      <p className="line-clamp-5 font-serif text-lg leading-7 text-[#453a32]">
        {quote.quote}
      </p>

      <div className="mt-auto pt-6">
        <p className="text-sm font-semibold text-[#82756a]">
          {quote.author}
        </p>

        <p className="mt-2 text-xs font-bold text-[#71834e] opacity-0 transition-opacity group-hover:opacity-100">
          View quote →
        </p>
      </div>
    </button>
  );
}

export default QuoteCard;