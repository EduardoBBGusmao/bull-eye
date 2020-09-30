import React from 'react'
import ContainerComponent from '../../components/ContainerComponent'
import ComparativeGraph from './components/ComparitiveGraph'
import DailyList from './components/DailyList'
import InvestmentsAlloc from './components/InvestmentsAlloc'
import Wallet from './components/Wallet'
import { Container } from './Home-styles'

export default function Home () {
  return (
    <Container>
      <div>
        <ContainerComponent component={DailyList} />
        <ContainerComponent component={ComparativeGraph} />
      </div>
      <div>
        <ContainerComponent component={Wallet} />
        <ContainerComponent component={InvestmentsAlloc} />
      </div>
    </Container>
  )
}
