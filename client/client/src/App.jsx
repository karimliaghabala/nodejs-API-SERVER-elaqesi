import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [forumData, setForumData] = useState({
    id: "",
    name:"",
    price:""
  })

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json()
        .then(apiData => setData(apiData))
      )
  }, [data])

  const getDataBasa = (e)=>{
    e.preventDefault()
    console.log(forumData)
    fetch("http://localhost:3000/products",{
      method:'POST',
      headers:{'Content-Type':'appilication/json'},
      body: JSON.stringify(forumData)
    })
  }
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
          {data?.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className='btn btn-danger'>delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <div className="container">
          <form onSubmit={getDataBasa}>
          <div className="form-group">
            <label  />id
            <input type="text" onChange={(e)=>{setForumData({...forumData, id:  e.target.value})}} className="form-control"  aria-describedby="helpId" />

            <label  />name
          <input type="text" onChange={(e)=>{setForumData({...forumData, name:  e.target.value})}} className="form-control"  aria-describedby="helpId" />

            <label  />price
            <input type="text" onChange={(e)=>{setForumData({...forumData, price:  e.target.value})}} className="form-control"  aria-describedby="helpId" />

            <label  />
            <input type="submit" className="btn btn-primary" value="submit"  />
          </div>
          </form>
      </div>
    </>
  )
}

export default App
