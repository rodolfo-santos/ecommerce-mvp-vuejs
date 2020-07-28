<template>
  <form action="">
    <input type="text" name="busca" id="busca" v-model="busca" />
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarProdutos"
    />
    {{ busca }}
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",

  data() {
    return {
      busca: "",
    };
  },

  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style></style>
