using System.Collections.Generic;
using System.Linq;
using Assessment.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Assessment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeListController : ControllerBase
    {
        private IList<Employee> EmployeeList { get; set; }
        public EmployeeListController()
        {
            // initialize class to have stock employess
            // we want it to happen once
            // because users will be adding/deleting employees in front end
            // don't want to send the original, unedited listEmp
            EmployeeList = Employee.GenerateEmployees();
        }

        [HttpGet]
        public IList<Employee> Get()
        {
            // SELECT *
            // FROM Employees

            return EmployeeList;
        } 

        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            // SELECT *
            // FROM Employees
            // WHERE ID = @id

            Employee employee = EmployeeList.FirstOrDefault(e => e.ID == id);
            return employee;
        }

        [HttpPost("{employee}")]
        public IList<Employee> AddNewEmployeeData(string jsonEmployee)
        {
            // turn json string into C# object
            Employee newEmployee = JsonConvert.DeserializeObject<Employee>(jsonEmployee);

            // look to see if we are updating or creating
            Employee foundEmployee = EmployeeList.FirstOrDefault(e => e.ID == newEmployee.ID);
            if (foundEmployee == null)
            {
                // we are creating
                EmployeeList.Add(newEmployee);
            }
            else
            {
                // we're updating so replace
                EmployeeList.Remove(foundEmployee);
                EmployeeList.Add(newEmployee);
            }

            return EmployeeList;
        }

        [HttpDelete("{id}")]
        public IList<Employee> DeleteEmploye(int id)
        {
            // DELETE
            // FROM Employees
            // WHERE ID = @id

            Employee employeeToDelete = EmployeeList.FirstOrDefault(e => e.ID == id);
            EmployeeList.Remove(employeeToDelete);

            return EmployeeList;
        }
    }
}
