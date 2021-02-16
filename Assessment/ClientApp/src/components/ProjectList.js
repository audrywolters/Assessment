import React, { Component } from 'react';
import './Listing.css';
import './Detail.css';

export class ProjectList extends Component {

    state = {
        projectList: [],
        project: {}
    }

    componentDidMount() {
        // calls the server and sets all project into the listing view
        this.getProjectList();
    }

    clickNewProject() {
        this.resetProjectDetail();
    }

    clickSaveProject(proj) {
        // set the project in the detail view
        this.setState({ project: proj })
    }

    handleInputChange = (evt) => {
        // make a copy of project so state doesn't get upset about immutablity
        let copyOfProject = this.state.project;

        // use <input name="foo" as variable so this method works for each input
        copyOfProject[evt.target.name] = evt.target.value;

        // set that state!
        this.setState({
            project: copyOfProject
        })

        // AUDRY - it would be nice if the changes didn't update in listing
    }

    resetProjectDetail() {
        let newProject =
        {
            name: '',
            date: '',
            contact: ''
        }

        this.setState({
            project: newProject
        })
    }

    setProjectDetail(proj) {
        // clear old data
        this.resetProjectDetail();

        // set the project in the detail view
        this.setState({ project: proj })
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
                                <th><button onClick={() => this.clickNewProject()}>New Project</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projectList.map(proj =>
                                <tr key={proj.id}>
                                    <td>{proj.name}</td>
                                    <td>{proj.date}</td>
                                    <td>{proj.contact}</td>
                                    <td><button onClick={() => this.setProjectDetail(proj)}>Edit</button>
                                        <button onClick={() => this.deleteProject(proj.id)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="detail">
                    <div className="detailHeader">
                        <span>Project</span>
                        <button onClick={() => this.saveProject(this.state.project)}>Save</button>
                    </div>

                    <ul>
                        <li><label>Name:</label>    <input name="name"     onChange={this.handleInputChange} type="text"  value={this.state.project.name} /></li>
                        <li><label>Date:</label>    <input name="date"     onChange={this.handleInputChange} type="text"  value={this.state.project.date} /></li>
                        <li><label>Contact:</label> <input name="contact"  onChange={this.handleInputChange} type="text"  value={this.state.project.contact} /></li>
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

    // create/update - there is only one save button
    async saveProject(project) {
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
