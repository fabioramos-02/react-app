/**
 * Componente visual para exibir mensagens de erro.
 *
 * Comportamento:
 * - Renderiza uma caixa de aviso estilizada (Tailwind CSS) contendo um ícone e a mensagem.
 * - É um componente puramente apresentacional: não gerencia estado nem efeitos colaterais.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.message - Mensagem de erro a ser exibida. Recomenda-se uma string curta e descritiva.
 * @returns {JSX.Element} Um elemento JSX que representa a mensagem de erro estilizada.
 *
 * Acessibilidade:
 * - Quando o componente deve notificar automaticamente tecnologias assistivas (por exemplo, após validação), considere adicionar role="alert" ou aria-live="assertive" ao elemento raiz.
 * - Certifique-se de que o contraste de cores atenda às diretrizes WCAG para legibilidade.
 *
 * Boas práticas:
 * - Valide/normalize a mensagem antes de passá-la (evitar null/undefined).
 * - Para testes, prefira selecionar pelo texto exibido ou adicione um atributo data-testid.
 * - Para internacionalização, passe a mensagem já traduzida via props.
 *
 * Exemplo de uso:
 * <ErrorMessage message="Não foi possível salvar os dados. Tente novamente." />
 *
 * @default props.message - "" (string vazia)
 * @since 1.0.0
 */
function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
      <div className="flex items-center">
        <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <p className="text-sm text-red-700">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
