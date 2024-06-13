

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

       /*O código abaixo é escrito em JavaScript e define uma variável relogio que chama a função setInterval().
       A função setInterval() executa uma função especificada repetidamente em intervalos definidos. 
       Neste caso, a função especificada é anônima e é executada a cada segundo.
       A função anônima declara três variáveis: dateToday, hr, min e s. 
       A variável dateToday é inicializada com um novo objeto Date(), que representa a data e hora atuais. 
       As variáveis hr, min e s são inicializadas com as horas, minutos e segundos atuais, respectivamente, 
       usando os métodos getHours(), getMinutes() e getSeconds() do objeto Date().
       */

//Este código foi usado para criar um relógio digital que exibe a hora atual em tempo real.

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();



    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;


    /*O código abaixo é uma função JavaScript que alterna entre dois
    temas de cores em uma página da web. 
    A função toggleTheme() seleciona o elemento body
    do documento HTML e adiciona ou remove a classe dark-theme a ele,
    dependendo se a classe já está presente ou não.
    A classe dark-theme é definida em um arquivo CSS 
    separado e contém as propriedades de estilo para o tema escuro.
    Quando a classe é adicionada, o tema escuro é aplicado 
    à página e quando a classe é removida, o tema claro é aplicado.*/


    function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-theme");
    }

})