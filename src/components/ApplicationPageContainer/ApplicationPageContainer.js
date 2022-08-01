import React, { useEffect, useState } from "react";
import AppliedDriveCard from "../AppliedDriveCard/AppliedDriveCard";
import "./ApplicationPageContainer.css";
import { db } from "../../firebase-config";
import { useUserAuth } from "../../context/UserAuthContext";
import {
  doc,
  collection,
  getDocs,
  query,
  get,
  where,
} from "firebase/firestore";
import { propTypes } from "react-bootstrap/esm/Image";
import { render } from "@testing-library/react";
export default function ApplicationPageContainer() {
  const { user } = useUserAuth();
  const [applied_drives, setAppliedDrives] = useState("");
  const [slot_var, setSlotVar] = useState("");
  const [post_var, setPostVar] = useState("");
  const [slot, setSlot] = useState("");
  const [post, setPost] = useState("");
  const [ListItems, setList] = useState("");
  const [finalList, setfList] = useState("");
  const [ListItemsFinal, setListFinal] = useState("");

  const HandleUserApplied = async (e) => {
    // Retrieve user Info About Drive
    const colref = collection(db, "users");
    const q = query(colref, where("UserID", "==", user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const applied_drives = doc.get("Applied");
      setAppliedDrives(applied_drives);
    });
    const ListItems = applied_drives.map(async (applied_drive) => {
      const coldriveref = collection(db, "drives");
      const qdrive = query(
        coldriveref,
        where("companyName", "==", applied_drive)
      );
      const querydriveSnapshot = await getDocs(qdrive);
      querydriveSnapshot.forEach((doc) => {
        const post = doc.get("post");
        setPost(post);
        const slot = doc.get("slot");
        setSlot(slot);
        console.log(slot);
        console.log(post);
      });

      return (
        <AppliedDriveCard
          company={applied_drive}
          post={post}
          slot={slot}
          status="evaluating"
        />
      );
    });
    setList(ListItems);
    const finalList = await Promise.all(ListItems);
    setfList(finalList);
  };
  useEffect(() => {
    HandleUserApplied();
  }, []);

  return (
    <div className="application-page-container">
      <h2 className="application-heading">Your Applications</h2>

      <div>{finalList}</div>
      <button onClick={HandleUserApplied}>View Applications</button>
    </div>
  );
}
