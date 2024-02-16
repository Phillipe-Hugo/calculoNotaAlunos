const redeSociais = ['Facebook', 'Instagram', 'Twitter'];
for (let i = 0; i < redeSociais.length; i++){
    console.log(`Eu tenho perfinl nas redes sociais: ${redeSociais[i]}`);
}

redeSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfinl na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Phillipe', 'Hugo', 'Cleiciana', 'Kira'];

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2)

const numero = [1,2,3,4,5];
const dobroDosNumeros = numero.map((valorAtual)=> valorAtual * 2)
console.log(dobroDosNumeros)

/*
Outro exemplo:
// Sintaxe completa de uma função
const soma = function(a, b) {
  return a + b;
};

// Arrow function equivalente
const somaArrow = (a, b) => a + b;
*/



function gerarNumeros() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }
    return numeros;
  }
  
  const numerosGerados = gerarNumeros();
  
  const alunos3 = [
    { nome: 'Phillipe', curso: 'Frontend', numero: numerosGerados[0] },
    { nome: 'Hugo', curso: 'Frontend', numero: numerosGerados[1] },
    { nome: 'Cleiciana', curso: 'Frontend', numero: numerosGerados[2] },
    { nome: 'Kira', curso: 'Frontend', numero: numerosGerados[3] },
    { nome: 'Sam', curso: 'Frontend', numero: numerosGerados[4] },
    { nome: 'Alice', curso: 'Backend', numero: numerosGerados[5] },
    { nome: 'Bob', curso: 'Backend', numero: numerosGerados[6] },
    { nome: 'Carol', curso: 'Backend', numero: numerosGerados[7] },
    { nome: 'David', curso: 'Backend', numero: numerosGerados[8] },
    { nome: 'Eva', curso: 'Backend', numero: numerosGerados[9] },
  ];
  
  console.log(alunos3);