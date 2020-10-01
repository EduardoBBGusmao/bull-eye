import React from 'react'
import { Positive, Zero, Negative, StockName, StockValue } from './StockItem-styles.js'
export default function StockItem ({ stock = {} }) {
  const checkStockChange = (stockChange) => {
    var choosenArrow = <></>
    var Style = Zero
    const stockChangeNum = parseFloat(stockChange)

    if (stockChangeNum > 0) {
      choosenArrow = <>&uarr;</>
      Style = Positive
    } else if (stockChangeNum < 0) {
      choosenArrow = <>&darr;</>
      Style = Negative
    }

    return (
      <Style>
        {choosenArrow} {stockChangeNum}%
      </Style>
    )
  }
  return (
    <>
      <StockName>
        {stock.name}
      </StockName>
      <StockValue>
        {checkStockChange(stock.change)}
      </StockValue>
    </>
  )
}
