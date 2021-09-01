import React from 'react'
import styled from 'styled-components'
import Ranking from '../src/components/Ranking';

const HomeStyled = styled.div`
  color: white;
  height: 88vh;
`

export default function Home(){

  return(
    <HomeStyled>
      <Ranking />
    </HomeStyled>
  )
}