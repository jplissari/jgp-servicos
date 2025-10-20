import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { pisaniKnowledge } from "./knowledge/pisani-base";
import { produtosRouter } from "./routers/produtos";

export const appRouter = router({
  system: systemRouter,
  produtos: produtosRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  chatbot: router({
    sendMessage: publicProcedure
      .input(z.object({
        message: z.string(),
        conversationHistory: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string()
        })).optional(),
        mode: z.enum(["jgp", "pisani"]).optional()
      }))
      .mutation(async ({ input }) => {
        const openaiApiKey = process.env.OPENAI_API_KEY;
        
        if (!openaiApiKey) {
          throw new Error("OpenAI API key not configured");
        }

        const mode = input.mode || "jgp";
        
        const systemPrompts = {
          jgp: `Você é um assistente virtual da JGP Serviços, uma empresa especializada em soluções de Inteligência Artificial para negócios.

Informações sobre a empresa:
- Oferecemos: Chatbots Inteligentes, Análise Preditiva, Automação de Processos, Consultoria em IA, Marketing Inteligente e Soluções Personalizadas
- Nossos resultados: +85% eficiência operacional, +92% satisfação do cliente, +78% redução de custos
- Contato: contato@jgpservice.com | www.jgpservice.com
- Benefícios: Resultados rápidos, foco no ROI, expertise comprovada, suporte contínuo

Seu objetivo é:
1. Responder perguntas sobre os serviços da JGP
2. Qualificar leads e direcionar para contato com especialistas
3. Ser cordial, profissional e objetivo
4. Sempre em português brasileiro
5. Se não souber algo específico, ofereça contato com a equipe

Mantenha respostas concisas (máximo 3-4 linhas) e sempre incentive o próximo passo.`,
          pisani: `Você é PISANI, um vendedor especializado e consultivo.

Sua personalidade:
- Profissional, atencioso e consultivo
- Focado em entender as necessidades do cliente antes de oferecer soluções
- Especialista em produtos Pisani (embalagens plásticas, caixas, pallets, móveis)
- Conhecedor profundo da indústria e aplicações
- Sempre busca criar valor e soluções sustentáveis

Suas responsabilidades:
1. Entender a necessidade do cliente (segmento, aplicação, volume)
2. Recomendar produtos adequados da linha Pisani
3. Apresentar benefícios: qualidade, sustentabilidade, economia
4. Informar sobre opção de compra ou locação
5. Fazer cotações e negociar condições
6. Direcionar para catálogos e materiais técnicos
7. Sempre em português brasileiro

${pisaniKnowledge}

DIRETRIZES DE ATENDIMENTO:
- Faça perguntas para entender o segmento do cliente (bebidas, hortifruti, laticínios, etc.)
- Recomende produtos específicos com base na necessidade
- Destaque sempre: 50 anos de tradição, líder latino-americano, sustentabilidade
- Ofereça a opção de locação como diferencial
- Sugira download de catálogos para mais detalhes
- Colete informações: empresa, segmento, volume, prazo
- Sempre que possível, ofereça agendar visita técnica ou envio de amostras

Mantenha respostas práticas e consultivas (máximo 4-5 linhas). Seja prestativo e focado em soluções.`
        };

        const messages = [
          {
            role: "system" as const,
            content: systemPrompts[mode]
          },
          ...(input.conversationHistory || []),
          {
            role: "user" as const,
            content: input.message
          }
        ];

        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: messages,
              temperature: 0.7,
              max_tokens: 300
            })
          });

          if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.statusText}`);
          }

          const data = await response.json();
          const assistantMessage = data.choices[0]?.message?.content || "Desculpe, não consegui processar sua mensagem. Tente novamente.";

          return {
            message: assistantMessage,
            success: true
          };
        } catch (error) {
          console.error("OpenAI API error:", error);
          return {
            message: "Desculpe, estou com dificuldades técnicas no momento. Por favor, entre em contato através do email contato@jgpservice.com ou pelo botão 'Fale Conosco'.",
            success: false
          };
        }
      })
  })
});

export type AppRouter = typeof appRouter;
