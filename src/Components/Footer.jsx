import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import reactIcon from "../assets/reactIcon.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="flex flex-col  text-white px-4 py-4 bg-transparent mt-16 ">
      <div className="flex justify-center items-center text-center gap-2 ">
        <span>Made with</span>
        <img src={reactIcon} alt="reactIcon" className="reactIcon" />
      </div>

      <div
        className="text-white flex   justify-between items-center relative "
        id="btFooter"
      >
        <div className=" flex-1 text-center ">
          Design and Created by Nadeem Chaudhary
        </div>

        <div className="flex-1 text-center" id="copyright">
          Copyright &copy; 2024
        </div>

        <div className="flex flex-1 gap-8 justify-center items-center">
          <a
            href="https://github.com/NadeemChaudhary16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nadeemchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://x.com/NadeemCh100/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/nadeemchaudhary16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
