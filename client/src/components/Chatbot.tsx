import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Bot, Loader2, MessageCircle, Send, User, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ProductCardContainer from "./ProductCardContainer";

type Message = {
  text: string;
  isBot: boolean;
  produtos?: string[]; // Códigos de produtos para exibir
};

type ChatMode = "jgp" | "pisani";

// Função para detectar códigos de produtos na mensagem
const detectarProdutos = (mensagem: string): string[] => {
  // Regex para detectar códigos como: CN 1518, EURO 6421, GALIA 3212, KLT 4314
  const codigosRegex = /(CN|EURO|GALIA|KLT|R-KLT)\s*\d{4,5}/gi;
  const matches = mensagem.match(codigosRegex);
  
  if (!matches) return [];
  
  // Remover duplicatas e normalizar
  const codigos = [...new Set(matches.map(c => c.trim().toUpperCase()))];
  return codigos;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>("pisani");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Sou PISANI, vendedor especializado. Estou aqui para ajudá-lo com produtos, cotações e pedidos. Como posso ajudar?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Rolagem automática quando mensagens mudam
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessageMutation = trpc.chatbot.sendMessage.useMutation();

  const quickReplies = {
    jgp: [
      "Quais serviços vocês oferecem?",
      "Como funciona a consultoria?",
      "Quero falar com um especialista",
      "Quanto custa?"
    ],
    pisani: [
      "Quais produtos você tem?",
      "Preciso de uma cotação",
      "Qual o prazo de entrega?",
      "Tem desconto para quantidade?"
    ]
  };

  const switchMode = (mode: ChatMode) => {
    setChatMode(mode);
    const welcomeMessage = mode === "jgp" 
      ? "Olá! Sou o assistente virtual da JGP Serviços. Como posso ajudá-lo hoje?"
      : "Olá! Sou o PISANI, vendedor especializado da JGP Serviços. Estou aqui para ajudá-lo com produtos, cotações e pedidos. Como posso ajudar?";
    
    setMessages([{ text: welcomeMessage, isBot: true }]);
  };

  const handleSolicitarOrcamento = (codigo: string) => {
    // Adiciona mensagem automática solicitando orçamento
    const mensagem = `Gostaria de solicitar um orçamento para o produto ${codigo}`;
    handleQuickReply(mensagem);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    // Adiciona mensagem do usuário
    const newMessages = [...messages, { text: userMessage, isBot: false }];
    setMessages(newMessages);

    // Prepara histórico da conversa para a API
    const conversationHistory = messages
      .slice(1) // Remove a mensagem de boas-vindas
      .map(m => ({
        role: (m.isBot ? "assistant" : "user") as "assistant" | "user",
        content: m.text
      }));

    try {
      const response = await sendMessageMutation.mutateAsync({
        message: userMessage,
        conversationHistory,
        mode: chatMode
      });

      // Detectar produtos na resposta do bot
      const produtosDetectados = detectarProdutos(response.message);

      setMessages([...newMessages, { 
        text: response.message, 
        isBot: true,
        produtos: produtosDetectados.length > 0 ? produtosDetectados : undefined
      }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        {
          text: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato através do email contato@jgpservice.com",
          isBot: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = async (reply: string) => {
    if (isLoading) return;

    setIsLoading(true);
    const newMessages = [...messages, { text: reply, isBot: false }];
    setMessages(newMessages);

    const conversationHistory = messages
      .slice(1)
      .map(m => ({
        role: (m.isBot ? "assistant" : "user") as "assistant" | "user",
        content: m.text
      }));

    try {
      const response = await sendMessageMutation.mutateAsync({
        message: reply,
        conversationHistory,
        mode: chatMode
      });

      // Detectar produtos na resposta do bot
      const produtosDetectados = detectarProdutos(response.message);

      setMessages([...newMessages, { 
        text: response.message, 
        isBot: true,
        produtos: produtosDetectados.length > 0 ? produtosDetectados : undefined
      }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        {
          text: "Desculpe, ocorreu um erro. Por favor, tente novamente.",
          isBot: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Janela do Chat */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">PISANI - Vendedor</CardTitle>
                  <p className="text-xs opacity-90">Powered by OpenAI</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className="space-y-2">
                {/* Mensagem de texto */}
                <div
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>

                {/* Cards de produtos (se houver) */}
                {message.produtos && message.produtos.length > 0 && (
                  <div className="grid grid-cols-1 gap-3 mt-2">
                    {message.produtos.map((codigo) => (
                      <ProductCardContainer
                        key={codigo}
                        codigo={codigo}
                        onSolicitarOrcamento={handleSolicitarOrcamento}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg p-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center">Sugestões rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies[chatMode].map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs"
                      disabled={isLoading}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Elemento invisível para rolagem automática */}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button onClick={handleSendMessage} size="icon" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}

