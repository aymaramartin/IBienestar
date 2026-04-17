/* ========================================================================
   POSTS DEL BLOG
   ========================================================================
   Para agregar un post nuevo, copiá uno de los objetos de abajo y pegalo
   al principio del array (para que aparezca primero).

   Cada post tiene:
     id       → número único (cualquier número que no esté repetido)
     date     → fecha en formato "DD · MM · AAAA"
     title    → título del post
     excerpt  → resumen corto (se muestra en la tarjeta)
     icon     → nombre del ícono: "butterfly", "moon", "sun", "lotus", "heart"
     content  → el cuerpo del post (podés usar <p>párrafos</p>, <em>cursiva</em>,
                <strong>negrita</strong>, <br> saltos de línea)

   Guardá el archivo, hacé commit y push a GitHub y los cambios aparecen en
   la web. ¡Eso es todo!
   ======================================================================== */

const posts = [
  {
    id: 1,
    date: "15 · 04 · 2026",
    title: "El alma también pide descanso",
    excerpt: "Cuando todo se siente pesado, no siempre es cansancio físico. A veces es el alma la que pide ser escuchada.",
    icon: "moon",
    content: `
      <p>Hay días en los que te despertás con el cuerpo entero, pero algo por dentro se siente agotado. Dormiste las horas, comiste, hiciste todo lo que "tenías que hacer"... y aun así, algo no termina de acomodarse.</p>
      <p>Eso también es cansancio. El alma también se cansa.</p>
      <p>A veces llevamos demasiado tiempo sosteniendo lo que no es nuestro: emociones ajenas, expectativas, historias heredadas, mandatos que ni recordamos cuándo empezamos a cargar.</p>
      <p><em>Detenerte no es perder tiempo. Es devolverle al alma el espacio que necesita para respirar.</em></p>
      <p>Te invito a que hoy, aunque sea por cinco minutos, te regales silencio. Una vela encendida, una infusión tibia, una mano en el corazón. Preguntate con cariño: <strong>¿qué necesito soltar?</strong></p>
      <p>La respuesta no siempre viene en palabras. A veces llega como un suspiro largo, una lágrima que se escapa, un "ya no más" que se acomoda en el pecho.</p>
      <p>Y eso también es sanación.</p>
    `
  },
  {
    id: 2,
    date: "02 · 04 · 2026",
    title: "Reiki: la energía que ya habita en vos",
    excerpt: "El Reiki no trae algo nuevo. Te recuerda lo que siempre estuvo ahí, esperando ser reconocido.",
    icon: "sun",
    content: `
      <p>Cuando alguien llega por primera vez a una sesión de Reiki, suele preguntarme: <em>"¿Qué voy a sentir?"</em></p>
      <p>Y la respuesta más honesta que puedo dar es: lo que necesites sentir.</p>
      <p>El Reiki no es una fuerza que viene de afuera. Es el reconocimiento de la energía vital que habita en cada célula de tu cuerpo, en cada latido, en cada respiración. Mi trabajo como terapeuta es simplemente abrir un canal, sostener un espacio de calma y permitir que esa energía vuelva a fluir donde el cuerpo, la mente o las emociones la estaban bloqueando.</p>
      <p>Algunas personas sienten calor. Otras, un frescor profundo. Hay quienes ven colores, quienes lloran sin saber por qué, quienes se duermen y se despiertan como si hubiesen descansado por primera vez en meses.</p>
      <p><strong>No hay una forma correcta de recibir Reiki.</strong> Hay tu forma, en este momento exacto de tu vida.</p>
      <p>Si hace tiempo sentís que algo está pidiendo moverse dentro tuyo, tal vez sea hora de regalarte esa experiencia. El alma sabe cuándo es su momento.</p>
    `
  },
  {
    id: 3,
    date: "20 · 03 · 2026",
    title: "Las flores que hablan el idioma del alma",
    excerpt: "Los florales de Bach son mucho más que gotas. Son un susurro amoroso que acompaña tus procesos más íntimos.",
    icon: "lotus",
    content: `
      <p>El Dr. Edward Bach descubrió, hace casi cien años, algo muy hermoso: que ciertas flores guardan una vibración capaz de armonizar estados emocionales específicos.</p>
      <p>No curan enfermedades del cuerpo. Lo que hacen es más sutil y, muchas veces, más profundo: acompañan a tu mundo interior a volver al equilibrio.</p>
      <p><em>Para el miedo que paraliza, Mimulus. Para la tristeza sin nombre, Mustard. Para el que da y da y se olvida de sí, Centaury. Para el que no puede soltar el pasado, Honeysuckle.</em></p>
      <p>En una consulta floral, no trabajamos con síntomas. Trabajamos con lo que sentís. Hablamos, nos escuchamos, y entre las dos elegimos las flores que tu momento está pidiendo.</p>
      <p>Las gotas hacen el resto. Despacito. Sin forzar nada. Como todo lo que viene de la naturaleza.</p>
      <p>Es una de las terapias más amorosas que conozco. Ideal para acompañar otros procesos, para transitar cambios, duelos, ansiedad, o simplemente para reencontrarte con vos misma.</p>
    `
  }
];
