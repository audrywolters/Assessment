using System.Collections.Generic;
using System.Linq;
using Assessment.Models;
using Microsoft.AspNetCore.Mvc;

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

        [HttpPut("{employee}")]
        public IList<Employee> EditEmployee(Employee employee)
        {
            // UPDATE Employees
            // SET Name = @name, ... 
            // WHERE ID = @id

            Employee employeeToEdit = EmployeeList.FirstOrDefault(e => e.ID == employee.ID);

            // AUDRY - fix
            //employeeToEdit = employee;

            return null;
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
