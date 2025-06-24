# 🏦 ClientesApp - Backend Spring Boot

Aplicación web construida como parte de una prueba técnica. Este backend permite realizar operaciones CRUD sobre clientes, aplicar validaciones, calcular su viabilidad según edad productiva, y comunicarse mediante servicios RESTful con un frontend Angular.

---

## ⚙️ Funcionalidades principales

- ✔️ Registro de clientes con todos los campos obligatorios
- 📋 Listado, edición y eliminación de clientes desde la base de datos
- 🧠 Cálculo automático de viabilidad (entre 18 y 65 años)
- 🔐 Validación completa de campos vía anotaciones con Jakarta Validation
- ⚠️ Manejo global de errores y respuestas en formato JSON
- 🔎 Acceso a base de datos PostgreSQL con Spring Data JPA

---

## 🧱 Estructura del proyecto

## 🔗 Endpoints expuestos (REST API)

| Método | Endpoint                   | Descripción                       |
|--------|----------------------------|-----------------------------------|
| GET    | `/clientes`                | Lista todos los clientes          |
| POST   | `/clientes`                | Crea un nuevo cliente             |
| PUT    | `/clientes/{documento}`    | Actualiza un cliente por documento |
| DELETE | `/clientes/{documento}`    | Elimina un cliente por documento  |

---

## 🛠️ Tecnologías utilizadas

- Java 17
- Spring Boot 3
- Spring Web
- Spring Data JPA
- Jakarta Validation
- PostgreSQL
- Maven
- Insomnia (para pruebas)

---

## 📋 Validaciones incluidas en el backend

- `@NotBlank`: campos obligatorios
- `@Email`: formato válido de correo electrónico
- `@Pattern`: ocupación debe ser "Empleado", "Independiente", o "Pensionado"
- `@NotNull`: fecha de nacimiento requerida
- Reglas personalizadas para edad productiva
- Manejo de errores vía `@RestControllerAdvice`

---

## 💾 Base de datos

- Motor: PostgreSQL
- Tabla: `cliente`
- Restricción CHECK sobre el campo `ocupacion` para aceptar solo valores válidos
- La lógica de edad productiva se aplica **antes de persistir** el cliente

---

## 🚦 Estado actual

✅ Backend finalizado y probado  
🧪 Validaciones y errores funcionando correctamente  
📬 Conexión con frontend Angular comenzará a continuación

---

## 🧑‍💻 Autor

Desarrollado con compromiso y profesionalismo por **Eduard**  

---
