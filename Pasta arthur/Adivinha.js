// Classe do jogo de adivinhação
class JogoAdivinhacao {
    constructor() {
        this.numeroSecreto = this.gerarNumeroSecreto();
        this.maxTentativas = 5;
        this.tentativas = 0;
    }

    // Gera um número aleatório entre 1 e 100
    gerarNumeroSecreto() {
        return Math.floor(Math.random() * 100) + 1;
    }

    // Verifica se o palpite está correto
    verificarPalpite(palpite) {
        this.tentativas++;
        
        if (palpite === this.numeroSecreto) {
            return "Parabéns! Você adivinhou o número!";
        } else if (palpite < this.numeroSecreto) {
            return "O número secreto é maior!";
        } else {
            return "O número secreto é menor!";
        }
    }

    // Verifica se o jogador atingiu o número máximo de tentativas
    estaSemTentativas() {
        return this.tentativas >= this.maxTentativas;
    }

    // Inicia o jogo
    jogar() {
        console.log("Bem-vindo ao jogo de adivinhação!");
        console.log("Você tem " + this.maxTentativas + " tentativas para adivinhar o número secreto entre 1 e 100.");

        while (!this.estaSemTentativas()) {
            let palpite = parseInt(prompt("Digite seu palpite:"));

            if (isNaN(palpite)) {
                console.log("Por favor, insira um número válido.");
                continue;
            }

            let resultado = this.verificarPalpite(palpite);
            console.log(resultado);

            if (palpite === this.numeroSecreto) {
                break;
            }

            console.log("Tentativas restantes: " + (this.maxTentativas - this.tentativas));
        }

        if (this.tentativas >= this.maxTentativas) {
            console.log("Você perdeu! O número secreto era " + this.numeroSecreto);
        }
    }
}

// Criando uma instância do jogo e iniciando-o
const jogo = new JogoAdivinhacao();
jogo.jogar();
