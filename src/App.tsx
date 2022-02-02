import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from './config/Table';
import { Project } from './entities/Project';
import { FireBaseObjectService } from './service/FirebaseObjectService';

function App() {
  const [projects, setProjects] = useState([] as Project[]);
  const projectService = new FireBaseObjectService<Project>(Table.PROJECT);


  useEffect(() => {
    projectService.getAll()
      .then((array) => {
        setProjects(array);
      })
  }, [])


  return (
    <div className="App">
      {
        projects.length > 0 ?
          projects.map((doc) => {
            return (
              <div key={doc.id}>
                <div>
                  {doc.name}
                </div>
                <div>
                  {doc.description}
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

