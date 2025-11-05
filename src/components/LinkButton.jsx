// src/components/LinkButton.jsx
import { Link } from 'react-router-dom';
/**
 * LinkButton — componente que renderiza um link estilizado com aparência de botão.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.to - Caminho ou URL de destino para navegação.
 * @param {import('react').ReactNode} props.children - Conteúdo a ser exibido dentro do link.
 * @param {string} [props.className=''] - Classes CSS adicionais opcionais a serem combinadas com as classes padrão.
 * @returns {import('react').ReactElement} Elemento React representando o link estilizado.
 *
 * @example
 * <LinkButton to="/home">Ir para início</LinkButton>
 */
function LinkButton({ to, children, className }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium text-blue-600 hover:text-blue-500 ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
