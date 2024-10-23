import { Outlet } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/about");
  // }, 5000);
  return (
    <div className='page'>
      <h1>Welcome to the Dark Side!</h1>
      <p>We have cookies, but they are all dark chocolate. Sorry, not sorry!</p>
      <p>
        Why don&apos;t scientists trust atoms? Because they make up everything!
      </p>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
