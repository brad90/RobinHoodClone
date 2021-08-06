import React, { useEffect, useState } from 'react'
import configSettings from "../configs/settings.json"


export default function CompanyProfile(props) {

   async function getCompanyDetails() {
      const response = fetch(`https://financialmodelingprep.com/api/v3/profile/${props.ticker}?apikey=${configSettings.API_KEY}`)
      console.log(response)
   }

   useEffect(() => {
      getCompanyDetails()
   }, [])


   return (
      <div>
         
      </div>
   )
}
