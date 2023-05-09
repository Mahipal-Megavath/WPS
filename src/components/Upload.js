import React from 'react'
import  {useState}from 'react'
import './Upload.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Upload = () => {

    const navigate = useNavigate();
    const [data,setdata]=useState({
        email :'',
        mobilenum:'',
        workstype:'',
        country:'',
        state:'',
        district:'',
        village:'',
        pincode:''   
    })

    const changeHandler=e =>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e=>{
        e.preventDefault();
        Axios.post('http://localhost:5000/works',data);
        console.log(data)
        alert("Upload Success")
        navigate('/')
    } 
  return (
    <>
    <div>
        <div id="section_wrapper">
            <div className="form_box">
                <form onSubmit={submitHandler}>
                    <h2 className='form_title text-uppercase font-weight-bold '>
                        Upload Work

                    </h2>
                    <div className="form_fields">
                    
                            {/* <input type="file" className='upload_img'  placeholder='upload work'/> */}
                           
                        
                                <div className="form_group">
                            <input type="email" className="user-email" placeholder="Email" name="email"
                             onChange={changeHandler} required/>
                            </div>
                            <div className="form_group">
                            <input type="text" className="user-number" placeholder="Mobile number" name="mobilenum"
                            onChange={changeHandler}/>
                            </div>

                         <div className='dropdown'>
                            
                            <select name="workstype"  className='In_drop' onChange={changeHandler}>
                                <option >--Work Types--</option>
                                <option value="Electrician" >Electrician</option>
                                <option value="Plumber" >Plumber</option>
                                <option value="Saloon">Saloon</option>
                                <option value="Painting">Painting</option>
                                <option value="Cleaning">Cleaning</option>
                                <option value="Carpenter">Carpenter</option>
                                
                            </select>
                         </div>


                        {/* state and country */}
                          <div className="row ms-1 mb-3">

                            <div className="form_group  me-3 col">
                                
                            <input type="text" className='Upload_country' placeholder='Country' name="country" 
                            onChange={changeHandler}/>
                            </div>
                              <div className="form_group me-3 col"> 
                                 <input type="text" className='Upload_state' placeholder='State' name="state" 
                                 onChange={changeHandler}/>
                            </div>
                            </div>
                            <div className="row ms-1  mb-3">
                            <div className="form_group me-3 col"> 
                                 <input type="text" className='Upload_District' placeholder='District'  name="district"
                                 onChange={changeHandler} />
                            </div>
                            <div className="form_group me-3 col"> 
                                 <input type="text" className='Upload_village' placeholder='Village' name="village"
                                 onChange={changeHandler} />
                            </div>
                            <div className="form_group me-3 col"> 
                                 <input type="text" className='Upload_pincode' placeholder='Pincode' name="pincode"
                                 onChange={changeHandler} />
                            </div>

                           </div>  


                    </div>
                    <input type="submit" value="Submit" className="submit_button"/>
                </form>
            </div>

        </div>
        

    </div>
    </>
  )
}
export default Upload;

