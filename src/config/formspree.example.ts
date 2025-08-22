// EXEMPLO de configuração do Formspree
// Copie este arquivo para formspree.ts e configure com seus dados reais

export const FORMSPREE_CONFIG = {
  // ✅ CONFIGURADO: Endpoint real do Formspree
  // Seu endpoint: https://formspree.io/f/mgvzgonp
  endpoint: "https://formspree.io/f/mgvzgonp",
  
  // Configurações opcionais
  redirect: false, // Não redirecionar após envio
  honeypot: true, // Proteção contra spam
};

// Função helper para validar se o endpoint está configurado
export const isFormspreeConfigured = () => {
  return FORMSPREE_CONFIG.endpoint !== "https://formspree.io/f/xaybzwkd";
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