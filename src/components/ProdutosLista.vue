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
import { serializeQuery } from "@/helpers";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },

  methods: {
    getProdutos() {
      produto.listar().then((response) => {
        this.produtos = response.data;
      });
    },

    buscaProdutos() {
      produto.buscar(this.url, this.produtosPorPagina).then((response) => {
        this.produtos = response.data;
      });
    },
  },

  computed: {
    url() {
      return serializeQuery(this.$route.query);
    },
  },

  watch: {
    url() {
      this.buscaProdutos();
    },
  },

  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
