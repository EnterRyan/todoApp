import React from 'react';

interface PropsType {
  listType: string;
}

export default function ListPage({ listType = 'ALL' }: PropsType) {
  return (
    <div className="font-bold text-3xl underline">
      this is {listType} List Page
    </div>
  );
}
