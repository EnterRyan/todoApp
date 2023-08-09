import React from 'react';
import { MdDarkMode } from 'react-icons/md';

export default function SwtichTheme() {
  const changeTheme = () => {
    console.log('hi');
  };
  return (
    <button type="button" onClick={changeTheme}>
      <MdDarkMode />
    </button>
  );
}
