import React, { useEffect, useState } from "react";
import DriveApplicantsList from "../DriveApplicantsList/DriveApplicantsList";
import "./ApplicantsPageContainer.css";
import DriveDataService from "../../services/drive.services.js";

export default function ApplicantsPageContainer() {
  const [drives, setDrives] = useState([]);

  const getDrives = async () => {
    const data = await DriveDataService.getAllDrives();
    console.log(data.docs);
    setDrives(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getDrives();
  }, []);

  return (
    <div className="applicant-page-container">
      <h2 className="applicant-page-heading">Applicants</h2>
      <div className="applicant-list-wrapper">
        {drives.map((doc, index) => {
          return <DriveApplicantsList company={doc.companyName} />;
        })}
      </div>
    </div>
  );
}
