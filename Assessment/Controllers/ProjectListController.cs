using System.Collections.Generic;
using System.Linq;
using Assessment.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Assessment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectListController : ControllerBase
    {
        private IList<Project> ProjectList { get; set; }
        public ProjectListController()
        {
            // initialize class to have stock employess
            // we want it to happen once
            // because users will be adding/deleting projects in front end
            // don't want to send the original, unedited listEmp
            ProjectList = Project.GenerateProjects();
        }
        
        [HttpGet]
        public IList<Project> Get()
        {
            // SELECT *
            // FROM Projects

            return ProjectList;
        } 

        [HttpGet("{id}")]
        public Project Get(int id)
        {
            // SELECT *
            // FROM Projects
            // WHERE ID = @id

            Project project = ProjectList.FirstOrDefault(e => e.ID == id);
            return project;
        }

        [HttpPost("{project}")]
        public IList<Project> AddNewProjectData(string jsonProject)
        {
            // turn json string into C# object
            Project newProject = JsonConvert.DeserializeObject<Project>(jsonProject);

            // look to see if we are updating or creating
            Project foundProject = ProjectList.FirstOrDefault(e => e.ID == newProject.ID);
            if (foundProject == null)
            {
                // we are creating
                ProjectList.Add(newProject);
            }
            else
            {
                // we're updating so replace
                ProjectList.Remove(foundProject);
                ProjectList.Add(newProject);
            }

            return ProjectList;
        }

        [HttpDelete("{id}")]
        public IList<Project> DeleteProject(int id)
        {
            // DELETE
            // FROM Projects
            // WHERE ID = @id

            Project projectToDelete = ProjectList.FirstOrDefault(e => e.ID == id);
            ProjectList.Remove(projectToDelete);

            return ProjectList;
        }
    }
}
