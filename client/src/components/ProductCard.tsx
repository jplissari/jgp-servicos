import React from 'react';

interface ProductCardProps {
  codigo: string;
  nome: string;
  descricao: string;
  capacidade: string;
  dimensoesExternas: string;
  imagem: string;
  onSolicitarOrcamento?: (codigo: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  codigo,
  nome,
  descricao,
  capacidade,
  dimensoesExternas,
  imagem,
  onSolicitarOrcamento
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 max-w-sm">
      {/* Imagem do produto */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img 
          src={imagem} 
          alt={nome}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {codigo}
        </div>
      </div>
      
      {/* Informações do produto */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
          {nome}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {descricao}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <div className="text-sm">
              <span className="font-semibold text-gray-700">Capacidade:</span>
              <span className="text-gray-600 ml-1">{capacidade}</span>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <div className="text-sm">
              <span className="font-semibold text-gray-700">Dimensões:</span>
              <span className="text-gray-600 ml-1">{dimensoesExternas}</span>
            </div>
          </div>
        </div>
        
        {/* Botão de ação */}
        {onSolicitarOrcamento && (
          <button
            onClick={() => onSolicitarOrcamento(codigo)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Solicitar Orçamento
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

