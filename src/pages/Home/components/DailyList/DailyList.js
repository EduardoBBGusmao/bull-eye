import React from 'react'
import StockItem from '../StockItem'
import { List, Item, Bar } from './DailyList-styles.js'

export default function DailyList (props) {
  const stocks = [
    { name: 'CDE', change: '-1.6%' },
    { name: 'BKN', change: '0.0%' },
    { name: 'AAPL', change: '1.6%' },
    { name: 'AWS', change: '3.6%' },
    { name: 'APH', change: '-1.1%' },
    { name: 'MNN', change: '-0.6%' },
    { name: 'TEST', change: '1.2%' }
  ]

  const getSideBar = (length, index) => {
    if (index < length - 1) {
      return <Bar />
    }
  }
  return (
    <List>{
      stocks.map((stock, index) =>
        <>
          <Item key={index}>
            <StockItem stock={stock} />
          </Item>
          {getSideBar(stocks.length, index)}
        </>
      )
    }
    </List>
  )
}
