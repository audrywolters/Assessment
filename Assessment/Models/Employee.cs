using System;
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
