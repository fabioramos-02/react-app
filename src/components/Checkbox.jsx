// src/components/Checkbox.jsx
/**
 * Componente Checkbox simples e acessível.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.id - Identificador único usado no input e no label (necessário para acessibilidade).
 * @param {React.ReactNode} [props.label] - Texto ou nó renderizado ao lado do checkbox.
 * @param {boolean} [props.checked=false] - Estado controlado do checkbox; true quando marcado.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Callback chamado ao alterar o estado (recebe o evento).
 * @returns {JSX.Element} Elemento JSX contendo um input[type="checkbox"] e um label associado.
 *
 * Boas práticas: mantenha o estado controlado no componente pai, forneça um id único para associar o label
 * e trate a mudança através do onChange no componente pai para manter a fonte da verdade centralizada.
 *
 * @example
 * <Checkbox
 *   id="accept-terms"
 *   label="Aceito os termos"
 *   checked={accepted}
 *   onChange={(e) => setAccepted(e.target.checked)}
 * />
 */
function Checkbox({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
