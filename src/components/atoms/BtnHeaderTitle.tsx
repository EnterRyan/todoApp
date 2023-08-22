import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../context/TestReducerAndContext';

/** 목표1) 직접 tailwindCSS를 선언하여 토글링에 따라 훅으로 적용 CSS변경.(이후에는 tailwind의 :dark를 사용해보자.) */
interface PropsType {
  btnValue: string;
}

export default function BtnHeaderTitle({ btnValue = 'nothing' }: PropsType) {
  const rightModeStyle =
    'text-#0c0a09v bg-white font-bold uppercase px-3 py-1 text-xs mr-1 mb-1 w-1/4';
  const darkModeStyle =
    'text-slate-400 bg-slate-800 font-bold uppercase px-3 py-1 text-xs mr-1 mb-1 w-1/4 h-60px';

  const { state } = useDarkMode();

  return (
    <Link to={btnValue}>
      <button
        className={state.darkMode === true ? darkModeStyle : rightModeStyle}
        type="button"
      >
        {btnValue}
      </button>
    </Link>
  );
}
