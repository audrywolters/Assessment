using System;
namespace Assessment.Models
{
    public class Project
    {
        // if there were a real database
        // ID would be the primary key
        public int ID { get; set; }

        public string Name { get; set; }

        public DateTime Date { get; set; }

        public string Contact { get; set; }
    }
}
