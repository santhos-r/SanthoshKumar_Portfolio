import React from 'react'
import emailjs from "@emailjs/browser"
import classes from "./Contact.module.css"
import Button from '../Button/Button'

const sendEmail = (e) => {
  console.log("S")
  e.preventDefault();
  emailjs.sendForm('service_4b43ppj', 'template_vwbocf9', e.target, 'MGi0uwqtwW23AHnZu')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })
}

const Contact = () => {
  return (
    <section id="#contact">
      <div className="section main">
        <h2 className="section__title different">Contact</h2>
        <form onSubmit={sendEmail}>
          <div className={classes.mail}>
            <span>
              <label htmlFor="emailFrom">Email:</label>
              <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com" />
            </span>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" className="message__box"></textarea>
            {/* <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{ marginTop: "5px" }}>
                            Send
                        </Button> */}
            <Button />
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact
