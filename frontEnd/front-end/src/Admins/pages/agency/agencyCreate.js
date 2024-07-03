// import React,{useState} from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// function CreateAgency(){
//     const navigate=useNavigate();
//     const [name,setName]=useState('');
//     const [description,setDescription]=useState('');
//     const [location,setLocation]=useState('');
//     const [email,setEmail]=useState('');
//     const [phone,setPhone]=useState('');
    
   

//     const createAgency = async(e)=>{
//         e.preventDefault();
        
//       await axios.post('http://127.0.0.1:8000/api/agency',{
//         name:name,
//         description:description,
//         location:location,
//         email:email,
//         phone:phone,
       
//       }).then(({data})=>{
//         console.log(data.message)
//         navigate('/dashboard/listAgency')
//       }).catch(({response})=>{
//         if (response.status ===422) {
//             console.log(response.data.errors)
//         } else {
//             console.log(response.data.message)
            
//         }
//       })
//     }
//     return (
//         <div className="container">
//             <div className="row-justify-content-center">
//                 <div className="col-12 col-sm-12 col-md-12">
//                     <div className="card">
//                         <div className="card-body">
//                             <h3 className="card-title">create form</h3><hr></hr>
//                             <div className="form-wrapper">
//                                 <form onSubmit={createAgency}>
//                                     <div className="mb-3">
//                                         <label className="form-label">name</label>
//                                         <input type="text" className="form-control" 
//                                         value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                        
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">description</label>
//                                         <input type="text" className="form-control" 
//                                         value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                                        
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">location</label>
//                                         <input type="text" className="form-control" 
//                                         value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
                                        
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Email</label>
//                                         <input type="email" className="form-control" 
//                                         value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">phone</label>
//                                         <input type="number" className="form-control" 
//                                         value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                        
//                                     </div>
                                    
//                                     <div className="mb-3">
//                                         <button type="submit" className="btn btn-primary mb-3">create</button>
//                                     </div>

//                                 </form>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default CreateAgency



// src/pages/CreateAgency.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import SideBar from "../../../component/SideBar";

const CreateAgency = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const createAgency = async (e) => {
    e.preventDefault();

    await axios.post('http://127.0.0.1:8000/api/agency', {
      name: name,
      description: description,
      location: location,
      email: email,
      phone: phone,
    }).then(({ data }) => {
      console.log(data.message);
      navigate('/agencies');
    }).catch(({ response }) => {
      if (response.status === 422) {
        console.log(response.data.errors);
      } else {
        console.log(response.data.message);
      }
    });
  }

  return (
    <SideBar>
    <Box mt={4}>
      <Paper>
        <Box p={4}>
          <Typography variant="h4" gutterBottom>Create Agency</Typography>
          <form onSubmit={createAgency}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              margin="normal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit">Create</Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
    </SideBar>
  );
};

export default CreateAgency;
