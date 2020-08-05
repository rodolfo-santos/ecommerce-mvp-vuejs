import { http } from "./config";

export default {
  getUsuario: (id) => {
    return http.get(`/usuario/${id}`);
  },

  postUsuario: (obj) => {
    return http.post(`/usuario`, obj);
  },
};
