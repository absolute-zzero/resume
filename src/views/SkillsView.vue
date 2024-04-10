<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="skills">
    <div :key="skill.id" v-for="skill in skills" class="skill">
      {{ skill.skill }}
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillsView",
  data() {
    return {
      skills: [
        { id: "1", skill: "Angular" },
        { id: "2", skill: "React" },
        { id: "3", skill: "MongoDB" },
        { id: "4", skill: "API" },
        { id: "5", skill: "Java" },
        { id: "6", skill: "Python" },
        { id: "7", skill: "C++" },
        { id: "8", skill: "TypeScript" },
        { id: "9", skill: "JavaScript" },
        { id: "10", skill: "SCSS" },
        { id: "11", skill: "CSS" },
        { id: "12", skill: "SQL" },
        { id: "13", skill: "Linux" },
        { id: "14", skill: "Shell Script" },
        { id: "15", skill: "Artificial Intelligence" },
        { id: "16", skill: "Data Mining" },
        { id: "17", skill: "Deep Learning" },
        { id: "18", skill: "Machine Learning" },
        { id: "19", skill: "Data Science" },
        { id: "20", skill: "Node.js" },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  background-color: antiquewhite;
  color: black;
  width: 400px;
  height: 450px;
  border: 2px solid #42b983;
  margin: 30px auto;
  overflow-y: scroll;
}

.skills > .skill {
  border: 1px solid #42b983;
}

.skills > .skill:hover {
  scale: 1.2;
  border: 2px solid #42b983;
}
</style>
