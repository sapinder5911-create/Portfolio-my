import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Skills from "./component/Skills"
import Nav from "./component/Nav"






const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <div>
                <Nav />
                <Home />
                <About />
                <Skills />
                <Contact />
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
            path: "/Skills",
            element: <div>
                <Nav />
                <Skills />
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