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
  "skills": ["hacking", "web-development", "resourcefulness", "acting"],
  "display": function () {
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedHeaderName);

    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.title);
    $("#header").append(formattedHeaderRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.location);
    var formattedBio = HTMLbioPic.replace("%data%", bio.pic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $('#header').append(formattedMobile);
    $('#header').append(formattedEmail);
    $('#header').append(formattedTwitter);
    $('#header').append(formattedGithub);
    $('#header').append(formattedLocation);
    $('#header').append(formattedBio);
    $('#header').append(formattedWelcome);

    if(bio.skills.length > 0) {

      $("#header").append(HTMLskillsStart);

      for(i in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
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
  ],
  "display": function() {
    for(school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].school);
      $(".education-entry:last").append(formattedSchool);

      var formattedMajor = HTMLschoolDegree.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);
    }
  }
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
  ],
  "display": function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);


      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      if(work.jobs[job].employer === "Self Employed") {
        formattedEmployer = formattedEmployer.replace("#", "http://www.imdb.com/name/nm3002094/");
      }
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
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
  ],
  "display": function() {
    for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
      $(".project-entry:last").append(formattedImage);
    }
  }
}

$("#mapDiv").append(googleMap);

//$("#main").append([bio.currentJob, education["school"]]);

//$("#header").append([bio]);
