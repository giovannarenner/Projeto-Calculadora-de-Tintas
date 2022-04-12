const nom = document.getElementById("nome");
const tel = document.getElementById("telefone");
const em = document.getElementById("email");
const alt = document.getElementById("altura");
const larg = document.getElementById("largura");
const ar = document.getElementById("area");
const largj = document.getElementById("larguraJanela");
const altj = document.getElementById("alturaJanela");
const arj = document.getElementById("areaJanela");
const largp = document.getElementById("larguraPorta");
const altp = document.getElementById("alturaPorta");
const arp = document.getElementById("areaPorta");
const botao = document.getElementById("b1");
const r = document.getElementById('resp');
const areatot = document.getElementById("areatotal")
const rendimen = document.getElementById("rendimento")
const dem = document.getElementById("demao")
const rendtotal = document.getElementById("rendimentototal")


botao.addEventListener('click', () => {
    let n = nom.value;
    let altura = Number(alt.value);
    let largura = Number(larg.value);
    let area = (altura * largura);

    let alturaJanela = Number(altj.value);
    let larguraJanela = Number(largj.value);
    let areaJanela = (alturaJanela * larguraJanela);

    let larguraPorta = Number(largp.value);
    let alturaPorta = Number(altp.value);
    let areaPorta = (alturaPorta * larguraPorta);

    let areatot = (area - areaJanela - areaPorta);

    let rendime = Number(rendimen.value)
    let dema = Number(dem.value)
    let rendtotal = (areatot * dema) / rendime;





    r.innerHTML = `<h2> Olá, ${n}!<h2>

    <p> A altura da parede é: ${altura}m² <br>
    <p> A largura da parede é: ${largura}m² <br>
    <p> A altura da janela é: ${alturaJanela}m² <br>
    <p> A largura da janela é: ${larguraJanela}m² <br>
    <p> A altura da porta é: ${alturaPorta}m² <br>
    <p> A largura da porta é: ${larguraPorta}m² <br>

    <p> O rendimento total da tinta é: ${rendtotal.toFixed(2)} </p>`
});