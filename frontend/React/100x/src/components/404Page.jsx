import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to='/' className='home-link'>
        Go back to Home
      </Link>
    </div>
  );
}
