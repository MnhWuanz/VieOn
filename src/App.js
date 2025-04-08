import React from 'react'
import "./App.css"

const App = () => {
  const arr=[
    {
      age:10,
      name:"Nguyen manh Quan",
    },
    {
      age:12,
      name:"Nguyen manh Bao",
    }
  ]
  return (
      <>
      {
        arr.map((item, index) => {
          return(
            <p>
              {
                item.age
              }
            </p>
          )
        })
      }
      </>
      
  )
}

export default App