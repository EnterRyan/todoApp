import React from 'react';
import BtnHeaderTitle from '../atoms/BtnHeaderTitle';
import BtnSwitchTheme from '../atoms/BtnSwitchTheme';

export default function Header() {
  const headerItem = ['All', 'Active', 'Completed'];

  return (
    <div className="TodoHeader">
      <BtnSwitchTheme />
      {headerItem.map((element) => (
        <BtnHeaderTitle btnValue={element} key={element} />
      ))}
    </div>
  );
}
