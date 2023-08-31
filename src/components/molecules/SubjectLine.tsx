import React from 'react';
import BtnRadioBox from '../atoms/BtnRadioBox';

interface PropsType {
  listType: string;
}

export default function SubjectLine({ listType }: PropsType) {
  return (
    <div className="inline-grid grid-cols-3 bg-slate-500">
      <BtnRadioBox />
      <p className="font-bold underline">this is {listType} List Page</p>
    </div>
  );
}
