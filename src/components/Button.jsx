/**
 * Componente Button — botão estilizado reutilizável.
 *
 * Renderiza um botão com estilos utilitários e suporte opcional a ícone.
 * Deve ser usado para ações acionadas pelo usuário (cliques). Mantém as boas práticas
 * de acessibilidade fornecendo foco visível via classes utilitárias.
 *
 * @param {('button'|'submit'|'reset')} type - Tipo do botão HTML. Valores válidos: 'button', 'submit', 'reset'.
 *                                             Se omitido, aplica-se o comportamento padrão do elemento <button>.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Função chamada quando o botão é clicado.
 *                                                                          Recebe o evento do mouse do botão.
 * @param {React.ReactNode} children - Conteúdo do botão (texto, elementos inline, etc.). Deve fornecer um rótulo claro para acessibilidade.
 * @param {React.ReactNode} [icon] - Ícone opcional renderizado antes do conteúdo. Recomenda-se usar SVG ou um elemento sem interação própria.
 *
 * @returns {JSX.Element} Elemento JSX representando o botão.
 *
 * Exemplos:
 * <Button type="button" onClick={() => console.log('clicado')}>Salvar</Button>
 * <Button type="submit" icon={<SaveIcon />}>Salvar</Button>
 *
 * Observações de acessibilidade:
 * - Certifique-se de fornecer um texto descritivo em `children` para que leitores de tela identifiquem a ação.
 * - Se o ícone for o único conteúdo do botão, forneça um atributo aria-label apropriado ao botão.
 */
function Button({ type, onClick, children, icon }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
