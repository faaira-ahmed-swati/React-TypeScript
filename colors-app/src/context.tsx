import { PropsWithChildren, useReducer } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  initialState,
} from './color-reducer';
import { createContext } from './create-context';

// type ColorContextState = {
//   hexColor: string;
//   dispatch: React.Dispatch<AdjustColorActions>;
// };

// export const ColorContext = createContext<ColorContextState>({
//   hexColor: '#FFADEF',
// } as ColorContextState);

// export const ColorProvider = ({ children }: PropsWithChildren) => {
//   const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
//   return (
//     <ColorContext.Provider value={{ hexColor: hexColor, dispatch }}>
//       {children}
//     </ColorContext.Provider>
//   );
// };

// Using custom context
type ColorContextState = {
  hexColor: string;
  dispatch: React.Dispatch<AdjustColorActions>;
};

const [useColorContext, ContextProvider] = createContext<ColorContextState>();
export const useContext = useColorContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ContextProvider value={{ hexColor: hexColor, dispatch }}>
      {children}
    </ContextProvider>
  );
};
