import { PropsWithChildren, useState } from 'react';
import { fetchQuotes, Quote } from './application';

// Implementation 1 -> display a fixed number of quotes
// type QuotesProps = {
//   count: number;
//   onSubmit: React.FormEventHandler<HTMLFormElement>;
//   onChange?: React.ChangeEventHandler<HTMLInputElement>;
// };

// const Quotes = ({
//   children,
//   count,
//   onSubmit,
//   onChange,
// }: PropsWithChildren<QuotesProps>) => {
//   return (
//     <section className="flex flex-col gap-8">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmit(e);
//         }}
//       >
//         <label htmlFor="number-of-quotes-to-load" className="block">
//           Number of Quotes to Load
//         </label>
//         <div className="flex">
//           <input
//             id="number-of-quotes-to-load"
//             className="w-full"
//             type="number"
//             min="0"
//             max="25"
//             value={count}
//             onChange={onChange}
//           />
//           <button type="submit">Load Quotes</button>
//         </div>
//       </form>
//       <div className="grid grid-cols-2 gap-4">{children}</div>
//     </section>
//   );
// };

// Implementation 2 -> set quote count based on input provided
type QuotesProps = {
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
};

const Quotes = ({ children, setQuotes }: PropsWithChildren<QuotesProps>) => {
  const [count, setCount] = useState(10);
  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchQuotes(count).then(setQuotes);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
