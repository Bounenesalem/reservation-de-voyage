// import React,{useEffect, useState} from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// function UpdateDestination(){
//     const navigate=useNavigate();
//     const [name,setName]=useState("");
//     const [description,setDescription]=useState("");
//     const [date,setDate]=useState("");
//     const [budget,setBudget]=useState("");
    

//     const id=window.location.pathname.split('/').slice(-1)[0];
//     useEffect(()=>{
//         fetch(`http://127.0.0.1:8000/api/destination/${id}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             setName(data.name);
//             setDescription(data.description);
//             setDate(data.date);
//             setBudget(data.budget);
            
//         });
//     },[])

//     const UpdateAgency = async(e)=>{
//         e.preventDefault();
        
//       await axios.put(`http://127.0.0.1:8000/api/destination/${id}`,{
//         name:name,
//         description:description,
//         date:date,
//         budget:budget,
        
//       }).then(({data})=>{
//         console.log(data.message)
//         navigate('/dashboard/destinations')
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
//                             <h3 className="card-title">update form</h3><hr></hr>
//                             <div className="form-wrapper">
//                                 <form onSubmit={UpdateAgency}>
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
//                                         <label className="form-label">date</label>
//                                         <input type="date" className="form-control" 
//                                         value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                                        
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Budget</label>
//                                         <input type="text" className="form-control" 
//                                         value={budget} onChange={(e)=>{setBudget(e.target.value)}}/>
                                        
//                                     </div>

                                    
//                                     <div className="mb-3">
//                                         <button type="submit" className="btn btn-primary mb-3">Update</button>
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

// export default UpdateDestination




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Box, TextField } from '@mui/material';
import SideBar from '../../../component/SideBar';

const UpdateDestination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/destination/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setDate(data.date);
        setBudget(data.budget);
      });
  }, [id]);

  const updateDestination = async (e) => {
    e.preventDefault();

    await axios.put(`http://127.0.0.1:8000/api/destination/${id}`, {
      name: name,
      description: description,
      date: date,
      budget: budget,
    })
      .then(({ data }) => {
        console.log(data.message);
        navigate('/dashboard/destinations');
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          console.log(response.data.errors);
        } else {
          console.log(response.data.message);
        }
      });
  };

  return (
    <SideBar>
    <Box mt={4}>
      <Box mb={2}>
        <Button variant="contained" color="success" component={Link} to="/dashboard/destinations">
          Back to Destinations
        </Button>
      </Box>
      <Typography variant="h4" gutterBottom>
        Update Destination
      </Typography>
      <Box>
        <form onSubmit={updateDestination}>
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
            label="Date"
            variant="outlined"
            type="date"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Budget"
            variant="outlined"
            fullWidth
            margin="normal"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Update
          </Button>
        </form>
      </Box>
    </Box>
    </SideBar>
  );
};

export default UpdateDestination;
