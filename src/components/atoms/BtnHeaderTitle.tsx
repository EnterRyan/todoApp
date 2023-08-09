import React from 'react';
import { Link } from 'react-router-dom';

interface PropsType {
  btnValue: string;
}

export default function BtnHeaderTitle({ btnValue = 'nothing' }: PropsType) {
  return (
    <Link to={btnValue}>
      <button type="button">{btnValue}</button>
    </Link>
  );
}
