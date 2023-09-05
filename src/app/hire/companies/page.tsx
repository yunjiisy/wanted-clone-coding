import React from 'react'
import jobList from '../../data/jobCardDummy.json'

const HireCompanies = () => {
  return (
    <div>
      <h1>Job List</h1>
      <ul>
        {jobList.items.map((item) => (
          <li key={item.id}>
            <h2>{item.position}</h2>
            <p>{item.companyName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HireCompanies
