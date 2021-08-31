import React from 'react'
import styled from 'styled-components'
import getPlayers from '../src/getPlayers';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home(){

  const players = getPlayers();

  console.log(players);

  return(
    <>
      <ul>
        {players.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.nick}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}