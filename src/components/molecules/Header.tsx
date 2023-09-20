import React from 'react';
import BtnHeaderTitle from '../atoms/BtnHeaderTitle';
import BtnSwitchTheme from '../atoms/BtnSwitchTheme';

export default function Header() {
  const headerItem = ['All', 'Active', 'Completed'];

  return (
    <div className="w-4/5 border border-slate-700">
      <BtnSwitchTheme />
      {headerItem.map((element) => (
        <BtnHeaderTitle btnValue={element} key={element} />
      ))}
    </div>
  );
}
