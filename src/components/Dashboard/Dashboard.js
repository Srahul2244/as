import React from 'react'


// components
import SecondaryNav from '../SecondaryNav';
import { ChartMainLeft } from '../Charts/ChartMain';
import TransactionCardSection from '../TransactionCardSection';
import TrafficSourcesCard from  "../TrafficSourcesCard"

// css
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container w-full'>
      <SecondaryNav />
      
      {/* Total visit and card section */}
      <div className='flex mt-[27px] chart-card-container gap-[17px]'>
        <ChartMainLeft />
        <TransactionCardSection />
      </div>

      {/* Trafic source card */}
      <div className="flex mt-[33px] traffic-card-container gap-[20px]" >
       <TrafficSourcesCard />
       <TrafficSourcesCard />
      </div>
    </div>
  )
}

export default Dashboard