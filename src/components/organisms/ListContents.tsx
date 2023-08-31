import React from 'react';
import SubjectLine from '../molecules/SubjectLine';

interface PropsType {
  listType: string;
}

export default function ListContents({ listType = 'ALL' }: PropsType) {
  return (
    <div className="grid grid-rows-none">
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
      <SubjectLine listType={listType} />
    </div>
  );
}
