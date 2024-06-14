// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou habilidade desconhecida';
      }
      // Exibindo a mensagem formatada
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  // Criando um herói do tipo mago
  const mago = new Heroi('Merlin', 1500, 'mago');
  mago.atacar();  // Saída: O mago atacou usando magia
  
  // Criando um herói do tipo guerreiro
  const guerreiro = new Heroi('Conan', 35, 'guerreiro');
  guerreiro.atacar();  // Saída: O guerreiro atacou usando espada
  
  // Criando um herói do tipo monge
  const monge = new Heroi('Lee', 30, 'monge');
  monge.atacar();  // Saída: O monge atacou usando artes marciais
  
  // Criando um herói do tipo ninja
  const ninja = new Heroi('Hattori Hanzo', 40, 'ninja');
  ninja.atacar();  // Saída: O ninja atacou usando shuriken
  