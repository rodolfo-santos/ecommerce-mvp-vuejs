<template>
  <footer>
    <p>Ranek, Alguns direitos Reservados</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers";

footer {
  background-color: $cor-02;
  padding: 25px 0;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  position: relative;
  top: 75px;
}
</style>
