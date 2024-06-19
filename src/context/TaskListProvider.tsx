import React, { ReactNode, createContext, useMemo, useReducer } from 'react';
// Tanstack Query
/*
  task = {
    index : uuid,
    type : Active|completed,
    title : string,
    update : day.js
  }
*/

enum ActionKind {
  INIT_TASKLIST = 'INIT_TASKLIST',
  ADD_TASKLIST = 'ADD_TASKLIST',
  DEL_TASKLIST = 'DEL_TASKLIST',
}

type ReducerAction = {
  type: ActionKind;
  payload: Task;
};

type Task = {
  id: string;
  title: string;
};

// 이 Reducer에서 관리할 상태
const initialTaskState: Task[] = [];
// 이게 타입추론 시키는게 맞는건질 모르겠음;;
const TaskListContext = createContext([{}]);

const TaskListReducer = (state: Task[], action: ReducerAction) => {
  switch (action.type) {
    case 'INIT_TASKLIST': {
      const tempData = localStorage.getItem('taskListData');
      if (tempData) {
        return JSON.parse(tempData) as Task[];
      }
      return [];
    }
    case 'ADD_TASKLIST':
      return [...state, action.payload] as Task[];

    case 'DEL_TASKLIST':
      return [...state.filter((x) => x.id !== action.payload.id)] as Task[];

    default:
      return state;
  }
};
type PropsType = { children: ReactNode };
export default function TaskListProvider({ children }: PropsType) {
  const [state, dispatch] = useReducer(TaskListReducer, initialTaskState);
  const taskListData = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <TaskListContext.Provider value={taskListData}>
      {children}
    </TaskListContext.Provider>
  );
}
