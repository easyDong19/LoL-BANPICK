import styled from 'styled-components';

const SummonerTile = styled.div`
  display: flex;
  flex: 1;
  background-color: #1864ab;
  position: relative;
  justify-content: ${(props) => props.align_item};

  img {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% 20%;
    left: 0px;
    top: 0px;
  }

  .playerInfo {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    color: #fff;
    z-index: 5;
    margin: 0;
    padding: 10px;

    .name {
      font-size: 36px;
      line-height: 0.5;
    }
    .nickname {
      font-size: 24px;
      text-align: ${(props) =>
        props.align_item === 'flex-end' ? 'right' : 'left'};
    }
  }
`;

function SummonerItem({ children, id, align_item }) {
  return (
    <SummonerTile align_item={align_item}>
      {<img src='/img/example.jpg' alt='' />}
      <div className='playerInfo'>
        <span className='name'>Aartrox</span>
        <span className='nickname'>{`player${id}`}</span>
      </div>
    </SummonerTile>
  );
}

export default SummonerItem;
