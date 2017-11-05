import React, { Component } from "react";
import "../style/about.css";
import Profile from "../img/profile.jpg";

class About extends Component {
  render() {
    return (
      <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Full-Stack Developer and your Good Friend,</h2>
              <h3>
                with practical experience in fast learning, team working,
                trade-off,
              </h3>
              <h3>and creative mind.</h3>
              <div
                style={{
                  width: "100%",
                  height: "20px",
                  borderBottom: "3px solid white",
                  textAlign: "center"
                }}
              >
                <span style={{ fontSize: "30px", backgroundColor: "#F05F40" }}>
                  <span className="glyphicon glyphicon-music" />
                </span>
              </div>
              <h2>Web Developer - Squash Player - Ukulele Player</h2>
            </div>
            <div className="col-md-4">
              <img
                className="img-circle img-responsive"
                width="70%"
                height="70%"
                alt="I'm too handsome."
                title="I'm too handsome"
                src={Profile}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
