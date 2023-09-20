import React from 'react';

export default function InputText() {
  const btnClick = () => { };
  return (
    <div className="border border-slate-700">
      <input
        type="input"
        className="ml-3 m-auto w-4/5 border border-slate-700"
      />
      <button
        type="button"
        className="ml-3 w-1/6 border border-slate-700"
        onClick={btnClick}
      >
        가자잇!
      </button>
    </div>
  );
}
