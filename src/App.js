import React from 'react'
import {OpenSection, About, Projects, Tools, Footer, Copyright} from "./components";



const App = () => {
  return (
    <>
      
        <OpenSection />
        <About />
        <Projects />
        <Tools/>
        <Footer
        title="Lorem ipsum dolor"
         text="
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. "
         />
         <Copyright /> 
      
    </>
  )
}

export default App

