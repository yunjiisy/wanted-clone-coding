import React, { useEffect, useState } from 'react'
import LoadingSkeleton from '@/app/components/units/skeleton/jobCardSkeleton'
import Link from 'next/link'
import Image from 'next/image'
import { fetchJobListData } from './jobListDataFetch' // Import the fetchData function

interface JobProps {
  tag: string | null
  filter: string | null
}

interface JobData {
  id: string
  companyName: string
  growing: string
  image: string
  location: string
  position: string
  response: string
  reward1: string
  reward2: string
}

// type JobItemsArray = Record<string, JobData[]>

const JobCard = ({ tag, filter }: JobProps) => {
  const [jobListData, setJobListData] = useState<Record<string, JobData>>({})
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetchJobData(tag)
  //     .then((data: JobList) => {
  //       setJobList(data)
  //       setIsLoading(false)
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.error('data fetch 실패!', error)
  //       setIsLoading(false)
  //     })
  // }, [tag])
  useEffect(() => {
    setIsLoading(true)
    fetchJobListData(tag, filter)
      .then((data) => {
        setJobListData(data)
        setIsLoading(false)
        console.log('서ㅓ어엉어ㅓ어어어엉ㅇ공setJobListData', data)
      })
      .catch((error) => {
        console.error('data fetch 실패!', error)
        setIsLoading(false)
      })
  }, [tag, filter])

  return (
    <div className="grid grid-cols-4 gap-y-8 gap-x-4">
      {isLoading ? (
        <div className="flex gap-4">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : (
        <>
          {Object.keys(jobListData).length > 0 ? (
            Object.keys(jobListData).map((key) => {
              const item = jobListData[key]
              return (
                <div key={item.id} className="relative">
                  <Link key={item.id} href={`/hire/${item.id}`}>
                    <div className="max-w-md">
                      <div className="relative h-52 mb-2">
                        <Image
                          src={item.image}
                          alt={item.position}
                          fill
                          style={{ borderRadius: '3%' }}
                        />
                      </div>
                      <h2 className="text-lg font-medium mb-3">
                        {item.position}
                      </h2>

                      <p className="mb-1 text-sm font-semibold">
                        {item.companyName}
                      </p>
                      <div
                        className={`p-0.5 my-0.5 text-center w-20 rounded  ${
                          item.response === '응답률 높음'
                            ? 'text-blue-900 bg-[#e3f0fa]'
                            : 'text-green-600 bg-[#e3faf0]'
                        } text-[8px]`}
                      >
                        {item.response}
                      </div>
                      <p className="mb-1 text-xs font-light text-slate-500	">
                        {item.location}
                      </p>
                      <p className="mb-1 text-xs font-semibold">
                        채용보상금: {item.reward1}원
                      </p>
                    </div>
                  </Link>
                </div>
              )
            })
          ) : (
            <div>등록된 채용 공고가 없습니다</div>
          )}
        </>
      )}
    </div>
  )

  // return (
  //   <div className="grid grid-cols-4 gap-y-10 gap-x-4 ">
  //     {isLoading ? (
  //       <div className="flex gap-4">
  //         <LoadingSkeleton />
  //         <LoadingSkeleton />
  //         <LoadingSkeleton />
  //         <LoadingSkeleton />
  //       </div>
  //     ) : (
  //       jobList.items.map((item: JobItem) => (
  // <Link key={item.id} href={`/hire/${item.id}`}>
  //   <div className="max-w-md">
  //     <Image
  //       src={item.image}
  //       alt={item.position}
  //       width={300}
  //       height={300}
  //       style={{ borderRadius: '5%' }}
  //     />
  //     <h2 className="text-lg font-medium mb-3">{item.position}</h2>

  //     <p className="mb-1 text-sm font-semibold">{item.companyName}</p>
  //     <p className="mb-1 text-xs font-light text-slate-400	">
  //       {item.location}
  //     </p>
  //     <p className="mb-1 text-xs font-semibold">
  //       채용보상금: {item.reward1}원
  //     </p>
  //   </div>
  // </Link>
  //       ))
  //     )}
  //   </div>
  // )
}

export default JobCard
