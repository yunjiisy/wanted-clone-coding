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

export async function fetchJobListData(tag: any) {
  const jobItemsArray: Record<string, any> = {}
  let q
  if (tag === null) {
    q = collection(db, 'jobData') // jobData 컬렉션 다
  } else {
    // tag와 일치하는 데이터만 (tag없어서 일단 id로 대체)
    q = query(collection(db, 'jobData'), where('id', '==', parseInt(tag)))
  }

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    jobItemsArray[doc.id] = doc.data()
  })
  console.log(jobItemsArray)

  return jobItemsArray
}
