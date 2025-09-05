# Mi Blog Personal

Este proyecto es mi blog personal creado a partir d elos visto en el curso de ComunidadIt.
Lo que aqui mismo he trabajado fue a partir de  practicar y demostrar conceptos clave de desarrollo frontend, desde lo más básico en HTML y CSS, hasta interactividad con JavaScript y manejo del DOM.

---

## HTML + Git
La base del proyecto está construida con HTML semántico, cuidando la estructura y accesibilidad del contenido.  
Además, el control de versiones se maneja con **Git**, lo que permite un flujo de trabajo ordenado, con historial de cambios y posibilidad de colaborar fácilmente.  

Al inicio me resulto un **costo de aprendizaje** familiarizarme con:  
- El flujo de Git (commits, ramas, merges, etc.).  
- Las estructuras semánticas de HTML y cómo se relacionan entre sí.  

Con la práctica, ambos se vuelven herramientas naturales para trabajar de forma eficiente. Sigo en ese proceso.

---

## CSS + Flexbox
En este proyecto aplico el **modelo de cajas** usando **Flexbox**.  

- Siempre se trabaja con una **caja contenedora** que tiene 2 hijos, en mi proyecto por ejemplo. 
- La clase `container` tiene la propiedad `display: flex;`, lo que habilita el uso de Flexbox, y además se organiza en fila con `flex-direction: row;`.  
- Cada hijo se organiza en columna con `flex-direction: column;`.  
- También se aplica la propiedad abreviada `flex: 1 1 0;`, que es un atajo para:  
  - `flex-grow: 1;` 
  - `flex-shrink: 1;`  
  - `flex-basis: 0;`  

Esto permite que los elementos hijos repartan el **ancho y alto en partes iguales**, adaptándose de manera flexible al espacio disponible.

---

## Responsive
**⚠️ Aún Estoy trabajando en esta parte.**

Con el modelo de cajas actual, cada hijo (que incluye un elemento `<p>` con texto y un `<img>` con imagen) podría ordenarse de forma particular en modo responsive:  
- En dispositivos pequeños, se puede colocar la imagen arriba y el texto debajo.  
- En lugar de estar en fila, cada hijo pasaría a mostrarse como una lista de **cajas contenedoras**, una debajo de la otra.  

---

## Javascript + DOM
**⚠️ Aún Estoy trabajando en esta parte.**

H utilizado **JavaScript** principalmente para **validaciones mínimas del formulario**.  
- Al enviar el formulario se usa `event.preventDefault()` para **interceptar el submit**, obtener los datos y recién ahí ejecutar la validación.  
- Las validaciones actuales son básicas (presencia de campos y formato simple), enfocadas en demostrar el flujo de captura y chequeo antes de continuar con el procesamiento. (CONSOLA)

#### Posibles mejoras
- Agregar validaciones más estrictas (por ejemplo, **longitud mínima del nombre**).  
- Validar el **mail con un patrón** 
- Mostrar mensajes de error accesibles y con foco manejado.  
- Deshabilitar el botón de envío mientras se valida o procesa.


El uso del DOM (document) lo utilice exclusivamente para poder manipular el formulario

---

## Futuras mejoras
- Implementar un modo oscuro (modo oscuro).   
- Integrar un backend que tome los comentarios y los almacene en una base de datos.  
- Mejorar la accesibilidad.