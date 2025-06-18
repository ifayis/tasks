import {useState, useEffect} from 'react'

function FetchData(){
  const [data,setData] = useState([])

  useEffect (()=>{
    fetch ('https://dummyjson.com/quotes')
    .then((res)=> res.json())
    .then((res1)=>{
        setData(res1.quotes.slice(0,10))
    })
    .catch((err)=>console.error('erroe fetching data : ', err));
  },[])

  return (
    <div className='app'>
       <h1>TOP 10 QUOTES</h1>
       {data.map((quote)=>(
       <h3 className='lines' key={quote.id}>"{quote.quote}" - <span className="author">{quote.author}</span></h3>
    ))}
    </div>
  )
}
export default FetchData