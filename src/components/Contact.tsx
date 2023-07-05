import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact + ' ' + 'main'}>
      <h2>Contact Me</h2>
      <div className={styles.contactFormBox}>
        <form
          className={styles.contactForm}
          action="https://formspree.io/f/xqkvkzlp"
          method="POST">
          <label>
            Name:
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              maxLength={50}
              required
            />
          </label>
          <label>
            Email:
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              maxLength={50}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              placeholder="Enter your message here"
              name="message"
              maxLength={500}
              required
            />
          </label>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
