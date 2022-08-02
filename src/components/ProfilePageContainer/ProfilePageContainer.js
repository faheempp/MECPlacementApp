import React,{useState} from 'react'
import {auth, createUserDocument,db} from '../../firebase-config'
import louisimg from '../../images/lous.png'
import './ProfilePageContainer.css';
import defaultimg from '../../images/default.jpg'
import {useUserAuth} from "../../context/UserAuthContext"
import { useNavigate } from 'react-router-dom'; 
import { doc, updateDoc } from "firebase/firestore";



export default function ProfilePageContainer(props){

  const [studentName,setStudentName]=useState(props.name);
  const [branch, setBranch]=useState(props.branch);
  const [classDivision,setClassDivision]=useState("props.division");
  const [semester,setSemester]=useState(props.semester);
  const [cgpa,setCgpa]=useState(props.cgpa);
  const [backlogs,setBacklogs]=useState(props.backlog);
  const [ktuid,setKtuId]=useState(props.ktuid);
  const [githubLink,setGithubLink]=useState(props.github);
  const [portfolioLink,setPortfolioLink]=useState(props.portfolio);
  const [linkedin,setLinkedin]=useState(props.linkedin);
  const [phone,setPhone]=useState(props.phone);
  const [email,setEmail]=useState(props.email);
  const [address,setAddress]=useState(props.address);
  const { user }=useUserAuth()
  const [error, setError] = useState("");
  let navigate=useNavigate();

  const HandleProfileUpdate=async(e) => {  
    e.preventDefault();
    setError("");
    
    const userRef=doc(db,"users",user.uid)
    console.log(studentName)
    console.log("himam")
    console.log(userRef.Name)
    console.log(user.uid)
    try {  
    await updateDoc(userRef,{
      Name:studentName,
      Branch:branch,
      CGPA:cgpa,
      Github:githubLink,
      Portfolio:portfolioLink,
      Semester:semester,
      UserID:user.uid,
      Backlog:backlogs
    })
   
    navigate('/application');
  }catch (err) {
    setError(err.message);
  }
}
return (
    <div className='profile-page-container'>
        <h2 className="profile-heading">Profile</h2>
        <div className='profile-info-container'>
          <div className='img1'>
            <img src={defaultimg} alt='user'/>
            <p className='img-name'>{studentName}</p>
          </div>

          <div className='con1'>
            <div className='profile-info-group'>
              <label className='profile-info-item' >Name</label>
              <input className='profile-info-item-name'
                type="text"
                name="studentName"
                id="studentName"
                value={studentName}
                onChange={(e)=>setStudentName(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label className='profile-info-item'>Branch</label>
              <input className='profile-info-item-name'
                type="text"
                name="branch"
                id="branch"
                value={branch}
                onChange={(e)=>setBranch(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label className='profile-info-item' >Division</label>
              <input className='profile-info-item-name'
                type="text"
                name="classDivision"
                id="classDivision"
                value={classDivision}
                onChange={(e)=>setClassDivision(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label className='profile-info-item' >Semester</label>
              <input className='profile-info-item-name'
                type="text"
                name="semester"
                id="semester"
                value={semester}
                onChange={(e)=>setSemester(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label className='profile-info-item' >CGPA</label>
              <input className='profile-info-item-name'
                type="text"
                name="cgpa"
                id="cgpa"
                value={cgpa}
                onChange={(e)=>setCgpa(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label className='profile-info-item' >Backlogs</label>
              <input className='profile-info-item-name'
                type="text"
                name="backlogs"
                id="backlogs"
                value={backlogs}
                onChange={(e)=>setBacklogs(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label className='profile-info-item' >KTU ID</label>
              <input className='profile-info-item-name'
                type="text"
                name="ktuid"
                id="ktuid"
                value={ktuid}
                onChange={(e)=>setKtuId(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label HTMLfor='githubLink' className='profile-info-item' >Git Hub</label>
              <input className='profile-info-item-name'
                type="text"
                name="githubLink"
                id="githubLink"
                value={githubLink}
                onChange={(e)=>setGithubLink(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label HTMLfor='portfolioLink' className='profile-info-item' >Portfolio</label>
              <input className='profile-info-item-name'
                type="text"
                name="portfolioLink"
                id="portfolioLink"
                value={portfolioLink}
                onChange={(e)=>setPortfolioLink(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label HTMLfor='linkedin' className='profile-info-item' >Linked</label>
              <input className='profile-info-item-name'
                type="text"
                name="linkedin"
                id="linkedin"
                value={linkedin}
                onChange={(e)=>setLinkedin(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label HTMLfor='phone' className='profile-info-item' >Phone</label>
              <input className='profile-info-item-name'
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            
            <div className='profile-info-group'>
              <label HTMLfor='phoneLink' className='profile-info-item' >Email</label>
              <input className='profile-info-item-name'
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='profile-info-group'>
              <label HTMLfor='address' className='profile-info-item' >Address</label>
              <textarea className='profile-info-item-name'
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className='add-resume-button'>
            <button className='profile-button add-resume-button'>
              Add resume
            </button>
          </div>
          <div className='save-button'>
          <button className='profile-button save-button' onClick={HandleProfileUpdate}>
              Save
            </button> 
            </div>
          </div>  
        </div>
    </div>
  )
}

