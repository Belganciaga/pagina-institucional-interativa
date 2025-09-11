document.getElementById("botao").addEventListener("click", function() {
  // Atualizando o título
  document.getElementById("titulo").textContent = "Bem vindo ao seu futuro!";
  
  // Atualizando a imagem (usando imagem local)
  document.getElementById("imagem").src = "2.jpg";
  
  // Atualizando os parágrafos
  document.getElementById("paragrafo1").textContent = "Agora você faz parte da nossa comunidade.";
  document.getElementById("paragrafo2").textContent = "Explore nossos conteúdos e aproveite a experiência!";
});
