import React, { useState } from "react";
import ropeimage from "./assets/ropeimage.png";
import "./Styles/Contact.css";
import locationIcon from "./assets/location.png";
import mailIcon from "./assets/mail.png";
import phoneIcon from "./assets/telephone.png";
import NavBar from "./NavBar";
import Footer from "./Footer"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });


  const nameRegex = /^[A-Za-z.]{4,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/; //  10 digit phone



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    validateField(name, value);

  };



  const validateField = (name, value) => {

    let errorMsg = "";

    if (name === "name") {

      if (!value) {

        errorMsg = "Name is required";

      }
      else if (!nameRegex.test(value)) {

        errorMsg = "Name should be min 4 to max 15 characters";

      }

    }



    if (name === "email") {

      if (!value) {

        errorMsg = "Email is required";

      }
      else if (!emailRegex.test(value)) {

        errorMsg = "Enter valid email address";

      }

    }



    if (name === "phone") {

      if (!value) {

        errorMsg = "Phone number is required";

      }
      else if (!phoneRegex.test(value)) {

        errorMsg = "Phone number must be exactly 10 digits";

      }

    }



    if (name === "message") {

      if (!value) {

        errorMsg = "Message is required";

      }

    }



    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));


    return errorMsg;

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const phoneError = validateField("phone", formData.phone);
    const messageError = validateField("message", formData.message);


    if (!nameError && !emailError && !phoneError && !messageError) {

      alert("Form submitted successfully");

    }

  };



  return (

    <>

      <NavBar/>

      <div className="imageview">
        <img src={ropeimage} alt="" />
      </div>



      <div className="paragraph">

        <h2>Get In Touch</h2>

        <p>
          Fill out the form below and our team will get back to you as soon as possible
        </p>

      </div>






      <div className="second-box">

  {/* DETAILS */}
  <div className="detailss">

    {/*  MAP HERE */}
    <div className="map">

      <iframe
        src="https://www.google.com/maps?q=Chennai&output=embed"
        title="map"
        loading="lazy"
      ></iframe>

    </div>


    <div className="sectionn">

      <div className="titlee">

        <img src={locationIcon} className="iconn" alt="" />

        <h2>Location</h2>

      </div>

      <p>
        21, Gandhi Street,<br />
        Chennai, Tamil Nadu,<br />
        India - 600001
      </p>

    </div>

    {/* rest same */}




          <div className="sectionn">

            <div className="titlee">

              <img src={mailIcon} className="iconn" alt="" />

              <h2>Email</h2>

            </div>

            <p>fitness@email.com</p>

          </div>



          <div className="sectionn">

            <div className="titlee">

              <img src={phoneIcon} className="iconn" alt="" />

              <h2>Phone</h2>

            </div>

            <p>+91 9876543210</p>

          </div>

        </div>




        {/* FORM */}

        <div className="form">

          <form onSubmit={handleSubmit} noValidate>

            <label>First Name</label>

            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
            />

            <div className="errorname">{errors.name}</div>



            <label>Email Address</label>

            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="erroremail">{errors.email}</div>



            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="errorphone">{errors.phone}</div>



            <label>Message</label>

            <textarea
              name="message"
              placeholder="Message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="errormessage">{errors.message}</div>


            <div className="btnn">

            <button type="submit" >Submit</button>

            </div>

          </form>

        </div>

      </div>

      <Footer/>

    </>
  );

}

export default Contact;
