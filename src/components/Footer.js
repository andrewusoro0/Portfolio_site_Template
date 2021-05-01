import React from "react";



const Footer = (props) => {
  return (
    <>
      <div className="footer_body">
        <h1 className="text-help">How can i help?</h1>
        {/* <p className="short_descri_1" >{props.text}</p> */}
        <div className="footer-txt"> 
        <h3>{props.title}</h3>
        <p className="short_descri_2" >{props.text}</p>
        <h3>{props.title}</h3>
        <p className="short_descri_2" >{props.text}</p>
        </div>
      <img  className="footer_img" src="https://visme.co/blog/wp-content/themes/blog/img/lion.png" alt="" />
      </div> 
    </>
  );
};

export default Footer;
