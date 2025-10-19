import './Contact.css';

function Contact({ contact }) {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              {contact.github}
            </a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              {contact.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
