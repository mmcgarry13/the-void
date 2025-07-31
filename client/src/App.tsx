import './App.css'
import styled from "styled-components";
import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SCREAM} from "./utils/mutations";
import { QUERY_SCREAM } from "./utils/queries";


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
    const [screamContent, setScreamContent] = useState("");


    // GraphQL Mutation to add write Scream to db
    const [addScream, { loading }] = useMutation(ADD_SCREAM, {
      refetchQueries: [{ query: QUERY_SCREAM }],
    })
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!screamContent.trim()) {
        return;
      }
      const { data } = await addScream({ // GraphQL mutation for adding a scream
        variables: {
          input: {
            text: screamContent,
          },
        },
      });

      setScreamContent(data.addScream.content);
    } catch (error) {
      console.error("you scream but no one hears... isn't that kinda the point?");
    }
  };



  return (
      <Wrapper>
        <Title>the void</Title>
         <CenterBox onSubmit={handleSubmit}>
          <Scream 
            placeholder="scream?" 
            value={screamContent}
           onChange={(e) => setScreamContent(e.target.value)}
          />
       </CenterBox>
      </Wrapper>
  )
}

export default App
