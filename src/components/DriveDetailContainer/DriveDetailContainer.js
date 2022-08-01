import React, { useEffect, useState } from "react";
import louisimg from "../../images/lous.png";
import "./DriveDetailContainer.css";
import DriveDataService from "../../services/drive.services";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useUserAuth } from "../../context/UserAuthContext";
import { arrayUnion,collection,query,where,getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function DriveDetailPageContainer(props) {
  const [companyName, setCompanyName] = useState("");
  const [brief, setBrief] = useState("");
  const [criteria, setCriteria] = useState("");
  const [eligibleBranches, setEligibleBranches] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [location, setLocation] = useState("");
  const [pay, setPay] = useState("");
  const [post, setPost] = useState("");
  const [remarks, setRemarks] = useState("");
  const [slot, setSlot] = useState("");
  const { user } = useUserAuth();
  const [error, setError] = useState("");
  let navigate = useNavigate();

  

  const driveid = props.driveid;
  const getDriveDetail = async () => {
    const docSnap = await DriveDataService.getDrive(driveid);
    console.log(docSnap.data());
    const companyName = docSnap.data().companyName;
    const brief = docSnap.data().brief;
    const criteria = docSnap.data().criteria;
    const eligibleBranches = docSnap.data().eligibleBranches;
    const lastDate = docSnap.data().lastDate;
    const location = docSnap.data().location;
    const pay = docSnap.data().pay;
    const post = docSnap.data().post;
    const remarks = docSnap.data().remarks;
    const slot = docSnap.data().slot;

    setCompanyName(companyName);
    setBrief(brief);
    setCriteria(criteria);
    setEligibleBranches(eligibleBranches);
    setLastDate(lastDate);
    setLocation(location);
    setPay(pay);
    setPost(post);
    setRemarks(remarks);
    setSlot(slot);

    // setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
  };
  useEffect(() => {
    getDriveDetail();
  }, []);
  const UpdateUserApplied = async (e) => {
    
    e.preventDefault();
    setError("");
    const userRef = doc(db, "users", user.uid);
    try {
      await updateDoc(userRef, {
        Applied: arrayUnion(companyName),    
      })
      const colref=collection(db,"users")
      const q=query(colref,where("Branch","==","CS"))
      console.log(q)
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data())});
      navigate("/application");
      
    } 
    catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="drive-detail-page-container">
      {/* <h2 className="drive-detail-heading">Drive Details {}</h2> */}
      <div className="drive-detail-info">
        <div className="">
          <h3 className="company-name"> {companyName}</h3>
          <h4 className="about company-about">About</h4>
          <div className="descrp compamny-brief">{brief}</div>
          <h4 className="about company-post">Post</h4>
          <h2 className=" descrp drive-post-name">{post}</h2>
          <h4 className="about company-slot">Slot:</h4>
          <div className="descrp drive-company-slot">{slot}</div>
          <h4 className="about company-location">Location</h4>
          <div className="descrp drive-company-location">{location}</div>
          <h4 className="about company-eligibility">Eligibility</h4>
          <div className="descrp drive-company-eligibleBranches">
            {eligibleBranches}
          </div>
          <h4 className="about company-last-date">Last Date</h4>
          <div className="descrp drive-company-lastdate">{lastDate}</div>
          <h4 className="about company-pay">Pay:</h4>
          <div className="descrp drive-company-pay">{pay}</div>
          <h4 className="about company-remarks">Remarks</h4>
          <div className="descrp drive-company-remarks">{remarks}</div>
          <h4 className="about company-criteria">Criteria</h4>
          <div className="descrp drive-criteria">{criteria}</div>
          <h4 className="about company-registration">Registration Link</h4>
          <div className="descrp company-reg-link">link</div>
          <h4 className="about company-website">Company Website</h4>
          <div className="descrp drive-company-web">Website here</div>
          <button onClick={UpdateUserApplied}>Apply</button>
        </div>
      </div>
    </div>
  );
}
