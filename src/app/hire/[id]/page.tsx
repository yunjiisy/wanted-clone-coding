// firebase 연동 완료
// 더미데이터에서 받아왔던 부분들 firebase로부터 받아온 데이터로 바꿀 예정. (데이터 잘못 넣어놔서 수정중)
import Image from 'next/image'
import { fetchJobData } from '@/app/components/units/hire/joblist/jobDataFetch'

interface Company {
  id: number
  companyName: string
  image: string
  position: string
  location: string
  reward1: string
  reward2: string
}

export default async function WDPage({ params }: { params: { id: string } }) {
  const wdid = params.id
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require('../../../../public/data/jobCardDummy.json')
  const data2 = await fetchJobData(wdid)

  console.log('-------------------~~~~~~~~~~')
  console.log(data2)

  // wdid에 해당하는 기업 정보 찾기
  const recruitment: Company | undefined = data.items.find(
    (item: Company) => item.id === Number(wdid),
  )
  console.log(recruitment)

  if (recruitment == null) {
    return <div>해당 기업을 찾을 수 없습니다.</div>
  }
  if (data2 == null) {
    return <div>해당 기업을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex">
      <div className="mx-auto my-10 ">
        <Image src={recruitment.image} alt="" width={600} height={800} />
        <h2 className="mt-2 text-2xl font-medium mb-3">
          {recruitment.position}
        </h2>
        <h2 className="mt-2 text-2xl font-medium mb-3">{data2.position}</h2>
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
