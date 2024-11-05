import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext();
const Home = () => {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/about");
  // }, 5000);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className='page'>
      <h1>Welcome to the Dark Side!</h1>
      <p>We have cookies, but they are all dark chocolate. Sorry, not sorry!</p>
      <p>
        Why don&apos;t scientists trust atoms? Because they make up everything!
      </p>
      <button onClick={toggleTheme}>Change Theme</button>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Home;
