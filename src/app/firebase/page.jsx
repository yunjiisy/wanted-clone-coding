'use client'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'

export default function AddDataPage() {
  const [value, setValue] = useState()

  const onClickUpLoadButton = async () => {
    const addData = [
      {
        id: 1,
        position: '개발자(FE)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F39456%2Fmfmgreberqaxft5o__1080_790.jpg&w=1000&q=75',
        companyName: '새벽네시',
        response: '응답률 매우 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '2',
      },
      {
        id: 2,
        position: '백엔드 서버 개발 리드(Node.JS)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16643%2Fyjitgxgfazgioxpx__1080_790.png&w=1000&q=75',
        companyName: '세샤트',
        response: '응답률 매우 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '2',
        filterId: '3',
      },
      {
        id: 3,
        position: '[야놀자에프앤비솔루션] Software Engineer, Back-end)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F52%2F17418_2_0.abfaf8d8__1080_790.jpg&w=1000&q=75',
        companyName: '야놀자Tech(R&D',
        response: '응답률 평균 이상',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '4',
      },
      {
        id: 4,
        position: '테크팀 Back-end 개발자',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F7479%2Fze8do1hvrsvlq1qx__1080_790.jpg&w=1000&q=75',
        companyName: '온누리아이코리아',
        response: '응답률 평균 이상',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '2',
        filterId: '5',
      },
      {
        id: 5,
        position: '테크팀 Front-end 개발자',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F7479%2Fze8do1hvrsvlq1qx__1080_790.jpg&w=1000&q=75',
        companyName: '온누리아이코리아',
        response: '응답률 평균 이상',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '6',
      },
      {
        id: 6,
        position: 'Research Engineer(Synthetic Data&AI)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F7148%2Fgckl9uu1hs9qs98b__1080_790.jpg&w=1000&q=75',
        companyName: '모라이(MORAI)',
        response: '응답률 매우 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '7',
      },
      {
        id: 7,
        position: 'Software Engineer, Web Applications (Server)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F88%2Fdw9bu4pe1e50zvll__1080_790.jpg&w=1000&q=75',
        companyName: '샌드버드',
        response: '응답률 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '2',
        filterId: '2',
      },
      {
        id: 8,
        position: '백엔드 개발자',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F24967%2Fvtyujiodnqszoz9i__1080_790.jpg&w=1000&q=75',
        companyName: '폴스타헬스케어',
        response: '응답률 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '2',
        filterId: '3',
      },
      {
        id: 9,
        position: '소셜카지노 서버개발자',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10695%2Fedxajluizwuszu30__1080_790.jpg&w=1000&q=75',
        companyName: '잼팟',
        response: '응답률 매우 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '4',
      },
      {
        id: 10,
        position: '추천 엔지니어',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15%2F28xctz9hah8ba7q4__1080_790.jpg&w=1000&q=75',
        companyName: '크래프톤',
        response: '응답률 매우 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '2',
        filterId: '5',
      },
      {
        id: 11,
        position: '소프트웨어 엔지니어(백엔드)(3년 이상, N명)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22947%2Fpf0l1mocuein4ier__1080_790.jpg&w=1000&q=75',
        companyName: '파이노버스랩(페이먼스)',
        response: '응답률 매우 높음',
        location: '경기, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '7',
      },
      {
        id: 12,
        position: '웹 최적화 솔루션 DevOps 엔지니어 및 컨설턴트',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F34%2Fdjdnl8bjr0mvfv2c__1080_790.jpg&w=1000&q=75',
        companyName: '와인소프트',
        response: '응답률 매우 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '7',
      },
      {
        id: 13,
        position: '[Project inZOI Unit] Front-end Web Programmer',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8900%2Fsi96z5xdatuxzrsj__1080_790.jpg&w=1000&q=75',
        companyName: '엑셈',
        response: '응답률 평균 이상',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '2',
      },
      {
        id: 14,
        position: '안드로이드 개발자 (신입)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F258%2Fmmmmy6niam0xgpyc__1080_790.png&w=1000&q=75',
        companyName: '오토워니',
        response: '응답률 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '3',
      },
      {
        id: 15,
        position: '백엔드 엔지니어(Global)',
        image:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5%2Fpcufn5hokw5zrpwf__1080_790.jpg&w=1000&q=75',
        companyName: '라디',
        response: '응답률 높음',
        location: '서울, 한국',
        reward1: '500,000',
        reward2: '500,000',
        growing: 'true',
        tagId: '1',
        filterId: '2',
      },
    ]
    //    addDoc(collection(db       , "컬렉션이름") , { 추가할 데이터 }
    for (const data of addData) {
      await addDoc(collection(db, 'jobData'), data)
    }
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input onChange={(event) => setValue(event.target.value)} />
        <button onClick={onClickUpLoadButton}>전송</button>
      </form>
    </div>
  )
}
