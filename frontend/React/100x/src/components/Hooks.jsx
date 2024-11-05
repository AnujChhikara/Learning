import { Link, Outlet } from "react-router-dom";

export default function Hooks() {
  return (
    <div className='hooks'>
      Week 11
      <nav>
        <Link to='/week11/customHooks'>Custom Hooks</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
