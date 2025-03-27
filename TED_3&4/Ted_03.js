let nomes = ["Davi","Marcelo","Thiago","Munguingo","Chaves","Saddan Hussein"]
console.log(nomes[3]);
nomes.push("George W. Bush");
nomes.unshift("Michael Douglas");
console.log(nomes)
nomes.pop();
console.log(nomes)

let numeros = [1,2,3,4,5,6]
let dobro = numeros.map(num=>num*2)
console.log(dobro);

let maiorq5=[1,2,6,22,9,5,8,3].filter(num=>num>5);
console.log(maiorq5);