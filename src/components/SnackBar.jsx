// src/components/SnackBar.jsx
import React from 'react';

/**
 * SnackBar - componente que exibe uma mensagem temporária fixada na parte inferior da tela.
 *
 * @param {Object} props - Props do componente.
 * @param {string} props.message - Texto a ser exibido no snackbar.
 * @param {boolean} props.show - Controla a visibilidade; quando false o componente não é renderizado.
 * @param {() => void} props.onClose - Callback chamado ao clicar no botão de fechar.
 * @returns {JSX.Element | null} Retorna o elemento JSX quando visível; caso contrário, retorna null.
 *
 * Observações:
 * - Mantém comportamento simples e previsível: não gerencia tempo de exibição automaticamente.
 * - Para acessibilidade, considere adicionar um `aria-label` ao botão de fechar quando necessário.
 *
 * @example
 * <SnackBar message="Salvo com sucesso" show={isVisible} onClose={() => setIsVisible(false)} />
 */
function SnackBar({ message, show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4 bg-green-500 text-white rounded-lg shadow-md flex justify-between items-center">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white">×</button>
    </div>
  );
}

export default SnackBar;
