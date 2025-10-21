function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer__inner">
        <p>© {year} Fayaz Mohamed Aman · Crafted with React and plenty of coffee.</p>
      </div>
    </footer>
  );
}

export default Footer;
