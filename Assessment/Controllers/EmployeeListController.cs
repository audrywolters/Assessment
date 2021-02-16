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
        public IList<Employee> EmployeeList;
        public EmployeeListController()
        {
            // initialize class - supposedly
            // cannot figure out how to NOT hit this everytime I access
            // it forgets any new employee I add
            EmployeeList = Employee.GenerateEmployees();
        }

        [HttpGet]
        public IList<Employee> Get()
        {
            // SELECT Name, ...
            // FROM Employees

            return EmployeeList;
        } 

        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            // SELECT Name, ...
            // FROM Employees
            // WHERE ID = @id

            Employee employee = EmployeeList.FirstOrDefault(e => e.ID == id);
            return employee;
        }

        [HttpPost("{jsonEmployee}")]
        public IList<Employee> UpdateCreateEmployee(string jsonEmployee)
        {
            // turn json string into C# object
            Employee newEmployee = JsonConvert.DeserializeObject<Employee>(jsonEmployee);

            // look to see if we are updating or creating
            Employee foundEmployee = EmployeeList.FirstOrDefault(e => e.ID == newEmployee.ID);
            if (foundEmployee == null)
            {
                // INSERT INTO Employees (Name ...)
                // VALUES ('Steven Sondheim' ...);

                // give new employee a "primary key"
                newEmployee.ID = EmployeeList.Count() + 1;
                // we are creating
                EmployeeList.Add(newEmployee);
            }
            else
            {
                // UPDATE Employees
                // SET Name = @name ...
                // WHERE ID = @id

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
