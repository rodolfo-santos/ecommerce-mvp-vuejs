<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'usuario'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'compras'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'vendas'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'usuario-editar'}">Editar Usuário</router-link>
        </li>
        <li>
          <button @click="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  nome: "Usuario",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers";

.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav {
  a,
  button {
    padding: 10px;
    display: block;
    background-color: #f4f7fc;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: 0.25s;
  }

  button {
    border: none;
    width: 100%;
    font-size: 1rem;
    text-align: left;
    @extend %font-01;
    cursor: pointer;
    transition: 0.05s;
  }

  a.router-link-exact-active,
  a:hover,
  button:hover {
    background: $cor-02;
    color: #fff;
  }
}
</style>