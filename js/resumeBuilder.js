//var formattedName = HTMLheaderName.replace("%data%", "Nicholas LoCicero");
//var formattedtitle = HTMLheadertitle.replace("%data%", "Web Developer");

//$("#header").append([formattedName, formattedtitle]);


var bio = {
  "name": "Nicholas LoCicero",
  "title": "Web Developer",
  "contactInfo": "Twitter @viraldreams",
  "picURL": "http://s3-2.kiva.org/img/w800/451751.jpg",
  "welcomeMessage": "Thank you for coming by!",
  "skills": ["hacking", "web-development", "resourcefulness"]
};

var education = {
  "schools": [
      {
          "school": "UC Berkeley",
          "majors": ["Art Practice"],
          "minor": ["Theater"],
          "years": "2005 to 2010",
          "city": "Berkeley, CA",
          "graduation": "2010"
      },
      {
          "school": "Udacity",
          "major": "Nanodegree: Front-End Web Dev",
          "years": "2015",
          "city": "online",
          "graduation": "2015"
      },
      {
          "school": "Coursera",
          "major": "Specialization in Music",
          "years": "2014 - 2015",
          "city": "online",
          "graduation": "2015"
      }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Zipfian Academy",
      "title": "Consultant",
      "location": "San Francisco, CA",
      "description": "Lead Generator for employer database and student Career Services.",
      "dates": "March 2014"
    },
    {
      "employer": "Hack Reactor",
      "title": "Consultant",
      "location": "San Francisco, CA",
      "description": "Lead Generator for employer database and student Career Services.",
      "dates": "January 2014 - April 2014"
    },
    {
      "employer": "Task Rabbit",
      "title": "Task Rabbit",
      "location": "San Francisco, CA",
      "description": "Task Rabbit for Uber, Pinterest, Hipchat, Twilio, and families.",
      "dates": "September 2013 - April 2014"
    },
    {
      "employer": "Self Employed",
      "title": "Actor",
      "location": "Los Angeles, CA",
      "description": "Self employed actor. <a href='http://imdb.com/name/nm3002094/' target='_blank'>Check out my iMDB Resume!</a>",
      "dates": "2007 - Present"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Python Grocery",
      "dates": "January - March 2014",
      "description": "Get a grocery list of foods that contain all nutrients your body needs.",
      "pictures": "http://lorempixel.com/400/200/"
    },
    {
      "title": "Fractal Maze",
      "dates": "January - March 2014",
      "description": "Generate fractals that are mazes and give to friends, or solve yourself.",
      "pictures": "http://lorempixel.com/400/200/"
    },
    {
      "title": "Starbucks Digi Kitchen",
      "dates": "January - March 2014",
      "description": "Make new drinks by playing around with all the ingredients in a Starbucks kitchen.",
      "pictures": "http://lorempixel.com/400/200/"
    }
  ]
}

$("#mapDiv").append(googleMap);

//$("#main").append([bio.currentJob, education["school"]]);

//$("#header").append([bio]);
