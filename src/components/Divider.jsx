/**
 * Divider
 *
 * Componente visual que renderiza uma linha horizontal com texto centralizado ("Ou continue com").
 * Ideal para separar seções de formulário ou opções de autenticação.
 *
 * Observações:
 * - Não recebe props; estilização é aplicada via classes Tailwind CSS internas.
 * - A linha é decorativa. Se for necessária semântica de separação, considere usar <hr> com atributos
 *   de acessibilidade apropriados (por exemplo, aria-hidden="true" para a parte decorativa).
 *
 * @component
 * @returns {JSX.Element} Elemento JSX representando o divisor com texto central.
 * @example
 * // Uso simples
 * <Divider />
 */
function Divider() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Ou continue com</span>
        </div>
      </div>
    </div>
  );
}

export default Divider;
