import React from "react";

const aboutStyles = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "115px",
    marginBottom: "51px",
  },
  heading: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "10px",
  },
  section: {
    marginBottom: "20px",
  },
  subsection: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
  },
  decorativeSymbol: {
    fontSize: "24px",
    color: "#555",
    marginRight: "10px",
  },
};

const About = () => {
  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>
        <span style={aboutStyles.decorativeSymbol}>📰</span>Welcome to Newz4ya - Your Source for Your News 🌎
      </h1>
      <div style={aboutStyles.section}>
        <div style={aboutStyles.subsection}>
          <h2>Our Mission</h2>
          <p style={aboutStyles.paragraph}>
            At Newz4ya, our mission is to provide you with the latest news from around the world in a format that is easy to use and completely free. We believe in keeping our users informed and updated on current events.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Simple and User-Friendly</h2>
          <p style={aboutStyles.paragraph}>
            We have designed our website with a simple and intuitive interface, making it effortless to read top articles and navigate through various categories. Our focus is on simplicity and efficiency to enhance your news-reading experience.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Explore Categories</h2>
          <p style={aboutStyles.paragraph}>
            Newz4ya allows you to explore news articles through several categories, making it easy to find news that interests you. Whether you're into politics, technology, or lifestyle, we've got you covered.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Search for News</h2>
          <p style={aboutStyles.paragraph}>
            Can't find what you're looking for? Use our convenient search feature to find news articles on specific topics or keywords. We want to make sure you get the news you're interested in quickly and easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;