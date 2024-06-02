import React,{useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function UpdateAgency(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [location,setLocation]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");

    const id=window.location.pathname.split('/').slice(-1)[0];
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/agency/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setName(data.name);
            setDescription(data.description);
            setLocation(data.location);
            setEmail(data.email);
            setPhone(data.phone);
        });
    },[])

    const UpdateAgency = async(e)=>{
        e.preventDefault();
        
      await axios.put(`http://127.0.0.1:8000/api/agency/${id}`,{
        name:name,
        description:description,
        location:location,
        email:email,
        phone:phone,
      }).then(({data})=>{
        console.log(data.message)
        navigate('/dashboard/listAgency')
      }).catch(({response})=>{
        if (response.status ===422) {
            console.log(response.data.errors)
        } else {
            console.log(response.data.message)
            
        }
      })
    }
    return (
        <div className="container">
            <div className="row-justify-content-center">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">update form</h3><hr></hr>
                            <div className="form-wrapper">
                                <form onSubmit={UpdateAgency}>
                                    <div className="mb-3">
                                        <label className="form-label">name</label>
                                        <input type="text" className="form-control" 
                                        value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">description</label>
                                        <input type="text" className="form-control" 
                                        value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">location</label>
                                        <input type="text" className="form-control" 
                                        value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" 
                                        value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">phone</label>
                                        <input type="number" className="form-control" 
                                        value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                        
                                    </div>
                                    
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary mb-3">Update</button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default UpdateAgency