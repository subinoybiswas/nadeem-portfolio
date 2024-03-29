import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import reactIcon from "../assets/reactIcon.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="flex flex-col  text-white px-8 py-4 bg-transparent mt-16 font-mono">
      <div className="flex justify-center items-center text-center gap-2 ">
        <span>This Website was made with</span>
        <img src={reactIcon} alt="reactIcon" className="reactIcon" />
      </div>

      <div
        className="text-white flex  justify-between items-center relative "
        id="btFooter"
      >
        <div className="text-center">
          Designed and Developed by Nadeem Chaudhary
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          id="copyright"
        >
          Copyright &copy; 2024
        </div>

        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://github.com/NadeemChaudhary16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/nadeemchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            href="https://x.com/NadeemCh100/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://www.instagram.com/nadeemchaudhary16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
