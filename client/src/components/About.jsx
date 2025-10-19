import './About.css';

function About({ bio }) {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
}

export default About;
