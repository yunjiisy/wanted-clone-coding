import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/app/firebase'

export interface JobList {
  items: JobItem[]
}
export interface jobItemsArray {
  items: JobItem[]
}
export interface JobItem {
  id: number
  position: string
  image: string
  companyName: string
  location: string
  reward1: number
}

// 로컬 더미

export async function fetchJobData(tag: any): Promise<JobList> {
  const res = await fetch(
    tag !== null ? `/data/jobCardDummy${tag}.json` : `/data/jobCardDummy.json`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch job data')
  }
  const jobData: JobList = await res.json()
  return jobData
}

// firebase

export async function fetchJobListData(tag: any, filter: any) {
  const jobItemsArray: Record<string, any> = {}
  let q
  if (!tag && !filter) {
    q = collection(db, 'jobData') // jobData 컬렉션 다
  } else if (tag && !filter) {
    q = query(collection(db, 'jobData'), where('tagId', '==', tag))
  } else if (!tag && filter) {
    q = query(collection(db, 'jobData'), where('filterId', '==', filter))
  } else {
    q = query(
      collection(db, 'jobData'),
      where('tagId', '==', tag),
      where('filterId', '==', filter),
    )
  }

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    jobItemsArray[doc.id] = doc.data()
  })
  console.log(jobItemsArray)

  return jobItemsArray
}
