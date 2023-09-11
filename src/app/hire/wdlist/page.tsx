'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import Filter from '@/app/components/units/hire/joblist/filter'
import JobCard from '@/app/components/units/hire/joblist/jobCard'
// import { useState } from 'react'

const HireCompanies = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('tag')
  const tag = search

  const handleTagChange = (tagId: string) => {
    router.push(`/hire/wdlist?tag=${tagId}`)
  }

  return (
    <div className="mx-40">
      <Filter onTagChange={handleTagChange} />
      <JobCard tag={tag} />
    </div>
  )
}

export default HireCompanies
