import React from 'react'
import StockItem from '../StockItem'
import styles from './DailyList-styles.module.css'

export default function DailyList (props) {
  const stocks = [
    { name: 'CDE', change: '-1.6%' },
    { name: 'BKN', change: '-1.6%' },
    { name: 'AAPL', change: '-1.6%' },
    { name: 'AWS', change: '-1.6%' },
    { name: 'APH', change: '-1.6%' },
    { name: 'MNN', change: '-1.6%' },
    { name: 'TEST', change: '-1.6%' }
  ]

  const getSideBar = (length, index) => {
    if (index < length - 1)
      return <div className={styles.bar} />
  }
  return (
    <ul>{
      stocks.map((stock, index) =>
        <>
          <li key={stock.name}>
            <StockItem stock={stock} />
          </li>
          {getSideBar(stocks.length, index)}
        </>
      )
    }
    </ul>
  )
}
