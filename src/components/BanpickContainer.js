import styled from 'styled-components';
import { useModeState } from '../banpickContext';

const Wrapper = styled.div`
  min-width: 1400px;
  width: 60%;
  height: 800px;
  background-color: #868e96;
  margin: 0 auto;
`;
function BanpickContainer({ children }) {
  const [mode, setMode] = useModeState();
  return (
    <>{mode.visible ? <Wrapper>{children}</Wrapper> : <div>기다리세용</div>}</>
  );
}

export default BanpickContainer;
