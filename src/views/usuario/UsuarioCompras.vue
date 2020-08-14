<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div class="produtos-wrapper" v-for="(compra, index) in compras" :key="index">
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor:</span>
            {{compra.vendedor_id}}
          </p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";
import TransacaoService from "@/services/transacao";
import { mapState } from "vuex";

export default {
  name: "UsuarioCompras",
  components: {
    ProdutoItem,
  },
  data() {
    return {
      compras: null,
    };
  },

  computed: {
    ...mapState(["usuario", "login"]),
  },

  methods: {
    getCompras() {
      TransacaoService.ListaDeCompras(this.usuario.id).then((res) => {
        this.compras = res.data;
      });
    },
  },

  watch: {
    login() {
      this.getCompras();
    },
  },

  created() {
    if (this.login) this.getCompras();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers";

.produto-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: $cor-04;
}
</style>