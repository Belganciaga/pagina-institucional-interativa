
# 📘 Projeto Institucional + Galeria Interativa

**Autor:** Thais Rodrigues (Belganciaga)

🔗 **LinkedIn:** [https://www.linkedin.com/in/thayrodrigues0308/](https://www.linkedin.com/in/thayrodrigues0308/)

🐙 **GitHub:** [https://github.com/Belganciaga](https://github.com/Belganciaga)

---

## 📖 Sobre o Projeto

Este repositório reúne **duas atividades front-end** desenvolvidas com HTML, CSS e JavaScript puro:

1. **Página Institucional Interativa**
   — Uma página simples que altera conteúdo dinamicamente ao clicar no botão.
2. **Galeria de Imagens Interativa**
   — Um mini-carrossel onde cada imagem exibe um alerta ao ser clicada.

Ambas foram criadas para fins educacionais, treinando manipulação de DOM e eventos com JavaScript.

---

# 🖥️ 1) Página Institucional

### ✔️ Funcionalidades

* Atualização dinâmica de:

  * título
  * imagem principal
  * textos informativos
* Alterações acontecem ao clicar no botão **"Clique para fazer parte"**

### 🧠 Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (DOM / Eventos)**

---

## 📂 Estrutura

```
/pagina-institucional
│── index.html
│── atv1.css
└── atv1.js
```

---

## 🧩 Código Principal (JS)

```js
document.getElementById("botao").addEventListener("click", function() {
  document.getElementById("titulo").textContent = "Bem vindo ao seu futuro!";
  document.getElementById("imagem").src = "2.jpg";
  document.getElementById("paragrafo1").textContent = "Agora você faz parte da nossa comunidade.";
  document.getElementById("paragrafo2").textContent = "Explore nossos conteúdos e aproveite a experiência!";
});
```

---

# 🖼️ 2) Galeria de Imagens Interativa

### ✔️ Funcionalidades

* Mini-galeria responsiva
* Ao clicar em qualquer foto, aparece um alerta mostrando **qual item foi clicado**

### 🧠 Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**

---

## 📂 Estrutura

```
/galeria
│── index.html
│── carrossel.css
└── carrossel.js
```

---

## 🧩 Código Principal (JS)

```js
const itens = document.querySelectorAll(".item");

itens.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert(`Você clicou na imagem ${index + 1}`);
  });
});
```

---

# 📸 (Opcional) Capturas de Tela

Você pode adicionar prints assim que quiser:

```
![Tela 1](images/tela1.png)
![Tela 2](images/tela2.png)
```

---

# 🚀 Como Executar

1. Baixe o repositório ou clone:

```
git clone https://github.com/Belganciaga/NOME-DO-REPO.git
```

2. Abra o arquivo **index.html** de cada projeto no navegador.

---

# 🏆 Aprendizados do Projeto

* Manipulação da árvore DOM
* Eventos: `click()`
* Estruturação de HTML e boas práticas
* Organização de componentes simples de UI
* Responsividade básica

---

# 🧑‍💻 Autor

**Thais Rodrigues — Belganciaga**

LinkedIn: [https://www.linkedin.com/in/thayrodrigues0308/](https://www.linkedin.com/in/thayrodrigues0308/)

GitHub: [https://github.com/Belganciaga](https://github.com/Belganciaga)
