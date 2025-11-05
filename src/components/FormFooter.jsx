import { Link } from 'react-router-dom';

/**
 * FormFooter
 *
 * Componente funcional que renderiza o rodapé de um formulário, exibindo uma mensagem
 * convidando o usuário a criar uma conta ou fazer login, com um Link dinâmico.
 *
 * Recebe as props `linkTo` e `linkText` para configurar a rota de redirecionamento
 * e o texto do link de forma flexível.
 *
 * @component
 * @param {string} linkTo - A rota para onde o link vai redirecionar.
 * @param {string} linkText - O texto exibido no link (ex: "Faça login", "Cadastre-se agora").
 * @returns {JSX.Element} Elemento JSX representando o rodapé do formulário.
 *
 * @example
 * <FormFooter linkTo="/" linkText="Faça login" />
 * <FormFooter linkTo="/cadastro" linkText="Cadastre-se agora" />
 */
function FormFooter({ linkTo, linkText }) {
  return (
    <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
      <p className="text-center text-sm text-gray-600">
        {linkText}{' '}
        <Link to={linkTo} className="font-medium text-blue-600 hover:text-blue-500">
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default FormFooter;
