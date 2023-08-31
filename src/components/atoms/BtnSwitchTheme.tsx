import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { useDarkMode } from '../../context/TestReducerAndContext';

export default function BtnSwitchTheme() {
  const { state, dispatch } = useDarkMode();
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };
  return (
    <button
      className="rounded w-6 h-6 ml-3 mr-7 align-middle pl-1"
      type="button"
      onClick={toggleDarkMode}
    >
      {state.darkMode === false ? <MdDarkMode /> : <CiDark />}
    </button>
  );
}
