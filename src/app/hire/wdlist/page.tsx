'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import Filter from '@/app/components/units/hire/joblist/filter'
import JobCard from '@/app/components/units/hire/joblist/jobCard'
// import { useState } from 'react'
// firebase
// import { collection, addDoc } from 'firebase/firestore'

const HireCompanies = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tag = searchParams.get('tag')

  const handleTagChange = (tagId: string) => {
    router.push(`/hire/wdlist?tag=${tagId}`)
  }

  // add

  // read

  return (
    <div className="mx-40">
      <Filter onTagChange={handleTagChange} />
      <JobCard tag={tag} />
    </div>
  )
}

export default HireCompanies
