import { http } from "./config";

export default {
  pegarUsuario: (id) => {
    return http.get(`/usuario/${id}`);
  },
};
