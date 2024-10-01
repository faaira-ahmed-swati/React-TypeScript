import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

// Implementation using one quote
// const Application = () => {
//   const [quote, setQuote] = useState<Quote | undefined>();
//   useEffect(() => {
//     fetchRandomQuote().then(setQuote);
//   }, []);

//   if (!quote) return <Loading />;
//   return (
//     <main className="mx-auto w-full max-w-2xl py-16">
//       <InspirationalQuote content={quote.content} source={quote.source} />
//     </main>
//   );
// };

// Implementation using setQuotes useState
// const Application = () => {
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [count, setCount] = useState(10);
//   return (
//     <main className="mx-auto w-full max-w-2xl py-16">
//       <Quotes count={count} onSubmit={() => fetchQuotes(count).then(setQuotes)}>
//         <div>
//           {quotes.map((quote) => {
//             return (
//               <InspirationalQuote
//                 key={quote.id}
//                 content={quote.content}
//                 source={quote.content}
//               />
//             );
//           })}
//         </div>
//       </Quotes>
//     </main>
//   );
// };

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        <div>
          {quotes.map((quote) => {
            return (
              <InspirationalQuote
                key={quote.id}
                content={quote.content}
                source={quote.content}
              />
            );
          })}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
