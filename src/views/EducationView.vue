<template>
  <h1>EDUCATION</h1>
  <div class="container">
    <div class="schools">
      <h2>Florida Atlantic University</h2>
      <h3 class="heading">
        Bachelor of Science in Computer Science (AI Minor)
      </h3>
      <h5 class="date">2020 - 2023</h5>
      <h4 class="heading">Major Projects</h4>
      <h5 class="sub-heading">Nurse Management Application (2023)</h5>
      <ul>
        <li>Led a team that created a nurse management app using Java Swing</li>
        <li>
          Utilized several design patterns along with the serialization
          technique. Successfully Implemented the backend classes and methods
          which served as the system's foundation
        </li>
      </ul>
      <h5 class="sub-heading">Remote Data Collection System (2023)</h5>
      <ul>
        <li>
          Led a team that created a Linux-based, remote data collection system
          using NASA's HDTN software
        </li>
        <li>
          Compiled, installed, and configured the HDTN software (C++).
          Successfully created the shell scripts that established and handled
          the ad-hoc network that sent POST requests to the database
        </li>
      </ul>
      <h4 class="heading">Courses</h4>
      <ul>
        <li>Software Engineering</li>
        <li>Object-Oriented Design and Programming</li>
        <li>Artificial Intelligence</li>
        <li>Deep Learning</li>
        <li>Data Mining</li>
        <li>Data Science</li>
        <li>Data Structures</li>
        <li>Analysis of Algorithms</li>
        <li>Database Structures</li>
        <li>Web Development</li>
        <li>Cyber Security</li>
        <li>Microprocessor Systems</li>
      </ul>
    </div>
    <div class="schools">
      <h2>Portmore Community College</h2>
      <h3 class="heading">
        Associate of Science in Computer Servicing and Electronics Computer
      </h3>
      <h5 class="date">2016 - 2018</h5>
      <h4 class="heading">Courses</h4>
      <ul>
        <li>Programming</li>
        <li>System Administration</li>
        <li>Troubleshooting</li>
        <li>Networking</li>
        <li>Operating Systems</li>
        <li>Circuit Design</li>
      </ul>
    </div>
    <div class="schools">
      <h2 class="heading">St. Georges College High School</h2>
      <h5 class="date">2009 - 2015</h5>
      <h4 class="heading">Caribbean Advanced Proficiency Exam (2015)</h4>
      <ul>
        <li>Computer Science</li>
        <li>Geometrical & Mechanical Engineering Drawing</li>
        <li>Pure Math</li>
      </ul>
      <h4 class="heading">
        Caribbean Secondary Education Certificate (2013-2014)
      </h4>
      <ul>
        <li>Information Technology</li>
        <li>Physics</li>
        <li>Technical Drawing</li>
        <li>Mechanical Technology</li>
        <li>Mathematics</li>
      </ul>
    </div>
  </div>
</template>

<style>
.container {
  background-color: antiquewhite;
  color: black;
  width: 70%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 25px;
}

.schools {
  padding-bottom: 25px;
}

h2,
h3,
h4,
h5,
p,
li {
  text-align: left;
}

.heading {
  margin-bottom: -20px;
}

.sub-heading {
  margin-bottom: -20px;
  padding-left: 10px;
}

.date {
  padding-left: 10px;
}
</style>
