import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/")
    .then(res=>res.json()
    .then(apiData=>setData(apiData))
    )
  },[])
  return (
    <>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item=>(
          <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
          ))}

        </tbody>
      </table>

    </>
  )
}

export default App
