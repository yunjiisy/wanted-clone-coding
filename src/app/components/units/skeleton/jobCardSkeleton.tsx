import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2">
      <div className="w-32 h-32 bg-gray-300 rounded mb-2"></div>
      <div className="w-40 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-32 h-4 bg-gray-300 rounded"></div>
    </div>
  )
}

export default LoadingSkeleton
