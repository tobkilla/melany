
function verificarNivelX(claveCorrecta, siguienteNivel) {{
  const clave = document.getElementById("clave").value.toLowerCase();
  if (clave === claveCorrecta) {{
    window.location.href = siguienteNivel;
  }} else {{
    alert("Esa no es mi amor 💔");
  }}
}};

