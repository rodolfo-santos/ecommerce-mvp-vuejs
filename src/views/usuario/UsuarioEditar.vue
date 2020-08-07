<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import UsuarioService from "@/services/usuario";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm,
  },

  methods: {
    atualizarUsuario() {
      UsuarioService.atualizar(
        this.$store.state.usuario.id,
        this.$store.state.usuario
      )
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style>
</style>