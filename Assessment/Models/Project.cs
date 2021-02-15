using System;
using System.Collections.Generic;

namespace Assessment.Models
{
    public class Project
    {
        // primary key
        public int ID { get; set; }

        public string Name { get; set; }

        public DateTime Date { get; set; }

        // forgien key!
        public int ContactID { get; set; }

        public string ContactName { get; set; }

        // pretend this is the Project Table
        public static IList<Project> GenerateProjects()
        {
            Console.Write("in generate projects");

            return new List<Project>
            {
                new Project
                {
                    ID = 1,
                    Name = "Alan Parsons Project",
                    Date = new DateTime(1970, 1, 23),
                    // imagine some groovy JOIN stuff happening
                    ContactID = 5,
                    ContactName = "Joseph Webb"
                },

                new Project
                {
                    ID = 2,
                    Name = "Take Out the Trash",
                    Date = new DateTime(2000, 11, 30),
                    ContactID = 4,
                    ContactName = "John Doe"
                },

                new Project
                {
                    ID = 3,
                    Name = "G2002.0100",
                    Date = new DateTime(2002, 2, 2),
                    ContactID = 9,
                    ContactName = "Susan Knutson"
                },

                new Project
                {
                    ID = 4,
                    Name = "G2003.0100",
                    Date = new DateTime(2003, 3, 3),
                    ContactID = 6,
                    ContactName = "Miles Close"
                }
            };
        }
    }
}
