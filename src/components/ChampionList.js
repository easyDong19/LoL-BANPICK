import styled from 'styled-components';

const ChampionListContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 700px;
  background-color: pink;
  overflow: auto;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: flex-start;

  gap: 10px;
  padding: 25px 0px 0px 25px;
`;

const ChampionItem = styled.div`
  width: 70px;
  height: 70px;
  background-color: aqua;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
`;

function ChampionList() {
  return (
    <ChampionListContent>
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>{' '}
      <ChampionItem>
        <img src='/img/tile.jpg' alt='' />
      </ChampionItem>
    </ChampionListContent>
  );
}

export default ChampionList;
