import Head from "next/head";
import style from "../styles/Contact.module.css";
import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  console.log(process.env);
  const serviceKey = process.env.SERVICE_KEY || "";
  const templateKey = process.env.TEMPLATE_KEY || "";
  const publicKey = process.env.PUBLIC_KEY || "";

  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    resetErrorMessage();
  };

  const resetErrorMessage = () => {
    if (formData.name && formData.email && formData.message) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Some required fields are empty");
      return;
    }

    try {
      console.log(publicKey);
      await emailjs.send(serviceKey, templateKey, formData, publicKey);
      setSuccessMessage("Success");
      setFormData({ name: "", company: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Error");
      console.error("EmailJS Error: ", error);
    }
  };

  return (
    <div>
      <Head>
        <title>RmHry • Contact</title>
        <meta
          name="description"
          content="This portfolio list all my realization, my resume, but also a form to contact me."
        />
        <link
          href="https://fonts.cdnfonts.com/css/janger"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style["contact-form-container"]}>
        <form className={style["contact-form"]} onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </section>

          <section>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company (optional)"
            />
          </section>

          <section>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </section>

          <section>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
            ></textarea>
          </section>

          <button type="submit">Submit</button>

          {errorMessage && (
            <p className={style["error-message"]}>{errorMessage}</p>
          )}
          {successMessage && (
            <p className={style["success-message"]}>{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
