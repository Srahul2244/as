import React, { useState } from 'react'

// components
import TransactionCard from '../TransactionCard'

// css
import './transactionCardSection.css';

// aaray of object
const mockTransaction = [
  { id: 'bounce_rate', icon: 'ri-numbers-line', visitors:"12%", totalvisitors:"42,34%", cardLabel: 'Bounce Rate',  },
  { id: 'page_per_visit', icon: 'ri-todo-line',   totalvisitors:"42,34%", cardLabel: 'Pages per visit',},
  { id: 'total_monthly_visitiors', icon: 'ri-user-3-fill', visitors:"2.1%", totalvisitors:"326.60K", cardLabel: 'Total Monthly Visit',},
  { id: 'avg_visit_duration', icon: 'ri-file-3-fill', visitors:"2.4%", totalvisitors:"00:03:27", cardLabel: 'Avg.Visit Duration',},
  
]


const TransactionCardSection = () => {
  const [activeCard, setActiveCArd] = useState(mockTransaction[0]?.id)
  return (
    <div className='transaction-container grid grid-rows-2 grid-cols-2 gap-[24px]'>
      {mockTransaction.map(transaction => {
        return <TransactionCard {...transaction} activeCard={activeCard} handleCardClick={setActiveCArd} />
      })}
    </div>
  )
}

export default TransactionCardSection