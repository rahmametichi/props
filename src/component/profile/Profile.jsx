import React from "react";

const Profile = (props) => {
  const { fullName, bio, profession, children } = props;


  return (
    <div>
      {children}
      <h1>{fullName}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      <button onClick={() => props.alerthandleName("my name is fullname")}>
        clickbutton
      </button>
    </div>
  );
};

export default Profile;
