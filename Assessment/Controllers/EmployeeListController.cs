using System;
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
            // SELECT * from Employees
            return EmployeeList;
        } 

        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            Employee employee = EmployeeList.FirstOrDefault(e => e.ID == id);




            return employee;
        }

        //[HttpPost]
        //public IList<Employee> EditEmployee(Employee employee) // AUDRY - this may be json stuff
        //{
        //    // UPDATE Employees WHERE EmployeeID = employee.employeeID
        //    Employee employeeToEdit = 
        //    Employees.Add(employee);
        //    return Employees;
        //}


    }
}
