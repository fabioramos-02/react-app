import { Link } from 'react-router-dom';  // Adicione esta linha no topo do arquivo
/**
 * FormFooter
 *
 * Componente funcional que renderiza o rodapé de um formulário, exibindo uma mensagem
 * convidando o usuário a criar uma conta e um Link para a rota de cadastro.
 *
 * Não recebe props — comportamento e conteúdo estáticos por padrão.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX representando o rodapé do formulário.
 *
 * @example
 * // Uso
 * <FormFooter />
 *
 * @since 1.0.0
 */
function FormFooter() {
  return (
    <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
      <p className="text-center text-sm text-gray-600">
        Não tem uma conta?{' '}
        <Link to="/cadastro" className="font-medium text-blue-600 hover:text-blue-500">
          Cadastre-se agora
        </Link>
      </p>
    </div>
  );
}

export default FormFooter;
