import React from 'react'
import StockItem from '../StockItem'
import styles from './DailyList-styles.module.css'

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
      return <div className={styles.bar} />
    }
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
