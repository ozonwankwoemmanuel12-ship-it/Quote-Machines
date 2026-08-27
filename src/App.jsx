import { useEffect, useState } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteGrid from "./components/QuoteGrid";

const API_URL = "https://dummyjson.com/quotes";

function App() {
  const [quote, setQuote] = useState(null);

  const [quoteLoading, setQuoteLoading] = useState(true);
  const [quoteError, setQuoteError] = useState(false);

  const [quotes, setQuotes] = useState([]);

  const [quotesLoading, setQuotesLoading] = useState(true);
  const [quotesError, setQuotesError] = useState(false);

  async function fetchRandomQuote() {
    setQuoteLoading(true);
    setQuoteError(false);

    try {
      const response = await fetch(`${API_URL}/random`);

      if (!response.ok) {
        throw new Error("Failed to fetch random quote");
      }

      const data = await response.json();

      setQuote(data);
    } catch (error) {
      console.error(error);
      setQuoteError(true);
    } finally {
      setQuoteLoading(false);
    }
  }

  async function fetchQuotes() {
    setQuotesLoading(true);
    setQuotesError(false);

    try {
      const response = await fetch(`${API_URL}?limit=9`);

      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }

      const data = await response.json();

      setQuotes(data.quotes);
    } catch (error) {
      console.error(error);
      setQuotesError(true);
    } finally {
      setQuotesLoading(false);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchRandomQuote();
      fetchQuotes();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  function handleSelectQuote(selectedQuote) {
    setQuote(selectedQuote);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed]">
      
      {/* Header */}
      <header className="border-b border-[#e5ddd3] bg-[#f7f3ed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          
          <a
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight text-[#3f342d]"
          >
            Mindful<span className="text-[#8fa55f]">.</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#82756a] sm:block">
              Daily reflection
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe7c8] text-[#596548]">
              ✦
            </div>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        
        <QuoteDisplay
          quote={quote}
          loading={quoteLoading}
          error={quoteError}
          onNewQuote={fetchRandomQuote}
          onRetry={fetchRandomQuote}
        />

        <QuoteGrid
          quotes={quotes}
          loading={quotesLoading}
          error={quotesError}
          onSelect={handleSelectQuote}
        />

      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#e5ddd3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-[#82756a] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            Mindful Quotes
          </p>

          <p>
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;