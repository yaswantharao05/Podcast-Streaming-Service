import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage2 from "../assets/img/avatar_rao.jpg";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developer</h3>
      <div className="Developer-profile">
        {/* Developer 1 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 1" />
          <div className={"Card-details"}>
            <h3>P Yaswantha Rao</h3>
            <p>Full Stack developer</p>
            <p>ML Engineer</p>
            <p>Competitive Coder</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="Developer-profileDetails">
          <p>Connect with us on social media!</p>
          <div className="Card-btn">
            <IconButton target={"_blank"} href={"https://www.facebook.com/yaswantha.paragada/"} title={"Yaswantha"}>
              <Facebook />
            </IconButton>
            <IconButton target={"_blank"} href={"https://twitter.com/"} title={"yaswantharao"}>
              <Twitter />
            </IconButton>
            <IconButton target={"_blank"} href={"http://www.linkedin.com/in/yaswantharao"} title={"Yaswantha"}>
              <LinkedIn />
            </IconButton>
            <IconButton target={"_blank"} href={"https://www.instagram.com/heyrao_//"} title={"Yaswantha"}>
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
