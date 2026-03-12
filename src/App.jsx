import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
// import Skills from "./component/Skills"
import Resume from "./component/Resume"
import Nav from "./component/Nav"
import Footer from "./component/Footer"






const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <div>
                <Nav />
                <Home />
                <Footer />
               
            </div>
        },
        
        {
            path: "/About",
            element: <div>
                <Nav />
                <About />
                <Footer/>
            </div>
        },
       
        {
            path: "/resume",
            element: <div>
                <Nav />
                <Resume />
                <Footer />
            </div>
        },
        {
            path: "/Contact",
            element: <div>
                <Nav />
                <Contact />
                <Footer />
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
