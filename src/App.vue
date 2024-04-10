<template>
  <nav>
    <router-link to="/" class="btn btn--accent">Home</router-link> |
    <router-link to="/about" class="btn btn--accent">About</router-link>
    <hr />
  </nav>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  /* color: #2c3e50; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

hr {
  /* color: #42b983; */
  border-color: #42b983;
}
</style>
