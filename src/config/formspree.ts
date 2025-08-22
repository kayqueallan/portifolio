// Configuração do Formspree
// Para configurar o Formspree:
// 1. Acesse https://formspree.io/
// 2. Crie uma conta gratuita
// 3. Crie um novo formulário
// 4. Copie o endpoint fornecido (ex: https://formspree.io/f/xaybzwkd)
// 5. Substitua o valor abaixo pelo seu endpoint real

export const FORMSPREE_CONFIG = {
  // Endpoint real do Formspree configurado
  endpoint: "https://formspree.io/f/mgvzgonp",
  
  // Configurações adicionais (opcional)
  redirect: false, // Não redirecionar após envio
  honeypot: true, // Proteção contra spam
};

// Função helper para validar se o endpoint está configurado
export const isFormspreeConfigured = () => {
  return FORMSPREE_CONFIG.endpoint !== "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" && 
         FORMSPREE_CONFIG.endpoint.includes("formspree.io");
};

// Função helper para obter o endpoint
export const getFormspreeEndpoint = () => {
  if (!isFormspreeConfigured()) {
    console.warn(
      "⚠️ Formspree não está configurado! " +
      "Configure o endpoint em src/config/formspree.ts"
    );
  }
  return FORMSPREE_CONFIG.endpoint;
}; 