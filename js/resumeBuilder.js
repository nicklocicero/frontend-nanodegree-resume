//var formattedName = HTMLheaderName.replace("%data%", "Nicholas LoCicero");
//var formattedtitle = HTMLheadertitle.replace("%data%", "Web Developer");

//$("#header").append([formattedName, formattedtitle]);


var bio = {
  "name": "Nicholas LoCicero",
  "title": "Web Developer",
  "mobile": "818.426.8117",
  "email": "nick.locicero@gmail.com",
  "twitter": "<a href='https://twitter.com/viraldreams' class='header-a'>@viraldreams</a>",
  "github": "<a href='https://github.com/nicklocicero' class='header-a'>nicklocicero</a>",
  "location": "Santa Maria, CA",
  "pic": "http://s3-2.kiva.org/img/w800/451751.jpg",
  "welcomeMsg": "I thirst for change and positive technological disruption!",
  "skills": ["hacking", "web-development", "resourcefulness", "acting"]
};

var education = {
  "schools": [
      {
          "school": "UC Berkeley",
          "major": "Art Practice",
          "minor": "Theater",
          "years": "2005 to 2010",
          "location": "Berkeley, CA",
          "graduation": "2010"
      },
      {
          "school": "Udacity",
          "major": "Nanodegree: Front-End Web Dev",
          "years": "2015",
          "location": "Santa Maria, CA",
          "graduation": "2015"
      },
      {
          "school": "Coursera",
          "major": "Specialization: Music",
          "years": "2014 - 2015",
          "location": "Albuquerque, NM",
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
      "description": "Self employed actor.",
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
      "image": "images/grocery.jpg"
    },
    {
      "title": "Fractal Maze",
      "dates": "January - March 2014",
      "description": "Generate fractals that are mazes and give to friends, or solve yourself.",
      "image": "images/fractal.jpg"
    },
    {
      "title": "Digital Synth",
      "dates": "January - March 2014",
      "description": "Make new sounds with an interactive, digi synth.",
      "image": "images/synth.jpg"
    }
  ]
}

$("#mapDiv").append(googleMap);

//$("#main").append([bio.currentJob, education["school"]]);

//$("#header").append([bio]);
