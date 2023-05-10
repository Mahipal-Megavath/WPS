import React,{useEffect} from 'react'
import './Registration.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Registration = () => {
    let navigate=useNavigate();

    // useEffect(() => {
      
    //     axios.post('http://13.53.114.16:5000/getdata',{email:"waghmarevikasraj@gmail.com"}).then((res)=>{
    //         console.log(res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // }, [])
    const register=async (event)=>{
        event.preventDefault();
        // console.log(event);

        const data=new FormData(event.target);
        const details={
            username:data.get("username"),
            email:data.get("email"),
            mobilenum:data.get("mobilenum"),
            gender:data.get("gender"),
            profession:data.get("profession"),
            address:data.get("address"),
            password:data.get("password")
        }
        // console.log(details);
        let pushData=await axios.post("http://13.53.114.16:5000/vikas",details);
        
        if(pushData.data=="success")
            navigate('/login');
        else
            console.log("something went wrong");
    }
    
  return (
   <>
    <div>
        <section id="section_wrapper">
            
                <div className="form_box">
                    <form method="post" onSubmit={register}>
                        <h4 className="form_title">Create your Account</h4>
                        <div className="form_fields">

                            <div className="form_group">
                            <input type="text" className="user-name" name='username' placeholder="User Name"/>
                            </div>
                            <div className="form_group">
                            <input type="email" className="user-email" name='email' placeholder="Enter a email"/>
                            </div>

                           

                            <div className="form_group">
                            <input type="text" className="user-number" name='mobilenum' placeholder="Mobile number"/>
                            </div>
                                <div className="user_gender">
                                <table>
                                    <tr>
                                        
                                        <td className='col'><input type="radio" name="gender" className="user-gender" value="male" placeholder="Male"/></td>
                                        <td colSpan={10}>Male</td>
                                        
                                        
                                        <td className='col'> <input type="radio" name="gender" value={"femail"} className="user-gender" placeholder="Female"/></td>
                                        <td>Female</td>
                                        
                                        
                                        <td className='col' ><input type="radio" name="gender" value={"other"} className="user-gender" placeholder="other"/></td>
                                        <td>Other</td>                                      
                                    </tr>

                                </table>
                                </div>
                            <div className="form_group">
                            <input type="text" className="user-name" name='profession' placeholder="Enter profession"/>
                            </div>

                            <div className="form_group">
                            <input type="text" className="user-name" name='address' placeholder="Address"/>
                            </div>


                               <div className="form_group">
                                     <input type="password" className="user-pass" name='password' placeholder="Your Password"/>
                                 </div>
                                 <div className="form_group">
                                     <input type="password" className="user-pass" placeholder="Confirm Password"/>
                                 </div>
 
                        </div>
                        <input type="submit" value="Create" className="submit_button"/>
                    </form>

                   
                </div>
            
        </section>
    </div>
    </>
  )
}
export default Registration;
