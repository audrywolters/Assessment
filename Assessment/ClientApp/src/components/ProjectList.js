import React, { Component } from 'react';
import './ProjectList.css';

export class ProjectList extends Component {

    state = {
        projectList: [],
        project: {}
    }

    componentDidMount() {

        //let allInputs = document.querySelectorAll("input");

        //// AUDRY - react doesn't like this
        //// ...can I leave them uncontrolled??
        //this.setState({
        //    inputs: allInputs
        //});

        this.getProjectList();
    }

    render() {
        return (
            <>
                <h1>Projects</h1>
                <div className="listing">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Contact</th>
                                <th><button>New Project</button></th>
                                { /* <th><button onClick={() => this.setProject()}>New Project</button></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projectList.map(p =>
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.date}</td>
                                    <td>{p.contactName}</td>
                                    <td><button onClick={() => this.setProject(p)}>Edit</button>
                                        <button onClick={() => this.deleteProject(p.id)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="detail">
                    <div className="detailHeader">
                        <span>Project</span>
                        { /* below wont work because of evil onChange business */}
                        <button onClick={() => this.addNewProjectData(this.state.project)}>Save</button>
                    </div>

                    <ul>
                        <li><label>Name:</label>   <input name="name"         onChange={this.handleChange} type="text" value={this.state.project.name} /></li>
                        <li><label>Title:</label>  <input name="date"         onChange={this.handleChange} type="text" value={this.state.project.date} /></li>
                        <li><label>Cell:</label>   <input name="contactName"  onChange={this.handleChange} type="text" value={this.state.project.contactName} /></li>
                    </ul>
                </div> 
            </>
        );
    }
    
    //// call the server ////
    // AUDRY - add try/catch

    // get all
    async getProjectList() {
        const response = await fetch(`projectList`);
        const data = await response.json();
        this.setState({ projectList: data });
    }

    // get one
    async getProject(id) {
        const response = await fetch(`projectList/${id}`);
        const data = await response.json();
        this.setState({ project: data });
    }

    // create/update
    async addNewProjectData(project) {
        let jsonProject = JSON.stringify(project);
        const response = await fetch(`projectList/${jsonProject}`, { method: 'POST' });
        const data = await response.json();
        this.setState({ projectList: data });
    }

    // delete
    async deleteProject(id) {
        const response = await fetch(`projectList/${id}`, { method: 'DELETE' });
        const data = await response.json();
        this.setState({ projectList: data });
    }
}
