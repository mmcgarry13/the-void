import './App.css'
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: #000000;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden; 
`;

const CenterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const Title = styled.h1`
  position: absolute;
  top: 10%;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  color: #FFFFFF;
`;

const Scream = styled.input`
  padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      width: 100%;
      box-sizing: border-box;

      &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
    `;

function App() {


  return (
      <Wrapper>
        <Title>the void</Title>
        <CenterBox>
      <Scream placeholder="scream?" />
      </CenterBox>
      </Wrapper>
  )
}

export default App
