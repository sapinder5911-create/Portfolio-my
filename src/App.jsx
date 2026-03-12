import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
// import Skills from "./component/Skills"
import Resume from "./component/Resume"
import Nav from "./component/Nav"






const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <div>
                <Nav />
                <Home />
                {/* <About /> */}
                {/* <Skills /> */}
                {/* <Contact /> */}
            </div>
        },
        
        {
            path: "/About",
            element: <div>
                <Nav />
                <About />
            </div>
        },
       
        {
            path: "/resume",
            element: <div>
                <Nav />
                <Resume/>
            </div>
        },
        {
            path: "/Contact",
            element: <div>
                <Nav />
                <Contact />
            </div>
        },
    ]
);





function App() {
    

    
    return (
        <div>

            <RouterProvider router={router}/>
           
        </div>
    )

}

export default App

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
// import Home from "./component/Home";
// import About from "./components/About";
// import Resume from "./components/Resume";
// import Navbar from "./components/Nav-bar";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: (
//                 <div>
//                     <Navbar />
//                     <Home />
//                     <Footer />
//                 </div>
//             ),
//         },
//         {
//             path: "/about",
//             element: (
//                 <div>
//                     <Navbar />
//                     <About />
//                     <Footer />
//                 </div>
//             ),
//         },
//         {
//             path: "/resume",
//             element: (
//                 <div>
//                     <Navbar />
//                     <Resume />
//                     <Footer />
//                 </div>
//             ),
//         },
//         {
//             path: "/contact",
//             element: (
//                 <div>
//                     <Navbar />
//                     <Contact />
//                     <Footer />
//                 </div>
//             ),
//         },
//     ]);

//     return (
//         <>
//             <RouterProvider router={router} />
//         </>
//     );
// }

// export default App;
