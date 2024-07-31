import React, { useEffect, useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function SearchBar(props) {
   
    const {search}= props
    const [texta,setTexta]=useState("");
    const handle_search =(texta)=>{
        search(texta);
        setTexta("")
    }
   
  return (
    <div>
        <Input type='text' value={texta} onChange={(e)=>setTexta(e.target.value)} onKeyDown={(e)=>{
            if(e.key=="Enter"){
                handle_search(texta);
                setTexta("")
            }
        }} placeholder='vui long nhập đúng tên hóa học'/>

    </div>
  )
}
