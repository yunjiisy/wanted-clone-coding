'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Filter from '@/app/components/units/hire/joblist/filter'
import JobGroup from '@/app/components/units/hire/joblist/jobGroup'
import { useEffect, useState } from 'react'

export default function WdListdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // const [currentPath, setcurrentPath] = useState(pathname)
  const [tagId, setTagId] = useState('')
  const [filterId, setFilterId] = useState('')
  useEffect(() => {
    if (tagId && filterId) {
      router.push(`${pathname}?tag=${tagId}&filter=${filterId}`)
    } else if (!tagId && filterId) {
      router.push(`${pathname}?filter=${filterId}`)
    } else if (tagId && !filterId) {
      router.push(`${pathname}?tag=${tagId}`)
    } else {
      router.push(pathname)
    }
  }, [tagId, filterId, searchParams, router, pathname])

  const getTag = (tag: string) => {
    setTagId(tag)
    console.log(tag)
  }
  const getFilter = (filter: string) => {
    setFilterId(filter)
  }
  // const handleTagChange = (tagId: string) => {
  //   if (!searchParams.has('tag') && searchParams.has('filter')) {
  //     router.push(`${pathname}?tag=${tagId}`)
  //   }
  // }
  // const handleFilterChange = (filterId: string) => {
  //   router.push(`${pathname}?filter=${filterId}`)
  // }

  return (
    <section className=" ">
      <div className="sticky top-14 border bg-white border-b-cyan-600 px-48 mb-4 z-40">
        <JobGroup onFilterChange={getFilter}></JobGroup>
        <Filter onTagChange={getTag} />
      </div>
      {children}
    </section>
  )
}
