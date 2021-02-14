using System.Collections.Generic;
using Assessment.Models;
using Microsoft.AspNetCore.Mvc;

namespace Assessment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private IList<Employee> Employees { get; set; }
        public EmployeeController()
        {
            Employees = GenerateEmployees();
        }

        private IList<Employee> GenerateEmployees()
        {
            Employees.Add(new Employee
            { 
                Name = "John Smith",
                EmailDefault = "johns@twgi.com"
            });

            Employees.Add(new Employee
            {
                Name = "Monique Unique",
                EmailDefault = "moniqueu@twgi.com"
            });

            Employees.Add(new Employee
            {
                Name = "Elmer Dicket",
                EmailDefault = "elmerd@twgi.com"
            });

            Employees.Add(new Employee
            {
                Name = "John Doe",
                // Doug - probably should've asked to if was OK to change email
                // from johns -> johnd *sorry/shrug emoji*
                EmailDefault = "johnd@twgi.com"
            });

            return Employees;
        }

        [HttpGet]
        public IList<Employee> Get()
        {
            return Employees;
        }

    }
}
