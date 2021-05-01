import "./Tool.scss";
import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

class Tools extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4:false,
    spy3: {},
    spy4: {}
  };

  render() {
    return (
      <>
      <div>
        <h2 className="tool-header"> Languages and tools/Libraries</h2>
      </div>
        <img className="image_tool" src="images/logo1.gif " alt='' />
      <div className="app">
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
        >
          <span className="app__toggle-text">HTML5/CSS3</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>

        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
          Bootstarp/Git/Visual studio
        </button>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </React.Fragment>
          )}
        />

        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen3
          })}
          onClick={() => this.toggle(3)}
        >
          javasript/jquery/express.js
        </button>  
        <Collapse
          isOpen={this.state.isOpen3}
          // collapseHeight="60px"
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
          onChange={state => this.setState({ spy3: state })}
          render={collapseState => (
            <div className="app__content">
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          )}
        />
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen4
          })}
          onClick={() => this.toggle(4)}
        >
          React.js/node.js
        </button>  
        <Collapse
          isOpen={this.state.isOpen4}
          // collapseHeight="60px"
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
          onChange={state => this.setState({ spy4: state })}
          render={collapseState => (
            <div className="app__content">
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          )}
        />
      </div>
      </>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}
   
 
export default Tools;


