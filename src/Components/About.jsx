/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.jpg";

// Remove this line since imageAltText is already declared below
// const imageAltText = "purple and blue abstract background";
// Remove this line since image is already imported above
// import image from "../images/motion-background.jpg";

const imageAltText = "glow like  a star burn like a pheonix";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Data science and artificial intelligence enthusiast with a passion for solving complex problems. As a student of this dynamic field, I'm constantly learning and exploring new ways to extract insights from data and apply machine learning techniques to create intelligent systems. Let's connect and explore the possibilities together!";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data analysis",
  "Data visualization",
  "Machine learning",
  "Data scraping",
  "Front-end development",
  "Back-end development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm a self-motivated, hardworking, and goal-oriented individual who is passionate about learning new things and solving problems. I'm always looking for opportunities to learn and grow.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#F87E53",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
