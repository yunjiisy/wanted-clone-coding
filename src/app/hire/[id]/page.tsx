// firebase 연동
import Image from 'next/image'
import { fetchJobData } from '@/app/components/units/hire/joblist/jobDataFetch'

// interface Company {
//   id: number
//   companyName: string
//   image: string
//   position: string
//   location: string
//   reward1: string
//   reward2: string
// }

export default async function WDPage({ params }: { params: { id: number } }) {
  const wdid = params.id
  // wdid에 해당하는 기업 정보 찾기, 로컬 더미데이터 쓰던 방식
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const data = require('../../../../public/data/jobCardDummy.json')
  // const recruiment: Company | undefined = data.items.find(
  //   (item: Company) => item.id === Number(wdid),
  // )
  // console.log(recruiment)

  // firebase로 변경 (fetchJobData 함수에서 firebase로부터 데이터 받아옴)
  const jobData = await fetchJobData(wdid)

  if (jobData == null) {
    return <div>해당 기업을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex">
      <div className="mx-auto my-10 ">
        <Image src={jobData.image} alt="" width={600} height={800} />
        <h2 className="mt-2 text-2xl font-medium mb-3">{jobData.position}</h2>
        <p className="mb-1 text-medium font-base">{jobData.companyName}</p>
        <p className="mb-5 text-sm font-light text-slate-600	">
          {jobData.location}
        </p>
        <div className="bg-gray-100 h-28 rounded-md p-4 ">
          <div className="text-md font-semibold">채용보상금</div>
          <ul className="flex mt-2">
            <li className="flex-1 ">
              <p className="text-slate-500 text-sm font-semibold mb-1">
                추천인
              </p>
              <p className="text-sm font-semibold">{jobData.reward1} 원</p>
            </li>
            <li className="flex-1">
              <p className="text-slate-500 text-sm font-semibold mb-1">
                지원자
              </p>
              <p className="text-sm font-semibold">{jobData.reward2} 원</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
