import { http } from "./config";

export default {
  ComprarProduto: (compra) => {
    return http.post("transacao", compra);
  },

  ListaDeCompras: (comprador_id) => {
    return http.get(`transacao?comprador_id=${comprador_id}`);
  },

  ListaDeVendas: (vendedor_id) => {
    return http.get(`transacao?vendedor_id=${vendedor_id}`);
  },
};
