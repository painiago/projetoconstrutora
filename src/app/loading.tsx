'use client';
import styled from "styled-components"



const TagMain = styled.main`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 500px;
  height: 100vh;
  transform: scale(2);
  overflow: hidden;
  
`
const TagSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`
const Tagh1 = styled.h1`
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
`
const TagDiv = styled.div`
    animation: rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 20px;
    width: 20px;

    @keyframes rotating{
      to{
        transform:  rotate(1turn);
      }
    }
`

export default async function Loading() {

  return (
      <>
      <TagMain>
         <TagSection>
           <Tagh1>
              Carregando... 
            </Tagh1>
            <TagDiv >
          </TagDiv>
        </TagSection>
       </TagMain>
    </>
  )

}