import { useRef, useState } from 'react';
import styled from 'styled-components';

import {
  useBanpickDispatch,
  useBanpickState,
  useGameRefContext,
  useModeState,
} from '../banpickContext';
import useInterval from '../hooks/useInterval';
import championInfo from '../Champions.json';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 30px;
  height: 10%;
`;
const TeamHeader = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;

  h1 {
    margin: 0;
    font-size: 48x;
  }
`;

const RedTeamHeader = styled(TeamHeader)`
  justify-content: flex-end;
`;

const GameInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  h1,
  h2 {
    margin: 0;
  }
`;

const ProgressBar = styled.div`
  width: ${({ count }) => Math.floor((count / 30) * 100) + '%'};
  height: 10px;
  background-color: #fab005;
  margin: 0 auto;
  transition: ${({ count }) => (count === 30 ? 'none' : 'width 1s linear')};
`;

function randomChampion(select_id) {
  //0~161까지
  //이미 뽑은 수 제외하고 하나 나올 때까지
  let id = Math.trunc(Math.random() * (161 - 0) + 1) + 0;
  while (select_id.includes(id)) {
    id = Math.trunc(Math.random() * (161 - 0) + 1) + 0;
  }
  const name = championInfo.data.filter((x) => x.id === id)[0]['EN-name'];
  return name;
}

function BanpickHeader() {
  const [mode, setMode] = useModeState();
  const state = useBanpickState();
  const gameref = useGameRefContext();
  const dispatch = useBanpickDispatch();

  const Timer = (flag) => {
    let delay = null;
    if (flag === true) {
      delay = 1000;
    }
    useInterval(() => {
      setMode({ ...mode, count: mode.count - 1 });

      if (gameref.current.order[0] === undefined) {
        setMode({ ...mode, timer: false });
      }

      if (mode.count === 0) {
        setMode({ ...mode, count: 30 });
        /*밴픽 넘기기*/
        let round = gameref.current.order[0];
        let camp = round[0];
        let id = gameref.current['ban' + camp];
        let action;

        if (Array.isArray(round)) {
          gameref.current['ban' + camp] += 1;
          gameref.current.order[0].shift();
          action = { type: 'LOSTBAN', id, camp };
          dispatch(action);
          if (gameref.current.order[0].length === 0) {
            gameref.current.order.shift();
          }
        } else {
          round = gameref.current.order[0];
          camp = round;
          id = gameref.current['pick' + camp];
          action = {
            type: 'PICK',
            id,
            camp,
            champion: randomChampion(state.selectId),
          };
          dispatch(action);
          gameref.current['pick' + camp] += 1;
          gameref.current.order.shift();
        }

        dispatch({ type: 'NextSelect' });
      }
    }, delay);
  };

  Timer(mode.timer);

  return (
    <>
      <Header>
        <TeamHeader>
          <h1>BLUE</h1>
        </TeamHeader>
        <GameInfoHeader>
          <div className='pickOrder'>
            <h1>BLUE TEAM</h1>
          </div>
          <div className='remain'>
            <h2>: {mode.timer ? mode.count : '∞'} </h2>
          </div>
        </GameInfoHeader>
        <RedTeamHeader>
          <h1>RED</h1>
        </RedTeamHeader>
      </Header>
      <ProgressBar count={mode.count} />
    </>
  );
}

export default BanpickHeader;
