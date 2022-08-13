import React, {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, fontFamily } from '@mui/system';
import { Button, Paper } from '@mui/material';

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])

    const handleClick=(e)=>{
        e.preventDefault();
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added Successfully")
    alert("New Student added Successfully")

  })
    }
    
    useEffect(()=>{
        fetch("http://localhost:8080/student/getall")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        }
      )
      },[])
   


  return (
    <Container>
         <Paper elevation={3} style={paperStyle} >
            <h1 style={{color:"blue" ,fontFamily:"sans-serif"}}><u>ADD STUDENT</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
      value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
      value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant="contained" color="success" onClick={handleClick}>Save Data</Button>
      <hr></hr>

    </Box>
   
    </Paper>
    <h1>Students Data</h1>
    <Paper elevation={3} style={paperStyle}>

{students.map(student=>(
  <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
   Id:{student.id}<br/>
   Name:{student.name}<br/>
   Address:{student.address}

  </Paper>
))
}
</Paper>
    </Container>
  );
}
