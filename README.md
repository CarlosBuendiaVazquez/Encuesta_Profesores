# Sistema de Encuesta para Maestros

Sistema web para que los profesores universitarios registren su disponibilidad de materias y horarios.

## 🚀 Características

- **Registro de datos del profesor** (nombre, correo, departamento, teléfono)
- **Selección de materias** con niveles de preferencia (alta, media, baja)
- **Disponibilidad horaria** en formato 24 horas (7:00-8:00, 14:00-15:00, etc.)
- **Guardado de encuestas** en localStorage del navegador
- **Visualización de datos guardados** con detalles completos
- **Interfaz responsive** para dispositivos móviles y escritorio

## 📁 Estructura del Proyecto


## 🛠️ Instalación y Uso

1. **Descarga los archivos** en una carpeta
2. **Abre `index.html`** en tu navegador
3. **No necesitas servidor** - funciona localmente

## 💻 Uso del Sistema

### 1. Registrar Datos del Profesor
- Completa todos los campos obligatorios (nombre y correo)
- Los datos opcionales pueden dejarse en blanco

### 2. Agregar Materias
1. Selecciona una materia del listado
2. Elige el nivel de preferencia (alta, media, baja)
3. Haz clic en "Agregar Materia"
4. Para eliminar una materia, haz clic en la "X" roja

### 3. Seleccionar Horarios
- Haz clic en los horarios disponibles (formato 24 horas)
- Los horarios seleccionados se marcarán en azul
- Puedes seleccionar múltiples horarios

### 4. Guardar o Enviar
- **Guardar Borrador**: Guarda sin validar horarios
- **Enviar Encuesta**: Guarda como encuesta completa

### 5. Ver Datos Guardados
- Todas las encuestas se muestran en "Datos Guardados"
- Puedes ver detalles completos de cada encuesta
- Los datos se guardan en localStorage del navegador

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsive
- **JavaScript**: Lógica y funcionalidades
- **Font Awesome**: Iconos
- **LocalStorage**: Almacenamiento persistente

## 📊 Consulta de Datos

### Opción 1: Dentro de la aplicación
- Ve a la sección "Datos Guardados"
- Verás todas las encuestas con detalles

### Opción 2: Herramientas de Desarrollador
1. Presiona F12
2. Ve a "Application" → "Local Storage"
3. Busca la clave `encuestas_profesores`
4. Verás todos los datos en formato JSON

### Opción 3: Consola JavaScript
```javascript
console.log(JSON.parse(localStorage.getItem('encuestas_profesores')));