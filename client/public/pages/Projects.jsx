import ProjectCard from "../components/ProjectCard";
import projects from './projects.json'

import React, { Component } from 'react';

class Projects extends Component {
    state = {
        projects
    }
    render() {
        return (
            <div>
            {this.state.projects.map(project => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                repo={project.repo}
                link={project.link}
              />
            ))}
       </div> );
        
    }
}

export default Projects;