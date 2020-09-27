import React from 'react'
import styles from './ContainerComponent-styles.module.css'

export default function ContainerComponent (props) {
  const PropComponent = props.component
  return (
    <div className={styles.container}>
      <PropComponent />
    </div>
  )
}
