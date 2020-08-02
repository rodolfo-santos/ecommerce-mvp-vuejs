import { http } from "./config";

export default {
  listar: () => {
    return http.get("produto");
  },

  buscar: (query, limit) => {
    if (limit === null) limit = 9;
    return http.get(`produto/?_limit=${limit}${query}`);
  },

  produtoUnico: (id) => {
    return http.get(`produto/${id}`);
  },
};
