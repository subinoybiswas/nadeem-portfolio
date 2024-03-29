import React from "react";
import "./About.css";
import image from "../assets/hero.svg";
import { JackInTheBox } from "react-awesome-reveal";

const About = () => {
  return (
    <JackInTheBox>
      <div className="flex  pt-16 overflow-hidden" id="about">
        <div
          className="text-white text-lg w-[60%] pl-32 pr-16 pt-4 "
          id="aboutText"
        >
          <h1 className="text-5xl pb-10">
            Know Who <span className="text-[#567cbf]">I'M</span>
          </h1>
          <p className="pb-5">
            Hi Everyone, I am{" "}
            <span className="text-[#567cbf]">Nadeem Chaudhary</span> from
            <span className="text-[#567cbf]"> Baghpat, India</span>. I am
            pursuing B.Tech from REC Kannauj. I am a Front-end developer.
          </p>
          <p className="pb-3">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="pb-3 list-disc pl-9 " id="list">
            <li>Reading Books</li>
            <li>Investing</li>
            <li>Travelling</li>
          </ul>
          <div className="text-[#729cbd] text-center">
            "There is no one behind you except you!"
            <br />
            <span>...Nadeem</span>
          </div>
        </div>

        <div className="pr-8 pl-4" id="image">
          <img src={image} width="500px" alt="aboutImage" loading="lazy" />
        </div>
      </div>
    </JackInTheBox>
  );
};

export default About;
