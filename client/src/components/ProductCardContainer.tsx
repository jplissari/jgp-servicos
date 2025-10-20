import React from 'react';
import { trpc } from '@/lib/trpc';
import ProductCard from './ProductCard';

interface ProductCardContainerProps {
  codigo: string;
  onSolicitarOrcamento?: (codigo: string) => void;
}

export const ProductCardContainer: React.FC<ProductCardContainerProps> = ({ 
  codigo, 
  onSolicitarOrcamento 
}) => {
  const { data: produto, isLoading } = trpc.produtos.buscarPorCodigo.useQuery({ 
    codigo: codigo.trim() 
  });

  if (isLoading) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 animate-pulse">
        <div className="h-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  if (!produto) {
    return null;
  }

  return (
    <ProductCard
      codigo={produto.codigo}
      nome={produto.nome}
      descricao={produto.descricao}
      capacidade={produto.capacidade}
      dimensoesExternas={produto.dimensoesExternas}
      imagem={produto.imagem}
      onSolicitarOrcamento={onSolicitarOrcamento}
    />
  );
};

export default ProductCardContainer;

