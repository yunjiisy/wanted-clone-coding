// 'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutFooter from './components/commons/layout/footer/footer'
import MainBar from './components/commons/layout/header/mainbar'
import NavBar from './components/commons/layout/header/navbar'
import SearchButton from './components/commons/layout/header/searchButton'
import SignupButton from './components/commons/layout/header/signupButton'
import { ModalProvider } from './components/commons/modal/modal-context-ex'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wanted',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <div className="ml-14 mr-14">
            <div className="flex flex-row justify-between">
              <MainBar></MainBar>
              <NavBar></NavBar>
              <SignupButton></SignupButton>
              <SearchButton></SearchButton>
            </div>
          </div>
          {children}
          <LayoutFooter></LayoutFooter>
        </ModalProvider>
      </body>
    </html>
  )
}
