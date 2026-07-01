console.log("JS carregou");

// pega botões e cards
const botoes = document.querySelectorAll(".btn-filtro");
const cards = document.querySelectorAll(".card-projeto");

// só roda se a página tiver filtros e cards
if (botoes.length > 0 && cards.length > 0) {
  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filtro; // "todos" | "video" | "motion" | "3d" | "design"

      // estado visual do botão
      botoes.forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");

      // mostra/esconde os cards
      cards.forEach((card) => {
        const match = cat === "todos" || card.dataset.categoria === cat;
        card.classList.toggle("oculto", !match); // .oculto { display: none; } no CSS
      });
    });

  });
}

const form = document.querySelector(".formulario-contato");

if (form) {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  console.log("Form encontrado:", !!form, "nome:", !!nome, "email:", !!email, "mensagem:", !!mensagem);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede envio automático

    let valido = true;

    if (nome.value.trim().length < 3) {
      alert("O nome precisa ter pelo menos 3 caracteres.");
      valido = false;
    }

    const emailVal = email.value.trim();
    if (!/^\S+@\S+.\S+$/.test(emailVal)) {
      alert("Digite um e-mail válido (ex: nome@dominio.com).");
      valido = false;
    }

    if (mensagem.value.trim().length < 10) {
      alert("A mensagem precisa ter pelo menos 10 caracteres.");
      valido = false;
    }

    if (valido) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });
}


// Menu Mobile (Hamburguer)
const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("nav-principal");

if (btnMenu && nav) {
  btnMenu.addEventListener("click", () => {
    // Alterna a classe 'ativo' no menu
    nav.classList.toggle("ativo");
  });
}