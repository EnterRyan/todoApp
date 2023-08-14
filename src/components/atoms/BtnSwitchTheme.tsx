import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import { useDarkMode } from '../../context/TestReducerAndContext';

export default function BtnSwitchTheme() {
  const { dispatch } = useDarkMode();
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };
  return (
    <button type="button" onClick={toggleDarkMode}>
      <MdDarkMode />
    </button>
  );
}
