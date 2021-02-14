using System;
namespace Assessment.Models
{
    public class Employee
    {
        // if there were a real database
        // ID would be the primary key
        public int ID { get; set; }

        public string Name { get; set; }

        public string EmailDefault { get; set; }

        // would love to make this int
        // but that would involve a chunk of time
        // something like:
        // public int AreaCode = 612
        // public int Prefix = 555
        // public int Subscriber = 1234
        // not super necessary
        public string PhoneDirect { get; set; }
    }
}
