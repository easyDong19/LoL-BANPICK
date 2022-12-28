import { useState } from 'react';
import styled from 'styled-components';
import useInterval from '../hooks/useInterval';

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
  width: 100%;
  height: 10px;
  background-color: #fab005;
`;

function BanpickHeader() {
  const [count, setCount] = useState(0);

  const Timer = () => {
    useInterval(() => {
      setCount((count) => count + 1);
      if (count === 3) {
        setCount(0);
      }
    }, 1000);
  };

  // Timer();
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
            <h2>: 32</h2>
          </div>
        </GameInfoHeader>
        <RedTeamHeader>
          <h1>RED</h1>
        </RedTeamHeader>
      </Header>
      <ProgressBar />
    </>
  );
}

export default BanpickHeader;
