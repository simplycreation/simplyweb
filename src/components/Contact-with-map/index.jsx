import React from "react";
import appData from "../../data/app.json";

const ContactWithMap = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <iframe
            src={appData.mapIframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "550px",
              border: "none",
            }}
          ></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post">
            <div className="messages"></div>

            {/* <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Send Message</span>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
