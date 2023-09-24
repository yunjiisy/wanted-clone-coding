import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/app/firebase'

export async function fetchJobData(id) {
  // 쿼리 생성해서 일치하는 id의 문서 가져오기
  const jobitems = collection(db, 'jobData')
  const q = query(jobitems, where('id', '==', parseInt(id)))
  const querySnapshot = await getDocs(q)
  const item = querySnapshot.docs[0].data()
  console.log(id, '의 데이터', item, '아이템ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ')

  if (item) {
    return item
  } else {
    console.log(`${id} 아이디 값을 가진 데이터가 없음`)
    return null
  }
}
