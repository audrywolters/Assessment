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
            // initialize class - supposedly
            // cannot figure out how to NOT hit this everytime I access
            // it overwrites any new project I add
            // there is a simple answer
            ProjectList = Project.GenerateProjects();
        }
        
        [HttpGet]
        public IList<Project> Get()
        {
            // SELECT Name, ...
            // FROM Projects

            return ProjectList;
        }
        
        [HttpPost("{jsonProject}")]
        public IList<Project> SaveProject (string jsonProject)
        {
            // turn json string into C# object
            Project newProject = JsonConvert.DeserializeObject<Project>(jsonProject);

            // look to see if we are updating or creating
            Project foundProject = ProjectList.FirstOrDefault(p => p.ID == newProject.ID);
            if (foundProject == null)
            {
                // INSERT INTO Projects (Name ...)
                // VALUES ('Build Bird House', ...);

                // we are creating
                // give new project a "primary key"
                newProject.ID = ProjectList.Count() + 1;
                ProjectList.Add(newProject);
            }
            else
            {
                // UPDATE Projects
                // SET Name = @name, ...
                // WHERE ID = @id

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
