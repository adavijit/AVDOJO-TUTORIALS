import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { Component } from 'react'

import Link from 'next/link'
export class index extends Component {
  render() {
    return (
      <body>
         <div className={styles.App}>
      <header className={styles.AppHeader}>
        
        <p className={styles.p}>
         React weather
        </p>
        <Link
          className="App-link"
          href="/weather"
        >
          Check your weather
        </Link>
      </header>
    </div>
      </body>
    )
  }
}

export default index
