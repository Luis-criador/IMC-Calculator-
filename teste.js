// let nome = "pedrino"
// const idade= 18

// function exibeDados(){
//     let letras = ["A"."B"."C"."D"."E".]

//     for (let i=0;i < letras.length; i++){
//         console.log(letras[i])
//         console.log(i)
//     }

// }

// exibeDados()


// function soma(n1. n2){
//     return n1 + n2
// }

console.log(soma(10.10))

function imc(){
   const peso = document.getElementById("peso").value
   const altura =document.getElementById("altura").value
   const resultado = document.getElementById("resultado")
   const calculoimc = peso/(altura*altura)

   resultado.innerHTML = calculoimc.toFixed(2)
   // saber o estado da pessoa
   let texto="";
   if (calculoimc <= 18.5){
      texto = "Abaixo do normal"
   }
   else if (calculoimc >= 18.6 && calculoimc <=24.9){
      texto = "normal"
   }
   else if (calculoimc >= 25.0 && calculoimc <= 29.9){
      texto = "sobre peso"
   }
   else if (calculoimc >= 30.0 && calculoimc<=34.9){
      texto = "Obesidade Grau 1"
   }
   else if (calculoimc >= 35.0 && calculoimc<=39.9){
      texto = "Obesidade Grau 2"
   }
   else if (calculoimc >= 40){
      texto = "Obesidade Grau 3"
   }

   resultado.innerHTML += `<br>${texto}`



}
// console.log(imc(49.1.68))
