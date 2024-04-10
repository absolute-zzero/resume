<template>
  <h1>WORK EXPERIENCE</h1>
  <div class="works">
    <div class="work">
      <h2>Online Instructor</h2>
      <h3>2023-2024</h3>
      <h4>iD Tech</h4>
      <h5>
        Teaching kids and teens (ages 7-18) lessons in Python, HTML, CSS, and
        JavaScript.
      </h5>
    </div>
    <div class="work">
      <h2>Network/Technical Officer</h2>
      <h3>2018</h3>
      <h4>Ministry of Finance</h4>
      <h5>Troubleshooting hardware/network issues</h5>
    </div>

    <div class="work">
      <h2>Network/Technical Officer</h2>
      <h3>2017</h3>
      <h4>Ministry of Finance</h4>
      <h5>Troubleshooting hardware/network issues</h5>
    </div>
  </div>
</template>

<style scoped>
.works {
  display: flex;
}
.works > .work {
  flex: 1;
  margin: 10px;
  background-color: antiquewhite;
  color: black;
  border: 2px solid #42b983;
}
h3 {
  margin-top: -20px;
  text-align: center;
  /* padding-left: 10px; */
}
h2,
h4,
h5 {
  text-align: center;
}
</style>
