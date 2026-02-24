// ===== CONFIGURACIÓN DE CARRERAS Y MATERIAS CON SEMESTRES - PERÍODO ENE-JUN =====
const carrerasDataENEJUN = {
    'arquitectura': {
        nombre: 'Arquitectura',
        materias: [
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte II', semestre: 2 },
            { nombre: 'Fundamentos Teóricos del Diseño II', semestre: 2 },
            { nombre: 'Geometría Descriptiva II', semestre: 2 },
            { nombre: 'Matemáticas Aplicadas a la Arquitectura', semestre: 2 },
            { nombre: 'Metodología para el Diseño', semestre: 2 },
            { nombre: 'Taller de Lenguaje Arquitectónico I', semestre: 2 },
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte IV', semestre: 4 },
            { nombre: 'Estructuras II', semestre: 4 },
            { nombre: 'Instalaciones I', semestre: 4 },
            { nombre: 'Pensamiento Arquitectónico Contemporáneo', semestre: 4 },
            { nombre: 'Taller de Construcción I', semestre: 4 },
            { nombre: 'Taller de Diseño II', semestre: 4 },
            { nombre: 'Administración de la Construcción I', semestre: 6 },
            { nombre: 'Estructuras de Acero', semestre: 6 },
            { nombre: 'Taller de Diseño IV', semestre: 6 },
            { nombre: 'Taller de Investigación I', semestre: 6 },
            { nombre: 'Urbanismo I', semestre: 6 },
            { nombre: 'Administración de Empresas Constructoras I', semestre: 8 },
            { nombre: 'Gestión Urbanística', semestre: 8 },
            { nombre: 'Taller de Diseño VI', semestre: 8 }
        ]
    },
    'civil': {
        nombre: 'Ing. Civil',
        materias: [
            { nombre: 'Cálculo Integral', semestre: 2 },
            { nombre: 'Cálculo Vectorial', semestre: 2 },
            { nombre: 'Geología', semestre: 2 },
            { nombre: 'Materiales y Procesos Constructivos', semestre: 2 },
            { nombre: 'Probabilidad y Estadística', semestre: 2 },
            { nombre: 'Topografía', semestre: 2 },
            { nombre: 'Dinámica', semestre: 4 },
            { nombre: 'Fundamentos de la Mecánica de los Medios Continuos', semestre: 4 },
            { nombre: 'Maquinaria Pesada y Movimiento de Tierra', semestre: 4 },
            { nombre: 'Mecánica de Suelos', semestre: 4 },
            { nombre: 'Modelos de Optimización de Recursos', semestre: 4 },
            { nombre: 'Métodos Numéricos', semestre: 4 },
            { nombre: 'Administración de la Construcción', semestre: 6 },
            { nombre: 'Análisis Estructural', semestre: 6 },
            { nombre: 'Diseño y Construcción de Pavimentos', semestre: 6 },
            { nombre: 'Hidrología Superficial', semestre: 6 },
            { nombre: 'Hidráulica de Canales', semestre: 6 },
            { nombre: 'Instalaciones en los Edificios', semestre: 6 },
            { nombre: 'Alcantarillado', semestre: 8 },
            { nombre: 'Diseño Estructural de Cimentaciones', semestre: 8 },
            { nombre: 'Diseño de Elementos de Acero', semestre: 8 },
            { nombre: 'Formulación y Evaluación de Proyectos', semestre: 8 }
        ]
    },
    'electromecanica': {
        nombre: 'Ing. Electromecánica',
        materias: [
            { nombre: 'Cálculo Integral', semestre: 2 },
            { nombre: 'Dibujo Electromecánico', semestre: 2 },
            { nombre: 'Estática', semestre: 2 },
            { nombre: 'Metrología y Normalización', semestre: 2 },
            { nombre: 'Tecnología de los Materiales', semestre: 2 },
            { nombre: 'Álgebra Lineal', semestre: 2 },
            { nombre: 'Análisis de Circuitos Eléctricos de CD', semestre: 4 },
            { nombre: 'Análisis y Síntesis de Mecanismos', semestre: 4 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4 },
            { nombre: 'Electrónica Analógica', semestre: 4 },
            { nombre: 'Mecánica de Fluidos', semestre: 4 },
            { nombre: 'Termodinámica', semestre: 4 },
            { nombre: 'Administración y Técnicas de Mantenimiento', semestre: 6 },
            { nombre: 'Ahorro de Energía', semestre: 6 },
            { nombre: 'Instalaciones Eléctricas', semestre: 6 },
            { nombre: 'Máquinas Eléctricas', semestre: 6 },
            { nombre: 'Máquinas y Equipos Térmicos I', semestre: 6 },
            { nombre: 'Taller de Investigación I', semestre: 6 },
            { nombre: 'Formulación y Evaluación de Proyectos', semestre: 8 },
            { nombre: 'Refrigeración y Aire Acondicionado', semestre: 8 },
            { nombre: 'Sistemas Hidráulicos y Neumáticos de Potencia', semestre: 8 },
            { nombre: 'Subestaciones Eléctricas', semestre: 8 }
        ]
    },
    'ferroviaria': {
        nombre: 'Ing. Ferroviaria',
        materias: [
            { nombre: 'Cálculo Integral', semestre: 2 },
            { nombre: 'Dibujo Asistido por Computadora', semestre: 2 },
            { nombre: 'Metrología y Normalización', semestre: 2 },
            { nombre: 'Probabilidad y Estadística', semestre: 2 },
            { nombre: 'Topografía para Vías Ferroviarias', semestre: 2 },
            { nombre: 'Álgebra Lineal', semestre: 2 },
            { nombre: 'Circuitos Eléctricos y Electrónicos', semestre: 4 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4 },
            { nombre: 'Innovación y Gestión del Conocimiento', semestre: 4 },
            { nombre: 'Métodos Numéricos', semestre: 4 },
            { nombre: 'Principios Básicos de Geotecnia', semestre: 4 },
            { nombre: 'Vibraciones Mecánicas', semestre: 4 },
            { nombre: 'Electrificación de Sistemas Ferroviarios', semestre: 6 },
            { nombre: 'Gestión de la Calidad del Servicio Ferroviario', semestre: 6 },
            { nombre: 'Instrumentación', semestre: 6 },
            { nombre: 'Logística Ferroviaria', semestre: 6 },
            { nombre: 'Material Rodante', semestre: 6 },
            { nombre: 'Supervisión y Control de Calidad de la Infraestructura Ferroviaria', semestre: 6 },
            { nombre: 'Automatización Ferroviaria', semestre: 8 },
            { nombre: 'Mantenimiento en Sistemas Ferroviarias', semestre: 8 }
        ]
    },
    'mecatronica': {
        nombre: 'Ing. Mecatrónica',
        materias: [
            { nombre: 'Administración y Contabilidad', semestre: 2 },
            { nombre: 'Ciencia e Ingeniería de Materiales', semestre: 2 },
            { nombre: 'Cálculo Integral', semestre: 2 },
            { nombre: 'Estadística y Control de Calidad', semestre: 2 },
            { nombre: 'Programación Básica', semestre: 2 },
            { nombre: 'Álgebra Lineal', semestre: 2 },
            { nombre: 'Análisis de Circuitos Eléctricos', semestre: 4 },
            { nombre: 'Dinámica', semestre: 4 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4 },
            { nombre: 'Fundamentos de Termodinámica', semestre: 4 },
            { nombre: 'Mecánica de Materiales', semestre: 4 },
            { nombre: 'Diseño de Elementos Mecánicos', semestre: 6 },
            { nombre: 'Electrónica Digital', semestre: 6 },
            { nombre: 'Electrónica de Potencia Aplicada', semestre: 6 },
            { nombre: 'Instrumentación', semestre: 6 },
            { nombre: 'Taller de Investigación II', semestre: 6 },
            { nombre: 'Vibraciones Mecánicas', semestre: 6 },
            { nombre: 'Control', semestre: 8 },
            { nombre: 'Controladores Lógicos Programables', semestre: 8 },
            { nombre: 'Formulación y Evaluación de Proyectos', semestre: 8 }
        ]
    }
};

// ===== CONFIGURACIÓN DE CARRERAS Y MATERIAS CON SEMESTRES - PERÍODO AGO-DIC =====
const carrerasDataAGODIC = {
    'arquitectura': {
        nombre: 'Arquitectura',
        materias: [
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte I', semestre: 1 },
            { nombre: 'Análisis Proyectual', semestre: 1 },
            { nombre: 'Fundamentos Teóricos del Diseño', semestre: 1 },
            { nombre: 'Fundamentos de Investigación', semestre: 1 },
            { nombre: 'Geometría Descriptiva I', semestre: 1 },
            { nombre: 'Taller de Expresión Plástica', semestre: 1 },
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte III', semestre: 3 },
            { nombre: 'Estructuras I', semestre: 3 },
            { nombre: 'Propiedades y Comportamiento de los Materiales', semestre: 3 },
            { nombre: 'Taller de Diseño I', semestre: 3 },
            { nombre: 'Taller de Lenguaje Arquitectónico II', semestre: 3 },
            { nombre: 'Topografía', semestre: 3 },
            { nombre: 'Desarrollo Sustentable', semestre: 5 },
            { nombre: 'Estructuras de Concreto', semestre: 5 },
            { nombre: 'Estética', semestre: 5 },
            { nombre: 'Instalaciones II', semestre: 5 },
            { nombre: 'Taller de Construcción II', semestre: 5 },
            { nombre: 'Taller de Diseño III', semestre: 5 },
            { nombre: 'Administración de la Construcción II', semestre: 7 },
            { nombre: 'Taller de Diseño V', semestre: 7 },
            { nombre: 'Taller de Investigación II', semestre: 7 },
            { nombre: 'Taller de Ética', semestre: 7 },
            { nombre: 'Urbanismo II', semestre: 7 },
            { nombre: 'Administración de Empresas Constructoras II', semestre: 9 }
        ]
    },
    'civil': {
        nombre: 'Ing. Civil',
        materias: [
            { nombre: 'Cálculo Diferencial', semestre: 1 },
            { nombre: 'Dibujo en Ingeniería Civil', semestre: 1 },
            { nombre: 'Fundamentos de Investigación', semestre: 1 },
            { nombre: 'Química', semestre: 1 },
            { nombre: 'Software en Ingeniería Civil', semestre: 1 },
            { nombre: 'Taller de Ética', semestre: 1 },
            { nombre: 'Carreteras', semestre: 3 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 3 },
            { nombre: 'Estática', semestre: 3 },
            { nombre: 'Sistemas de Transporte', semestre: 3 },
            { nombre: 'Tecnología del Concreto', semestre: 3 },
            { nombre: 'Álgebra Lineal', semestre: 3 },
            { nombre: 'Costos y Presupuestos', semestre: 5 },
            { nombre: 'Desarrollo Sustentable', semestre: 5 },
            { nombre: 'Hidráulica Básica', semestre: 5 },
            { nombre: 'Mecánica de Materiales', semestre: 5 },
            { nombre: 'Mecánica de Suelos Aplicada', semestre: 5 },
            { nombre: 'Taller de Investigación I', semestre: 5 },
            { nombre: 'Abastecimiento de Agua', semestre: 7 },
            { nombre: 'Análisis Estructural Avanzado', semestre: 7 },
            { nombre: 'Diseño de Elementos de Concreto Reforzado', semestre: 7 },
            { nombre: 'Taller de Investigación II', semestre: 7 },
            { nombre: 'Planificacion Urbana', semestre: 9 },
            { nombre: 'Dis.Plant.Trat Aguas', semestre: 9 },
            { nombre: 'Diseño Estructural', semestre: 9 }
        ]
    },
    'electromecanica': {
        nombre: 'Ing. Electromecánica',
        materias: [
            { nombre: 'Fundamentos de Investigación', semestre: 1 },
            { nombre: 'Introducción a la Programación', semestre: 1 },
            { nombre: 'Química', semestre: 1 },
            { nombre: 'Taller de Ética', semestre: 1 },
            { nombre: 'Cálculo Vectorial', semestre: 3 },
            { nombre: 'Dinámica', semestre: 3 },
            { nombre: 'Electricidad y Magnetismo', semestre: 3 },
            { nombre: 'Mecánica de Materiales', semestre: 3 },
            { nombre: 'Probabilidad y Estadística', semestre: 3 },
            { nombre: 'Procesos de Manufactura', semestre: 3 },
            { nombre: 'Análisis de Circuitos Eléctricos de CA', semestre: 5 },
            { nombre: 'Diseño de Elementos de Máquinas', semestre: 5 },
            { nombre: 'Diseño e Ingeniería Asistidos por Computadora', semestre: 5 },
            { nombre: 'Electrónica Digital', semestre: 5 },
            { nombre: 'Sistemas y Máquinas de Fluidos', semestre: 5 },
            { nombre: 'Transferencia de Calor', semestre: 5 },
            { nombre: 'Controles Eléctricos', semestre: 7 },
            { nombre: 'Ingeniería de Control Clásico', semestre: 7 },
            { nombre: 'Máquinas y Equipos Térmicos II', semestre: 7 },
            { nombre: 'Sistemas Eléctricos de Potencia', semestre: 7 },
            { nombre: 'Taller de Investigación II', semestre: 7 }
        ]
    },
    'ferroviaria': {
        nombre: 'Ing. Ferroviaria',
        materias: [
            { nombre: 'Desarrollo Sustentable', semestre: 1 },
            { nombre: 'Fundamentos de Investigación', semestre: 1 },
            { nombre: 'Introducción a la Ingeniería Ferroviaria', semestre: 1 },
            { nombre: 'Introducción a la Programación', semestre: 1 },
            { nombre: 'Taller de Ética', semestre: 1 },
            { nombre: 'Ciencia e Ingeniería de los Materiales', semestre: 3 },
            { nombre: 'Cálculo Vectorial', semestre: 3 },
            { nombre: 'Electromagnetismo', semestre: 3 },
            { nombre: 'Gestión Ambiental Ferroviaria', semestre: 3 },
            { nombre: 'Introducción a la Administración y Economía', semestre: 3 },
            { nombre: 'Mecánica Clásica', semestre: 3 },
            { nombre: 'Circuitos Electrónicos de Potencia', semestre: 5 },
            { nombre: 'Diseño Mecánico I', semestre: 5 },
            { nombre: 'Ferrocarriles', semestre: 5 },
            { nombre: 'Fundamentos de Telecomunicaciones', semestre: 5 },
            { nombre: 'Geotecnia Aplicada a la Infraestructura Ferroviaria', semestre: 5 },
            { nombre: 'Taller de Investigación I', semestre: 5 },
            { nombre: 'Fundamentos de Información Financiera', semestre: 7 },
            { nombre: 'Sistemas Neumáticos Ferroviarios', semestre: 7 },
            { nombre: 'Sistemas de Señalización y Control', semestre: 7 },
            { nombre: 'Sistemas de Tracción y de Frenado', semestre: 7 },
            { nombre: 'Taller de Investigación II', semestre: 7 }
        ]
    },
    'mecatronica': {
        nombre: 'Ing. Mecatrónica',
        materias: [
            { nombre: 'Cálculo Diferencial', semestre: 1 },
            { nombre: 'Dibujo Asistido por Computadora', semestre: 1 },
            { nombre: 'Fundamentos de investigación', semestre: 1 },
            { nombre: 'Metrología y Normalización', semestre: 1 },
            { nombre: 'Química', semestre: 1 },
            { nombre: 'Taller de Ética', semestre: 1 },
            { nombre: 'Cálculo Vectorial', semestre: 3 },
            { nombre: 'Desarrollo Sustentable', semestre: 3 },
            { nombre: 'Electromagnetismo', semestre: 3 },
            { nombre: 'Estática', semestre: 3 },
            { nombre: 'Métodos Numéricos', semestre: 3 },
            { nombre: 'Procesos de Fabricación', semestre: 3 },
            { nombre: 'Análisis de Fluidos', semestre: 5 },
            { nombre: 'Electrónica Analógica', semestre: 5 },
            { nombre: 'Mecanismos', semestre: 5 },
            { nombre: 'Máquinas Eléctricas', semestre: 5 },
            { nombre: 'Taller de Investigación I', semestre: 5 },
            { nombre: 'Circuitos Hidráulicos y Neumáticos', semestre: 7 },
            { nombre: 'Dinámica de Sistemas', semestre: 7 },
            { nombre: 'Mantenimiento', semestre: 7 },
            { nombre: 'Manufactura Avanzada', semestre: 7 },
            { nombre: 'Microcontroladores', semestre: 7 },
            { nombre: 'Programación Avanzada', semestre: 7 },
            { nombre: 'Robótica', semestre: 9 }
        ]
    }
};

// ===== VARIABLES GLOBALES =====
let carrerasData = carrerasDataENEJUN; // Por defecto ENE-JUN
let datosProfesor = {
    nombre: '',
    correo: '',
    telefono: '',
    codigo: '',
    tipoPlaza: '',
    horasPlaza: ''
};

let materiasSeleccionadas = [];
let horariosSeleccionados = [];
let filtroCarreraActual = '';
let materiaSeleccionadaTemp = null;
let turnoActivo = 'matutino';
let periodoActivo = 'ene-jun'; // 'ene-jun' o 'ago-dic'
let adminActivo = false;

// ===== SISTEMA DE ACCESO ADMIN POR URL =====
const ADMIN_SECRET = 'admin2026';

function verificarAccesoAdmin() {
    const urlParams = new URLSearchParams(window.location.search);
    const adminKey = urlParams.get('admin');
    
    if (adminKey === ADMIN_SECRET) {
        console.log('👑 Acceso administrador concedido por URL');
        return true;
    }
    
    return false;
}

// ===== CARGAR DATOS GUARDADOS DE LOCALSTORAGE =====
function cargarDatosGuardados() {
    // Cargar período activo
    const periodoGuardado = localStorage.getItem('periodoActivo');
    if (periodoGuardado && (periodoGuardado === 'ene-jun' || periodoGuardado === 'ago-dic')) {
        periodoActivo = periodoGuardado;
        carrerasData = periodoActivo === 'ene-jun' ? carrerasDataENEJUN : carrerasDataAGODIC;
    }
    
    // Cargar materias de ENE-JUN
    const materiasENEJUNGuardadas = localStorage.getItem('carrerasDataENEJUN');
    if (materiasENEJUNGuardadas) {
        try {
            const datos = JSON.parse(materiasENEJUNGuardadas);
            Object.assign(carrerasDataENEJUN, datos);
            console.log('📚 Materias ENE-JUN cargadas de localStorage');
        } catch (e) {
            console.error('Error cargando materias ENE-JUN:', e);
        }
    }
    
    // Cargar materias de AGO-DIC
    const materiasAGODICGuardadas = localStorage.getItem('carrerasDataAGODIC');
    if (materiasAGODICGuardadas) {
        try {
            const datos = JSON.parse(materiasAGODICGuardadas);
            Object.assign(carrerasDataAGODIC, datos);
            console.log('📚 Materias AGO-DIC cargadas de localStorage');
        } catch (e) {
            console.error('Error cargando materias AGO-DIC:', e);
        }
    }
    
    // Cargar profesores
    const profesoresGuardados = localStorage.getItem('profesoresDB');
    if (profesoresGuardados) {
        try {
            const datos = JSON.parse(profesoresGuardados);
            profesoresDB.length = 0;
            profesoresDB.push(...datos);
            console.log('👥 Profesores cargados de localStorage');
        } catch (e) {
            console.error('Error cargando profesores:', e);
        }
    }
}

// ===== FUNCIONES PARA GUARDAR PERÍODO EN LOCALSTORAGE =====
function guardarPeriodoEnStorage(periodo) {
    localStorage.setItem('periodoActivo', periodo);
    console.log(`💾 Período guardado: ${periodo}`);
}

function cargarPeriodoDeStorage() {
    const periodoGuardado = localStorage.getItem('periodoActivo');
    if (periodoGuardado && (periodoGuardado === 'ene-jun' || periodoGuardado === 'ago-dic')) {
        console.log(`📂 Período cargado de storage: ${periodoGuardado}`);
        return periodoGuardado;
    }
    return 'ene-jun';
}

// ===== GENERAR LISTA GLOBAL DE MATERIAS CON CARRERAS Y SEMESTRES =====
function generarListaGlobalMaterias() {
    const materiasMap = new Map();
    
    Object.values(carrerasData).forEach(carrera => {
        carrera.materias.forEach(materia => {
            const key = materia.nombre;
            if (!materiasMap.has(key)) {
                materiasMap.set(key, []);
            }
            materiasMap.get(key).push({
                carrera: carrera.nombre,
                semestre: materia.semestre
            });
        });
    });
    
    const materiasGlobales = [];
    materiasMap.forEach((info, nombre) => {
        materiasGlobales.push({
            nombre: nombre,
            info: info.sort((a, b) => a.semestre - b.semestre)
        });
    });
    
    materiasGlobales.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return materiasGlobales;
}

let todasLasMaterias = generarListaGlobalMaterias();

// ===== BASE DE DATOS DE PROFESORES (SOLO NOMBRES) =====
let profesoresDB = [
    'Abner David Koyoc Martinez',
    'Abril Hiore Catzin Tamayo',
    'Alejandro Filiberto Gomez Perez',
    'Amilckar Tonchez Mis',
    'Ana Maria Valenzuela Muñiz',
    'Angel Alejandro Treviño Arzapalo',
    'Argentina Vargas Hernandez',
    'Aydee Arely García Elías',
    'Bibian Moises Cua Martinez',
    'Bryan Lee Bernal Osorio',
    'Carlos Roberto Esquivel Briceño',
    'Carmen Manuel Lopez Montero',
    'Cesar Morales Ramirez',
    'Cherif Ben-Youssef Brants',
    'Diego Ramon Briceño Dominguez',
    'Elizabeth Garduza Flota',
    'Florentino Chimal Y Alamilla',
    'Francisco Jose Arroyo Rodriguez',
    'Gabriel Marcelo De Jesús Rosado Ortiz',
    'Georgina Valeria Palma Carrillo',
    'Gerardo Fuster Lopez',
    'German Dzul Sulub',
    'German Perez Zuñiga',
    'Gladis Del Rosario Cupul Balam',
    'Gustavo Perez Hernandez',
    'Javier Pacheco Hipolito',
    'Jose Gabriel Sulu Martinez',
    'Jose Gregorio Dzul',
    'Jose Ysmael Verde Gomez',
    'Juan Antonio Ruiz Velazco De La Garza',
    'Juan Carlos Rodriguez Montes',
    'Leopoldo Alberto Justiniano Ferraez',
    'Luigi Del Carmen Chay Alvarez',
    'Luis Alfonso Marin Priego',
    'Luis Alfredo Marquez Sanchez',
    'Luis Fidel Cerecero Natale',
    'Luis Humberto Caballero Mejia',
    'Luis Manuel Peña Romero',
    'Marco Arroyo Terrazas',
    'Miguel Angel Basto Pech',
    'Miguel Angel Briceño Chan',
    'Modesto Ek Solis',
    'Néstor Julián Aguilar Sosa',
    'Oscar Andres Cardenas Alvarado',
    'Oscar Augusto Cárdenas Espinosa',
    'Oscar San Juan Farfan',
    'Othoniel Ortiz Ruiz',
    'Raul Ramirez Lozano',
    'Rebeca Visairo Mendez',
    'Renan Antonio Gonzalez Espinosa',
    'Rodrigo Coral Cahuich',
    'Rosa Hilda Valencia Ruiz',
    'Rosa Isela Rivera Mendez',
    'Santos Eduardo Isaias Peña',
    'Tirso Juan Ordaz Coral',
    'Xochitl Nubia Molina Lozano'
].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

// ===== SISTEMA DE NOTIFICACIONES =====
function mostrarNotificacion(mensaje, tipo = 'success', duracion = 4000) {
    const container = document.getElementById('notificationArea');
    if (!container) return;
    
    const notificacion = document.createElement('div');
    notificacion.className = `notification notification-${tipo}`;
    
    let icono = 'fa-circle-check';
    if (tipo === 'error') icono = 'fa-circle-exclamation';
    if (tipo === 'info') icono = 'fa-circle-info';
    if (tipo === 'warning') icono = 'fa-triangle-exclamation';
    
    notificacion.innerHTML = `
        <i class="fas ${icono}"></i>
        <span class="notification-message">${mensaje}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notificacion);
    
    setTimeout(() => {
        if (notificacion.parentElement) {
            notificacion.style.animation = 'slideIn 0.3s reverse';
            setTimeout(() => notificacion.remove(), 300);
        }
    }, duracion);
}

// ===== MANEJO DE TIPO DE PLAZA =====
function inicializarTipoPlaza() {
    const selectPlaza = document.getElementById('tipoPlaza');
    const horasContainer = document.getElementById('horasPlazaContainer');
    const inputHoras = document.getElementById('horasPlaza');
    
    if (selectPlaza) {
        selectPlaza.addEventListener('change', function() {
            const valor = this.value;
            
            if (valor === 'por_horas') {
                horasContainer.style.display = 'flex';
                inputHoras.required = true;
                inputHoras.focus();
                mostrarNotificacion('Ingresa el número de horas semanales', 'info', 3000);
            } else {
                horasContainer.style.display = 'none';
                inputHoras.required = false;
                inputHoras.value = '';
                datosProfesor.horasPlaza = '';
            }
            
            actualizarDatosProfesor();
        });
        
        if (inputHoras) {
            inputHoras.addEventListener('input', actualizarDatosProfesor);
        }
    }
}

// ===== SISTEMA DE BÚSQUEDA DE PROFESORES =====
function inicializarBuscadorProfesores() {
    console.log('👤 Inicializando buscador de profesores...');
    
    const buscador = document.getElementById('buscadorProfesores');
    if (!buscador) return;
    
    buscador.addEventListener('focus', function() {
        mostrarTodosLosProfesores();
    });
    
    buscador.addEventListener('input', function(e) {
        const termino = e.target.value.toLowerCase().trim();
        if (termino === '') {
            mostrarTodosLosProfesores();
        } else {
            buscarProfesores(termino);
        }
    });
    
    document.addEventListener('click', (e) => {
        const buscador = document.getElementById('buscadorProfesores');
        const resultados = document.getElementById('resultadosProfesores');
        
        if (buscador && resultados) {
            if (!buscador.contains(e.target) && !resultados.contains(e.target)) {
                resultados.style.display = 'none';
            }
        }
    });
}

function mostrarTodosLosProfesores() {
    const resultadosContainer = document.getElementById('resultadosProfesores');
    const resultadosLista = document.getElementById('listaProfesores');
    const contador = document.getElementById('contadorProfesores');
    
    if (!resultadosContainer || !resultadosLista) return;
    
    resultadosContainer.style.display = 'block';
    contador.textContent = `${profesoresDB.length} profesores`;
    
    resultadosLista.innerHTML = '';
    
    profesoresDB.forEach(nombre => {
        const item = crearItemProfesor(nombre);
        resultadosLista.appendChild(item);
    });
}

function buscarProfesores(termino) {
    const resultadosContainer = document.getElementById('resultadosProfesores');
    const resultadosLista = document.getElementById('listaProfesores');
    const contador = document.getElementById('contadorProfesores');
    
    if (!resultadosContainer || !resultadosLista) return;
    
    resultadosContainer.style.display = 'block';
    
    const terminoNormalizado = quitarAcentos(termino);
    
    const resultados = profesoresDB.filter(nombre => {
        const nombreNormalizado = quitarAcentos(nombre.toLowerCase());
        return nombreNormalizado.includes(terminoNormalizado);
    });
    
    contador.textContent = `${resultados.length} profesores`;
    
    if (resultados.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No se encontraron profesores para "${termino}"</p>
                <small>Selecciona "Otro profesor" para ingresarlo manualmente</small>
            </div>
        `;
        return;
    }
    
    resultadosLista.innerHTML = '';
    resultados.forEach(nombre => {
        const item = crearItemProfesor(nombre);
        resultadosLista.appendChild(item);
    });
}

function crearItemProfesor(nombre) {
    const item = document.createElement('div');
    item.className = 'profesor-item';
    item.onclick = () => seleccionarProfesor(nombre);
    
    const iniciales = nombre.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
    
    item.innerHTML = `
        <div style="display: flex; flex-direction: column;">
            <h4><i class="fas fa-user-circle"></i> ${nombre}</h4>
            <p><span class="profesor-clave"><i class="fas fa-tag"></i> ${iniciales}</span></p>
        </div>
        <i class="fas fa-check-circle" style="color: #3498db; font-size: 1.3rem;"></i>
    `;
    
    return item;
}

window.mostrarCampoOtroProfesor = function() {
    document.getElementById('resultadosProfesores').style.display = 'none';
    document.getElementById('buscadorProfesores').value = '';
    
    const container = document.getElementById('otroProfesorContainer');
    container.style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('otroProfesorInput').focus();
    }, 100);
    
    mostrarNotificacion('✏️ Ingresa el nombre del profesor manualmente', 'info');
}

window.confirmarOtroProfesor = function() {
    const nombre = document.getElementById('otroProfesorInput').value.trim();
    
    if (!nombre) {
        mostrarNotificacion('Por favor, ingresa un nombre', 'warning');
        return;
    }
    
    document.getElementById('nombreProfesor').value = nombre;
    document.getElementById('buscadorProfesores').value = nombre;
    document.getElementById('otroProfesorContainer').style.display = 'none';
    document.getElementById('otroProfesorInput').value = '';
    
    actualizarDatosProfesor();
    mostrarNotificacion(`✓ Profesor "${nombre}" registrado`, 'success');
}

window.cancelarOtroProfesor = function() {
    document.getElementById('otroProfesorContainer').style.display = 'none';
    document.getElementById('otroProfesorInput').value = '';
    document.getElementById('resultadosProfesores').style.display = 'block';
    mostrarNotificacion('Selecciona un profesor de la lista', 'info');
}

function seleccionarProfesor(nombre) {
    document.getElementById('nombreProfesor').value = nombre;
    document.getElementById('buscadorProfesores').value = nombre;
    document.getElementById('resultadosProfesores').style.display = 'none';
    document.getElementById('otroProfesorContainer').style.display = 'none';
    
    actualizarDatosProfesor();
    mostrarNotificacion(`✓ Profesor "${nombre}" seleccionado`, 'success');
}

// ===== SISTEMA DE BÚSQUEDA DE MATERIAS =====
function inicializarSistemaMaterias() {
    console.log('🔍 Inicializando buscador de materias...');
    
    const selectCarrera = document.getElementById('selectCarrera');
    if (selectCarrera) {
        selectCarrera.addEventListener('change', manejarCambioFiltroCarrera);
    }
    
    const buscador = document.getElementById('buscadorMaterias');
    if (buscador) {
        buscador.addEventListener('focus', function() {
            mostrarTodasLasMateriasDelFiltro();
        });
        
        buscador.addEventListener('input', manejarBusquedaEnTiempoReal);
    }
    
    document.addEventListener('click', (e) => {
        const buscador = document.getElementById('buscadorMaterias');
        const resultados = document.getElementById('resultadosBusqueda');
        const selectorNivel = document.getElementById('selectorNivelContainer');
        
        if (!buscador.contains(e.target) && !resultados.contains(e.target) && !selectorNivel.contains(e.target)) {
            resultados.style.display = 'none';
        }
    });
    
    const btnCancelar = document.getElementById('cancelarSeleccionBtn');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', cancelarSeleccionMateria);
    }
    
    const btnAgregar = document.getElementById('addMateriaBtn');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', manejarAgregarMateria);
    }
    
    document.addEventListener('click', manejarEventosMaterias);
    
    renderizarMaterias();
    actualizarContadorMaterias();
    
    setTimeout(() => {
        mostrarTodasLasMateriasDelFiltro();
    }, 100);
}

function mostrarTodasLasMateriasDelFiltro() {
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    const resultadosLista = document.getElementById('resultadosLista');
    const contador = document.getElementById('contadorResultados');
    
    resultadosContainer.style.display = 'block';
    
    let materiasAMostrar = [];
    
    if (!filtroCarreraActual) {
        materiasAMostrar = [...todasLasMaterias];
    } else {
        const carreraSeleccionada = carrerasData[filtroCarreraActual];
        const materiasDeCarrera = carreraSeleccionada.materias.map(m => m.nombre);
        
        materiasAMostrar = todasLasMaterias.filter(materia => 
            materiasDeCarrera.includes(materia.nombre)
        );
    }
    
    contador.textContent = `${materiasAMostrar.length} materias`;
    
    if (materiasAMostrar.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No hay materias disponibles</p>
            </div>
        `;
        return;
    }
    
    resultadosLista.innerHTML = '';
    materiasAMostrar.forEach(materia => {
        const resultadoItem = crearResultadoItem(materia);
        resultadosLista.appendChild(resultadoItem);
    });
}

function manejarCambioFiltroCarrera(event) {
    filtroCarreraActual = event.target.value;
    const buscador = document.getElementById('buscadorMaterias');
    
    buscador.value = '';
    
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    const resultadosLista = document.getElementById('resultadosLista');
    const contador = document.getElementById('contadorResultados');
    
    resultadosContainer.style.display = 'block';
    
    let materiasAMostrar = [];
    
    if (!filtroCarreraActual) {
        materiasAMostrar = [...todasLasMaterias];
        mostrarNotificacion('Mostrando todas las carreras', 'info', 2000);
    } else {
        const carreraSeleccionada = carrerasData[filtroCarreraActual];
        const materiasDeCarrera = carreraSeleccionada.materias.map(m => m.nombre);
        
        materiasAMostrar = todasLasMaterias.filter(materia => 
            materiasDeCarrera.includes(materia.nombre)
        );
        mostrarNotificacion(`Mostrando ${carreraSeleccionada.nombre}`, 'info', 2000);
    }
    
    contador.textContent = `${materiasAMostrar.length} materias`;
    
    if (materiasAMostrar.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No hay materias disponibles para esta carrera</p>
            </div>
        `;
        return;
    }
    
    resultadosLista.innerHTML = '';
    materiasAMostrar.forEach(materia => {
        const resultadoItem = crearResultadoItem(materia);
        resultadosLista.appendChild(resultadoItem);
    });
}

function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function manejarBusquedaEnTiempoReal(event) {
    const termino = event.target.value.toLowerCase().trim();
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    const resultadosLista = document.getElementById('resultadosLista');
    const contador = document.getElementById('contadorResultados');
    
    resultadosContainer.style.display = 'block';
    
    let materiasBase = [];
    
    if (!filtroCarreraActual) {
        materiasBase = [...todasLasMaterias];
    } else {
        const carreraSeleccionada = carrerasData[filtroCarreraActual];
        const materiasDeCarrera = carreraSeleccionada.materias.map(m => m.nombre);
        
        materiasBase = todasLasMaterias.filter(materia => 
            materiasDeCarrera.includes(materia.nombre)
        );
    }
    
    if (termino === '') {
        contador.textContent = `${materiasBase.length} materias`;
        resultadosLista.innerHTML = '';
        materiasBase.forEach(materia => {
            const resultadoItem = crearResultadoItem(materia);
            resultadosLista.appendChild(resultadoItem);
        });
        return;
    }
    
    const terminoNormalizado = quitarAcentos(termino);
    
    const resultados = materiasBase.filter(materia => {
        const nombreNormalizado = quitarAcentos(materia.nombre.toLowerCase());
        const infoTexto = materia.info.map(i => 
            `${i.carrera} - Semestre ${i.semestre}`
        ).join(' ').toLowerCase();
        const infoNormalizado = quitarAcentos(infoTexto);
        
        const buscaSemestre = termino.match(/\d+/);
        const coincideSemestre = buscaSemestre ? 
            materia.info.some(i => i.semestre === parseInt(buscaSemestre[0])) : 
            false;
        
        return nombreNormalizado.includes(terminoNormalizado) ||
               infoNormalizado.includes(terminoNormalizado) ||
               coincideSemestre;
    });
    
    resultados.sort((a, b) => {
        const aNombre = quitarAcentos(a.nombre.toLowerCase());
        const bNombre = quitarAcentos(b.nombre.toLowerCase());
        
        if (aNombre.startsWith(terminoNormalizado) && !bNombre.startsWith(terminoNormalizado)) return -1;
        if (!aNombre.startsWith(terminoNormalizado) && bNombre.startsWith(terminoNormalizado)) return 1;
        return a.nombre.localeCompare(b.nombre);
    });
    
    contador.textContent = `${resultados.length} materias`;
    
    if (resultados.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No se encontraron materias para "${termino}"</p>
                <small>Intenta con otro término o número de semestre</small>
            </div>
        `;
        return;
    }
    
    resultadosLista.innerHTML = '';
    resultados.forEach(materia => {
        const resultadoItem = crearResultadoItem(materia);
        resultadosLista.appendChild(resultadoItem);
    });
}

function crearResultadoItem(materia) {
    const resultadoItem = document.createElement('div');
    resultadoItem.className = 'resultado-item';
    resultadoItem.onclick = () => seleccionarMateria(materia);
    
    const estaSeleccionada = materiasSeleccionadas.some(m => m.nombre === materia.nombre);
    
    const infoTexto = materia.info.map(i => 
        `${i.carrera} - Semestre ${i.semestre}`
    ).join(' • ');
    
    resultadoItem.innerHTML = `
        <div class="resultado-info">
            <h4>${materia.nombre}</h4>
            <p>
                <span class="resultado-carrera"><i class="fas fa-graduation-cap"></i> ${infoTexto}</span>
                ${estaSeleccionada ? '<span class="resultado-seleccionada"><i class="fas fa-check-circle"></i> Ya agregada</span>' : ''}
            </p>
        </div>
        ${!estaSeleccionada ? '<i class="fas fa-plus-circle" style="color: #3498db; font-size: 1.5rem;"></i>' : '<i class="fas fa-check-circle" style="color: #2ecc71; font-size: 1.5rem;"></i>'}
    `;
    
    if (estaSeleccionada) {
        resultadoItem.style.opacity = '0.7';
        resultadoItem.style.cursor = 'not-allowed';
        resultadoItem.onclick = null;
    }
    
    return resultadoItem;
}

function seleccionarMateria(materia) {
    const yaExiste = materiasSeleccionadas.some(m => m.nombre === materia.nombre);
    if (yaExiste) {
        mostrarNotificacion('Esta materia ya ha sido agregada', 'warning');
        return;
    }
    
    materiaSeleccionadaTemp = materia;
    
    const selectorNivel = document.getElementById('selectorNivelContainer');
    const preview = document.getElementById('materiaSeleccionadaPreview');
    const buscador = document.getElementById('buscadorMaterias');
    const resultados = document.getElementById('resultadosBusqueda');
    
    const infoTexto = materia.info.map(i => 
        `${i.carrera} - Semestre ${i.semestre}`
    ).join(' • ');
    
    preview.innerHTML = `
        <h4><i class="fas fa-check-circle" style="color: #27ae60;"></i> ${materia.nombre}</h4>
        <p>
            <span><i class="fas fa-graduation-cap"></i> ${infoTexto}</span>
        </p>
    `;
    
    selectorNivel.style.display = 'block';
    resultados.style.display = 'none';
    buscador.value = '';
    document.getElementById('selectNivel').value = '';
}

function cancelarSeleccionMateria() {
    materiaSeleccionadaTemp = null;
    document.getElementById('selectorNivelContainer').style.display = 'none';
    document.getElementById('selectNivel').value = '';
    mostrarTodasLasMateriasDelFiltro();
}

function manejarAgregarMateria(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (!datosProfesor.nombre || !datosProfesor.correo || !datosProfesor.codigo) {
        mostrarNotificacion('Completa los datos del profesor', 'warning');
        return;
    }
    
    if (!materiaSeleccionadaTemp) {
        mostrarNotificacion('Selecciona una materia de la búsqueda', 'warning');
        return;
    }
    
    const nivel = document.getElementById('selectNivel').value;
    
    if (!nivel) {
        mostrarNotificacion('Selecciona el nivel de preferencia', 'warning');
        return;
    }
    
    const yaExiste = materiasSeleccionadas.some(m => m.nombre === materiaSeleccionadaTemp.nombre);
    if (yaExiste) {
        mostrarNotificacion('Esta materia ya ha sido agregada', 'warning');
        cancelarSeleccionMateria();
        return;
    }
    
    const nuevaMateria = {
        id: Date.now(),
        nombre: materiaSeleccionadaTemp.nombre,
        carreras: [...materiaSeleccionadaTemp.info],
        nivel: nivel
    };
    
    materiasSeleccionadas.push(nuevaMateria);
    renderizarMaterias();
    actualizarContadorMaterias();
    cancelarSeleccionMateria();
    
    mostrarNotificacion(`✓ "${materiaSeleccionadaTemp.nombre}" agregada`, 'success');
}

function manejarEventosMaterias(event) {
    if (event.target.closest('.remove-btn')) {
        const boton = event.target.closest('.remove-btn');
        const materiaId = boton.getAttribute('data-materia-id');
        
        if (materiaId) {
            eliminarMateriaPorId(materiaId);
        }
    }
}

function eliminarMateriaPorId(id) {
    const idNum = parseInt(id);
    const indice = materiasSeleccionadas.findIndex(m => m.id === idNum);
    
    if (indice !== -1) {
        const materiaEliminada = materiasSeleccionadas[indice];
        materiasSeleccionadas.splice(indice, 1);
        renderizarMaterias();
        actualizarContadorMaterias();
        mostrarNotificacion(`✗ "${materiaEliminada.nombre}" eliminada`, 'info');
        
        if (document.getElementById('resultadosBusqueda').style.display === 'block') {
            mostrarTodasLasMateriasDelFiltro();
        }
    }
}

function renderizarMaterias() {
    const contenedor = document.getElementById('materiasContainer');
    const estadoVacio = document.getElementById('emptyMaterias');
    
    if (!contenedor) return;
    
    const emptyState = estadoVacio ? estadoVacio.cloneNode(true) : null;
    contenedor.innerHTML = '';
    
    if (materiasSeleccionadas.length === 0) {
        if (emptyState) {
            emptyState.style.display = 'block';
            contenedor.appendChild(emptyState);
        }
    } else {
        const materiasOrdenadas = [...materiasSeleccionadas].sort((a, b) => 
            a.nombre.localeCompare(b.nombre)
        );
        
        materiasOrdenadas.forEach(materia => {
            const tarjeta = crearTarjetaMateria(materia);
            contenedor.appendChild(tarjeta);
        });
    }
    
    actualizarResumenMaterias();
}

function actualizarContadorMaterias() {
    const contador = document.getElementById('contadorMateriasSeleccionadas');
    if (contador) {
        contador.textContent = materiasSeleccionadas.length;
    }
}

function crearTarjetaMateria(materia) {
    const div = document.createElement('div');
    div.className = 'materia-card';
    div.setAttribute('data-materia-id', materia.id);
    div.setAttribute('data-nivel', materia.nivel);
    
    let color, texto;
    switch(materia.nivel) {
        case 'alta':
            color = '#e74c3c';
            texto = 'Alta';
            break;
        case 'media':
            color = '#f39c12';
            texto = 'Media';
            break;
        default:
            color = '#7f8c8d';
            texto = 'Baja';
    }
    
    const infoOrdenada = [...materia.carreras].sort((a, b) => a.semestre - b.semestre);
    const infoTexto = infoOrdenada.map(c => 
        `${c.carrera} - Semestre ${c.semestre}`
    ).join(', ');
    
    div.innerHTML = `
        <div class="materia-info">
            <h4>${materia.nombre}</h4>
            <p><i class="fas fa-graduation-cap"></i> ${infoTexto}</p>
            <p style="color: ${color}; font-weight: bold;">Preferencia: ${texto}</p>
        </div>
        <button class="remove-btn" data-materia-id="${materia.id}" title="Eliminar materia">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    return div;
}

// ===== SISTEMA DE HORARIOS COMPACTOS CON PESTAÑAS =====
function inicializarHorarios() {
    console.log('📊 Inicializando horarios compactos...');
    
    configurarPestanas();
    generarCuadriculaPorTurno(turnoActivo);
    configurarAccionesRapidas();
    restaurarHorariosSeleccionados();
}

function configurarPestanas() {
    const pestanaMatutino = document.getElementById('pestanaMatutino');
    const pestanaVespertino = document.getElementById('pestanaVespertino');
    
    if (pestanaMatutino) {
        pestanaMatutino.addEventListener('click', () => {
            if (turnoActivo === 'matutino') return;
            
            turnoActivo = 'matutino';
            pestanaMatutino.classList.add('active');
            pestanaVespertino.classList.remove('active');
            generarCuadriculaPorTurno('matutino');
            restaurarHorariosSeleccionados();
        });
    }
    
    if (pestanaVespertino) {
        pestanaVespertino.addEventListener('click', () => {
            if (turnoActivo === 'vespertino') return;
            
            turnoActivo = 'vespertino';
            pestanaVespertino.classList.add('active');
            pestanaMatutino.classList.remove('active');
            generarCuadriculaPorTurno('vespertino');
            restaurarHorariosSeleccionados();
        });
    }
}

function generarCuadriculaPorTurno(turno) {
    const cuerpo = document.getElementById('cuerpoCuadriculaLimpia');
    if (!cuerpo) return;
    
    cuerpo.innerHTML = '';
    
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    
    let horaInicio, horaFin;
    
    if (turno === 'matutino') {
        horaInicio = 7;
        horaFin = 14;
    } else {
        horaInicio = 14;
        horaFin = 22;
    }
    
    for (let hora = horaInicio; hora < horaFin; hora++) {
        const horaFinBloque = hora + 1;
        
        const fila = document.createElement('div');
        fila.className = 'fila-hora-limpia';
        
        dias.forEach(dia => {
            const celda = crearCeldaHorarioLimpia(dia, hora, horaFinBloque);
            fila.appendChild(celda);
        });
        
        cuerpo.appendChild(fila);
    }
}

function crearCeldaHorarioLimpia(dia, horaInicio, horaFin) {
    const celda = document.createElement('div');
    celda.className = 'celda-horario-limpia';
    
    const id = `${dia}_${horaInicio}`;
    const periodo = horaInicio >= 12 ? 'PM' : 'AM';
    
    const horaInicioStr = horaInicio.toString();
    const horaFinStr = horaFin.toString();
    
    const bloqueHora = `${horaInicioStr}-${horaFinStr}`;
    const textoHora = `${bloqueHora} ${periodo}`;
    
    celda.setAttribute('data-horario-id', id);
    celda.setAttribute('data-dia', dia);
    celda.setAttribute('data-hora', horaInicio);
    celda.setAttribute('data-texto', textoHora);
    
    celda.innerHTML = `
        <span class="bloque-hora">${bloqueHora}</span>
        <span class="periodo">${periodo}</span>
    `;
    
    celda.addEventListener('click', () => toggleHorarioLimpio(celda));
    
    return celda;
}

function toggleHorarioLimpio(elemento) {
    const id = elemento.getAttribute('data-horario-id');
    const dia = elemento.getAttribute('data-dia');
    const hora = elemento.getAttribute('data-hora');
    const texto = elemento.getAttribute('data-texto');
    
    const index = horariosSeleccionados.findIndex(h => h.id === id);
    
    if (index === -1) {
        horariosSeleccionados.push({
            id: id,
            dia: dia,
            hora: hora,
            texto: texto
        });
        elemento.classList.add('selected');
    } else {
        horariosSeleccionados.splice(index, 1);
        elemento.classList.remove('selected');
    }
    
    actualizarResumenHorarios();
}

function restaurarHorariosSeleccionados() {
    horariosSeleccionados.forEach(horario => {
        const selector = `.celda-horario-limpia[data-horario-id="${horario.id}"]`;
        const elemento = document.querySelector(selector);
        if (elemento) {
            elemento.classList.add('selected');
        }
    });
}

function configurarAccionesRapidas() {
    const btnLimpiar = document.getElementById('btnLimpiarTodo');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', () => {
            horariosSeleccionados = [];
            document.querySelectorAll('.celda-horario-limpia.selected').forEach(celda => {
                celda.classList.remove('selected');
            });
            actualizarResumenHorarios();
            mostrarNotificacion('🧹 Horarios limpiados', 'info');
        });
    }
}

// ===== SISTEMA DE ADMINISTRACIÓN =====
function inicializarModoAdmin() {
    console.log('👑 Verificando acceso administrador...');
    
    adminActivo = verificarAccesoAdmin();
    
    if (!adminActivo) {
        console.log('🔒 Modo administrador desactivado - URL sin clave');
        return;
    }
    
    console.log('✅ Modo administrador activado');
    
    const adminTrigger = document.getElementById('adminTrigger');
    const adminPanel = document.getElementById('adminAccess');
    const closeBtn = document.getElementById('closeAdminBtn');
    
    if (adminTrigger) {
        adminTrigger.style.display = 'flex';
        adminTrigger.addEventListener('dblclick', () => {
            adminPanel.style.display = 'flex';
            actualizarPeriodoDisplay();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            adminPanel.style.display = 'none';
        });
    }
    
    adminPanel.addEventListener('click', (e) => {
        if (e.target === adminPanel) {
            adminPanel.style.display = 'none';
        }
    });
    
    const btnENEJUN = document.getElementById('periodoENEJUN');
    const btnAGODIC = document.getElementById('periodoAGODIC');
    
    if (btnENEJUN) {
        btnENEJUN.addEventListener('click', () => {
            cambiarPeriodo('ene-jun');
            btnENEJUN.classList.add('active');
            btnAGODIC.classList.remove('active');
        });
    }
    
    if (btnAGODIC) {
        btnAGODIC.addEventListener('click', () => {
            cambiarPeriodo('ago-dic');
            btnAGODIC.classList.add('active');
            btnENEJUN.classList.remove('active');
        });
    }
    
    document.getElementById('verEncuestasBtn')?.addEventListener('click', verTodasLasEncuestas);
    document.getElementById('exportarExcelBtn')?.addEventListener('click', exportarAExcel);
    document.getElementById('exportarPDFBtn')?.addEventListener('click', exportarAPDF);
    document.getElementById('gestionarMateriasBtn')?.addEventListener('click', gestionarMaterias);
    document.getElementById('gestionarProfesoresBtn')?.addEventListener('click', gestionarProfesores);
    
    mostrarNotificacion('👑 Modo administrador activado', 'info', 5000);
}

function cambiarPeriodo(nuevoPeriodo) {
    periodoActivo = nuevoPeriodo;
    
    guardarPeriodoEnStorage(nuevoPeriodo);
    
    if (nuevoPeriodo === 'ene-jun') {
        carrerasData = carrerasDataENEJUN;
    } else {
        carrerasData = carrerasDataAGODIC;
    }
    
    todasLasMaterias = generarListaGlobalMaterias();
    
    const periodoBadge = document.getElementById('periodoBadge');
    const periodoDisplay = document.getElementById('periodoActualDisplay');
    
    if (periodoBadge) {
        periodoBadge.textContent = nuevoPeriodo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
    }
    
    if (periodoDisplay) {
        periodoDisplay.textContent = nuevoPeriodo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
    }
    
    filtroCarreraActual = '';
    const selectCarrera = document.getElementById('selectCarrera');
    if (selectCarrera) selectCarrera.value = '';
    
    mostrarNotificacion(`Período cambiado a ${nuevoPeriodo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC'}`, 'success');
    
    if (document.getElementById('resultadosBusqueda').style.display === 'block') {
        mostrarTodasLasMateriasDelFiltro();
    }
}

function actualizarPeriodoDisplay() {
    const periodoDisplay = document.getElementById('periodoActualDisplay');
    if (periodoDisplay) {
        periodoDisplay.textContent = periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
    }
    
    const periodoBadge = document.getElementById('periodoBadge');
    if (periodoBadge) {
        periodoBadge.textContent = periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
    }
}

function verTodasLasEncuestas() {
    mostrarNotificacion('Función: Ver todas las encuestas (próximamente)', 'info');
}

function exportarAExcel() {
    mostrarNotificacion('Función: Exportar a Excel (próximamente)', 'info');
}

function exportarAPDF() {
    mostrarNotificacion('Función: Exportar a PDF (próximamente)', 'info');
}

// ===== GESTIÓN DE MATERIAS =====
function gestionarMaterias() {
    console.log('📚 Abriendo gestión de materias...');
    mostrarNotificacion('Abriendo editor de materias...', 'info', 2000);
    
    const modalHTML = `
        <div class="gestion-modal" id="gestionMateriasModal">
            <div class="gestion-contenido">
                <div class="gestion-header">
                    <h3><i class="fas fa-book"></i> Gestionar Materias</h3>
                    <button class="gestion-cerrar" onclick="cerrarGestionMaterias()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="gestion-body">
                    <div class="gestion-tabs">
                        <button class="tab-btn active" onclick="cambiarTabMateria('ene-jun', event)">ENE-JUN</button>
                        <button class="tab-btn" onclick="cambiarTabMateria('ago-dic', event)">AGO-DIC</button>
                    </div>
                    <div class="gestion-carreras" id="gestionCarrerasContainer">
                        <div class="cargando">Cargando materias...</div>
                    </div>
                </div>
                <div class="gestion-footer">
                    <button class="btn btn-success" onclick="guardarCambiosMaterias()">
                        <i class="fas fa-save"></i> Guardar Cambios
                    </button>
                    <button class="btn btn-secondary" onclick="cerrarGestionMaterias()">
                        <i class="fas fa-times"></i> Cancelar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    setTimeout(() => {
        cargarMateriasParaGestion('ene-jun');
    }, 100);
}

let periodoGestionActual = 'ene-jun';

function cambiarTabMateria(periodo, event) {
    periodoGestionActual = periodo;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    cargarMateriasParaGestion(periodo);
}

function cargarMateriasParaGestion(periodo) {
    const data = periodo === 'ene-jun' ? carrerasDataENEJUN : carrerasDataAGODIC;
    const container = document.getElementById('gestionCarrerasContainer');
    
    if (!container) return;
    
    let html = '';
    
    Object.entries(data).forEach(([key, carrera]) => {
        html += `
            <div class="gestion-carrera" data-carrera-key="${key}">
                <div class="carrera-titulo">
                    <label>Nombre de la carrera:</label>
                    <input type="text" class="carrera-nombre-input" 
                           value="${carrera.nombre.replace(/"/g, '&quot;')}" 
                           data-carrera-key="${key}"
                           data-periodo="${periodo}">
                </div>
                <div class="materias-lista" id="materias-${key}-${periodo}">
        `;
        
        carrera.materias.forEach((materia, index) => {
            html += `
                <div class="materia-item" data-index="${index}">
                    <input type="text" class="materia-nombre" 
                           value="${materia.nombre.replace(/"/g, '&quot;')}" 
                           placeholder="Nombre de la materia"
                           data-carrera="${key}"
                           data-index="${index}"
                           data-periodo="${periodo}">
                    <input type="number" class="materia-semestre" 
                           value="${materia.semestre}" 
                           placeholder="Semestre"
                           min="1" max="12"
                           data-carrera="${key}"
                           data-index="${index}"
                           data-periodo="${periodo}">
                    <button class="btn-remove-materia" onclick="eliminarMateria('${key}', ${index}, '${periodo}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
        
        html += `
                </div>
                <button class="btn-add-materia" onclick="agregarMateria('${key}', '${periodo}')">
                    <i class="fas fa-plus"></i> Agregar materia
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function agregarMateria(carreraKey, periodo) {
    const container = document.getElementById(`materias-${carreraKey}-${periodo}`);
    
    const nuevaMateria = document.createElement('div');
    nuevaMateria.className = 'materia-item nueva';
    nuevaMateria.innerHTML = `
        <input type="text" class="materia-nombre nueva" 
               placeholder="Nombre de la materia"
               data-carrera="${carreraKey}"
               data-nuevo="true"
               data-periodo="${periodo}">
        <input type="number" class="materia-semestre nueva" 
               placeholder="Semestre"
               min="1" max="12"
               data-carrera="${carreraKey}"
               data-nuevo="true"
               data-periodo="${periodo}">
        <button class="btn-remove-materia" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(nuevaMateria);
}

function eliminarMateria(carreraKey, index, periodo) {
    if (confirm('¿Estás seguro de eliminar esta materia?')) {
        const data = periodo === 'ene-jun' ? carrerasDataENEJUN : carrerasDataAGODIC;
        data[carreraKey].materias.splice(index, 1);
        cargarMateriasParaGestion(periodo);
    }
}

function guardarCambiosMaterias() {
    try {
        const materiasModificadas = [];
        
        document.querySelectorAll('.materia-item').forEach(item => {
            const nombreInput = item.querySelector('.materia-nombre:not(.nueva)');
            const semestreInput = item.querySelector('.materia-semestre:not(.nueva)');
            const nuevaNombre = item.querySelector('.materia-nombre.nueva');
            const nuevaSemestre = item.querySelector('.materia-semestre.nueva');
            
            if (nombreInput && semestreInput) {
                materiasModificadas.push({
                    tipo: 'existente',
                    carrera: nombreInput.dataset.carrera,
                    index: parseInt(nombreInput.dataset.index),
                    periodo: nombreInput.dataset.periodo,
                    nombre: nombreInput.value,
                    semestre: parseInt(semestreInput.value)
                });
            }
            
            if (nuevaNombre && nuevaSemestre && nuevaNombre.value.trim()) {
                materiasModificadas.push({
                    tipo: 'nueva',
                    carrera: nuevaNombre.dataset.carrera,
                    periodo: nuevaNombre.dataset.periodo,
                    nombre: nuevaNombre.value,
                    semestre: parseInt(nuevaSemestre.value)
                });
            }
        });
        
        materiasModificadas.forEach(item => {
            const data = item.periodo === 'ene-jun' ? carrerasDataENEJUN : carrerasDataAGODIC;
            
            if (item.tipo === 'existente') {
                if (data[item.carrera] && data[item.carrera].materias[item.index]) {
                    data[item.carrera].materias[item.index].nombre = item.nombre;
                    data[item.carrera].materias[item.index].semestre = item.semestre;
                }
            } else {
                if (data[item.carrera]) {
                    data[item.carrera].materias.push({
                        nombre: item.nombre,
                        semestre: item.semestre
                    });
                }
            }
        });
        
        localStorage.setItem('carrerasDataENEJUN', JSON.stringify(carrerasDataENEJUN));
        localStorage.setItem('carrerasDataAGODIC', JSON.stringify(carrerasDataAGODIC));
        
        todasLasMaterias = generarListaGlobalMaterias();
        
        mostrarNotificacion('✅ Materias guardadas correctamente', 'success');
        
        setTimeout(() => {
            cerrarGestionMaterias();
        }, 1500);
        
    } catch (error) {
        console.error('Error al guardar:', error);
        mostrarNotificacion('❌ Error al guardar los cambios', 'error');
    }
}

function cerrarGestionMaterias() {
    const modal = document.getElementById('gestionMateriasModal');
    if (modal) modal.remove();
}

// ===== GESTIÓN DE PROFESORES =====
function gestionarProfesores() {
    console.log('👥 Abriendo gestión de profesores...');
    mostrarNotificacion('Abriendo editor de profesores...', 'info', 2000);
    
    const modalHTML = `
        <div class="gestion-modal" id="gestionProfesoresModal">
            <div class="gestion-contenido">
                <div class="gestion-header">
                    <h3><i class="fas fa-users"></i> Gestionar Profesores</h3>
                    <button class="gestion-cerrar" onclick="cerrarGestionProfesores()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="gestion-body">
                    <div class="gestion-lista-profesores" id="listaProfesoresGestion">
                        <div class="cargando">Cargando profesores...</div>
                    </div>
                </div>
                <div class="gestion-footer">
                    <button class="btn btn-success" onclick="guardarCambiosProfesores()">
                        <i class="fas fa-save"></i> Guardar Cambios
                    </button>
                    <button class="btn btn-secondary" onclick="cerrarGestionProfesores()">
                        <i class="fas fa-times"></i> Cancelar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    cargarProfesoresParaGestion();
}

function cargarProfesoresParaGestion() {
    const container = document.getElementById('listaProfesoresGestion');
    if (!container) return;
    
    let html = `
        <div class="profesor-item-gestion">
            <button class="btn-add-profesor" onclick="agregarProfesor()">
                <i class="fas fa-user-plus"></i> Agregar nuevo profesor
            </button>
        </div>
    `;
    
    profesoresDB.forEach((nombre, index) => {
        html += `
            <div class="profesor-item-gestion" data-index="${index}">
                <input type="text" class="profesor-nombre-input" 
                       value="${nombre.replace(/"/g, '&quot;')}" 
                       data-index="${index}"
                       placeholder="Nombre completo del profesor">
                <button class="btn-remove-profesor" onclick="eliminarProfesor(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    html += `
        <div class="profesores-nuevos" id="profesoresNuevosContainer">
            <h4>Nuevos profesores:</h4>
            <div id="nuevosProfesoresLista"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

function agregarProfesor() {
    const container = document.getElementById('nuevosProfesoresLista');
    
    const nuevoProfesor = document.createElement('div');
    nuevoProfesor.className = 'profesor-item-gestion nuevo';
    nuevoProfesor.innerHTML = `
        <input type="text" class="profesor-nombre-input nuevo" 
               placeholder="Nombre del nuevo profesor">
        <button class="btn-remove-profesor" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(nuevoProfesor);
}

function eliminarProfesor(index) {
    if (confirm('¿Estás seguro de eliminar este profesor?')) {
        profesoresDB.splice(index, 1);
        cargarProfesoresParaGestion();
    }
}

function guardarCambiosProfesores() {
    try {
        const nuevosProfesores = [];
        
        document.querySelectorAll('.profesor-item-gestion:not(.nuevo) .profesor-nombre-input').forEach(input => {
            const index = parseInt(input.dataset.index);
            const nuevoNombre = input.value.trim();
            
            if (nuevoNombre && profesoresDB[index] !== nuevoNombre) {
                profesoresDB[index] = nuevoNombre;
            }
        });
        
        document.querySelectorAll('.profesor-item-gestion.nuevo .profesor-nombre-input').forEach(input => {
            const nombre = input.value.trim();
            if (nombre) {
                nuevosProfesores.push(nombre);
            }
        });
        
        profesoresDB.push(...nuevosProfesores);
        
        profesoresDB.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
        
        localStorage.setItem('profesoresDB', JSON.stringify(profesoresDB));
        
        mostrarNotificacion('✅ Profesores guardados correctamente', 'success');
        
        setTimeout(() => {
            cerrarGestionProfesores();
        }, 1500);
        
    } catch (error) {
        console.error('Error al guardar:', error);
        mostrarNotificacion('❌ Error al guardar los cambios', 'error');
    }
}

function cerrarGestionProfesores() {
    const modal = document.getElementById('gestionProfesoresModal');
    if (modal) modal.remove();
}

// ===== DATOS DEL PROFESOR =====
function inicializarDatosProfesor() {
    const campos = [
        'correoProfesor',
        'telefonoProfesor',
        'codigoProfesor',
        'tipoPlaza',
        'horasPlaza'
    ];
    
    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) {
            const nuevoCampo = campo.cloneNode(true);
            campo.parentNode.replaceChild(nuevoCampo, campo);
            
            if (id !== 'tipoPlaza' && id !== 'horasPlaza') {
                document.getElementById(id).addEventListener('input', actualizarDatosProfesor);
            }
        }
    });
    
    inicializarTipoPlaza();
}

function actualizarDatosProfesor() {
    datosProfesor.nombre = document.getElementById('nombreProfesor').value.trim();
    datosProfesor.correo = document.getElementById('correoProfesor').value.trim();
    datosProfesor.telefono = document.getElementById('telefonoProfesor').value.trim();
    datosProfesor.codigo = document.getElementById('codigoProfesor').value.trim();
    
    const selectPlaza = document.getElementById('tipoPlaza');
    datosProfesor.tipoPlaza = selectPlaza ? selectPlaza.value : '';
    
    const inputHoras = document.getElementById('horasPlaza');
    datosProfesor.horasPlaza = inputHoras ? inputHoras.value : '';
    
    actualizarResumenProfesor();
}

// ===== RESUMEN =====
function actualizarResumenProfesor() {
    const elemento = document.getElementById('summaryProfesor');
    
    if (datosProfesor.nombre && datosProfesor.correo && datosProfesor.codigo) {
        let html = `
            <li><strong>Nombre:</strong> ${datosProfesor.nombre}</li>
            <li><strong>Correo:</strong> ${datosProfesor.correo}</li>
            <li><strong>Clave SIE:</strong> ${datosProfesor.codigo}</li>
        `;
        
        if (datosProfesor.telefono) {
            html += `<li><strong>Teléfono:</strong> ${datosProfesor.telefono}</li>`;
        }
        
        if (datosProfesor.tipoPlaza) {
            let textoPlaza = '';
            switch(datosProfesor.tipoPlaza) {
                case 'tiempo_completo': textoPlaza = 'Tiempo completo'; break;
                case 'tres_cuartos': textoPlaza = '3/4 de tiempo'; break;
                case 'medio_tiempo': textoPlaza = 'Medio tiempo'; break;
                case 'honorarios': textoPlaza = 'Honorarios'; break;
                case 'por_horas': 
                    textoPlaza = `Por horas (${datosProfesor.horasPlaza || '?'} h/sem)`;
                    break;
            }
            html += `<li><strong>Tipo de plaza:</strong> ${textoPlaza}</li>`;
        }
        
        elemento.innerHTML = html;
    } else {
        elemento.innerHTML = '<li>No has ingresado datos completos aún</li>';
    }
}

function actualizarResumenMaterias() {
    const elemento = document.getElementById('summaryMaterias');
    
    if (materiasSeleccionadas.length > 0) {
        let html = '';
        materiasSeleccionadas.forEach(materia => {
            const infoOrdenada = [...materia.carreras].sort((a, b) => a.semestre - b.semestre);
            const infoTexto = infoOrdenada.map(c => 
                `${c.carrera} - Semestre ${c.semestre}`
            ).join(', ');
            html += `<li>${materia.nombre} (${infoTexto}) - ${materia.nivel}</li>`;
        });
        elemento.innerHTML = html;
    } else {
        elemento.innerHTML = '<li>No has seleccionado materias aún</li>';
    }
}

function actualizarResumenHorarios() {
    const elemento = document.getElementById('summaryHorarios');
    
    if (horariosSeleccionados.length > 0) {
        let html = '';
        const diasOrdenados = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
        
        diasOrdenados.forEach(dia => {
            const horariosDia = horariosSeleccionados
                .filter(h => h.dia === dia)
                .sort((a, b) => parseInt(a.hora) - parseInt(b.hora));
            
            if (horariosDia.length > 0) {
                html += `<li style="margin-top: 8px;"><strong>${dia}:</strong> ${horariosDia.length} horario(s)</li>`;
                horariosDia.forEach(horario => {
                    html += `<li style="margin-left: 20px; font-size: 0.9rem;">• ${horario.texto}</li>`;
                });
            }
        });
        
        elemento.innerHTML = html;
    } else {
        elemento.innerHTML = '<li>No has seleccionado horarios aún</li>';
    }
}

// ===== ENVÍO DE ENCUESTA =====
function enviarEncuesta(esBorrador = false) {
    if (!datosProfesor.nombre || !datosProfesor.correo || !datosProfesor.codigo) {
        mostrarNotificacion('Ingresa tu nombre, correo electrónico y clave docente', 'warning');
        if (!datosProfesor.nombre) document.getElementById('buscadorProfesores').focus();
        else if (!datosProfesor.correo) document.getElementById('correoProfesor').focus();
        else if (!datosProfesor.codigo) document.getElementById('codigoProfesor').focus();
        return;
    }
    
    if (!datosProfesor.tipoPlaza) {
        mostrarNotificacion('Selecciona tu tipo de plaza', 'warning');
        document.getElementById('tipoPlaza').focus();
        return;
    }
    
    if (datosProfesor.tipoPlaza === 'por_horas' && !datosProfesor.horasPlaza) {
        mostrarNotificacion('Ingresa el número de horas semanales', 'warning');
        document.getElementById('horasPlaza').focus();
        return;
    }
    
    if (materiasSeleccionadas.length === 0) {
        mostrarNotificacion('Selecciona al menos una materia', 'warning');
        return;
    }
    
    if (horariosSeleccionados.length === 0 && !esBorrador) {
        mostrarNotificacion('Selecciona al menos un horario disponible', 'warning');
        return;
    }
    
    const encuesta = {
        id: Date.now(),
        profesor: { ...datosProfesor },
        materias: [...materiasSeleccionadas],
        horarios: [...horariosSeleccionados],
        fecha: new Date().toLocaleString('es-MX'),
        esBorrador: esBorrador,
        periodo: periodoActivo
    };
    
    let encuestasExistentes = [];
    try {
        const datos = localStorage.getItem('encuestas_profesores');
        if (datos) encuestasExistentes = JSON.parse(datos);
    } catch (e) {
        console.error('Error al cargar encuestas:', e);
    }
    
    encuestasExistentes.push(encuesta);
    
    try {
        localStorage.setItem('encuestas_profesores', JSON.stringify(encuestasExistentes));
        
        if (esBorrador) {
            mostrarNotificacion('📝 Borrador guardado exitosamente', 'success', 5000);
        } else {
            mostrarNotificacion('✅ ¡Encuesta enviada exitosamente!', 'success', 6000);
            
            datosProfesor = {
                nombre: '',
                correo: '',
                telefono: '',
                codigo: '',
                tipoPlaza: '',
                horasPlaza: ''
            };
            
            document.getElementById('nombreProfesor').value = '';
            document.getElementById('buscadorProfesores').value = '';
            document.getElementById('buscadorProfesores').placeholder = 'Escribe para buscar...';
            document.getElementById('correoProfesor').value = '';
            document.getElementById('telefonoProfesor').value = '';
            document.getElementById('codigoProfesor').value = '';
            document.getElementById('tipoPlaza').value = '';
            
            const horasContainer = document.getElementById('horasPlazaContainer');
            horasContainer.style.display = 'none';
            document.getElementById('horasPlaza').value = '';
            
            document.getElementById('otroProfesorContainer').style.display = 'none';
            document.getElementById('otroProfesorInput').value = '';
            
            materiasSeleccionadas = [];
            horariosSeleccionados = [];
            filtroCarreraActual = '';
            materiaSeleccionadaTemp = null;
            turnoActivo = 'matutino';
            
            const pestanaMatutino = document.getElementById('pestanaMatutino');
            const pestanaVespertino = document.getElementById('pestanaVespertino');
            if (pestanaMatutino) pestanaMatutino.classList.add('active');
            if (pestanaVespertino) pestanaVespertino.classList.remove('active');
            
            renderizarMaterias();
            actualizarContadorMaterias();
            generarCuadriculaPorTurno('matutino');
            
            const selectCarrera = document.getElementById('selectCarrera');
            if (selectCarrera) selectCarrera.value = '';
            
            const buscadorMaterias = document.getElementById('buscadorMaterias');
            if (buscadorMaterias) buscadorMaterias.value = '';
            
            const resultadosBusqueda = document.getElementById('resultadosBusqueda');
            if (resultadosBusqueda) resultadosBusqueda.style.display = 'none';
            
            const selectorNivel = document.getElementById('selectorNivelContainer');
            if (selectorNivel) selectorNivel.style.display = 'none';
            
            actualizarResumenProfesor();
            actualizarResumenMaterias();
            actualizarResumenHorarios();
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            setTimeout(() => {
                mostrarNotificacion('✨ Formulario listo para una nueva encuesta', 'info', 4000);
            }, 1000);
        }
    } catch (e) {
        console.error('Error al guardar:', e);
        mostrarNotificacion('Error al guardar los datos', 'error');
    }
}

// ===== CONFIGURACIÓN DE BOTONES =====
function configurarBotones() {
    const btnBorrador = document.getElementById('saveDraftBtn');
    if (btnBorrador) {
        btnBorrador.addEventListener('click', () => enviarEncuesta(true));
    }
    
    const btnEnviar = document.getElementById('submitBtn');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', () => enviarEncuesta(false));
    }
}

// ===== INICIALIZACIÓN =====
function inicializarAplicacion() {
    console.log('🚀 Iniciando Sistema de Encuesta para Maestros...');
    
    cargarDatosGuardados();
    
    const periodoGuardado = cargarPeriodoDeStorage();
    periodoActivo = periodoGuardado;
    
    if (periodoActivo === 'ene-jun') {
        carrerasData = carrerasDataENEJUN;
    } else {
        carrerasData = carrerasDataAGODIC;
    }
    
    todasLasMaterias = generarListaGlobalMaterias();
    
    console.log(`📚 Total de materias únicas ENE-JUN: ${Object.values(carrerasDataENEJUN).reduce((acc, c) => acc + c.materias.length, 0)}`);
    console.log(`📚 Total de materias únicas AGO-DIC: ${Object.values(carrerasDataAGODIC).reduce((acc, c) => acc + c.materias.length, 0)}`);
    console.log(`👤 Total de profesores en base: ${profesoresDB.length}`);
    console.log(`👑 Acceso admin: ?admin=admin2026 en la URL`);
    console.log(`📅 Período activo: ${periodoActivo}`);
    
    try {
        inicializarDatosProfesor();
        inicializarBuscadorProfesores();
        inicializarSistemaMaterias();
        inicializarHorarios();
        inicializarModoAdmin();
        configurarBotones();
        
        setTimeout(() => {
            const periodoBadge = document.getElementById('periodoBadge');
            const periodoDisplay = document.getElementById('periodoActualDisplay');
            
            if (periodoBadge) {
                periodoBadge.textContent = periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
            }
            
            if (periodoDisplay) {
                periodoDisplay.textContent = periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
            }
            
            mostrarNotificacion(`🎓 Período actual: ${periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC'}`, 'info', 4000);
            
            if (!adminActivo) {
                mostrarNotificacion('🔒 Acceso restringido', 'info', 4000);
            }
        }, 500);
        
        console.log('✅ Sistema listo');
    } catch (error) {
        console.error('❌ Error de inicialización:', error);
        mostrarNotificacion('Error al iniciar la aplicación', 'error');
    }
}

// ===== EJECUCIÓN =====
document.addEventListener('DOMContentLoaded', inicializarAplicacion);