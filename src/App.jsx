import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [sneakers, setSneakers] = useState([])

  // // sites I used
  // https://www.self.com/story/self-sneaker-awards-2022 
  // https://www.stadiumgoods.com/en-us/article/best-sneakers-2022-so-far


useEffect (() => {
  const request = async () => {
    let req = await fetch('http://localhost:3000/sneakers')
    let res = await req.json()
    setSneakers(res)
  }
  request()
},[])
  return (
    <>
    {/* <h2>Sneakers</h2> */}
    {
      sneakers.map((s) => (
        <div key={s.id} className="App">
          <h2>{s.name}</h2>
          <img src={s.imgSrc} />
        </div>
      ))
    }

    </>
  )
}

export default App
