// firebase 연동 아직

interface Props {
  params: {
    eventid: string
  }
}
interface Product {
  id: number
  title: string
  brand: string
  price: string
  images: any[]
}
async function fetchEventDatas(eventid: string) {
  const res = await fetch(`https://dummyjson.com/products/${eventid}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export default async function EvendPage({ params: { eventid } }: Props) {
  // const eventid = params.id

  const eventItem = await fetchEventDatas(eventid)

  if (eventItem == null) {
    return <div>해당 기업을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex">
      <div className="mx-auto my-10 ">
        <h2 className="mt-2 text-2xl font-medium mb-3 text-center">
          이벤트 상품 ~
        </h2>

        <img src={eventItem.images[1]} alt="" width={600} height={800} />
        <h2 className="mt-2 text-2xl font-medium mb-3">{eventItem.title}</h2>
        <p className="mb-1 text-medium font-base">{eventItem.brand}</p>
        <p className="mb-5 text-sm font-light text-slate-600	">
          {eventItem.location}
        </p>
        <div className="bg-gray-100 h-28 rounded-md p-4 ">
          <div className="text-md font-semibold">채용보상금</div>
          <ul className="flex mt-2">
            <li className="flex-1 ">
              <p className="text-slate-500 text-sm font-semibold mb-1">
                추천인
              </p>
              <p className="text-sm font-semibold">{eventItem.price} 원</p>
            </li>
            <li className="flex-1">
              <p className="text-slate-500 text-sm font-semibold mb-1">
                지원자
              </p>
              <p className="text-sm font-semibold">{eventItem.price} 원</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products/')
  const EventsData: { products: Product[] } = await res.json()
  return EventsData.products.map((product) => ({
    eventid: product.id.toString(),
  }))

  // productsData 객체이며, productsData 객체 안에 products 배열이 있었음 그니까 당연히 배열이 아니지...^^
  // console 찍어보니까 { products: [ {~~}, {~~}, {~~} ] } <- 이렇게 돼있었음
  // const res = await fetch('https://dummyjson.com/products/')
  // const productsData: Product[] = await res.json()
  // return productsData.map((product: { id: number }) => ({
  //   eventid: product.id,
  // }))
}
