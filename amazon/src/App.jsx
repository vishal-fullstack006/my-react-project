// import React from 'react'
// import Student from './pages/Student'

// const App = () => {
//   return (
//  <div style={{textAlign:'center',border:'12PX solid red',height:500,width:800}}>
//       <Student name="vishal" age={19}  course="react" />
      
      
//  <div/>
   
//   )
// }

// export default App




// import React from 'react'
// import Profile from './pages/Profile'
// const App = () => {
//   return (
//     <div style={{textAlign:'center',border:'12PX solid red',height:500,width:800}}>
//     < Profile name = "akhil"
//     image = 'https://th.bing.com/th?id=BSK5.f6ffa7c4cfuv2889712340925448977_webp_1_0&gemId=GMB13311DF&w=336&h=368&qlt=90&c=1&rs=1&pid=wdpv2'
//     city = 'mohali'
    
    
//     />
    
//     <div/>
//   )
// }

// export default App





// import React from 'react'
// import Product from './pages/Product'
// const App = () => {
//   return (
//     <div style={{textAlign:'center',border:'12PX solid red',height:500,width:800}}>
//       <h1>Product Card</h1>
    
//     <Product
//         name = "Head Phone"
//         price = {1900}
//         description = "comfartable headphone whith clear sound."
//       />
//       <Product
//         name = "Phone"
//         price = {40000}
//         description = "A smartphone  with excellent features."
//       />
//     <Product
//         name = "Laptop"
//         price = {90000}
//         description = "A pawerful laptop for study and work."
//       />
//     </div>
//   )
// }

// export default App



import React from 'react'
import Employee from './pages/Employee'
const App = () => {
  return (
    <div style={{textAlign:'center',border:'12PX solid red',height:400,width:700}}>
      <h1>EMPLOYEE DETAILS</h1>
      <Employee      
      name = "rohit"
      role = "softwere engineer"
      salary ={30000}
      />
       <Employee      
      name = "vishal"
      role = "UI Designer"
      salary ={50000}
      />
       <Employee      
      name = "gourav"
      role = "web Developer"
      salary ={45500}
      />
      
    </div>
  )
}

export default App