<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: query(pagina) }">{{pagina}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",

  data() {
    return {
      range: 10,
    };
  },

  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },

  computed: {
    paginas() {
      const current = Number(this.$route.query._page);
      const range = this.range;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) pagesArray.push(i);
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);

      return pagesArray;
    },

    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      console.log(total);
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers";

ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;

  a {
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;
    transition: all 0.3s;

    &:hover,
    &.router-link-exact-active {
      background: $cor-02;
      color: #fff;
    }
  }
}
</style>