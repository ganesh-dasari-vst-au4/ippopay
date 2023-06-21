import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
const url ='http://localhost:3020/users';

function App() {
  const [input,setInput]=useState()
  const [data,setData]=useState([])


  const loadData=()=>{
    axios.get(url).then(res=>setData(res?.data?.data))
  }

  useEffect(()=>{
    loadData()
  },[])

  const handleSubmit =()=>{
    if(input && input.length>2){
      axios.post(url,{'name':input}).then((res) => {
        setInput('')
        alert(res.data.message);
        loadData()
      })
      .catch((err) => {
        alert("Faild to add Customer");
        console.log(err);
      });
    }
  }

  const handleDelete =(id)=>{
    
      axios.delete(`${url}/${id}`).then((res) => {
        alert(res.data.message);
        loadData()
      })
      .catch((err) => {
        alert("Faild to delete Customer");
        console.log(err);
      });
    
  }


  return (
    <Fragment>
      
  <div style={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <h2>IppoPay</h2>
        <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
<button onClick={()=>handleSubmit()}>Submit</button>
        </div>

<div>
<ol>
  {data && data.length>0 && data.map(user=>(
    <li>{user.name} <button onClick={()=>handleDelete(user._id)}>delete</button></li>
  ))}
</ol>
</div>

  </div>
    </Fragment>
  );
}

export default App;
