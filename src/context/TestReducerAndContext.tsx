/* eslint-disable prettier/prettier */
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';
/* 목표 1.) useReducer를 이용한 DarkMode flag를 설정하고 이를 ContextAPI를 통하여 하위 컴포넌트에 값을 전달해보자.
 * =>JWT 토큰 또는 DarkMode와 같은 전역에서 사용하는 상태는 useReducer를 Provider컴포넌트에서 사용하는게 유리하다.
 * 목표 2.) CSSimport를 JSX에서 처리해보자. => tailwind로 처리하는 방식으로 변경.
 * 목표 3.) re-rendering을 최소화 해보자(Redux를 대체하는 방식으로.)
 * 목표 4.) tailwind의 :dark 를 사용해서 공통 CSS 스타일을 만들어서 컴포넌트에 보내보자.(겹치는 부분 최소화)
 */
type ReducerStateType = { darkMode: boolean };
type Action = { type: 'TOGGLE_DARK_MODE' };
type PropsType = { children: ReactNode };

// 전역으로 사용될 DarkMode flag
const darkModeState: ReducerStateType = { darkMode: false };

const DarkModeReducer = (state: ReducerStateType, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

const DarkModeContext = createContext<
  {
    state: ReducerStateType;
    dispatch: React.Dispatch<Action>;
  }
>({
  state: darkModeState,
  dispatch: () => { },
});


export function DarkModeProvider2({ children }: PropsType) {
  const [state, dispatch] = useReducer(DarkModeReducer, darkModeState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
