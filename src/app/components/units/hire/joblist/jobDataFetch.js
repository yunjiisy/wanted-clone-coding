import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/app/firebase'

export async function fetchJobData(id) {
  const querySnapshot1 = await getDocs(collection(db, 'users'))
  const doc = querySnapshot1.docs[id]
  const data = doc.data()
  const JobData = {
    id: data.id,
    position: data.position,
    image: data.image,
    companyName: data.companyName,
    response: data.response,
    location: data.location,
    reward1: data.reward1,
    reward2: data.reward2,
    growing: data.growing,
  }

  if (querySnapshot1.docs[id]) {
    console.log(`-------------${id}`)
    console.log(`${doc.id} => ${JSON.stringify(data)}`)
    return JobData
  } else {
    console.log(`${id} 아이디 값을 가진 데이터가 없음`)
    return null
  }
}
