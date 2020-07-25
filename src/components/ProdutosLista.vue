<template>
  <section class="produtos-contatiner">
    <div v-for="produto in produtos" :key="produto.id">
      <img />
      <p>{{ produto.preco }}</p>
      <h2 class="titulo">
        {{ produto.nome }}
      </h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import produto from "@/services/produto";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
    };
  },

  methods: {
    getProdutos() {
      produto.listar().then((response) => {
        this.produtos = response.data;
      });
    },
  },

  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
