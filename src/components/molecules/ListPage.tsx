import React from 'react';

interface PropsType {
  listType: string;
}

export default function ListPage({ listType = 'ALL' }: PropsType) {
  return <div>this is {listType} List Page</div>;
}
