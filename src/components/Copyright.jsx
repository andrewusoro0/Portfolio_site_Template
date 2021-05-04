import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import { Avatar } from "@material-ui/core";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Copyright = () => { 
    function click() {
     document.getElementById("txtId").innerHTML = text
    }
    const text = "andrwusoro0@gmail.com"
  

  return (
    <>
      <main className="copyright">
        <h1 style={{ textAlign: "center" }} className="copyright_title">Get in Touch</h1>
        <p style={{ width: "500px", marginLeft: "35%" }} className="text_copyright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
          <div id="txtId" style={{textAlign:"center"}}></div>
        <div className="Avatar">
          <Avatar style={{margin:"10px", cursor:"pointer"}}> 
            <TwitterIcon  onClick={() => window.open('https://twitter.com/AndrewWeb7', '_blank')} />
          </Avatar> 
          <Avatar style={{margin:"10px", cursor:"pointer"}}>
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/andrew-usoro-a942351ab/', '_blank')} />
          </Avatar>
          <Avatar style={{margin:"10px", cursor:"pointer"}}>
            <EmailIcon onClick={click} />
          </Avatar>
        </div>

        <p style={{ textAlign: "center" }}>
          &#169;Copyright{year}.All Rights Reserved
        </p>
        <p style={{ textAlign: "center" }}>Powered by Andrew Usoro</p>
      
      </main>
    </>
  );
};

export default Copyright;
