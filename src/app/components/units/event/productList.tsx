import Link from 'next/link'
import React from 'react'

interface productItem {
  id: number
  title: string
  price: number
  brand: string
  images: string
}

async function fetchDatas() {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
export default async function ProductList() {
  const productsList = await fetchDatas()

  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-4">
      {productsList.products.map((item: productItem) => (
        <Link key={item.id} href={`/event/${item.id}`}>
          <div className="max-w-md">
            <img src={item.images[1]} style={{ borderRadius: '5%' }} />
            <h2 className="text-lg font-medium mb-3">{item.title}</h2>

            <p className="mb-1 text-sm font-semibold">{item.price}</p>
            <p className="mb-1 text-xs font-light text-slate-400	">
              {item.brand}
            </p>
            <p className="mb-1 text-xs font-semibold">
              채용보상금: {item.price}원
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
