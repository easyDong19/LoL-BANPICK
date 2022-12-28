import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 1200px;
  width: 60%;
  height: 800px;
  background-color: #868e96;
  margin: 0 auto;
`;
function BanpickContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default BanpickContainer;
