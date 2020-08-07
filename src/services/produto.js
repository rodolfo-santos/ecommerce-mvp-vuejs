import { http } from "./config";

export default {
  listar: () => {
    return http.get("produto");
  },

  buscar: (query, limit) => {
    if (limit === null) limit = 9;
    return http.get(`produto/?_limit=${limit}${query}`);
  },

  produto_unico: (id) => {
    return http.get(`produto/${id}`);
  },

  produtos_usuario: (id_usuario) => {
    return http.get(`produto?usuario_id=${id_usuario}`);
  },

  adicionar: (produto) => {
    return http.post(`produto`, produto);
  },

  deletar: (id) => {
    return http.delete(`produto/${id}`);
  },
};
