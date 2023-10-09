// firebase 연동
import Image from 'next/image'
import { fetchJobData } from '@/app/components/units/hire/joblist/jobDataFetch'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { fetchWantedJobData } from '@/app/components/units/hire/joblist/wantedJobDataFetch'

export default async function WDPage({ params }: { params: { id: number } }) {
  const wdid = params.id

  const jobData = await fetchJobData(wdid)
  const wantedJobData = await fetchWantedJobData(183679)
  console.log('wanted job 데이터: ', wantedJobData)

  if (jobData == null) {
    return <div>해당 기업을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex gap-10 justify-center relative">
      <div className=" my-10 ">
        <Image
          src={jobData.image}
          alt=""
          width={600}
          height={800}
          style={{ borderRadius: '1%' }}
        />
        <h2 className="mt-2 text-2xl font-medium mb-3">{jobData.position}</h2>
        <p className="mb-1 text-medium font-base">{jobData.companyName}</p>
        <p className="mb-2 text-sm font-light text-slate-600	">
          {jobData.location}
        </p>
        <div
          className={`mb-5 text-center w-24 rounded-full p-1  ${
            jobData.response === '응답률 높음'
              ? 'text-blue-900 bg-[#e3f0fa]'
              : 'text-green-600 bg-[#e3faf0]'
          } text-xs`}
        >
          {jobData.response}
        </div>
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
      <div className=" my-10 ">
        <div className="bg-white border rounded-md px-7 py-5 flex flex-col gap-3">
          <div className="text-md font-semibold">합격 지원금</div>
          <ul className="flex gap-28 py-4">
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
          <button className="justify-self-center py-3 rounded-lg border  border-[#1871ff] text-lg text-[#1871ff] font-medium">
            <div className="flex justify-center items-center gap-1">
              <BookmarkIcon className="h-5 w-5 "></BookmarkIcon>
              <span>북마크 하기</span>
            </div>
          </button>
          <button className="justify-self-center py-3 rounded-lg bg-[#1871ff]  text-lg text-white font-medium">
            지원하기
          </button>
        </div>
      </div>
    </div>
  )
}
