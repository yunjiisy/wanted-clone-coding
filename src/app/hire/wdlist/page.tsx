'use client'
import { useSearchParams } from 'next/navigation'
import JobCard from '@/app/components/units/hire/joblist/jobCard'
// import { useState } from 'react'
// firebase
// import { collection, addDoc } from 'firebase/firestore'

const HireCompanies = () => {
  const searchParams = useSearchParams()
  const tag = searchParams.get('tag')
  const filter = searchParams.get('filter')

  // add

  // read

  return (
    <div className="mx-48">
      <JobCard tag={tag} filter={filter} />
    </div>
  )
}

export default HireCompanies
