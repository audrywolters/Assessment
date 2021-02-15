using System.Collections.Generic;

namespace Assessment.Models
{
    public class Employee
    {
        // "primary key"
        public int ID { get; set; }

        public string EmailDefault { get; set; }

        public string EmailHome { get; set; }

        public string FaxDefault { get; set; }

        // ideally it would be nice to have seperate
        // tele and email tables - clearers/safer
        // and would allow user to create custom contact types
        // i.e. "Landline: 612-555-0000" 
        public string FaxHome { get; set; }

        public string IsActive { get; set; }

        public string PhoneCell { get; set; }

        public string PhoneDirect { get; set; }

        public string PhoneHome { get; set; }

        public string Name { get; set; }

        public string Title { get; set; }

        // pretend this is the Employee Table
        public static IList<Employee> GenerateEmployees()
        {
            return new List<Employee>
            {
                new Employee
                {
                    ID = 1,
                    EmailDefault = "johns@twgi.com",
                    FaxDefault = "612-555-4321",
                    Name = "John Smith",
                    PhoneDirect = "612-555-1234",
                    Title = "AIA"
                },

                new Employee
                {
                    ID = 2,
                    EmailDefault = "moniqueu@twgi.com",
                    FaxDefault = "612-555-5321",
                    Name = "Monique Unique",
                    PhoneDirect = "612-555-1235",
                    Title = "CIC"
                },

                new Employee
                {
                    ID = 3,
                    EmailDefault = "elmerd@twgi.com",
                    PhoneCell = "612-333-6321",
                    PhoneDirect = "612-555-1236",
                    PhoneHome = "612-555-0102",
                    Name = "Elmer Dickett"
                },

                new Employee
                {
                    ID = 4,
                    // Doug - in real life I would check w/ product owner
                    // about email having a typo. it should probably be johnD
                    EmailDefault = "johns@twgi.com",
                    FaxDefault = "612-555-7321",
                    PhoneCell = "612-555-9900",
                    PhoneDirect = "612-555-1237",
                    Name = "John Doe",
                    Title = "AIA"
                }
            };
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
