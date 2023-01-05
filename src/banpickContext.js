import { createContext, useContext, useReducer, useRef, useState } from 'react';

const ModeState = {
  visible: false,
  timer: false,
  count: 30,
};
const initState = {
  blue: [
    {
      id: 1,
      pos: 'top',
      name: 'defaultSummoner',
    },
    {
      id: 2,
      pos: 'jg',
      name: 'defaultSummoner',
    },
    {
      id: 3,
      pos: 'mid',
      name: 'defaultSummoner',
    },
    {
      id: 4,
      pos: 'ad',
      name: 'defaultSummoner',
    },
    {
      id: 5,
      pos: 'sup',
      name: 'defaultSummoner',
    },
  ],
  red: [
    {
      id: 1,
      pos: 'top',
      name: 'defaultSummoner',
    },
    {
      id: 2,
      pos: 'jg',
      name: 'defaultSummoner',
    },
    {
      id: 3,
      pos: 'mid',
      name: 'defaultSummoner',
    },
    {
      id: 4,
      pos: 'ad',
      name: 'defaultSummoner',
    },
    {
      id: 5,
      pos: 'sup',
      name: 'defaultSummoner',
    },
  ],
  ban_list: {
    red: [
      { id: 1, name: 'default' },
      { id: 2, name: 'default' },
      { id: 3, name: 'default' },
      { id: 4, name: 'default' },
      { id: 5, name: 'default' },
    ],
    blue: [
      { id: 1, name: 'default' },
      { id: 2, name: 'default' },
      { id: 3, name: 'default' },
      { id: 4, name: 'default' },
      { id: 5, name: 'default' },
    ],
  },
  current_champion: -1,
  selectId: [],
};

function banpickReducer(state, action) {
  switch (action.type) {
    case 'WAITING':
      return state;
    case 'PICK':
      return {
        ...state,
        [action.camp]: state[action.camp].map((summoner) =>
          summoner.id === action.id
            ? { ...summoner, name: action.champion }
            : summoner
        ),
        current_champion: action.current_champion,
      };
    case 'BAN':
      return {
        ...state,
        ban_list: {
          ...state.ban_list,
          [action.camp]: state.ban_list[action.camp].map((x) =>
            x.id === action.id ? { ...x, name: action.champion } : x
          ),
        },
        current_champion: action.current_champion,
      };
    case 'LOSTBAN':
      return {
        ...state,
        ban_list: {
          ...state.ban_list,
          [action.camp]: state.ban_list[action.camp].map((x) =>
            x.id === action.id ? { ...x, name: 'default' } : x
          ),
        },
      };
    case 'SELECT_ID':
      return {
        ...state,
        selectId: [...state.selectId, action.id],
      };
    case 'NextSelect':
      return {
        ...state,
        current_champion: -1,
      };
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
}

const BanpickStateContext = createContext();
const BanpickDispatchContext = createContext();
const ModeStateContext = createContext();
const GamerefContext = createContext();

export function BanpickProvider({ children }) {
  /*게임 진행*/
  const gameref = useRef({
    order: [
      ['blue', 'red', 'blue', 'red', 'blue', 'red'],
      'blue',
      'red',
      'red',
      'blue',
      'blue',
      'red',
      ['red', 'blue', 'red', 'blue'],
      'red',
      'blue',
      'blue',
      'red',
    ],
    pickred: 1,
    banred: 1,
    pickblue: 1,
    banblue: 1,
  });

  const [state, dispatch] = useReducer(banpickReducer, initState);
  const [mode, setMode] = useState(ModeState);

  return (
    <BanpickStateContext.Provider value={state}>
      <BanpickDispatchContext.Provider value={dispatch}>
        <ModeStateContext.Provider value={[mode, setMode]}>
          <GamerefContext.Provider value={gameref}>
            {children}
          </GamerefContext.Provider>
        </ModeStateContext.Provider>
      </BanpickDispatchContext.Provider>
    </BanpickStateContext.Provider>
  );
}

export function useBanpickState() {
  return useContext(BanpickStateContext);
}
export function useBanpickDispatch() {
  return useContext(BanpickDispatchContext);
}
export function useModeState() {
  return useContext(ModeStateContext);
}
export function useGameRefContext() {
  return useContext(GamerefContext);
}
