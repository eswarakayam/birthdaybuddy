import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const birdaysList = [
  {
    iconUrl: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "Bertie Yates",
    age:"29 years"
  },
  {
    iconUrl: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "Hester Hogan",
    age:"32 years"
  },
  {
    iconUrl: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "Larry Little",
    age:"36 years"
  },
  {
    iconUrl: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "Sean Walsh",
    age:"34 years"
  },
  {
    iconUrl: "https://www.course-api.com/images/people/person-5.jpeg",
    name: "Lola Gardner",
    age:"29 years"
  },
  {
    iconUrl: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "Ram chandra",
    age:"25 years"
  },
  {
    iconUrl: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "Krishna chandra",
    age:"24 years"
  }
]
function App() {
  
  const [list,setList] = useState(birdaysList);
  return (
    <>
      <h1>{list.length} Birthdays Today</h1>
      <section>
      {list.map((listItem,index) => {
        return <article key={index} style={{
          display:"flex", alignItems:"center",margin:"10px",gap:"20px",
        }}>
          <img style={{ borderRadius: "50%", height:"100px"}}
          width ={100} height={80} src={listItem.iconUrl} alt=""/>
          <div>
            <h3 style={{marginLeft: "10px"}}>{listItem.name}</h3>
            <p> {listItem.age}</p>
          </div>        
         </article>
      }

      )}
        <button onClick={() =>{setList([])}}>Clear All</button>
      </section>
      
    </>
  )
}

export default App
