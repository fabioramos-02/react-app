/**
 * Componente SocialButton — botão reutilizável para ações sociais (login/compartilhamento).
 *
 * Exibe um ícone à esquerda e o nome da plataforma, com estilo pronto para uso em formulários
 * ou listas de ações sociais.
 *
 * @param {Object} props - Props do componente.
 * @param {string} props.platform - Texto exibido no botão (ex.: "Google", "Facebook").
 * @param {React.ReactNode} props.icon - Elemento de ícone exibido à esquerda do texto.
 * @param {function(React.MouseEvent<HTMLButtonElement>): void} [props.onClick] - Callback acionado ao clicar no botão.
 * @returns {JSX.Element} Elemento de botão estilizado.
 *
 * @example
 * <SocialButton platform="Google" icon={<GoogleIcon />} onClick={() => handleSignIn()} />
 */
function SocialButton({ platform, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <span className="mr-2">{icon}</span>
      {platform}
    </button>
  );
}

export default SocialButton;
