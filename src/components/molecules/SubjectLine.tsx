import React from 'react';
import { RiDeleteBin5Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { useDarkMode } from '../../context/TestReducerAndContext';
import BtnIcon from '../atoms/BtnIcon';
import BtnRadioBox from '../atoms/BtnRadioBox';

interface PropsType {
  listType: string;
}

export default function SubjectLine({ listType }: PropsType) {
  const { state } = useDarkMode();
  // const iconComponent = state ? <RiDeleteBin5Fill /> : <RiDeleteBin5Line />;
  // eslint-disable-next-line prettier/prettier
  return (
    <div className="grid-cols-3 w-full flex">
      <BtnRadioBox />
      <p className="font-bold w-4/6">
        this is {listType} List
        Page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </p>
      <BtnIcon>
        {state.darkMode ? <RiDeleteBin5Fill /> : <RiDeleteBin5Line />}
      </BtnIcon>
    </div>
  );
}
