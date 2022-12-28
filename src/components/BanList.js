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

const ban_list = {
  red: [
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
  ],
  blue: [
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
  ],
};

function BanList() {
  return (
    <BanListContent>
      {ban_list['red'].map((x) => (
        <BanItem key={x.id}>
          <img src='img/default.png' alt='' />
        </BanItem>
      ))}
    </BanListContent>
  );
}

export default BanList;
