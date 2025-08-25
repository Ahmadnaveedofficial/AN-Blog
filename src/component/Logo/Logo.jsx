// import React from 'react'

// function Logo({ width = "100px" }) {
//   return (
//     <div><img
//       src="an6.png"
//       className="mr-2 h-5"
//       alt="Logo"
//     />  </div>
//   )
// }

// export default Logo

import React from 'react'

function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center">
      <img
        src="an6.png"
        style={{ width }}
        className="h-auto object-contain hover:scale-105 transition-transform duration-200 cursor-pointer"
        alt="Logo"
      />
    </div>
  )
}

export default Logo