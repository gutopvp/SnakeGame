function leDoTeclado(evento) { 
}if(evento.keyCode === cima) { 
sentindoAtual = cima;
} else if (evento.keyCode === baixo) {
sentindoAtual = baixo; 
} else if (evento.keyCode === esquerda) {
    sentindoAtual = esquerda; 
} else if (evento.keyCode === direita) {
    sentindoAtual = direita; 
} 
deslocarCauda(){ 
if (sentidoAtual === direita) {
cauda.unshift([cauda[0][0]+15,cauda[0][1]]);
cauda.pop();
}
}

if (sentidoAtual === esquerda) {
cauda.unshift([cauda[0][0]-15,cauda[0][1]]);
cauda.pop();
}
}
if (sentidoAtual === cima) { 
cauda.unshift([[0][0],cauda[0][1]-15]);
cauda.pop();
} 
if (sentidoAtual === baixo) {
cauda.unshift([cauda[0][0],cauda[0][1]+15]);
cauda.pop();
}  
}
function desenhaCauda(cauda, raio){
for (var i=0; i < cauda.length; i ++){