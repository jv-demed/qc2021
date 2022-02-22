import styled from 'styled-components'

const RankingStyled = styled.table`
    background-color: ${({ theme }) => theme.opacities.box};
    padding: 8px 10px;
    th{
        padding-bottom: 5px;
    }
    td{
        border-bottom: 1px solid white;
        padding: 2px 8px;
    }
    .info{
        text-align: center;
        width: 55px;
    }
`

export default RankingStyled;