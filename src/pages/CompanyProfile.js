import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button"
import configSettings from "../configs/settings.json"
import "./styles/companyProfile.scss"
import moment from 'moment';

import Chart from "react-apexcharts";


export default function CompanyProfile(props){

   const location = useLocation();
  
   const [chartTime, setChartTime] = useState('1min')
   const [loading, setLoading] = useState(true)

   const [profileData, setProfileData] = useState(null)
   const [historicalPrice, setHistoricalPrice] = useState(null)


   useEffect(() => {
      getData(location.state.ticker)
   }, [])


   const getData = async (ticker) => {
      const dateTo = moment().format("YYYY-MM-DD");
      const dateFrom = moment().subtract(120,'d').format('YYYY-MM-DD')
      
      const urls =  [
            `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${configSettings.API_KEY}`,
            `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?from=${dateFrom}&to=${dateTo}&apikey=${configSettings.API_KEY}`
      
      ]
      const [result1, result2] = await Promise.all(
         urls.map((url) => fetch(url)
            .then(res => res.json()))
      )
      setProfileData(result1[0])
      setHistoricalPrice(result2.historical)
      setLoading(false)
      return
   }


   if (loading){
      return <h1>Loading...</h1>
   } else {
      const options = {
         chart: {
            id: "basic-bar",
            dataLabels:{
               enabled: true,
            },
            toolbar: {
               show:false
            },
            zoom: {
               enabled:false
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
               show: false
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
            type: "line",
            name: "series-1",
            data: historicalPrice.map(price => price.close)
         }
      ]
      
   return (
      <div className="company">
         <div className="company_profile">
            <div className="company_summary_bar_top">
               <div>
                  <h1>{profileData.price}</h1>
               </div>
               <div>
                  <h1>{profileData.symbol}</h1>
                  <h1>{profileData.companyName}</h1>
                  <h3>{profileData.exchangeShortName}</h3>
               </div>
            </div>
            <Chart
               options={options}
               series={series}
               type="line"
               width="800"
               height="500"
            />
         </div>

      </div>
   )
      

   }

}
   const styles = {
	button: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 50,
		border: 0,
		color: "white",
		height: 40,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
	},
	buttonBlue: {
		background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
		boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)",
	},
};


// address: "3M Center, Bldg. 220-13E-26A"
// beta: 0.956474
// ceo: "Mr. Michael Roman"
// changes: -0.4
// cik: "0000066740"
// city: "Saint Paul"
// companyName: "3M Company"
// country: "US"
// currency: "USD"
// cusip: "88579Y101"
// dcf: 209.438
// dcfDiff: -48.63
// defaultImage: false
// description: "3M Company develops, manufactures, and markets various products worldwide. It operates through four business segments: Safety and Industrial, Transportation and Electronics, Health Care, and Consumer. The Safety and Industrial segment offers personal safety products, industrial adhesives and tapes, abrasives, closure and masking systems, electrical markets, automotive aftermarket, and roofing granules to industrial, electrical, and safety markets. The Transportation and Electronics provides electronics, such as display materials and systems, electronic materials solutions; automotive and aerospace, and commercial solutions; advanced materials; and transportation safety products to transportation and electronic original equipment manufacturer customers. The Health Care segment offers medical and surgical supplies, skin health and infection prevention products, oral care, separation and purification sciences, health information systems, drug delivery systems, and food safety products to healthcare industry. The Consumer segment provides home improvement, home care, and consumer health care products, as well as stationery and office supplies to various consumers. This segment is also involved in the retail auto care business. It offers its products through various e-commerce and traditional wholesalers, retailers, jobbers, distributors, and dealers, as well as directly to users. 3M Company has a strategic collaboration with Merry Maids in residential cleaning sector. The company was founded in 1902 and is headquartered in St. Paul, Minnesota."
// exchange: "New York Stock Exchange"
// exchangeShortName: "NYSE"
// fullTimeEmployees: "95000"
// image: "https://financialmodelingprep.com/image-stock/MMM.png"
// industry: "Specialty Industrial Machinery"
// ipoDate: "1946-01-14"
// isActivelyTrading: true
// isEtf: false
// isin: "US88579Y1010"
// lastDiv: 5.8999999999999995
// mktCap: 116323598336
// phone: "16517331474"
// price: 201.03
// range: "156.13-208.95"
// sector: "Industrials"
// state: "MINNESOTA"
// symbol: "MMM"
// volAvg: 2071879
// website: "http://www.3m.com"
// zip: "55144"
