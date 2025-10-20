import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { produtos } from "../data/produtos";

export const produtosRouter = router({
  listar: publicProcedure
    .input(z.object({
      categoria: z.string().optional(),
      busca: z.string().optional(),
    }).optional())
    .query(async ({ input }) => {
      let resultado = produtos;

      if (input?.categoria) {
        resultado = resultado.filter(p => p.categoria === input.categoria);
      }

      if (input?.busca) {
        const busca = input.busca.toLowerCase();
        resultado = resultado.filter(p => 
          p.nome.toLowerCase().includes(busca) ||
          p.codigo.toLowerCase().includes(busca) ||
          p.descricao.toLowerCase().includes(busca) ||
          p.categoria.toLowerCase().includes(busca)
        );
      }

      return resultado;
    }),

  buscarPorCodigo: publicProcedure
    .input(z.object({
      codigo: z.string(),
    }))
    .query(async ({ input }) => {
      const produto = produtos.find(p => 
        p.codigo.toLowerCase() === input.codigo.toLowerCase()
      );
      return produto || null;
    }),

  categorias: publicProcedure
    .query(async () => {
      const categoriasSet = new Set(produtos.map(p => p.categoria));
      const categoriasUnicas = Array.from(categoriasSet);
      return categoriasUnicas;
    }),
});

