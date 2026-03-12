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
