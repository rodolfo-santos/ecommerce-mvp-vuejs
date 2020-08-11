import { http } from "./config";

export default {
  ComprarProduto: (compra) => {
    return http.post("transacao", compra);
  },
};
