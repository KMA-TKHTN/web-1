import "./footer.css";

function Footer() {
  return (
    <section className="footer-section">
      <footer className="footer text-center text-white">
        <div className="container p-4 pb-0">
          <section className="cta-section">
            <p className="cta-text">
              <span>Sign up for our newsletter</span>
              <input type="email" placeholder="Email address" className="cta-input" />
              <button className="cta-button">Subscribe</button>
            </p>
          </section>
        </div>
        <div className="footer-copyright text-center p-3">
          © 2024 Copyright:{" "}
          <a className="footer-link" href="https://www.facebook.com/pnq.long">
            Group 21
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
