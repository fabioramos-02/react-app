/**
 * Componente de Input com label, suporte a ícone e comportamento controlado.
 *
 * Renderiza um label associado ao input (via htmlFor/id) e um input estilizado
 * com suporte opcional a um ícone alinhado à esquerda. Projetado para ser usado
 * como componente controlado (value + onChange).
 *
 * @component
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.id - Identificador único usado no atributo id do input e no htmlFor do label. (Obrigatório para acessibilidade)
 * @param {("text"|"email"|"password"|"number"|"tel"|"url"|"search")} [props.type="text"] - Tipo do input HTML.
 * @param {string|number} [props.value] - Valor controlado do input.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Função chamada ao alterar o valor do input; recebe o evento do input.
 * @param {string} [props.placeholder] - Texto mostrado como placeholder e também usado como conteúdo do label.
 * @param {React.ReactNode} [props.icon] - Node React (ex.: SVG) exibido dentro do input à esquerda. Quando presente, o componente aplica padding adicional.
 *
 * @returns {JSX.Element} Um elemento JSX contendo o label, o input e o ícone opcional.
 *
 * @example
 * // Uso básico:
 * <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
 *
 * @example
 * // Com ícone:
 * <Input id="search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Pesquisar" icon={<SearchIcon />} />
 *
 * @remarks
 * - Recomenda-se fornecer sempre `value` e `onChange` para manter o componente controlado.
 * - O uso de um `id` único melhora a acessibilidade ao vincular o label ao input.
 * - As classes utilitárias (Tailwind) já cuidam do foco visual e espaçamento; ajuste conforme necessário para seu design system.
 */
function Input({ id, type, value, onChange, placeholder, icon }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {placeholder}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
