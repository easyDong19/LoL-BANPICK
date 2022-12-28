import styled from 'styled-components';
import BanList from './BanList';
import ChampionList from './ChampionList';
import SearchContainer from './SearchContainer';
import SummonerItem from './SummonerItem';

const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  background-color: floralwhite;
`;

const SummonerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PickContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  background-color: #6741d9;
  gap: 10px;
`;

const SelectBtn = styled.button`
  width: 300px;
  height: 50px;
  position: absolute;
  border-radius: 50px;
  border: none;
  bottom: 0;
  left: 50%;
  z-index: 5px;
  transform: translate(-50%, 50%);
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: yellow;
  }
`;

const init = {
  red: [
    {
      id: 1,
      pos: 'top',
      name: '',
    },
    {
      id: 2,
      pos: 'jg',
      name: '',
    },
    {
      id: 3,
      pos: 'mid',
      name: '',
    },
    {
      id: 4,
      pos: 'ad',
      name: '',
    },
    {
      id: 5,
      pos: 'sup',
      name: '',
    },
  ],
  blue: [
    {
      id: 1,
      pos: 'top',
      name: '',
    },
    {
      id: 2,
      pos: 'jg',
      name: '',
    },
    {
      id: 3,
      pos: 'mid',
      name: '',
    },
    {
      id: 4,
      pos: 'ad',
      name: '',
    },
    {
      id: 5,
      pos: 'sup',
      name: '',
    },
  ],
};

function BanpickContent() {
  return (
    <ContentBlock>
      <SummonerContainer>
        {init['blue'].map((x) => (
          <SummonerItem
            key={x.id}
            align_item='flex-end'
            id={x.id}
          ></SummonerItem>
        ))}
        <BanList></BanList>
      </SummonerContainer>

      <PickContainer>
        <SearchContainer></SearchContainer>
        <ChampionList></ChampionList>
        <SelectBtn>선택</SelectBtn>
      </PickContainer>

      <SummonerContainer>
        {init['red'].map((x) => (
          <SummonerItem
            key={x.id}
            align_item='flex-start'
            id={x.id}
          ></SummonerItem>
        ))}
        <BanList></BanList>
      </SummonerContainer>
    </ContentBlock>
  );
}

export default BanpickContent;
