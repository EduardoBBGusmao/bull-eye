import React from 'react'
import { Container } from './ContainerComponent-styles.js'

export default function ContainerComponent ({ component = <></> }) {
  const PropComponent = component
  return (
    <Container>
      <PropComponent />
    </Container>
  )
}
