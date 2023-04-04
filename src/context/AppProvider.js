import { useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [dark, setDark] = useLocalStorage('dark', false);

  const values = useMemo(() => ({ dark, setDark,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [dark]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
