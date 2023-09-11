// import CompanyData from '../../../../public/data/jobCardDummy.json'
import Image from 'next/image'

interface Company {
  id: number
  companyName: string
  image: string
  position: string
  location: string
  reward1: string
  reward2: string
}

export default function WDPage({ params }: { params: { id: string } }) {
  const wdid = params.id
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require('../../../../public/data/jobCardDummy.json')

  // wdid에 해당하는 기업 정보 찾기
  const recruitment: Company | undefined = data.items.find(
    (item: Company) => item.id === Number(wdid),
  )

  if (recruitment == null) {
    return <div>해당 기업을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex">
      <div className="mx-auto my-10 ">
        <Image src={recruitment.image} alt="" width={600} height={800} />
        <h2 className="mt-2 text-2xl font-medium mb-3">
          {recruitment.position}
        </h2>
        <p className="mb-1 text-medium font-base">{recruitment.companyName}</p>
        <p className="mb-5 text-sm font-light text-slate-600	">
          {recruitment.location}
        </p>
        <div className="bg-gray-100 h-28 rounded-md p-4 ">
          <div className="text-md font-semibold">채용보상금</div>
          <ul className="flex mt-2">
            <li className="flex-1 ">
              <p className="text-slate-500 text-sm font-semibold mb-1">
                추천인
              </p>
              <p className="text-sm font-semibold">{recruitment.reward1} 원</p>
            </li>
            <li className="flex-1">
              <p className="text-slate-500 text-sm font-semibold mb-1">
                지원자
              </p>
              <p className="text-sm font-semibold">{recruitment.reward2} 원</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
