<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <a href="#">fasdfsa</a>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/helpers";

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  @extend %font-01;
  color: $cor-01;
  background: url("./assets/pattern.svg") repeat top;
}

a {
  color: $cor-01;
  list-style: none;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: $cor-02;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  @extend %shadow-01;
  transition: all 0.3s;
  border: none;
  @extend %font-01;
  cursor: pointer;

  &:hover {
    background: $cor-03;
    transform: scale(1.1);
  }
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
