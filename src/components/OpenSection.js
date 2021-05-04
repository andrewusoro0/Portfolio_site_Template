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
        console.log(r);
      })
      .catch((e) => console.trace(e));
  };
  function handleChange(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <>
      <main className="display_style">
        <video
          autoPlay
          loop
          muted
          className="video"
        >
          <source src={topView} type="video/mp4" />
        </video>
        <div className="mr-auto">
          <h1>Hi,My name is Andrew Usoro</h1>
        </div>

        <p className="txt-software">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
              return  (
                <div id="comment-holder">
                  <p className="first-comment"> {c.data().Subscribed} </p>
                </div>
              );
            })}
            <button
              type="submit"
              className="btn-sub"
              onClick={(event) => uploadComment(event)}
              onChange={handleChange}
            >
              <span className="span-sub">Subscribe</span>
            </button>
            <button className="btn-download">
              <a style={{ color: "#fff" }} href="data/info.pdf" download>
                Downlond pdf
              </a>
            </button>
          </form>
        </div>
        <br />
        <br />
      </main>
    </>
  );
};

export default OpenSection;
