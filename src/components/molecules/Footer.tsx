import React from 'react';

/** 목표1) 내가 뭐썻는지 리스트 보여주고 hover 하면 박스 하나 작게나와서 내용 보여주기. */
export default function Footer() {
  return (
    <footer className="divide-dashed mt-10 text-#0c0a09v font-bold w-full grid place-items-center">
      <p>목표!</p>
      <ul className="list-inside list-disc">
        <li className="hover:bg-slate-500">React-Router</li>
        <li className="hover:bg-slate-500">Reducer & Context API</li>
        <li className="hover:bg-slate-500">TailwindCSS</li>
        <li className="hover:bg-slate-500">LocalStorge</li>
      </ul>
    </footer>
  );
}
