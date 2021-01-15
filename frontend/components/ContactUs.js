import React from "react";

const ContactUs = () => {
  const submitForm = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  };

  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          id="name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          id="subject"
          required
        />
        <textarea name="message" placeholder="Message" id="message" required />
        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>

      <style jsx>{`
        form {
          margin: 25px 0;
          width: 100%;
          height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        input,
        textarea {
          font-family: Serif, serif;
          font-size: 14px;
          width: 50%;
          height: 55px;
          margin: 15px 0;
          border: 1px solid lightgrey;
          text-indent: 5px;
        }

        input::placeholder,
        textarea::placeholder {
          margin-left: 4px;
        }

        textarea {
          resize: none;
          height: 300px;
        }

        .send-btn {
          margin-top: 5px;
          width: 150px;
          height: 40px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ContactUs;
