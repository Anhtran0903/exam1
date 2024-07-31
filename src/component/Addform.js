import React, { useState } from 'react'
import { Alert, Button, Input } from 'reactstrap'

export default function Addform(props) {
    const {handle_add}=props
        const [tenHH,setTenHH]=useState("");
        const [tenCT,setTenCT]=useState("");
   

        const handle_adda =(tenHH,tenCT)=>{

            if(tenHH!="" &&tenCT!=""){
                handle_add(tenHH,tenCT);
                setTenCT("");
                setTenHH("");
            }else{
               alert("vui lòng nhập thông tin")
            }

           
        }
  return (
    <div className='form_add'>
        <h3>
thêm nguyên tố hóa học mới
        </h3>
      <Input type='text' onChange={(e)=>setTenHH(e.target.value)} value={tenHH} placeholder='nhập tên hóa học'/>
      <Input type='text' onChange={(a)=>setTenCT(a.target.value)} value={tenCT} placeholder='nhập tên công thức'/>


      <Button onClick={()=>handle_adda(tenHH,tenCT)



      }>Add nguyen to </Button>

    </div>
  )
}
