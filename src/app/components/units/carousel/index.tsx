import React, { useEffect, useRef, useState } from 'react'
import AbcIcon from '@mui/icons-material/Abc'
import styles from './carousel.module.scss'

interface Props {
  carouselList: string[]
}

const Carousel: React.FC<Props> = ({ carouselList }) => {
  const [currIndex, setCurrIndex] = useState(1)
  const [currList, setCurrList] = useState<string[]>()

  const carouselRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0]
      const endData = carouselList[carouselList.length - 1]
      const newList = [endData, ...carouselList, startData]

      setCurrList(newList)
    }
  }, [carouselList])

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%)`
    }
  }, [currIndex])

  function moveSlide(index: number) {
    setTimeout(() => {
      setCurrIndex(index)
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = ''
      }
    }, 500)
  }

  const handleSwipe = (direction: number) => {
    const newIndex = currIndex + direction

    if (newIndex === carouselList.length + 1) {
      moveSlide(1)
    } else if (newIndex === 0) {
      moveSlide(carouselList.length)
    }

    setCurrIndex((prev) => prev + direction)
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.carouselWrapper}>
        <button
          type="button"
          className={styles.swipeLeft}
          onClick={() => {
            handleSwipe(-1)
          }}
        >
          <AbcIcon />
        </button>
        <button
          type="button"
          className={styles.swipeRight}
          onClick={() => {
            handleSwipe(1)
          }}
        >
          <AbcIcon />
        </button>
        <ul className={styles.carousel} ref={carouselRef}>
          {currList?.map((image, idx) => {
            const key = `${image}-${idx}`

            return (
              <li key={key} className={styles.carouselItem}>
                <img src={image} alt="carousel-img" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Carousel
