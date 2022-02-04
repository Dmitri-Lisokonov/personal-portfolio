import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Table } from "./config/Table";
import { Project } from "./entities/Project";
import { app, auth, firebaseFunctions } from "./service/firebase";
import { FireBaseObjectService } from "./service/FirebaseObjectService";
import "firebaseui/dist/firebaseui.css"
import { OAuthLoginComponent } from "./components/GoogleLoginComponent/OAuthLoginComponent";
import { httpsCallable } from "firebase/functions";
import { AuthContext } from "./context/AuthContext";
import { RequestObject } from "./entities/RequestObject";
import LoginPage from "./portal/page/LoginPage/LoginPage";
import PortalPage from "./portal/page/PortalPage/PortalPage";


function App() {
  const [projects, setProjects] = useState([] as Project[]);
  const projectService = new FireBaseObjectService<Project>(Table.PROJECT);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    projectService.getAll()
      .then((array) => {
        setProjects(array);
      });
  }, [])

  useEffect(() => {
    console.log("user", currentUser);
    const testAuth = httpsCallable(firebaseFunctions, "helloWorld");
    if (currentUser.token) {
      testAuth(new RequestObject(currentUser, undefined))
        .then((result) => console.log(result))
        .catch((error) => {
          console.log("error", error.message);
        })
    }
  }, [currentUser])

  const deleteButton = (id: string) => {
    projectService.delete(id).then(() => {
      projectService.getAll()
        .then((array) => {
          setProjects(array);
        });
    })
  }

  const updateButton = (id: string, document: Project) => {
    document.name += "1"
    projectService.update(id, document).then(() => {
      projectService.getAll()
        .then((array) => {
          setProjects(array);
        });
    })
  }

  const insertButton = (document: Project) => {
    projectService.add(document).then(() => {
      projectService.getAll()
        .then((array) => {
          setProjects(array);
        });
    })
  }


  const signOut = () => {
    console.log("ok")
    auth.signOut();
  }

  return (
    <div className="app" >
      <PortalPage />
    </div>
  );
}

export default App;

