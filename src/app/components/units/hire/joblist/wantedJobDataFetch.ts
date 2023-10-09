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
export async function fetchWantedJobData(id: any): Promise<JobList> {
  const res = await fetch(`https://www.wanted.co.kr/api/v4/jobs/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch wanted job data')
  }
  // const jobData: JobList = await res.json()
  const jobData = await res.json()
  return jobData
}
