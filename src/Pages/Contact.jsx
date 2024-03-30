import React, { useState } from "react";
import Button from "@mui/joy/Button";
import { IoIosSend } from "react-icons/io";
import './Contact.css'
import toast from "react-hot-toast";
import BioCard from "../Components/BioCard";
import Tilt from "react-parallax-tilt";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    toast.success("Message sent")
    console.log(formData);
    setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
    })
   
  }
  return (
    <div className="flex flex-col justify-between items-center pt-16 px-8 " id="contact">
    <h1 className="text-white text-center text-5xl  py-4">Contact Me</h1>
      <form
        action=""
        onSubmit={submitHandler}
        className="text-white flex flex-col gap-4 form-container"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={changeHandler}
            id=""
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            id=""
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={changeHandler}
            id=""
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Leave your message !"
            value={formData.message}
            onChange={changeHandler}
            id=""
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <Button className="flex justify-center items-center gap-2"  type="submit">
        Send <IoIosSend size={20} />
        </Button>
      </form>
      <div className="pt-16">
        <Tilt ><BioCard /></Tilt>
      </div>
    </div>
  );
};

export default Contact;
