export interface JobList {
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
