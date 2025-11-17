# Huellitas Felices 🐾

Aplicación web para la gestión integral de una veterinaria y peluquería canina. Permite mejorar la trazabilidad de los servicios ofrecidos, la organización interna y el seguimiento de las mascotas. 

## Funcionalidades principales  

- **Autenticación básica de usuarios:** Permite el acceso mediante validación de credenciales almacenadas en base de datos y gestión de estado mediante sesiones.
- **Autorización de usuarios:** Gestión de acceso a rutas privadas de la aplicación según rol.
- **CRUD de productos con control de stock:** Alta, consulta, modificación y baja de productos, gestionando el stock de cada uno.
- **Registro, consulta, modificación y baja de mascotas y dueños:** Permite asociar mascotas a sus propietarios y gestionar su información.
- **Agenda de turnos para peluquería y veterinaria:** Gestión completa de turnos vinculados a mascotas y servicios.
- **Buscador de mascotas por nombre o zona:** Permite la busqueda de mascotas perdidas.
- **Vistas dinámicas generadas con Pug:** Visualización amigable de datos a través de plantillas dinámicas.
- **Documentación interactiva de la API con Swagger:** Acceso a la documentación y pruebas de endpoints desde `/docs`.
- **Pruebas automatizadas y manuales con Postman:** Validación de los endpoints mediante colecciones de pruebas.
- **Middlewares personalizados para validaciones y manejo de errores:** Robustez y control en el flujo de la aplicación.
- **Flujo de ventas:** Gestión de stock, creación de carrito, resumen de compra y comrpobante de pago para productos y servicios.

## Herramientas de desarrollo 🛠️

- **JavaScript:** Lenguaje principal para la lógica de la aplicación.
- **Node.js:** - Entorno de ejecucion para JavaScript del lado del servidor.
- **Express.js:** - Framework para la creacion de servidores HTTP y manejo de rutas.
- **Pug:** - Motor de plantillas para renderizar vistas dinamicas en HTML.
- **JSON:** - Utilizado como base de datos local para persistencia de informacion.
- **Postman:** - Herramienta para el testeo de los endpoints de la API.
- **Nodemon:** - Utilidad para reiniciar automáticamente el servidor durante el desarrollo.

## Acceso en producción  🚀

Podés acceder a la aplicación ya desplegada desde este enlace:

🌐 https://huellitas-felices-dev.onrender.com

#### Usuarios de prueba

| Email                          | Contraseña | Rol         |
|-------------------------------|------------|-------------|
| emanuel@huellitasfelices.com  | 12345      | Gerencia    |
| admin@huellitasfelices.com    | 12345      | Admin       |
| gonzalo@huellitasfelices.com  | 12345      | Ventas      |
| susana@huellitasfelices.com   | 12345      | Peluquería  |
| paula@huellitasfelices.com    | 12345      | Clínica     |
| cristian@huellitasfelices.com | 12345      | Recepción   |


## Documentación de la API 📚

Accedé a la documentación Swagger para explorar los endpoints disponibles y enviar peticiones de prueba de manera visual:

➡️ https://huellitas-felices-dev.onrender.com/docs

## Guía para ejecutar en local 📋

Estas instrucciones te permitirán levantar la app de forma local.

### Requisitos 
* Tener instalado **Docker Desktop**. Podés descargarlo desde:
    ➡️ [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

### Instalación y Ejecución 🔧

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/malenavero/2025-DevOps-TPINTEGRADOR-ComD-Grupo6.git](https://github.com/malenavero/2025-DevOps-TPINTEGRADOR-ComD-Grupo6.git)
    ```

2.  **Posicionarse en la carpeta del proyecto:**
    ```bash
    cd 2025-DevOps-TPINTEGRADOR-ComD-Grupo6
    ```

3.  **Levantar los contenedores (App y BDD):**
    En una terminal, ejecutar:
    ```bash
    docker compose up
    ```
    *(La primera vez que se ejecuta, puede tardar unos minutos. En las ejecuciones siguientes, será instantáneo. Deberías ver en la terminal los logs de `huellitas-app-dev` y `huellitas-mongo-local`.)*

4.  **Cargar los datos iniciales (Seed):**
    Mientras la terminal anterior (del paso 3) sigue corriendo, **abrir una segunda terminal** y ejecutar:
    ```bash
    docker compose exec app npm run seed
    ```
    *(Esto llenará la base de datos de Docker con los usuarios, productos y pacientes de prueba. Solo es necesario hacerlo la primera vez que levantas el proyecto, o después de resetear la base de datos.)*

### Comandos útiles (Opcionales)

* **Detener los contenedores (sin borrar datos):**
    En la terminal del paso 3, presionar `Ctrl+C` y luego ejecutar:
    ```bash
    docker compose down
    ```

* **Resetear la base de datos (Borra todos los datos):**
    ```bash
    docker compose down -v
    ```

* **Correr los tests:**
    ```bash
    docker compose exec app npm run test
    ```


### Acceso a la aplicación ⌨️

En el navegador coloque la URL --> [http://localhost:3000](http://localhost:3000)


## Estructura del Proyecto 📦


```bash
huellitasFelices
├─ bin/ --> (Scripts para iniciar la aplicación)
├─ controllers/ --> (Lógica de negocio y controladores que gestionan las peticiones)
├─ data/ --> (Archivos JSON usados como base de datos local)
├─ middlewares/ --> (Middlewares personalizados para validaciones y manejo de errores)
├─ models/ --> (Definición de la estructura de los datos de la aplicación)
├─ postmanCollections/ --> (Colección Postman de las pruebas de los endpoints de la API)
├─ public/ --> (Imágenes, y otros archivos CSS y JS)
├─ routes/ --> (Rutas de la API y vistas)
├─ scripts/ --> (Scripts utilitarios y de inicialización de datos)
├─ services/ --> (Servicios de lógica de negocio y acceso a datos)
├─ tests/ --> (Pruebas automatizadas del sistema)
├─ utils/ --> (Funciones utilitarias y helpers)
├─ views/ --> (Plantillas Pug para renderizar vistas en HTML)
├─ .gitignore --> (Archivos y carpetas ignorados por Git)
├─ app.js --> (Archivo principal de la API)
├─ db.js --> (Conexión y configuración de la base de datos)
├─ eslint.config.mjs --> (Configuración de ESLint)
├─ initDataFiles.js --> (Script para inicializar los archivos de datos)
├─ package-lock.json --> (Archivo generado automáticamente)
├─ package.json --> (Configuración del proyecto y dependencias)
└─ swagger.js --> (Configuración de Swagger para documentar la API)
└─ Dockerfile --> (Archivo para construir la imagen Docker de la aplicación)
└─ docker-compose.yml --> (Archivo para definir y ejecutar los contenedores Docker)
└─ docker-compose-prod.yml --> (Archivo para definir y ejecutar los contenedores Docker en producción)
└─ .dockerignore --> (Archivo para ignorar archivos y carpetas al construir la imagen Docker)
└─ README.md --> (Archivo de documentación del proyecto)
```

## Autores ✒️

- **Cicchini, Josefina**
- **Cohen, Rosana**
- **Cruz Guantay, Francisco Agustin**
- **Guardia Vero, Malena**
