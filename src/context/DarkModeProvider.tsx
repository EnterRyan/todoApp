import React, { createContext, ReactNode, useState } from 'react';

interface PropType {
  children: ReactNode;
}
interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

const DarkModeProvider = ({ children }: PropType) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

/* React jsx Type 리스트.
 * 1)ReactNode : JSX엘리먼트의 자식을 나타내는 범용 타입.
 * 2)ReactElement : JSX자체를 나타내는 타입
 * 3)React.FC : 함수형 컴포넌트 타입을 정의할때 사용.
 */
