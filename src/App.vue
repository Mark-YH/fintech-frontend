<template>
  <div id="app">
    <vue-headful
            title="Lab 114 Fintech"
            description="Fintech"
            keywords="Fintech, QTS, Portfolio optimization"
    />
    <NavBar/>
    <Main/>
    <!-- <HelloWorld msg="We23 Vue.js App"/> -->
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar,
    Footer,
    Main,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
