import React, { useEffect, useState } from 'react'
import LoadingSkeleton from '@/app/components/units/skeleton/jobCardSkeleton'
import Link from 'next/link'
import Image from 'next/image'
import { fetchJobData, type JobList, type JobItem } from './jobcard-data-fetch' // Import the fetchData function

interface JobProps {
  tag: string | null
}

const JobCard = ({ tag }: JobProps) => {
  const [jobList, setJobList] = useState<JobList>({ items: [] })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetchJobData(tag)
      .then((data: JobList) => {
        setJobList(data)
        setIsLoading(false)
        console.log(data)
      })
      .catch((error) => {
        console.error('data fetch 실패!', error)
        setIsLoading(false)
      })
  }, [tag])

  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-4 ">
      {isLoading ? (
        <div className="flex gap-4">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : (
        jobList.items.map((item: JobItem) => (
          <Link key={item.id} href={`/hire/${item.id}`}>
            <div className="max-w-md">
              <Image
                src={item.image}
                alt={item.position}
                width={300}
                height={300}
                style={{ borderRadius: '5%' }}
              />
              <h2 className="text-lg font-medium mb-3">{item.position}</h2>

              <p className="mb-1 text-sm font-semibold">{item.companyName}</p>
              <p className="mb-1 text-xs font-light text-slate-400	">
                {item.location}
              </p>
              <p className="mb-1 text-xs font-semibold">
                채용보상금: {item.reward1}원
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

export default JobCard
