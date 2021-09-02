import styled from 'styled-components'

const Box = styled.header`
    background-color: ${({ theme }) => theme.opacities.box};
    display: flex;
    padding: 8px 10px;
    ul{
        list-style: none;
    }
`

export default Box;