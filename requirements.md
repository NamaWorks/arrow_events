# backend to frontend JS

## Requisitos y entrega

Tema: Gestión de Eventos y Asistentes

La temática puede ser diferente siempre y cuando la gestión de colecciones sea similar. Puede tener el mismo número o más de modelos y elementos, así como controladores.

**Backend (Express, JSON Web Token, Bcrypt, Mongoose, CORS, Nodemon)**

### Modelos de Datos:

Crea un modelo de usuario que almacene información como nombre, correo electrónico y contraseña (hashed).

Crea un modelo de evento con información como título, fecha, ubicación y descripción.

Crea un modelo de asistente con información como nombre, correo electrónico y eventos a los que ha confirmado asistencia.

### Endpoints

/api/auth/register: Permite el registro de nuevos usuarios.

/api/auth/login: Maneja la autenticación y emite tokens JWT.

/api/events: Ofrece la lista de eventos disponibles.

/api/events/:id: Proporciona detalles de un evento específico.

/api/attendees: Ofrece la lista de asistentes registrados.

/api/attendees/:id: Proporciona detalles de un asistente específico.

/api/user/events: Permite a los usuarios crear nuevos eventos.

/api/user/attendees/:eventId: Permite a los usuarios confirmar asistencia a un evento.

### Middleware de autenticación

Implementa un middleware que verifica la presencia y validez del token en las rutas protegidas.

Protege las rutas que permiten acciones exclusivas para usuarios autenticados.

### Populación de Datos iniciales

Crea al menos un usuario y una colección adicional (por ejemplo, "Eventos Organizados").

Asigna eventos y asistentes a esta colección en la base de datos.

### Extra

Subida de ficheros (por ejemplo: avatares o carteles de eventos).

Autenticación por roles.

Controladores que ordenen la información bajo algún criterio.

Controladores que inserten un elemento de una colección en otra.

## Frontend (Vite y JavaScript):

### Página de Inicio de Sesión y Registro:

Implementa un formulario de inicio de sesión para que los usuarios ingresen al sistema. Si no existiera, registrar un nuevo usuario.

### Página Principal (Después de inicio de sesión)

Muestra la lista de eventos disponibles.

Los usuarios autenticados verán opciones adicionales para crear eventos y confirmar asistencia.

### Explorar eventos y asistentes

Permite a los usuarios explorar detalles de cada evento y la lista de asistentes. 

Proporciona opciones para confirmar asistencia a eventos.

### Creación de Eventos y Confirmación de Asistencia:

Implementa formularios para que los usuarios creen nuevos eventos y confirmen asistencia a eventos existentes.

### Manejo de errores:

Implementa manejo de errores adecuado en el frontend y el backend.

### Componetización y SPA

Componetizar dentro de lo posible los elementos del frontend, además de navegar a través de un método que permita mostrar el contenido como una SPA.