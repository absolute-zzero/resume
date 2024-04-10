<template>
  <h1>PERSONAL PROJECTS</h1>
  <div class="projects">
    <div class="project">
      <h2>Angular Task Manager</h2>
      <h3>2024</h3>
      <h5>
        An Angular Task Manager app that utilizes TypeScript and SCSS for the
        front-end.
      </h5>
    </div>

    <div class="project">
      <h2>React Shopping Cart</h2>
      <h3>2024</h3>
      <h5>
        A React Shopping Cart app that is connected to a MongoDB backend via
        Mongoose, Node.js and Express.js
      </h5>
    </div>

    <div class="project">
      <h2>Vue Resume</h2>
      <h3>2024</h3>
      <h5>
        A Vue Resume app that displays my resume and showcases my skills in Vue
      </h5>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: flex;
}
.projects > .project {
  flex: 1;
  margin: 10px;
  background-color: antiquewhite;
  color: black;
  border: 2px solid #42b983;
}
h3 {
  margin-top: -15px;
  text-align: center;
  /* padding-left: 10px; */
}
h2,
h5 {
  text-align: center;
}
</style>
