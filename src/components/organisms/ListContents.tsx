import React from 'react';
import InputText from '../atoms/InputText';
import SubjectLine from '../molecules/SubjectLine';

interface PropsType {
  listType: string;
}

export default function ListContents({ listType = 'ALL' }: PropsType) {
  return (
    <div className="grid grid-rows-none w-4/5 border border-slate-700">
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <InputText />
    </div>
  );
}
