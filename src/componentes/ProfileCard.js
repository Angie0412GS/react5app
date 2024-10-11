import React from "react";
import '../styles/ProfileCard.css'; 
import img from '../Img/img1.png'; 

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={img} alt="Profile"/>
      <h2 className="profile-name">Angie Gonzalez</h2>
      <p className="profile-description">
        Soy un desarrollador de software apasionado por la creación de aplicaciones web interactivas y eficientes.
      </p>
    </div>
  );
};

export default ProfileCard;