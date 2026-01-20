# AdoptaAmigos
proyecto

## Descripcion
EstudiaZen es una página web diseñada para ayudar a estudiantes a organizar su tiempo, reducir el estrés académico y mejorar su rendimiento escolar. La plataforma integra herramientas de planificación, recordatorios, técnicas de estudio y recursos de relajación en un solo sitio, de forma sencilla y accesible.

## Problemática

Actualmente, muchos refugios y asociaciones de rescate animal difunden a las mascotas en adopción a través de redes sociales o publicaciones estáticas, lo que provoca:

Información desactualizada sobre las mascotas disponibles.

Dificultad para filtrar por tamaño, edad o tipo de mascota.

Procesos lentos para contactar al refugio.

Baja tasa de adopción debido a la falta de una plataforma centralizada.

## Requerimientos funcionales
RF1: El sistema debe visualizar una lista interactiva de mascotas disponibles para adopción.

RF2: El usuario debe poder filtrar mascotas por especie, edad, tamaño y sexo en tiempo real.

RF3: El usuario debe visualizar la información detallada de una mascota seleccionada.

RF4: El usuario debe poder registrar una solicitud de adopción mediante un formulario.

RF5: El administrador debe poder editar el estado de adopción de una mascota (disponible / adoptada)

## Requerimientos No Funcionales (El “Cómo funciona”)

| Categoría         | Especificación Técnica                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Adaptabilidad** | Diseño **Responsive** utilizando Flexbox y CSS Grid para correcta visualización en móviles, tabletas y escritorio. |
| **Rendimiento**   | Implementación de **Lazy Loading** para cargar componentes y rutas solo cuando el usuario las necesite.            |
| **Persistencia**  | Uso de **LocalStorage** para guardar filtros aplicados y formularios parcialmente completados.                     |
| **Accesibilidad** | Uso de etiquetas HTML semánticas, contraste adecuado de colores y atributos **ARIA** para lectores de pantalla.    |

## Tecnologías y Herramientas del Ecosistema

Framework Frontend: React

Manejo de Estado Global: Context API

Se utiliza para compartir el estado de las mascotas y solicitudes de adopción entre componentes.

Consumo de Datos: Fetch API

Los datos provienen de una API simulada o archivo JSON local.

Estilizado: Tailwind CSS

Permite crear interfaces modernas, limpias y responsivas de forma rápida.

Despliegue: Netlify

Ideal para aplicaciones SPA con React y despliegue continuo desde GitHub.

## Diagrama de Flujo 

A --> Usuario entra a la plataforma --> B Visualiza lista de mascotas

B --> C aplica preferencias de el usuario

C --> D Se actualiza la informacion de la pagina

D --> E Selecciona una mascota

E --> F Visualiza detalles

F --> G Envía solicitud de adopción

G --> H Formulario se guarda y confirma envío
