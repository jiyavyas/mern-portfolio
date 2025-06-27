import React, { useState } from "react";
import "./contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send-email`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ templateParams: formData }),
});
      if (res.ok) {
        setStatus("✅ Email sent successfully!");
        setFormData({ from_name: "", to_name: "", message: "" });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <>
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                 <LightSpeed>
                  <img
                    src="https://thumbs.dreamstime.com/b/contact-us-headline-brown-paper-tear-drop-41301146.jpg"
                    alt="Contact"
                    className="image"
                  />
                </LightSpeed>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
             <Rotate>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h6>
                    Contact with
                    <a href="https://linkedin.com/in/jiya-vyas-15492526a">
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href="https://github.com/jiyavyas">
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                  </h6>

                  <form onSubmit={handleSubmit}>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="row px-3">
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="mb-3"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="to_name"
                        value={formData.to_name}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="mb-3"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        className="mb-3"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <button type="submit" className="button">
                        SEND MESSAGE
                      </button>
                    </div>
                    {status && (
                      <div className="row px-3 mt-3">
                        <p>{status}</p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
      </div>
  </>
  );
};

export default Contact;
