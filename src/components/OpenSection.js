import React, { useState } from "react";
import topView from "./video/Traveler Photographer in Mountains.mp4";
import firebase from "../firebase/Config";

const OpenSection = () => {
  let [comments, setComments] = useState([]);

  firebase
    .firestore()
    .collection("emails")
    .onSnapshot(
      (snapshot) => {
        setComments(snapshot.docs);
        // console.log(comments);
      },

      (err) => {
        console.trace(err);
      }
    );
  const uploadComment = (event) => {
    let val = event.target.parentElement.parentElement.querySelector("input")
      .value;
    const val2 = val;
    event.target.parentElement.parentElement.querySelector("input").value = "";

    firebase
      .firestore()
      .collection("Emails")
      .add({
        commentBody: val2,
        timeStamp: Date.now(),
      })
      .then((r) => {
        const okay = "Your subcription was successful!";
        document.getElementById("textID").innerHTML = okay;
      })
      .catch((e) => console.trace(e));
  };

  return (
    <>
      <main className="display_style">
        <video autoPlay loop muted className="video">
          <source src={topView} type="video/mp4" />
        </video>
        <div className="mr-auto">
          <h1>Hi,My name is Andrew Usoro</h1>
        </div>

        <p className="txt-software">
          My portfolio is a representation of all
          that I've learned and accomplished as a Software engineering.
          
        </p>
        <div>
          <h2 className="text-input">Get Resume</h2>

          <form>
            <input
              className="input-label"
              type="text"
              name="email"
              placeholder="example@gmail.com"
              required
            />
            {comments.map((c) => {
              return (
                <div id="comment-holder">
                  <p className="first-comment"> {c.data().Subscribed} </p>
                </div>
              );
            })}
            <button
              type="submit"
              className="btn-sub"
              onClick={(event) => uploadComment(event)}
            >
              <span className="span-sub">Subscribe</span>
            </button>
            <button className="btn-download">
              <a style={{ color: "#fff" }} href="data/info.pdf" download>
                Downlond pdf
              </a>
            </button>
            <div id="textID"></div>
          </form>
        </div>
        <br />
        <br />
      </main>
    </>
  );
};

export default OpenSection;
