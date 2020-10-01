import styled from 'styled-components'
export const Item = styled.li`
  list-style-type: none;
  display: inline-block;
  text-align: center;
  margin: 0 5px;
  width: 80px;
`

export const List = styled.ul`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  height: 80px;
  max-width: 620px;
  @media(max-width: 800px) {
    max-width: 210px;
  }
`

export const Bar = styled.div`
  width: 0.5px;
  background-color: #c7c7c786;
`
