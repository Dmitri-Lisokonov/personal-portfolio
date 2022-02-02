import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './config/Table';
import { Project } from './entities/Project';
import { FireBaseObjectService } from './service/FirebaseObjectService';

function App() {
  const [projects, setProjects] = useState([] as Project[]);
  const projectService = new FireBaseObjectService<Project>(Table.PROJECT);
  console.log(projects);

  useEffect(() => {
    projectService.getAll()
      .then((array) => {
        setProjects(array);
      });

  }, [])

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

  return (
    <div className="App">
      {
        projects.length > 0 ?
          projects.map((doc) => {
            return (
              <div key={doc.id}>
                <button onClick={() => deleteButton(doc.id)}>Delete</button>
                <button onClick={() => updateButton(doc.id, doc)}>Update</button>
                <button onClick={() => insertButton(doc)}>Copy</button>
                <div>
                  Name: {doc.name}
                </div>
                <div>
                  Body:{doc.description}
                </div>
              </div>
            )
          })
          :
          <div>nope</div>
      }
    </div>
  );
}

export default App;

