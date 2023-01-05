import { useState } from 'react';
import styled from 'styled-components';

const SearchContent = styled.div`
  display: flex;
  height: 50px;
  background-color: #151520;
  justify-content: space-between;
  align-items: center;

  .pos-list {
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
    margin-left: 10px;

    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
      filter: brightness(70%);
      &:hover {
        filter: brightness(100%);
      }

      &.active {
        filter: brightness(100%);
      }
    }
  }

  .inputByName {
    padding: 10px;
    input {
      width: 200px;
      padding: 5px;
    }
  }
`;

function SearchContainer({ search, onChange, onSelectPos, inputref }) {
  return (
    <SearchContent>
      <div className='pos-list'>
        <div className='top'>
          <img
            src='/img/pos/top.png'
            alt='top'
            onClick={onSelectPos}
            ref={(elem) => (inputref.current[0] = elem)}
          />
        </div>
        <div className='jg'>
          <img
            src='/img/pos/jg.png'
            alt='jg'
            onClick={onSelectPos}
            ref={(elem) => (inputref.current[1] = elem)}
          />
        </div>
        <div className='mid'>
          <img
            src='/img/pos/mid.png'
            alt='mid'
            onClick={onSelectPos}
            ref={(elem) => (inputref.current[2] = elem)}
          />
        </div>
        <div className='ad'>
          <img
            src='/img/pos/AD.png'
            alt='ad'
            onClick={onSelectPos}
            ref={(elem) => (inputref.current[3] = elem)}
          />
        </div>
        <div className='sup'>
          <img
            src='/img/pos/sup.png'
            alt='sup'
            onClick={onSelectPos}
            ref={(elem) => (inputref.current[4] = elem)}
          />
        </div>
      </div>
      <div className='inputByName'>
        <input
          type='text'
          placeholder='챔피언 이름'
          onChange={onChange}
          value={search}
        />
      </div>
    </SearchContent>
  );
}

export default SearchContainer;
