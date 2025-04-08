document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio real do formulário
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
  
    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return;
    }
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
  
    if (mensagem === "") {
      alert("Por favor, digite uma mensagem.");
      return;
    }
  
    alert("Mensagem enviada com sucesso! (simulado)");
  });