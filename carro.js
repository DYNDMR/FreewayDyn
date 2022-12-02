let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150, 210, 270, 318];
let velocidadeCarros = [3,3.5,4,5,3.7,4.2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagensDosCarros.length; i++){
   image(imagensDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  } 
}

function movimentaCarro(){
  for (let i= 0; i < imagensDosCarros.length; i++){
 xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i= 0; i < imagensDosCarros.length; i++){
  if (xCarros[i] < -50){
    xCarros[i] = 600
  }
 }
}
