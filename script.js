function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "antonio" && senha === "3011") {
    alert("✅ Login realizado com sucesso!");
} else {
    alert("❌ Usuário ou senha incorretos!");
}
  }


