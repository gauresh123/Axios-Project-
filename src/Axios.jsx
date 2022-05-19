import axios from "axios";
import { useState } from "react";
import React from 'react';


function Axios(){
    const[info,setinfo]=useState("");
    const[arr,setarr]=useState([]);
    const abc = (e)=>{
        setinfo(e.target.value);
    }
    const add = ()=>{
        
        setarr((olditem)=>{
            return [...olditem,info]
        })
    
        axios.post(`https://jsonplaceholder.typicode.com/users`,{
            "name" : info
        }).then((succ)=>{
            console.log(succ)
            alert("User Added")
        }).catch((err)=>{
            err = "Sorry operation failed"
            alert(err);
        })
    }

    return(
        <div >
            <h1 style={{marginLeft:"490px",marginBottom:"30px",color:"white",width:"400px",height:"50px",background:"black"}}>Digikull Students</h1>
            <h3 style={{marginBottom:"15px"}}>Hello User</h3>
            <input type="text" placeholder="User" onChange={abc} />&nbsp;
            <button onClick={add} className="bg-success border border-dark" style={{color:"white"}}>Add User</button>
            <ul className="list-group w-50 p-3 " style={{marginLeft:"300px"}}>
            {
                arr.map((val)=>{
                    return <li className="list-group-item mb-3 border border-dark" >{val}</li>
                })
            }
            </ul>
        </div>
    )
}

export default Axios;