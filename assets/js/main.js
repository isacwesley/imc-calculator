function IMC(peso, altura) {
   return (peso / altura ** 2).toFixed(1);
}

function verificador(imc) {
   if (imc > 0.01 && imc < 18.5) {
      return 1;
   } else if(imc >= 18.5 && imc < 25) {
      return 2;
   } else if (imc >= 25 && imc < 30) {
      return 3;
   } else if (imc >= 30 && imc < 35) {
      return 4;
   } else if (imc >= 35 && imc < 40) {
      return 5;
   } else return 6;
}

function selector(item) {
   const tbody = document.querySelector('tbody');
   const seletores = tbody.querySelectorAll('tr');

   seletores.forEach((element) => {
      element.classList.remove('bordaBlue');
   })

   seletores[item - 1].classList.add('bordaBlue');
}

(() => {
   const form = document.querySelector("#form-imc");
   const inputs = form.querySelectorAll('input');

   form.addEventListener("submit", (event) => {
      event.preventDefault();
      const peso = document.querySelector("#peso").value;
      const altura = document.querySelector("#altura").value;
      const imc = IMC(peso, altura);

      const item = verificador(imc);
      selector(item);

      inputs.forEach((element) => {
         element.blur();
      })
   });
})();
