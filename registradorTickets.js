class EventRegistrador {
    constructor() {
      this.eventos = [];
    }
  
    agregarUsuario(eventoId, usuarioId) {
      const evento = this.eventos.find(evento => evento.id === eventoId);
      
      if (!evento) {
        console.log("El evento no existe.");
        return;
      }
  
      if (evento.participantes.includes(usuarioId)) {
        console.log("El usuario ya está registrado en este evento.");
        return;
      }
  
      evento.participantes.push(usuarioId);
      console.log("Usuario agregado al evento exitosamente.");
    }
  
    ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha) {
      const eventoExistente = this.eventos.find(evento => evento.id === eventoId);
      
      if (!eventoExistente) {
        console.log("El evento no existe.");
        return;
      }
  
      const nuevoEvento = {
        ...eventoExistente,
        id: this.eventos.length + 1,
        localidad: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: []
      };
  
      this.eventos.push(nuevoEvento);
      console.log("Evento puesto en gira exitosamente.");
    }
  }
  
  const registrador = new EventRegistrador();
  
  // Ejemplo de uso
  registrador.eventos.push({
    id: 1,
    nombre: "Concierto",
    localidad: "Ciudad A",
    fecha: "2023-09-01",
    participantes: [1, 2]
  });
  
  registrador.agregarUsuario(1, 3); 
  registrador.agregarUsuario(2, 3);
  
  registrador.ponerEventoEnGira(1, "Ciudad B", "2023-10-15"); 
  registrador.ponerEventoEnGira(2, "Ciudad C", "2023-11-20"); 