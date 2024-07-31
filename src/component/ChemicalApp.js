import React, { useState } from 'react'
import { Button, Container, Input, Table } from 'reactstrap'
import Addform from './Addform'
import SearchBar from './SearchBar';
import Edit from './Edit';

export default function Chemical() {

    const [chemical,setChemical]=useState([

        {
            id:1,name:"Hydrochloric Acid",formula:"HCL",checked:false
        },
        {
            id:2,name:"Sodium Choride",formula:"NaCL",checked:false
        },
        {
            id:3,name:"Sulfuric Acid",formula:"H2SO4",checked:false
        },
        {
            id:4,name:"Ammonia",formula:"NH3",checked:false
        },
        {
            id:5,name:"Ethanol",formula:"C2hH5OH",checked:false
        }


    ])

    

    const [value1,setValue1]=useState("")
    const [value2,setValue2]=useState("")
    const handle_add=(tenHH,tenCT)=>{
        let newLsit = [...chemical,{id:chemical.length+2,name:tenHH,formula:tenCT}]

        setChemical(newLsit);
       
    }
    const handle_delete =(id)=>{
        let newLsit =chemical.filter(item=>item.id!==id)
        setChemical(newLsit);
    }
    const search =(texta)=>{
        let newLsit =chemical.filter(item=>item.name == texta)
        setChemical(newLsit);
    }
    const handle_edit =(id)=>{
  let itemedit= chemical.filter(item=>item.id===id)
      setValue1(itemedit.name)
      setValue2(itemedit.formula)
    }
  return (
    <div>
      <Container>
    <Addform handle_add={handle_add} />
    <h2 className='text-center m-2'>danh sách hóa chất</h2>
    <SearchBar search={search}/>
  
      <Table
  dark
  hover
  responsive
>
  <thead>
    <tr>
      <th>
        STT
      </th>
      <th>
      Tên hóa học 
      </th>
      <th>
   Công thức
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    
    {
        chemical.map((item,index)=>
            <tr>
        <th scope="row" key={index}>
        {index+1}
        </th>
        <td>
      {  item.name}
        </td>
        <td>
        {  item.formula}
        </td>
        <td>
        <Button className='btn btn-success' onClick={()=>handle_edit(item.id)}>$</Button>
        <Button className='btn btn-danger' onClick={()=>handle_delete(item.id)}>X</Button>
        </td>
      </tr>
     
        )
    }
   
 
    
  </tbody>
</Table>

<div>
    <Input  type='text'  value={value1}  />
    <Input  type='text'   value={value2} />
      <Button >edit </Button>
  </div>
  


      </Container>
     


    </div>
  )
}
