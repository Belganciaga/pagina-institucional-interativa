// Seleciona todas as imagens da galeria
const itens = document.querySelectorAll(".item");

itens.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert(`Você clicou na imagem ${index + 1}`);
  });
});
