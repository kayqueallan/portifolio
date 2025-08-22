# Configuração do Formspree para o Formulário de Contato

Este projeto utiliza o [Formspree](https://formspree.io/) para tornar o formulário de contato funcional sem necessidade de backend.

## ✅ STATUS: CONFIGURADO

O Formspree já está configurado e funcionando!
- **Endpoint**: `https://formspree.io/f/mgvzgonp`
- **Status**: ✅ Ativo e funcionando
- **Limite**: 100 envios por mês (gratuito)

## 🚀 Como Configurar

### 1. Criar Conta no Formspree

1. Acesse [https://formspree.io/](https://formspree.io/)
2. Clique em "Get Started for Free"
3. Crie uma conta gratuita (pode usar GitHub, Google ou email)

### 2. Criar um Novo Formulário

1. Após fazer login, clique em "New Form"
2. Dê um nome ao seu formulário (ex: "Portfolio Contact")
3. Escolha o tipo "Contact Form"
4. Clique em "Create Form"

### 3. Obter o Endpoint

1. Após criar o formulário, você verá uma página com o endpoint
2. O endpoint terá o formato: `https://formspree.io/f/xaybzwkd`
3. Copie este endpoint completo

### 4. Configurar no Projeto

✅ **JÁ CONFIGURADO!** O endpoint está configurado em `src/config/formspree.ts`:

```typescript
export const FORMSPREE_CONFIG = {
  endpoint: "https://formspree.io/f/mgvzgonp", // ✅ Configurado
  redirect: false,
  honeypot: true,
};
```

### 5. Testar o Formulário

✅ **PRONTO PARA TESTAR!** 

1. Execute o projeto: `npm run dev`
2. Acesse a página de contato: `http://localhost:8081/contato`
3. Preencha e envie o formulário
4. **Você receberá um email de confirmação** com os dados do formulário

**💡 Dica**: Teste enviando uma mensagem para você mesmo para verificar se está funcionando!

## 📧 Como Funciona

- **Envio**: O formulário envia os dados para o Formspree via API
- **Processamento**: O Formspree processa e envia um email para você
- **Notificação**: Você recebe um email com os dados do formulário
- **Resposta**: Pode configurar uma resposta automática para o usuário

## 🔧 Configurações Avançadas

### Honeypot (Proteção Anti-Spam)
```typescript
honeypot: true // Ativa proteção contra bots
```

### Redirecionamento
```typescript
redirect: false // Não redireciona após envio
```

### Campos Personalizados
O formulário atual envia:
- `name`: Nome do usuário
- `email`: Email do usuário
- `subject`: Assunto da mensagem
- `message`: Conteúdo da mensagem

## 📱 Limites da Conta Gratuita

- **100 envios por mês** (suficiente para portfolio pessoal)
- **Suporte por email**
- **Proteção anti-spam**
- **Webhooks** (opcional)

## 🚨 Solução de Problemas

### Formulário não envia
1. Verifique se o endpoint está correto
2. Confirme se a conta do Formspree está ativa
3. Verifique o console do navegador para erros

### Não recebe emails
1. Verifique a pasta de spam
2. Confirme o email cadastrado no Formspree
3. Teste com um email diferente

### Erro de CORS
- O Formspree resolve automaticamente problemas de CORS
- Se persistir, verifique se o endpoint está correto

## 🔒 Segurança

- O Formspree inclui proteção anti-spam automática
- Os dados são processados de forma segura
- Não há armazenamento local dos dados sensíveis

## 📞 Suporte

- **Formspree**: [support@formspree.io](mailto:support@formspree.io)
- **Documentação**: [https://formspree.io/docs/](https://formspree.io/docs/)

---

**Nota**: Após configurar o Formspree, o aviso amarelo no formulário desaparecerá automaticamente. 