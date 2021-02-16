using System;
using System.Collections.Generic;

namespace Assessment.Models
{
    public class Project
    {
        // primary key
        public int ID { get; set; }

        public string Name { get; set; }

        // would love to make this DateTime but tick-tock
        public string Date { get; set; }

        // forgien key!
        // we're not going to use this for this project :D
        public int ContactID { get; set; }

        public string Contact { get; set; }

        // pretend this is the Project Table
        public static IList<Project> GenerateProjects()
        {
            return new List<Project>
            {
                new Project
                {
                    ID = 1,
                    Name = "Alan Parsons Project",
                    Date = "1970, 1, 23",
                    // imagine some groovy JOIN stuff happening (to employee table)
                    ContactID = 5,
                    Contact = "Joseph Webb"
                },

                new Project
                {
                    ID = 2,
                    Name = "Take Out the Trash",
                    Date = "2000, 11, 30",
                    ContactID = 4,
                    Contact = "John Doe"
                },

                new Project
                {
                    ID = 3,
                    Name = "G2002.0100",
                    Date = "2002, 2, 2",
                    ContactID = 9,
                    Contact = "Susan Knutson"
                },

                new Project
                {
                    ID = 4,
                    Name = "G2003.0100",
                    Date = "2003, 3, 3",
                    ContactID = 6,
                    Contact = "Miles Close"
                }
            };
        }
    }
}
