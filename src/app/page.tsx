// import Image from 'next/image'
// import styles from './page.module.css'
import Carousel from './components/units/carousel'

export default function Home() {
  const carouseImages = ['./1.jpg', './2.jpg', './3.jpg']

  return (
    <main>
      <Carousel carouselList={carouseImages}></Carousel>
    </main>
  )
}
