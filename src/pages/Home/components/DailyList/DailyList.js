import React from 'react'
import StockItem from '../StockItem'
import styles from './DailyList-styles.module.css'

export default function DailyList (props) {
  const stocks = [
    { name: "CDE", change: "-1.6%" },
    { name: "BKN", change: "-1.6%" },
    { name: "AAPL" },
    { name: "AWS" },
    { name: "APH" },
    { name: "MNN" },
    { name: "TEST" },
  ]
  return (
    <ul>{
      stocks.map((stock) =>
          <li>
            <StockItem stock={stock}/>
          </li>
        )
      }
    </ul>
  )
}
