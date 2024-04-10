<template>
  <div class="home">
    <div><h1>MY RESUME</h1></div>
    <header>
      <div class="photo">
        <img src="../assets/my-photo.jpg" alt="my photo" />
      </div>

      <div class="contact">
        <h2>Contact Details</h2>
        <h3>Romari Bartley</h3>
        <h3>romari_12345@yahoo.com</h3>
        <h3>561-410-8124</h3>
      </div>
    </header>
    <main>
      <ul id="cards">
        <li class="card" id="card_1">
          <div class="card__content">
            <div>
              <h2>EDUCATIONAL BACKGROUND</h2>
              <div class="info">
                <div
                  :class="`info${education.id}`"
                  :key="education.id"
                  v-for="education in educations"
                >
                  <p>
                    {{ education.institution }}<br />
                    {{ education.degree }}<br />
                    {{ education.date }} <br />
                  </p>
                  <br />
                </div>
              </div>
              <router-link to="/edu" class="btn btn--accent"
                >Read more</router-link
              >
            </div>
            <figure>
              <img src="../assets/edu.jpg" alt="Image description" />
            </figure>
          </div>
        </li>
        <li class="card" id="card_2">
          <div class="card__content">
            <div>
              <h2>PERSONAL PROJECTS</h2>
              <div class="info">
                <div
                  :class="`info${project.id}`"
                  :key="project.id"
                  v-for="project in projects"
                >
                  <p>
                    {{ project.name }}<br />
                    {{ project.details }}<br />
                    {{ project.date }} <br />
                  </p>
                  <br />
                </div>
              </div>

              <router-link to="/projects" class="btn btn--accent"
                >Read more</router-link
              >
            </div>
            <figure>
              <img src="../assets/projects.jpg" alt="Image description" />
            </figure>
          </div>
        </li>
        <li class="card" id="card_3">
          <div class="card__content">
            <div>
              <h2>WORK EXPERIENCE</h2>
              <div class="info">
                <div
                  :class="`info${work.id}`"
                  :key="work.id"
                  v-for="work in works"
                >
                  <p>
                    {{ work.postion }}<br />
                    {{ work.company }}<br />
                    {{ work.details }} <br />
                  </p>
                  <br />
                </div>
              </div>
              <router-link to="/work" class="btn btn--accent"
                >Read more</router-link
              >
            </div>
            <figure>
              <img src="../assets/work.png" alt="Image description" />
            </figure>
          </div>
        </li>
        <li class="card" id="card_4">
          <div class="card__content">
            <div>
              <h2>TECHNICAL SKILLS</h2>
              <div class="info">
                <div
                  :class="`info${skill.id}`"
                  :key="skill.id"
                  v-for="skill in skills"
                >
                  <p>
                    {{ skill.line1.join(", ") }}<br />
                    {{ skill.line2.join(", ") }}<br />
                  </p>
                  <br />
                </div>
              </div>
              <router-link to="/skills" class="btn btn--accent"
                >Read more</router-link
              >
            </div>
            <figure>
              <img src="../assets/skills.png" alt="Image description" />
            </figure>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      educations: [
        {
          id: "1",
          institution: "Florida Atlantic University",
          date: "2020-2023",
          degree: "B.S. in Computer Science (AI Minor)",
        },
        {
          id: "2",
          institution: "Portmore Community College",
          date: "2016-2018",
          degree: "A.S. in CS&E",
        },
        {
          id: "3",
          institution: "St. Georges College High School",
          date: "2009-2015",
          degree: "High School Diploma",
        },
      ],
      projects: [
        {
          id: "1",
          name: "Angular Task Manager",
          date: "2024",
          details: "Using TypeScript and SCSS",
        },
        {
          id: "2",
          name: "React Shopping Cart",
          date: "2024",
          details: "Mongoose, Node.js and Express.js",
        },
        {
          id: "3",
          name: "Vue Resume",
          date: "2024",
          details: "Featuring a scrolling card animation",
        },
      ],
      works: [
        {
          id: "1",
          postion: "Online Instructor (2023-2024)",
          company: "iD Tech",
          details: "Teaching Python, JavaScript, HTML and CSS",
        },
        {
          id: "2",
          postion: "Network/Technical Officer (2018)",
          company: "Ministry of Finance",
          details: "Troubleshooting hardware/network issues",
        },
        {
          id: "3",
          postion: "Network/Technical Officer (2017)",
          company: "Ministry of Finance",
          details: "Troubleshooting hardware/network issues",
        },
      ],
      skills: [
        {
          id: "1",
          line1: ["Angular", "React", "Vue"],
          line2: ["TypeScript", "API", "MongoDB"],
        },
        {
          id: "2",
          line1: ["C++", "Java", "Python", "SQL"],
          line2: ["JavaScript", "SCSS", "CSS", "HTML"],
        },
        {
          id: "3",
          line1: ["AI", "Deep Learning", "Data Mining", "Data Science"],
          line2: ["Machine Learning", "Linux", "Shell Script"],
        },
      ],
    };
  },
});
</script>

<style>
:root {
  --card-height: 40vw;
  --card-margin: 4vw;
  --card-top-offset: 0.5em;
  --outline-width: 0px;
}

#cards {
  /* Make place at bottom, as items will slide to that position*/
  padding-bottom: calc(var(--numcards) * var(--card-top-offset));
  /* Don't include the --card-margin in padding, as that will affect the scroll-timeline*/
  margin-bottom: var(--card-margin);
}

#card_1 {
  --index: 1;
}

#card_2 {
  --index: 2;
}

#card_3 {
  --index: 3;
}

#card_4 {
  --index: 4;
}

.card {
  position: sticky;
  top: 0;
  padding-top: calc(var(--index) * var(--card-top-offset));
}

.card__content {
  transform-origin: 50% 0%;
  will-change: transform;
}

/** PAGE STYLING **/

main * {
  /* Poor Man's Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: rgb(7, 1, 54);
  color: rgb(255, 255, 255);

  font-size: calc(1em + 0.5vw);
}

main {
  width: 80vw;
  margin: 0 auto;
  text-align: center;
}

header {
  background-color: antiquewhite;
  color: black;
  width: 50%;
  border: 3px solid #42b983;
  display: grid;
  grid-area: "image" "text";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 10px;
  margin-bottom: 50px;
  /* align-items: center; */
}
header > .photo {
  background-color: #42b983;
  border: 5px solid black;
  padding: 10px;
  margin: auto auto;
}
header > .contact {
  margin: auto auto;
}
header > div {
  /* height: 100vh; */
  /* display: grid;
  place-items: center; */
}
header > div > img {
  height: 100%;
  width: 80%;
  border-radius: 50%;
  border: 5px solid black;
  justify-content: center;
  /* border: 10px solid black; */
  /* height: 100vh; */
  /* display: grid;
  place-items: center; */
}

#cards {
  list-style: none;
  outline: calc(var(--outline-width) * 10) solid hotpink;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(var(--numcards), var(--card-height));
  gap: var(--card-margin);
}

.card {
  outline: var(--outline-width) solid lime;
}

.card__content {
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  /* background: rgb(255, 255, 255); */
  background: antiquewhite;
  color: rgb(10, 5, 7);
  border-radius: 1em;
  overflow: hidden;
  border: 3px solid#42b983;
  display: grid;
  grid-template-areas: "text img";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  align-items: stretch;
  outline: var(--outline-width) solid blue;
}

.card__content > div {
  grid-area: text;
  width: 80%;
  place-self: center;
  text-align: left;
  display: grid;
  gap: 1em;
  place-items: start;
}

.card__content > figure {
  grid-area: img;
  overflow: hidden;
}

.card__content > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

main h1 {
  font-weight: 300;
  font-size: 3.5em;
}

main h2 {
  font-weight: 300;
  font-size: 2.5em;
}

main p {
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1.42;
}

main .btn {
  background: #42b983;
  color: rgb(255 255 255);
  text-decoration: none;
  display: inline-block;
  padding: 0.5em;
  border-radius: 0.25em;
  position: absolute;
  bottom: 0;
  margin-bottom: 1%;
  /* padding-bottom: 10px; */
}

aside {
  width: 50vw;
  margin: 0 auto;
  text-align: left;
}

aside p {
  margin-bottom: 1em;
}

@supports (animation-timeline: view()) {
  .card {
    --index0: calc(var(--index) - 1); /* 0-based index */
    --reverse-index: calc(var(--numcards) - var(--index0)); /* reverse index */
    --reverse-index0: calc(
      var(--reverse-index) - 1
    ); /* 0-based reverse index */
  }

  @keyframes scale {
    to {
      transform: scale(calc(1.1 - calc(0.15 * var(--reverse-index))));
      filter: brightness(30%);
    }
  }

  #cards {
    --numcards: 4;
    view-timeline-name: --cards-element-scrolls-in-body;
  }

  .card__content {
    --start-range: calc(var(--index0) / var(--numcards) * 100%);
    --end-range: calc((var(--index)) / var(--numcards) * 100%);

    animation: linear scale forwards;
    animation-timeline: --cards-element-scrolls-in-body;
    animation-range: exit-crossing var(--start-range) exit-crossing
      var(--end-range);
  }

  .info {
    position: relative;
    width: 100%;
  }

  .info1 {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation-name: fade1;
    animation-duration: 9s;
    animation-iteration-count: infinite;
  }

  .info2 {
    position: absolute;
    opacity: 0;
    animation-name: fade2;
    animation-duration: 9s;
    animation-iteration-count: infinite;
  }

  .info3 {
    position: absolute;
    opacity: 0;
    animation-name: fade3;
    animation-duration: 9s;
    animation-iteration-count: infinite;
  }

  @keyframes fade1 {
    0% {
      opacity: 0;
    }
    3% {
      opacity: 1;
    }
    31% {
      opacity: 1;
    }
    33% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade2 {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 0;
    }
    36% {
      opacity: 1;
    }
    64% {
      opacity: 1;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade3 {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    69% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
