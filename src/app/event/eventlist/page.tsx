import ProductList from '@/app/components/units/event/productList'
import React from 'react'

// async function getData() {
//   const res = await fetch('../../../public/data/jobCardDummy1.json')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return await res.json()
// }
// public directory로 부터 데이터를 패치해오려니까 안됐음 클라이언트에서는 됨
// 근데 다음과 같이 서버에서 하려니까 안됨.  서버에서는 서버패치만 되는거같음
// const res = await import('../../../public/data/jobEvent.json')  -> 이런식으로 하면 되긴한다고 함.

// ssg

export default async function Event() {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <img
        src="https://i.pinimg.com/originals/b7/b7/15/b7b715190586b985db6b5c46997fc54c.jpg"
        alt="이미지"
        className="w-full mb-10"
      />
      <h1 className="text-2xl font-bold mb-6">
        카카오벤처스 X 패밀리 기업 공동 채용
      </h1>
      <div className="text-gray-400 mb-2">
        <p>Startup’s most reliable partner! KakaoVentures</p>
        <p>창업이 더 나은 세상을 만들 수 있을까요?</p>
        <p>끊임없는 도전과 혁신의 아이콘 카카오벤처스 패밀리를 소개 합니다.</p>
        <p>#셀렉트스타 _ All in One AI DATA SOLUTION, 데이터는 셀렉트스타!</p>
        <p>
          #스파이더랩 _ 도서 유통시장의 유튜브를 꿈꾸며, 양방향 서비스를 통해
          시장을 혁신합니다
        </p>
        <p>
          #프릿지크루 _ 반려동물 No.1 플랫폼, 헬로티피를 함께 만들어갈 분을
          찾습니다
        </p>
      </div>
      <ProductList />
    </div>
  )
}
