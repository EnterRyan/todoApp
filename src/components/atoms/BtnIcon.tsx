import React, { ReactNode } from 'react';
import { useDarkMode } from '../../context/TestReducerAndContext';

type PropsType = { children: ReactNode };
export default function BtnIcon({ children }: PropsType) {
  const { state } = useDarkMode();
  const defatulButtonCss = 'align-middle rounded pl-1 w-1/6';

  return (
    <button
      type="button"
      className={`${defatulButtonCss} ${state.darkMode ? ':dark' : ''}`}
    >
      {children}
    </button>
  );
}
