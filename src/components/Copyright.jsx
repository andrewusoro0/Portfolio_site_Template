import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import { Avatar } from '@material-ui/core';

const Copyright = () => {
    return (
        <>
           <h1 style={{textAlign:"center"}}>Get in Touch</h1>
      <div className="Avatar">
          <Avatar >
           <TwitterIcon />
          </Avatar>
          <Avatar>
           <LinkedInIcon />
          </Avatar>
          <Avatar>
           <InstagramIcon />
          </Avatar>

          <Avatar>
           <EmailIcon />
          </Avatar>
      </div>   
        </>
    )
}

export default Copyright
