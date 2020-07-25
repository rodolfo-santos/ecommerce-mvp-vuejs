<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek" />
      </router-link>
      <router-link class="btn" to="/login"> Vender / Login </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers";

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  @extend %shadow-02;
}

.logo {
  padding: 10px 0;

  img {
    width: 90px;
  }
}
</style>
