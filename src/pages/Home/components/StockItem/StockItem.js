import React from 'react'

export default function StockItem (props) {
  const stock = props.stock
  return (
    <>
      {props.stock.name}
    </>
  )
}
