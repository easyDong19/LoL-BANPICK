import styled from 'styled-components';

const BanListContent = styled.div`
  display: flex;
  background-color: #e5dbff;
  flex: 1;
  gap: 2px;
`;
const BanItem = styled.div`
  display: flex;
  position: relative;
  background-color: #faa2c1;
  flex: 1;
  align-items: center;

  img {
    pointer-events: none;
    width: 100%;
    height: auto;
    position: absolute;
    object-fit: cover;
  }
`;

function BanList({ ban_list }) {
  return (
    <BanListContent>
      {ban_list.map((x) => (
        <BanItem key={x.id}>
          <img src={`img/tiles/${x.name}.jpg`} alt='' />
        </BanItem>
      ))}
    </BanListContent>
  );
}

export default BanList;
