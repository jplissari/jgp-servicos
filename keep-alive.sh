#!/bin/bash

# Script para manter o servidor backend sempre ativo
# Este script verifica se o servidor está rodando e reinicia se necessário

cd /home/ubuntu/jgp-servicos

while true; do
  # Verificar se o servidor está rodando
  if ! pgrep -f "node dist/index.js" > /dev/null; then
    echo "[$(date)] Servidor não está rodando. Iniciando..."
    NODE_ENV=production node dist/index.js >> server.log 2>&1 &
    echo "[$(date)] Servidor iniciado com PID $!"
  fi
  
  # Aguardar 30 segundos antes de verificar novamente
  sleep 30
done

