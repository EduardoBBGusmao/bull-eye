import React from 'react'
import styles from './StockItem-styles.module.css'
export default function StockItem (props) {
  const stock = props.stock

  const checkStockChange = (stockChange) => {
    var choosenArrow = <></>
    var style = ''
    const stockChangeNum = parseFloat(stockChange)
    if (stockChangeNum > 0) {
      choosenArrow = <>&uarr;</>
      style = styles.positive
    } else if (stockChangeNum < 0) {
      choosenArrow = <>&darr;</>
      style = styles.negative
    }
    return (
      <div className={style}>
        {choosenArrow} {stockChangeNum}%
      </div>
    )
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
