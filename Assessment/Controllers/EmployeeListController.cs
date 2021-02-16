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
            // initialize class - supposdley
            // cannot figure out how to NOT hit this everytime I access
            // it overwrites any new employee I add
            // there is a simple answer
            EmployeeList = Employee.GenerateEmployees();
        }

        [HttpGet]
        public IList<Employee> Get()
        {
            // SELECT Name, ...
            // FROM Employees

            return EmployeeList;
        } 

        //[HttpGet("{id}")]
        //public Employee Get(int id)
        //{
        //    // SELECT Name, ...
        //    // FROM Employees
        //    // WHERE ID = @id

        //    Employee employee = EmployeeList.FirstOrDefault(e => e.ID == id);
        //    return employee;
        //}

        [HttpPost("{jsonEmployee}")]
        public IList<Employee> SaveEmployee (string jsonEmployee)
        {
            // turn json string into C# object
            Employee newEmployee = JsonConvert.DeserializeObject<Employee>(jsonEmployee);

            // look to see if we are updating or creating
            Employee foundEmployee = EmployeeList.FirstOrDefault(e => e.ID == newEmployee.ID);
            if (foundEmployee == null)
            {
                // INSERT INTO Employees (Name ...)
                // VALUES ('Steven Sondheim', ...);

                // we are creating
                // give new employee a "primary key"ß
                newEmployee.ID = EmployeeList.Count() + 1;
                EmployeeList.Add(newEmployee);
            }
            else
            {
                // UPDATE Employees
                // SET Name = @name, ...
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
