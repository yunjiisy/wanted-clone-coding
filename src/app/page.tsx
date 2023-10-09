'use client'
import Carousel from './components/units/carousel'
import { signIn, useSession } from 'next-auth/react'
import Google from '../../public/assets/svg/google-logo.svg'

export default function Home() {
  const carouseImages = ['./1.jpg', './2.jpg', './3.jpg']
  const { data: session, status } = useSession()

  return (
    <main>
      <Carousel carouselList={carouseImages}></Carousel>
      {status === 'authenticated' ? (
        <div>
          <div className="text-xl font-semibold	text-center">
            하이~! {session.user?.name}
          </div>
          <div className="flex items-center justify-center bg-slate-50"></div>
        </div>
      ) : (
        <button
          className="flex gap-4 h-auto w-64 items-center justify-center rounded-md border border-gray-300 px-4 py-2"
          onClick={async () => await signIn('google')}
        >
          <Google width="25" height="25"></Google>
          Sign in with Google
        </button>
      )}
    </main>
  )
}
