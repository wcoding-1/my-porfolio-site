import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Projects from "../components/Projects";
import Project from "../components/Project";
import Skills from "../components/skills";
import Skill from "../components/Skill";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Resume from "../components/Resume";
import Root from "../components/Root";

// import { Route } from 'react-router-dom';
import { Route, RouterProvider ,createBrowserRouter,createRoutesFromElements} from "react-router-dom";

import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }>
    <Route path="about" element={ <About/> }/>
    <Route path="project" element={ <Projects/> }/>
    {/*<Route path="articles/:title" element={ <Project/> }/>*/}
    {/*<Route path="authors/:name" element={ <Author/> }/>*/}

    <Route path="skills" element={ <Skills/> }>
      <Route path=":name" element={ <Skill/> }/>
    </Route>
      <Route  path='resume' element={ <Resume/> }/>

    <Route path="profile" element={ <Profile/> }>
      <Route path="edit" element={<EditProfileForm/>}/>
    </Route>
    <Route path="sign-up" element={ <SignUp/> }/>
  </Route>

    ))

function App() {
  return (
    <>
      { /* Replace below and add Router Provider*/}
      {/* <p>REPLACE ME WITH A ROUTER PROVIDER</p> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
