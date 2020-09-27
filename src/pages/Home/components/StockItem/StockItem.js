import React, { PropTypes } from 'react'
import styles from './StockItem-styles.module.css'
export default function StockItem (props) {
  const stock = props.stock

  const checkStockChange = (stockChange) => {
    // stockChange.replace('%', '')
    const stockChangeNum = parseFloat(stockChange)
    if (stockChangeNum > 0) {
      return (
        <div className={styles.positive}>
          &uarr; {stockChangeNum}
        </div>
      )
    }
    if (stockChangeNum < 0) {
      return (
        <div className={styles.negative}>
          &darr; {stockChangeNum}
        </div>
      )
    }
  }
  return (
    <>
      <div className={styles.stockName}>
        {stock.name}
      </div>
      <div className={styles.stockValue}>
        {checkStockChange(stock.change)}
      </div>
    </>
  )
}
