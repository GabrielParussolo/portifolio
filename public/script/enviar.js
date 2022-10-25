const botao = document.getElementById('enviar')
botao.onclick = enviarMensagem

function enviarMensagem() {
    botao.blur();
    const num = "5518997012403";
    const url = `https://api.whatsapp.com/send?phone=${num}&text=`
    window.open(url)
}