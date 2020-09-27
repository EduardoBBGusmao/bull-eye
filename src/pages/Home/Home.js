import React from 'react'
import ContainerComponent from '../../components/ContainerComponent'
import DailyList from './components/DailyList'

export default function Home () {
  return (
    <>
      <ContainerComponent component={DailyList} />
    </>
  )
}
