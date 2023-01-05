import { useState } from 'react';
import styled from 'styled-components';
import { useModeState } from '../banpickContext';

const Wrapper = styled.div`
  min-width: 1400px;
  width: 60%;
  height: 800px;
  background-color: #868e96;
  margin: 0 auto;
`;

const Checkbox = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 10%;

  .header {
    font-size: 36px;
    text-align: center;
    padding: 20px;
  }

  .setting {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-top: 50px;
  }

  .modename {
    font-size: 24px;
  }

  .pick {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;
  }
  .start_btn {
    margin-top: 50px;
    input {
      width: 400px;
      padding: 20px;
      border-radius: 10px;
      border: none;
    }
  }
`;

function BanpickContainer({ children }) {
  const [mode, setMode] = useModeState();
  const [radioStatus, setRadioStatus] = useState({
    on: false,
    off: false,
  });

  const changeRadio = (e) => {
    console.log(e.target.id);
    setRadioStatus({
      on: false,
      off: false,
      [e.target.id]: true,
    });
  };
  return (
    <>
      {mode.visible ? (
        <Wrapper>{children}</Wrapper>
      ) : (
        <Checkbox>
          <div className='header'>롤 모의 밴픽</div>
          <div className='setting'>
            <div className='modename'>시간 무제한</div>
            <div className='pick'>
              <div>
                <label>
                  <input
                    type='radio'
                    name='mode'
                    checked={radioStatus.on}
                    onChange={changeRadio}
                    id='on'
                  />
                  <span>ON</span>
                </label>
              </div>
              <div>
                <label>
                  <input
                    type='radio'
                    name='mode'
                    checked={radioStatus.off}
                    onChange={changeRadio}
                    id='off'
                  />
                  <span>OFF</span>
                </label>
              </div>
            </div>
            <div className='start_btn'>
              <input
                type='button'
                value='시작하기'
                onClick={() =>
                  setMode({ visible: true, timer: radioStatus.off, count: 30 })
                }
              />
            </div>
          </div>
        </Checkbox>
      )}
    </>
  );
}

export default BanpickContainer;
