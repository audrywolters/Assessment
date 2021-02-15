using System;
using System.Collections.Generic;

namespace Assessment.Models
{
    public class Employee
    {
        // "primary key"
        public int ID { get; set; }

        public string Name { get; set; }

        public string EmailDefault { get; set; }

        public string PhoneNumberDirect { get; set; }

        public string FaxDefault { get; set; }

        // AUDRY - move to Model
        public static IList<Employee> GenerateEmployees()
        {
            return new List<Employee>
            {
                // pretend this is the Employee table
                new Employee
                {
                    ID = 1, // <- Primary Key on Employees Table
                    Name = "John Smith",
                    EmailDefault = "johns@twgi.com",
                    PhoneNumberDirect = "612-555-1234",
                    FaxDefault = "612-555-4321"
                },

                new Employee
                {
                    ID = 2,
                    Name = "Monique Unique",
                    EmailDefault = "moniqueu@twgi.com",
                    PhoneNumberDirect = "612-555-1235",
                    FaxDefault = "612-555-5321"
                },

                new Employee
                {
                    ID = 3,
                    Name = "Elmer Dickett",
                    EmailDefault = "elmerd@twgi.com",
                    PhoneNumberDirect = "612-555-1236",
                    FaxDefault = ""
                },

                new Employee
                {
                    ID = 4,
                    Name = "John Doe",
                    // Doug - in real life I would check w/ product owner
                    // about email having a typo. it should probably be johnD
                    EmailDefault = "johns@twgi.com",
                    PhoneNumberDirect = "612-555-1237",
                    FaxDefault = "612-555-7321"
                }
            };

           // return EmployeeList;
        }
    }

    // AUDRY - extra if we get to it
    // represents 2 tables
    //public class Tele
    //{
    //    public int EmployeeID { get; set; }

    //    public string TeleName { get; set; }

    //    public string TeleNumber { get; set; }
    //}

    //public class Email
    //{
    //    public int EmployeeID { get; set; }

    //    public string EmailName { get; set; }

    //    public string EmailAddress { get; set; }
    //}
}
