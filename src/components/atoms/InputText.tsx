import React, { useEffect, useState } from 'react';

export default function InputText() {
  const testJsonArray = {
    taskList: [
      {
        index: 1,
        type: 'Active',
        task: '과제1입니다.',
      },
      {
        index: 2,
        type: 'Active',
        task: '과제2입니다.',
      },
    ],
  };
  const [taskLine, setTaskLine] = useState('');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskLine(e.target.value);
    console.log('in');
  };

  const btnClick = () => {
    const tempObject = {};
    localStorage.setItem('test1234', taskLine);
    setTaskLine('');
  };

  // testconsole
  // useEffect(() => {
  //   console.log('taskLine Changed: ', taskLine);
  // }, [taskLine]);

  return (
    <div className="border border-slate-700">
      <input
        type="input"
        value={taskLine}
        className="ml-3 m-auto w-4/5 border border-slate-700"
        onChange={handleTextChange}
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
