import React from 'react'

interface TagProps {
  onTagChange: (tagId: string) => void
}

const Filter = ({ onTagChange }: TagProps) => {
  return (
    <div className="flex gap-5 py-4  bg-white w-full">
      <button
        className=" p-2 rounded-full bg-[#e3f2fa] hover:bg-[#d3e1e8] text-sm"
        onClick={() => {
          onTagChange('')
        }}
      >
        전체 ✨
      </button>
      <button
        className=" p-2 rounded-full bg-[#e8faee] hover:bg-[#ddede2] text-sm"
        onClick={() => {
          onTagChange('1')
        }}
      >
        연봉이 최고의 복지 💸
      </button>
      <button
        className=" p-2 rounded-full bg-[#e3f2fa] hover:bg-[#d3e1e8] text-sm"
        onClick={() => {
          onTagChange('2')
        }}
      >
        재택근무 🏡
      </button>
    </div>
  )
}

export default Filter
