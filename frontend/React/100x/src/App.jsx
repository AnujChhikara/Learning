// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(0);
//   console.log("asdklj");
//   const increaseCounter = () => {
//     setCounter((prevCount) => prevCount + 1);
//   };
//   const decreaseCounter = () => {
//     setCounter((prevCount) => prevCount - 1);
//   };

//   useEffect(() => {
//     const clock = setInterval(() => {
//       setCounter((prevCount) => prevCount + 1);
//     }, 1000);

//     return clearInterval(clock);
//   }, []);

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>Counter: {counter}</h2>
//       <button onClick={increaseCounter}>Increase Counter</button>
//       <button onClick={decreaseCounter}>Decrease Counter</button>

//       <button onClick={() => setCounter(0)}>Reset</button>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <Card1 />
//         <Card2 />
//       </div>
//     </div>
//   );
// }

// function Card1() {
//   const [data, setData] = useState();

//   const fetchData = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = await response.json();
//     setData(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h3
//         style={{
//           color: "red",
//           borderRadius: "10px",
//           width: 200,
//           height: 200,
//           backgroundColor: "green",
//           border: "1px solid black",
//         }}
//       >
//         {data ? data.title : "Loading..."}
//       </h3>
//     </div>
//   );
// }

// function Card2() {
//   const [data, setData] = useState();
//   const [error, setError] = useState(false);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/toqdos/1"
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setData(data);
//     } catch (err) {
//       setError(true);
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(error);
//   return (
//     <div>
//       <h3
//         style={{
//           color: "blue",
//           borderRadius: "10px",
//           backgroundColor: "yellow",
//           width: 200,
//           height: 200,
//           border: "1px solid black",
//         }}
//       >
//         {error ? (
//           <button onClick={() => fetchData}>Click to fetch data</button>
//         ) : data ? (
//           data.title
//         ) : (
//           "Loading..."
//         )}
//       </h3>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Layouts/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Page404 from "./components/404Page";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Clock from "./components/Clock";
import Hooks from "./components/Hooks";
import CustomHooks from "./components/week11/CustomHooks";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='clock' element={<Clock />} />
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route />

        <Route path='/week11' element={<Hooks />}>
          <Route path='customHooks' element={<CustomHooks />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default function App() {
  return <Router />;
}
