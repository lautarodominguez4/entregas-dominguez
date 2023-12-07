function leerRespuesta (pregunta) { 
    do {
      respuesta = prompt(pregunta).toLowerCase()
      if (respuesta !== "a" && respuesta !=="b" && respuesta !=="c") {
        alert("Poner A, B o C, no se seas pavo.")
      }
    }
    while (respuesta !== "a" && respuesta !=="b" && respuesta !=="c")
  
  
    return respuesta
  }
  const OPCIONNOSOSPOLLERA = 1
  const OPCIONPOLLERA = 2
  const OPCIONVAGO = 0
  
  let continuar;
  do {
    resultado = 0;
  
  pregunta1 = "te estas preparando para salir con tus amigos cuando te llega un mensaje de tu novia invitandote a cenar, ¿que haces? A) le cancelo a mis amigos y a mi novia y me voy a dormir . B) le digo que si y le cancelo a los pibes. C) le digo que no, que salgo con amigos"
  respuesta1 = leerRespuesta(pregunta1) 
    if (respuesta1 == "a") {
      resultado += OPCIONVAGO
      console.log("tu respuesta a la pregunta 1 suma" + OPCIONVAGO)
    }
    else if (respuesta1 == "b") {
      resultado += OPCIONPOLLERA
      console.log("tu respuesta a la pregunta 1 suma" + OPCIONPOLLERA)
    }
    else if (respuesta1 == "c") {
      resultado += OPCIONNOSOSPOLLERA
      console.log("tu respuesta a la pregunta 1 suma" + OPCIONNOSOSPOLLERA)
    }
  
  pregunta2 = "después de salir a bailar con tus amigos, ¿que harías? A) me voy a dormir a mi casa. B) caigo a la casa de mi novia a dormir. C) after con los pibes"
  respuesta2 = leerRespuesta(pregunta2) 
  
    if (respuesta2 == "a") {
      resultado += OPCIONVAGO
      console.log("tu respuesta a la pregunta 2 suma" + OPCIONVAGO)
    }
    else if (respuesta2 == "b") {
      resultado += OPCIONPOLLERA
      console.log("tu respuesta a la pregunta 2 suma" + OPCIONPOLLERA)
    }
    else if (respuesta2 == "c") {
      resultado += OPCIONNOSOSPOLLERA
      console.log("tu respuesta a la pregunta 2 suma" + OPCIONNOSOSPOLLERA)
    }
  
    if (resultado > 3) {
    alert("sos pollera, mal ahi")
    console.log("la suma es " + resultado + ", así que sos pollera")
    }
    else if (resultado <= 3 && resultado != 0) {
    alert("no sos pollera, bien ahi")
    console.log("la suma es " + resultado+ ", así que no sos pollera")
    }
  
    else if (resultado === 0) {
    alert("sos un vago")
    console.log("la suma es " + resultado + ", así que sos un vago")
    }
  
  
    continuar = prompt("¿Quieres probar de nuevo? (Sí/No)");
  } while (continuar.toLowerCase() === "si");