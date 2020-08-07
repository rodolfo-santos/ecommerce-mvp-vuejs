<template>
  <section>
    <h2>Lista de Produtos</h2>
    <ProdutoAdicionar />
    <h2>Seus Produtos</h2>
    <transition-group name="list" tag="ul" v-if="usuario_produtos">
      <li v-for="(produto) in usuario_produtos.slice().reverse()" :key="produto.id">
        <ProdutoItem :produto="produto">
          <p>{{produto.descricao}}</p>
          <button class="deletar" @click="deletarProduto(produto.id)">Deletar</button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapState, mapActions } from "vuex";
import ProdutoService from "@/services/produto";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutoAdicionar,
    ProdutoItem,
  },

  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"]),
  },

  methods: {
    ...mapActions(["getUsuarioProdutos"]),
    deletarProduto(id) {
      const confirmar = window.confirm("Deseja remover este produto?");
      if (confirmar) {
        ProdutoService.deletar(id)
          .then(() => {
            this.getUsuarioProdutos();
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },

  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },

  created() {
    if (this.login) this.getUsuarioProdutos();
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transition: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  height: 24px;
  width: 40px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
  opacity: 0.5;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }
}
</style>