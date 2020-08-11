<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="produto.nome" />
    <label for="preco">Preço (R$)</label>
    <input id="preco" name="preco" type="number" v-model="produto.preco" />
    <label for="preco">Fotos</label>
    <input id="fotos" name="fotos" type="file" ref="fotos" />
    <label for="preco">Descrição</label>
    <textarea id="descricao" name="descricao" type="text" v-model="produto.descricao"></textarea>
    <input class="btn" type="button" @click.prevent="adicionarProduto" value="Adicionar Produto" />
  </form>
</template>

<script>
import ProdutoService from "@/services/produto";

export default {
  name: "ProdutoAdicionar",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
        usuario_id: "",
        vendido: "false",
      },
    };
  },

  methods: {
    formatarProduto() {
      this.produto.usuario_id = this.$store.state.usuario.id;
    },

    adicionarProduto() {
      this.formatarProduto();
      ProdutoService.adicionar(this.produto).then(() => {
        this.$store.dispatch("getUsuarioProdutos");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>