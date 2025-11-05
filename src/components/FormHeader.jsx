/**
 * Componente FormHeader
 *
 * Cabeçalho para telas de autenticação que exibe um ícone, título e subtítulo
 * orientando o usuário a realizar login.
 *
 * Uso:
 * <FormHeader />
 *
 * Observações:
 * - Não recebe props.
 * - Estilização feita via classes (Tailwind CSS neste exemplo).
 * - Para melhor acessibilidade, adicione atributos ARIA ou <title> no SVG quando necessário.
 *
 * @component
 * @returns {JSX.Element} Elemento React representando o cabeçalho do formulário de login.
 */
function FormHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
      <div className="flex items-center justify-center mb-4">
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-center">Bem-vindo!</h1>
      <p className="text-center text-blue-100 mt-2">Faça login para continuar</p>
    </div>
  );
}

export default FormHeader;
