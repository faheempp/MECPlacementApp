import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useUserAuth } from "../context/UserAuthContext";
import UserDataService from "../services/user.services";
import ProfilePageContainer from "../components/ProfilePageContainer/ProfilePageContainer";
import { propTypes } from "react-bootstrap/esm/Image";
function Profile() {
  const { user } = useUserAuth();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="profile-page">
        <Header active='profile'/> 
        {users.map((doc, index) => {
          if (doc.UserID === user.uid) {
            return ( 
              <ProfilePageContainer 
              name={doc.Name}
              backlog={doc.Backlog}
              branch={doc.Branch}
              cgpa={doc.CGPA}
              email={doc.Email}
              github={doc.Github}
              portfolio={doc.Portfolio}
              semester={doc.Semester}

              />
            )
          }
          // else{
          //   return(
          //     <ProfilePageContainer 
          //     name="" 
          //     backlog=""
          //     branch=""
          //     cgpa=""
          //     email=""
          //     github=""
          //     portfolio=""
          //     semster="" 
          //     />
          //   )
          // }
        }
        )
        }
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
