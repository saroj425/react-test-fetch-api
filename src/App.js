import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [data,setData] = useState([0]);
  const [query, setQuery] = useState("")

  const apidata = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("",response.data);
    setData(response.data);
    console.log("sdfjflskfjk",data)
  }

  const searchTitle = ()=>{
    const filtereddata = data.filter()
  }

  console.log(data)
  useEffect(()=>{
    apidata();
  },[query])

  return (
    <div className="App">
      <div>
        <span><input type='text' placeholder='seacth data' value={query} onChange={(e)=>setQuery(e.target.value)}/> <button >Search</button></span>
      </div>
      <table>
        
        {          
          data.map((newdata)=> (         
              <tr>
                <td>{newdata.userId}</td>
                <td>{newdata.id}</td>
                <td>{newdata.title}</td>
                <td>{newdata.body}</td>
              </tr>            
          ))
        }
        </table>
    </div>
  );
}

export default App;
