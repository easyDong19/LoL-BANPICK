import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  useBanpickDispatch,
  useBanpickState,
  useGameRefContext,
  useModeState,
} from '../banpickContext';
import BanList from './BanList';
import ChampionList from './ChampionList';
import SearchContainer from './SearchContainer';
import SummonerItem from './SummonerItem';

const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
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
  gap: 10px;
  background-color: #343a40;
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
  cursor: pointer;

  &:hover {
    background-color: yellow;
  }

  ${({ current_champion }) =>
    current_champion === -1
      ? 'pointer-events: none;  filter: brightness(80%);'
      : 'default'}
`;

function BanpickContent() {
  /*검색 기능*/
  const [pos, setPos] = useState('default');
  const [search, setSearch] = useState('');
  const inputref = useRef([]);
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSelectPos = (e) => {
    if (e.target.classList.contains('active')) {
      setPos('default');
      e.target.classList.remove('active');
    } else {
      inputref.current.map((item) => item.classList.remove('active'));

      e.target.classList.add('active');
      setPos(e.target.alt);
    }
  };

  /*유저정보*/
  const state = useBanpickState();
  const gameref = useGameRefContext();
  const dispatch = useBanpickDispatch();

  const [mode, setMode] = useModeState();

  let action;
  let camp;
  let id;
  let pickFlag = true;

  let round = gameref.current.order[0];

  if (round === undefined) {
    pickFlag = false;
  }
  if (Array.isArray(round) && round.length !== 0) {
    camp = round[0];
    id = gameref.current['ban' + camp];
    action = { type: 'BAN', camp, id };
  } else {
    round = gameref.current.order[0];
    camp = round;
    id = gameref.current['pick' + camp];
    action = { type: 'PICK', camp, id };
  }

  /*픽할 시*/
  const select = () => {
    if (state.current_champion !== -1 && pickFlag) {
      dispatch({ type: 'SELECT_ID', id: Number(state.current_champion) });

      if (Array.isArray(round)) {
        gameref.current['ban' + camp] += 1;
        gameref.current.order[0].shift();
        if (gameref.current.order[0].length === 0) {
          gameref.current.order.shift();
        }
      } else {
        gameref.current['pick' + camp] += 1;
        gameref.current.order.shift();
      }
    }
    setMode({ ...mode, count: 30 });
    dispatch({ type: 'NextSelect' });
  };

  return (
    <ContentBlock>
      <SummonerContainer>
        {state['blue'].map((x) => (
          <SummonerItem
            key={x.id}
            align_item='flex-end'
            id={x.id}
            champion={x.name}
          ></SummonerItem>
        ))}
        <BanList ban_list={state.ban_list.blue}></BanList>
      </SummonerContainer>

      <PickContainer>
        <SearchContainer
          onChange={onChange}
          pos={pos}
          onSelectPos={onSelectPos}
          inputref={inputref}
        ></SearchContainer>
        <ChampionList
          search={search}
          pos={pos}
          select_id={state.selectId}
          action={action}
          flag={pickFlag}
        ></ChampionList>
        <SelectBtn onClick={select} current_champion={state.current_champion}>
          선택
        </SelectBtn>
      </PickContainer>

      <SummonerContainer>
        {state['red'].map((x) => (
          <SummonerItem
            key={x.id}
            align_item='flex-start'
            id={x.id}
            champion={x.name}
          ></SummonerItem>
        ))}
        <BanList ban_list={state.ban_list.red}></BanList>
      </SummonerContainer>
    </ContentBlock>
  );
}

export default BanpickContent;
