import styled from 'styled-components'

export const Container = styled.div` 
  border: 0.5px solid #f0f0f0;
  display: flex;
  justify-self: center;
  padding: 5px;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    width: fit-content;
  }
`
