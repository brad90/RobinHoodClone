import React, {useState, useEffect, useRef} from "react"
import Chart from "react-apexcharts";

import "./CompanySummary.scss"


export default function CompanySummary({ historicalPrice, profileData }) {

   const [currentPrice, setCurrenPrice] = useState(null)
   const [orderedHistorical, setOrderedHistorical] = useState([])

   const wrapperDivEl = useRef(null)

   useEffect(() => {
      const orderedHistorical = historicalPrice.reverse()
      const initialPrice = orderedHistorical[(orderedHistorical.length - 1)]
      setOrderedHistorical(orderedHistorical)
      setCurrenPrice(initialPrice.close)
      },[]
   )
   
   
   
   const options = {
      chart: {
         id: "basic-bar",
         type: "area",
         dataLabels:{
            enabled: true,
         },
         toolbar: {
            show:false
         },
         zoom: {
            enabled:false
         },
         events: {
            dataPointMouseEnter: function (event, chartContext, config) {
               console.log(event);
            }
         }
      },
      dataLabels: {
         enabled: false
      },
      tooltip: {
         enabled: true 
      },
      fill: {
         type: 'gradient',
         colors: ['#21ce99'],
         gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.9,
            opacityTo: 0.09,
            
         }
      },
      xaxis: {
         categories: historicalPrice.map(price => price.date),
         labels: {
            show: false
         }
      },
      yaxis: {
         labels: {
            show: true
         }
      },
      stroke: {
         curve: 'smooth',
         colors: ['#21ce99'],
         width: 1.5
      }
   }
      
   const series = [
      {
         type: "area",
         name: "series-1",
         data: orderedHistorical.map(price => price.close)
      }
   ]
   

   return(
      <div className="company_summary_wrapper" ref={wrapperDivEl} >
         <div className="company_summary_nav_top">
            <div className="company_summary_nav_top_left">
               <span>
                  <img src={profileData.image} />
                  <h1>{profileData.companyName}</h1>
               </span>
               <h1>${currentPrice}</h1>
            </div>
            <div className="company_summary_nav_top_right">
               <h3>Liked</h3>
            </div>
         </div>
         <Chart
            options={options}
            series={series}
            type="area"
            width={ wrapperDivEl.current != null ? wrapperDivEl.current.offsetWidth : "800"}
               height="500"
         />
      </div>
   )
}

