// Seletores
const imagens = document.querySelectorAll('.carousel img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const abrirComentariosBtn = document.getElementById('abrir-comentarios');
const comentariosAba = document.getElementById('comentarios-aba');
const fecharComentariosBtn = document.getElementById('fechar-comentarios');
const enviarComentarioBtn = document.getElementById('enviar-comentario');
const mensagemInput = document.getElementById('mensagem');

let imagemAtual = 0;

// Função para mostrar a imagem atual
function mostrarImagem(index) {
  imagens.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

// Função para ir para a imagem anterior
function imagemAnterior() {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(imagemAtual);
}

// Função para ir para a próxima imagem
function proximaImagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  mostrarImagem(imagemAtual);
}

// Adicionar eventos aos botões do carrossel
prevBtn.addEventListener('click', imagemAnterior);
nextBtn.addEventListener('click', proximaImagem);

// Mostrar a primeira imagem ao carregar a página
mostrarImagem(imagemAtual);

// Função para abrir a aba de comentários
function abrirComentarios() {
  comentariosAba.style.display = 'block';
}

// Função para fechar a aba de comentários
function fecharComentarios() {
  comentariosAba.style.display = 'none';
}

// Função para enviar o comentário
function enviarComentario() {
  const mensagem = mensagemInput.value.trim();
  if (mensagem !== '') {
    alert(`Comentário enviado: ${mensagem}`);
    mensagemInput.value = ''; // Limpar o campo de texto
    fecharComentarios(); // Fechar a aba após o envio
  } else {
    alert('Por favor, insira um comentário.');
  }
}

// Adicionar eventos aos botões de comentários
abrirComentariosBtn.addEventListener('click', abrirComentarios);
fecharComentariosBtn.addEventListener('click', fecharComentarios);
enviarComentarioBtn.addEventListener('click', enviarComentario);

  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Substitua pelo seu token
  const map = new mapboxgl.Map({
    container: 'map', // ID do elemento HTML onde o mapa será renderizado
    style: 'mapbox://styles/mapbox/streets-v11', // Estilo do mapa
    center: [-49.0661, -22.3139], // Coordenadas da UNIMAR (longitude, latitude)
    zoom: 15 // Nível de zoom inicial
  });
