import React from 'react'
import PreLoader from '../files/photos/PreLoader/Preloader'


export const WithSuspence = (Component) => {
  
   return (props) => {
       return <React.Suspense fallback={<PreLoader/>}><Component {...props}/></React.Suspense>
   }
}