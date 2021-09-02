import styled from 'styled-components'

const HeaderStyled = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.opacities.header};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    font-family: 'Bebas Neue', cursive;;
    font-size: 40px;
    height: 12vh;
    justify-content: space-between;
    padding: 0 40px;
`

export default HeaderStyled;