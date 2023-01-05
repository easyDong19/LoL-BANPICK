import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useBanpickDispatch, useTeamRefContext } from '../banpickContext';
import championInfo from '../Champions.json';

const ChampionListContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 700px;
  background-color: #343a40;
  overflow: auto;
  flex-flow: row wrap;
  justify-content: center;

  gap: 10px;
  align-content: flex-start;

  padding: 15px 0 40px 0;
`;

const ChampionItem = memo(styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: relative;
  &:hover {
    filter: brightness(50%);
  }
  filter: ${({ select }) =>
    select === 'true' ? 'brightness(50%);cursor: default;' : 'none'};

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border: 1px solid gray;
  }
`);

function ChampionList({ search, pos, select_id, action, flag }) {
  const dispatch = useBanpickDispatch();

  const Waiting = (e, select_id, action, flag) => {
    if (select_id.includes(Number(e.target.id)) === false && flag) {
      dispatch({
        ...action,
        champion: e.target.alt,
        current_champion: e.target.id,
      });
    }
  };

  return (
    <ChampionListContent>
      {championInfo.data
        .filter((item) => item['KR-name'].includes(search))
        .filter((item) => item['position'].includes(pos))
        .map((item) => {
          const src = '/img/tiles/' + item['EN-name'].toLowerCase() + '.jpg';
          const select = select_id.includes(item.id) ? 'true' : false;
          return (
            <ChampionItem
              key={item.id}
              onClick={(e) => Waiting(e, select_id, action, flag)}
              select={select}
            >
              <img src={src} alt={item['EN-name'].toLowerCase()} id={item.id} />
            </ChampionItem>
          );
        })}
    </ChampionListContent>
  );
}

export default React.memo(ChampionList);
