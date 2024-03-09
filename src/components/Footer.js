import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="linkedin.com/in/rahul-singh-163147169/">LinkedIn</a>
      <a href="https://rsingh1996.github.io/my-site/">Website</a>
      <a href="mailto:rahulna1996@gmail.com">Contact</a>
      <div className="copy-right">
        <p> Copyright ⓒ {year}</p>
        <p>Rahul Singh </p>
      </div>
    </footer>
  );
};

export default Footer;
