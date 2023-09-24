'use client'
import Carousel from './components/units/carousel'
import { signIn, signOut, useSession } from 'next-auth/react'
import Google from '../../public/assets/svg/google-logo.svg'

export default function Home() {
  const carouseImages = ['./1.jpg', './2.jpg', './3.jpg']
  const { data: session, status } = useSession()

  return (
    <main>
      <Carousel carouselList={carouseImages}></Carousel>
      {status === 'authenticated' ? (
        <div>
          <div>{session.user?.name}</div>
          <img src={session.user?.image} alt="member Image" />
          <div className="flex items-center justify-center bg-slate-50">
            <button
              className=" transform rounded-md bg-gray-700 px-4 py-2  text-white transition-colors duration-200 hover:bg-gray-600 "
              onClick={async () => {
                await signOut()
              }}
            >
              Sign out with Google
            </button>
          </div>
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
