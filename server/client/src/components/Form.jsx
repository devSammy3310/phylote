import React, { useEffect, useRef, useState } from "react";

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      setResponseMessage(
        "Thank you! Your form has been submitted successfully."
      );
    } else {
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (isSubmitted && formRef.current) {
      const navbarHeight = 80;
      window.scrollTo({
        top: formRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }, [isSubmitted]);

  return (
    <div className="form__container" ref={formRef}>
      {isSubmitted ? (
        <div className="success-message">
          <h2>Success!</h2>
          <p>{responseMessage}</p>

          <p>
            For immediate assistance, please call{" "}
            <a href="tel:+2348068444195" className="contact__page-link">
              +2348068444195
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="form__container-form">
          <div className="u-margin-bottom-medium">
            <p>
              Please fill out this form and we will contact you shortly. For
              immediate assistance please call or text{" "}
              <a href="tel:+2348068444195" className="contact__page-link">
                +2348068444195.
              </a>
            </p>
          </div>
          <div className="form__group">
            <input
              minLength="2"
              id="name"
              name="name"
              type="text"
              className="form__input"
              placeholder="Full Name"
              required
            />
            <label htmlFor="name" className="form__label">
              Full Name
            </label>
          </div>

          <div className="form__group">
            <input
              id="email"
              type="email"
              name="email"
              className="form__input"
              placeholder="Email Address"
              required
            />
            <label htmlFor="email" className="form__label">
              Email Address
            </label>
          </div>

          <div className="form__group">
            <input
              minLength="10"
              maxLength="15"
              id="phone"
              name="phone number"
              type="tel"
              className="form__input"
              placeholder="Phone Number"
              required
            />
            <label htmlFor="phone" className="form__label">
              Phone Number
            </label>
          </div>

          <div className="form__group">
            <textarea
              id="message"
              name="message"
              className="form__input"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
          </div>

          <div className="form__group">
            <button className="form__button">submit</button>
          </div>
        </form>
      )}
    </div>
  );
};
