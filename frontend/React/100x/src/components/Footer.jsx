const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <nav>
          <a href='/' className='footer-link'>
            Terms of Service
          </a>
          <a href='/' className='footer-link'>
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
