import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,

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
        })).optional()
      }))
      .mutation(async ({ input }) => {
        const openaiApiKey = process.env.OPENAI_API_KEY;
        
        if (!openaiApiKey) {
          throw new Error("OpenAI API key not configured");
        }

        const messages = [
          {
            role: "system" as const,
            content: `Você é um assistente virtual da JGP Serviços, uma empresa especializada em soluções de Inteligência Artificial para negócios.

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

Mantenha respostas concisas (máximo 3-4 linhas) e sempre incentive o próximo passo.`
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
