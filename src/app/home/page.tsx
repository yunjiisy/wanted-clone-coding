// import Image from 'next/image'
'use client'
import styles from './../page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.description}>
        <div className="text-3xl underline">홈페이징🏡</div>
      </div>
      <div className={styles.center}>
        <h1>하이</h1>
      </div>
    </div>
  )
}
