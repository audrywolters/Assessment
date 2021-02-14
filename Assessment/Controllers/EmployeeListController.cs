using System.Collections.Generic;
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
            EmployeeList = GenerateEmployees();
        }

        [HttpGet]
        public IList<Employee> Get()
        {
            // SELECT * from Employees
            return EmployeeList;
        }

        //[HttpPost]
        //public IList<Employee> EditEmployee(Employee employee) // AUDRY - this may be json stuff
        //{
        //    // UPDATE Employees WHERE EmployeeID = employee.employeeID
        //    Employee employeeToEdit = 
        //    Employees.Add(employee);
        //    return Employees;
        //}

        private IList<Employee> GenerateEmployees()
        {
            EmployeeList = new List<Employee>
            {
                // pretend this is an Employee table
                new Employee
                {
                    ID = 1, // <- Primary Key on Employees Table
                    Name = "John Smith",
                    EmailDefault = "johns@twgi.com"
                },

                new Employee
                {
                    ID = 2,
                    Name = "Monique Unique",
                    EmailDefault = "moniqueu@twgi.com"
                },

                new Employee
                {
                    ID = 3,
                    Name = "Elmer Dicket",
                    EmailDefault = "elmerd@twgi.com"
                },

                new Employee
                {
                    ID = 4,
                    Name = "John Doe",
                    // Doug - in real life I would check w/ product owner before changing email
                    // from johnS -> johnD :0 (business card says johnS)
                    EmailDefault = "johnd@twgi.com"
                }
            };

            return EmployeeList;
        }
    }
}
