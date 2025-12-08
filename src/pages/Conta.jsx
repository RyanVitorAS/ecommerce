import Button from 'react-bootstrap/Button';

export default function Conta() {
  return (
    <div className="conta-container">
      <h1>Minha Conta</h1>

      <div className="conta-card">
        <div className="conta-perfil">
          <img
            src="https://via.placeholder.com/120"
            alt="Foto do usuário"
            className="conta-avatar"
          />
          <h2>Nome do Usuário</h2>
          <p>email@exemplo.com</p>
        </div>

        <div className="conta-opcoes">
          <Button variant="primary">Editar perfil</Button>
          <Button variant="primary">Meus pedidos</Button>
          <Button variant="primary">Sair</Button>
        </div>
      </div>
    </div>
  );
}
