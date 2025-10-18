import Chatbot from "@/components/Chatbot";

/**
 * Página focada exclusivamente no chatbot PISANI
 * Interface minimalista para testes e demonstração do vendedor virtual
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Conteúdo Central */}
      <div className="max-w-5xl w-full">
        {/* Header Minimalista */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6 shadow-2xl">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            PISANI
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-2">
            Vendedor Virtual Especializado
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Converse sobre produtos, cotações e soluções em embalagens plásticas retornáveis
          </p>
        </div>

        {/* Instruções de uso */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Converse Naturalmente</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Faça perguntas sobre produtos, preços e condições comerciais
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Respostas Inteligentes</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Powered by OpenAI com base de conhecimento especializada
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Disponível 24/7</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Atendimento instantâneo a qualquer hora do dia
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            👇 Clique no ícone de chat no canto inferior direito para começar
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Online agora
          </div>
        </div>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
}

