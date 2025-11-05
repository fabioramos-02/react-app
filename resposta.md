# Componentes — Reuso e Objetivos

## 1. Modal
- Reuso: Componente genérico reutilizável para mensagens de erro, alertas, confirmações e formulários temporários.
- Objetivo: Modularização — parametrizar via props (ex.: título, conteúdo, ações/botões, visibilidade) para uso em vários contextos.

## 2. Botão
- Reuso: Usado em toda a aplicação com variações de estilo, tamanho e comportamento (submit, navegação, ação).
- Objetivo: Reuso e consistência — criar um componente padrão com variantes (primary, secondary, icon, disabled).

## 3. Input — Texto
- Reuso: Campo básico para formulários (login, cadastro, perfil, busca).
- Objetivo: Modularização e reuso — componente controlado com validação, máscaras opcionais, feedback de erro e estilos reaproveitáveis.

## 4. Checkbox
- Reuso: Seleções em formulários e confirmações (termos, consentimentos).
- Objetivo: Modularização — componente flexível para estados (checked/indeterminate/disabled) e labels customizáveis.

## 5. Header do Formulário
- Reuso: Útil em vários tipos de formulário, com pequenas variações conforme o contexto.
- Objetivo: Modularização — manter layout e tipografia consistentes; permitir variação de título, subtítulo e ícone.

## 6. Footer do Formulário
- Reuso: Contém ações e links; reutilizável em formulários com necessidades semelhantes.
- Objetivo: Modularização — padronizar botões de ação e links auxiliares; aceitar slots/props para personalização.

## 7. Botão “Continue com” (Google, Facebook)
- Reuso: Componente para integração com provedores de autenticação em telas de login/cadastro.
- Objetivo: Reuso — parametrizável por provedor (ícone, texto, handler) para suportar vários SSO sem duplicação.


## 8. Snackbar de erro
- Reuso: Componente para notificações temporárias (erros, avisos, sucessos) usado em várias telas para feedback rápido sem bloquear a interface — suporta enfileiramento, ações (ex.: desfazer, tentar novamente), fechamento manual e auto-dismiss.
- Objetivo: Consistência e acessibilidade — padronizar aparência, duração, posição e animações; parametrizável por props (mensagem, nível/severity, duração, ação, onClose, posicionamento) e projetado para comportamento responsivo e compatível com aria-live.