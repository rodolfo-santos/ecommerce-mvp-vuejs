<template>
  <section class="produtos-contatiner">
    <div v-if="produtos && produtos.length" class="produtos">
      <div v-for="produto in produtos" :key="produto.id" class="produto">
        <router-link to="/">
          <img />
          <p class="preco">{{ produto.preco }}</p>
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p class="descricao">{{ produto.descricao }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p class="sem-resultados">Busca sem resultados. Tente buscar outro termo.</p>
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

<style lang="scss" scoped>
@import "@/assets/scss/helpers";

.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  @extend %shadow-02;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    @extend %shadow-03;
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }

  img {
    border-radius: 4px;
    margin-bottom: 20px;
  }
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: $cor-04;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
