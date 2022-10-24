var res0, res1, p, b

res0 = document.getElementById('res0');
res1 = document.getElementById('res1');
p = document.getElementById('num'); //Player

function jokenpo() {
    b = Math.floor(Math.random() * 2); //Bot

    if (b == 0 && p.value == 1) {
        res0.innerHTML = "Ambos escolheram Pedra";
        res1.innerHTML = "Empate";
    } 
    else if (b == 0 && p.value == 2) {
        res0.innerHTML = "Jogador escolheu Papel, Bot escolheu Pedra";
        res1.innerHTML = "Player Wins";
    } 
    else if (b == 0 && p.value == 3) {
        res0.innerHTML = "Jogador escolheu Tesoura, Bot escolheu Pedra";
        res1.innerHTML = "Bot Wins";
    } 
    else if (b == 1 && p.value == 1) {
        res0.innerHTML = "Jogador escolheu Pedra, Bot escolheu Papel";
        res1.innerHTML = "Bot Wins";	
    } 
    else if (b == 1 && p.value == 2) {
        res0.innerHTML = "Ambos escolheram Papel";
        res1.innerHTML = "Empate";
    } 
    else if (b == 1 && p.value == 3) {
        res0.innerHTML = "Jogador escolheu Tesoura, Bot escolheu Papel";
        res1.innerHTML = "Player Wins";
    } 
    else if (b == 2 && p.value == 1) {
        res0.innerHTML = "Jogador escolheu Pedra, Bot escolheu Tesoura";
        res1.innerHTML = "Player Wins";
    } 
    else if (b == 2 && p.value == 2) {
        res0.innerHTML = "Jogador escolheu Papel, Bot escolheu Tesoura";
        res1.innerHTML = "Bot Wins";
    } 
    else if (b == 2 && p.value == 3) {
        res0.innerHTML = "Ambos escolheram Tesoura";
        res1.innerHTML = "Empate!";
    } 
    else if (p.value > 3){
        window.alert(`[ERROR 01] ${p.value} é um número maior que 3`);
        res0.innerHTML = "";
        res1.innerHTML = "";
    } 
    else if (p.value < 1){
        window.alert(`[ERROR 02] ${p.value} é um número menor que 1`);
        res0.innerHTML = "";
        res1.innerHTML = "";
    } else {
        window.alert("[ERROR 00] Erro Desconhecido");
        res0.innerHTML = "";
        res1.innerHTML = "";
    }
}