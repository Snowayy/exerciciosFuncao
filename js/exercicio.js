//atividade até 10:30

//1
function mesNome(){

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    let mesNome = new Date()
    document.getElementById("execFunc").innerText = meses[mesNome.getMonth()]

}

//2
function nomeDiaSemana(){

    const semanaNomes = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]

    let data = new Date()
    document.getElementById("execFunc").innerText = semanaNomes[data.getDay()]

}

//3
function ano(){

    let data = new Date()

    document.getElementById("execFunc").innerText = data.getFullYear()

}

//4
function entrarBalada(){

    let idade = parseInt(prompt("Calma la, patrão, qual tua idade?"))
    let mesNascido = parseInt(prompt("E qual o mês q tu nasceu, patrão? (Coloque o número)"))

    if (idade >= 18 && (mesNascido == 2 || mesNascido == 4 || mesNascido == 6 || mesNascido == 8 || mesNascido == 9)){

        alert("Pode entrar patrão")

    }else{

        alert("Vaza daqui patrão, leu o convite não?")

    }

}