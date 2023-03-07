import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import classes from "./Contact.module.css"
import Button from '../Button/Button'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Contact = () => {
  let [resName, setResName] = useState("")
  let [resMail, setResMail] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault();
    if (resName === "" || resMail === "") {
      toast.error(`Enter your Name & MailID...!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    else {
      console.log("S")
      await emailjs.sendForm('service_4b43ppj', 'template_vwbocf9', e.target, 'MGi0uwqtwW23AHnZu')
        .then((result) => {
          console.log(result.text);
          // setResMail(""); setResName("")
        }, (error) => {
          console.log(error.text)
        })

    }
  }


  return (
    <section id="#contact">
      <div className="section main">
        <h2 className="section__title different">Contact</h2>
        <form onSubmit={sendEmail} className={classes.form}>
          <div className={classes.maildiv}>
            <input type="text" name="name_from" id="nameFrom" placeholder="Your Name" onChange={(e) => setResName(e.target.value)} />
            <input type="text" name="email_from" id="emailFrom" placeholder="Your Mail ID" onChange={(e) => setResMail(e.target.value)} />
            <textarea name="message" id="message" className="message__box" placeholder='Your comments'></textarea>
            <div className={classes.button}>
              <Button btnName="Send" type="submit" />
            </div>
          </div>
        </form>
      </div>
      <button />
    </section>
  )
}

export default Contact
