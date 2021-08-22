import React, {useState, useEffect, useRef} from "react"
import Chart from "react-apexcharts";

import "./CompanySummary.scss"


export default function CompanySummary({ historicalPrice, profileData }) {


   
   const options = {
      chart: {
         id: "basic-bar",
         type: "bar",
         stacked: true,
         dataLabels:{
            enabled: true,
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

       plotOptions: {
                bar: {
                  horizontal: true,
                },
              },


xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                labels: {
                  formatter: function (val) {
                    return val + "K"
                  }
                }
              },
              yaxis: {
                title: {
                  text: undefined
                },
              },
   }
      
   const series = [{
              name: 'Marine Sprite',
              data: [44, 55, 41, 37, 22, 43, 21]
            }, {
              name: 'Striking Calf',
              data: [53, 32, 33, 52, 13, 43, 32]
            }, {
              name: 'Tank Picture',
              data: [12, 17, 11, 9, 15, 11, 20]
            }, {
              name: 'Bucket Slope',
              data: [9, 7, 5, 8, 6, 9, 4]
            }, {
              name: 'Reborn Kid',
              data: [25, 12, 19, 32, 25, 24, 10]
   }]
   

   return(
      <div className="company_summary_wrapper" >

         <Chart
            options={options}
            series={series}
            height="500"
            type="bar"
         />
      </div>
   )
}

