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

// ===== VARIABLES PARA CONTROLAR CARGA =====
let datosInicialesCargados = false;

// ===== RESPALDO DE DATOS ORIGINALES (NO MODIFICAR) =====
const carrerasDataENEJUNOriginal = JSON.parse(JSON.stringify(carrerasDataENEJUN));
const carrerasDataAGODICOriginal = JSON.parse(JSON.stringify(carrerasDataAGODIC));

// ===== DATOS DE TRABAJO (SE MODIFICAN) =====
let carrerasDataENEJUNTrabajo = JSON.parse(JSON.stringify(carrerasDataENEJUN));
let carrerasDataAGODICTrabajo = JSON.parse(JSON.stringify(carrerasDataAGODIC));

// ===== VARIABLES GLOBALES =====
let carrerasData = carrerasDataENEJUN;
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
let periodoActivo = 'ene-jun';
let adminActivo = false;

// ===== VARIABLES PARA FILTROS EN GESTIÓN =====
let filtroGestionMaterias = '';
let filtroGestionCarrera = '';
let materiasGestionOriginal = [];
let filtroGestionProfesores = '';
let filtroSemestreActual = '';

// ===== CONEXIÓN A POCKETBASE =====
const POCKETBASE_URL = 'https://encuestas-profesores-pb.fly.dev';
let pb;

try {
    pb = new PocketBase(POCKETBASE_URL);
    pb.autoCancellation(false);
    console.log('✅ Conectado a PocketBase en Fly.io');
} catch (error) {
    console.error('❌ Error conectando a PocketBase:', error);
}

// ===== FUNCIÓN DE DIAGNÓSTICO =====
async function diagnosticarMaterias() {
    console.log('🔍 DIAGNÓSTICO DE MATERIAS');
    console.log('1️⃣ Datos locales actuales:');
    console.log('   ENE-JUN:', carrerasDataENEJUNTrabajo);
    console.log('   AGO-DIC:', carrerasDataAGODICTrabajo);
    
    try {
        console.log('2️⃣ Leyendo de PocketBase...');
        
        // Leer ENE-JUN
        const eneJun = await pb.collection('materias_enejun').getFullList();
        console.log('   📦 ENE-JUN registros:', eneJun.length);
        eneJun.forEach(rec => {
            console.log(`   - ${rec.carrera}: ${rec.materias?.length || 0} materias`);
        });
        
        // Leer AGO-DIC
        const agoDic = await pb.collection('materias_agodic').getFullList();
        console.log('   📦 AGO-DIC registros:', agoDic.length);
        agoDic.forEach(rec => {
            console.log(`   - ${rec.carrera}: ${rec.materias?.length || 0} materias`);
        });
        
        if (eneJun.length > 0) {
            console.log('✅ PocketBase tiene datos ENE-JUN');
        } else {
            console.log('❌ PocketBase NO tiene datos ENE-JUN');
        }
        
        if (agoDic.length > 0) {
            console.log('✅ PocketBase tiene datos AGO-DIC');
        } else {
            console.log('❌ PocketBase NO tiene datos AGO-DIC');
        }
        
    } catch (error) {
        console.error('❌ Error leyendo de PocketBase:', error);
    }
}

// ===== FUNCIONES PARA PERÍODO GLOBAL (EN POCKETBASE) =====

// Obtener período activo desde PocketBase
async function obtenerPeriodoGlobal() {
    try {
        console.log('🔍 Intentando obtener período global...');
        const records = await pb.collection('config').getList(1, 1, {
            filter: 'key = "periodo_activo"'
        });
        
        console.log('📦 Respuesta de PocketBase:', records);
        
        if (records.items.length > 0) {
            console.log('✅ Período encontrado:', records.items[0].value);
            return records.items[0].value;
        }
        console.log('⚠️ No se encontró período, usando default');
        return 'ene-jun';
    } catch (error) {
        console.error('❌ Error obteniendo período global:', error);
        return 'ene-jun';
    }
}

// Guardar período en PocketBase (solo admin)
async function guardarPeriodoGlobal(nuevoPeriodo) {
    console.log('🔍 Intentando guardar período:', nuevoPeriodo);
    console.log('👑 ¿Es admin?', adminActivo);
    
    if (!adminActivo) {
        mostrarNotificacion('No tienes permisos de administrador', 'warning');
        return false;
    }
    
    try {
        // Intentar obtener el registro existente
        let records;
        try {
            records = await pb.collection('config').getList(1, 1, {
                filter: 'key = "periodo_activo"'
            });
            console.log('📦 Registros encontrados:', records);
        } catch (listError) {
            console.error('❌ Error al listar config:', listError);
            if (listError.status === 404) {
                mostrarNotificacion('La colección "config" no existe. Créala en PocketBase', 'error');
                return false;
            }
            throw listError;
        }
        
        // Si existe, actualizar
        if (records.items.length > 0) {
            console.log('🔄 Actualizando registro existente:', records.items[0].id);
            await pb.collection('config').update(records.items[0].id, {
                value: nuevoPeriodo
            });
            console.log('✅ Período actualizado');
            mostrarNotificacion(`Período actualizado a ${nuevoPeriodo === 'ene-jun' ? 'ENE-JUN' : 'AGO-DIC'}`, 'success');
        } 
        // Si no existe, crear nuevo
        else {
            console.log('➕ Creando nuevo registro');
            await pb.collection('config').create({
                key: 'periodo_activo',
                value: nuevoPeriodo
            });
            console.log('✅ Período creado');
            mostrarNotificacion(`Período creado: ${nuevoPeriodo === 'ene-jun' ? 'ENE-JUN' : 'AGO-DIC'}`, 'success');
        }
        
        // Actualizar variable local
        periodoActivo = nuevoPeriodo;
        
        // ACTUALIZAR INTERFAZ
        actualizarInterfazPeriodo();
        
        // Cambiar las materias
        if (nuevoPeriodo === 'ene-jun') {
            carrerasData = carrerasDataENEJUNTrabajo;
        } else {
            carrerasData = carrerasDataAGODICTrabajo;
        }
        todasLasMaterias = generarListaGlobalMaterias();
        
        // Actualizar vista de materias
        if (document.getElementById('resultadosBusqueda').style.display === 'block') {
            mostrarTodasLasMateriasDelFiltro();
        }
        
        // Actualizar los tabs en el panel admin
        const btnENEJUN = document.getElementById('periodoENEJUN');
        const btnAGODIC = document.getElementById('periodoAGODIC');
        
        if (nuevoPeriodo === 'ene-jun') {
            btnENEJUN?.classList.add('active');
            btnAGODIC?.classList.remove('active');
        } else {
            btnAGODIC?.classList.add('active');
            btnENEJUN?.classList.remove('active');
        }
        
        console.log('✅ Período global actualizado correctamente');
        return true;
        
    } catch (error) {
        console.error('❌ Error guardando período global:', error);
        console.error('Status:', error.status);
        console.error('Data:', error.data);
        
        if (error.status === 400) {
            mostrarNotificacion('Error: La colección "config" no está bien configurada', 'error');
        } else {
            mostrarNotificacion('Error al guardar el período: ' + (error.message || 'Error desconocido'), 'error');
        }
        return false;
    }
}

// Actualizar interfaz con el período actual
function actualizarInterfazPeriodo() {
    console.log('🔄 Actualizando interfaz con período:', periodoActivo);
    
    const periodoBadge = document.getElementById('periodoBadge');
    const periodoDisplay = document.getElementById('periodoActualDisplay');
    const textoPeriodo = periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
    
    if (periodoBadge) {
        periodoBadge.textContent = textoPeriodo;
        console.log('✅ Badge actualizado:', textoPeriodo);
    }
    
    if (periodoDisplay) {
        periodoDisplay.textContent = textoPeriodo;
        console.log('✅ Display actualizado:', textoPeriodo);
    }
    
    // Actualizar opciones de semestre cuando cambia el período
    actualizarOpcionesSemestre();
}

// ===== FUNCIONES PARA MATERIAS GLOBALES - VERSIÓN OPTIMIZADA =====

// Guardar una carrera específica de ENE-JUN
async function guardarCarreraENEJUN(carreraKey) {
    if (!adminActivo) return false;
    
    try {
        const carreraData = carrerasDataENEJUNTrabajo[carreraKey];
        const recordId = `enejun_${carreraKey}`;
        
        // Buscar por recordId
        const records = await pb.collection('materias_enejun').getList(1, 1, {
            filter: `recordId = "${recordId}"`
        });
        
        if (records.items.length > 0) {
            await pb.collection('materias_enejun').update(records.items[0].id, {
                recordId: recordId,
                carrera: carreraKey,
                nombreCarrera: carreraData.nombre,
                materias: carreraData.materias
            });
        } else {
            await pb.collection('materias_enejun').create({
                recordId: recordId,
                carrera: carreraKey,
                nombreCarrera: carreraData.nombre,
                materias: carreraData.materias
            });
        }
        console.log(`✅ Carrera ${carreraKey} (ENE-JUN) guardada`);
        return true;
    } catch (error) {
        console.error(`❌ Error guardando carrera ${carreraKey}:`, error);
        return false;
    }
}

// Guardar una carrera específica de AGO-DIC
async function guardarCarreraAGODIC(carreraKey) {
    if (!adminActivo) return false;
    
    try {
        const carreraData = carrerasDataAGODICTrabajo[carreraKey];
        const recordId = `agodic_${carreraKey}`;
        
        const records = await pb.collection('materias_agodic').getList(1, 1, {
            filter: `recordId = "${recordId}"`
        });
        
        if (records.items.length > 0) {
            await pb.collection('materias_agodic').update(records.items[0].id, {
                recordId: recordId,
                carrera: carreraKey,
                nombreCarrera: carreraData.nombre,
                materias: carreraData.materias
            });
        } else {
            await pb.collection('materias_agodic').create({
                recordId: recordId,
                carrera: carreraKey,
                nombreCarrera: carreraData.nombre,
                materias: carreraData.materias
            });
        }
        console.log(`✅ Carrera ${carreraKey} (AGO-DIC) guardada`);
        return true;
    } catch (error) {
        console.error(`❌ Error guardando carrera ${carreraKey}:`, error);
        return false;
    }
}

// Guardar TODAS las materias ENE-JUN
async function guardarMateriasENEJUN() {
    console.log('📤 Guardando todas las carreras ENE-JUN...');
    let todasExitosas = true;
    
    for (const carreraKey of Object.keys(carrerasDataENEJUNTrabajo)) {
        const exito = await guardarCarreraENEJUN(carreraKey);
        if (!exito) todasExitosas = false;
    }
    
    return todasExitosas;
}

// Guardar TODAS las materias AGO-DIC
async function guardarMateriasAGODIC() {
    console.log('📤 Guardando todas las carreras AGO-DIC...');
    let todasExitosas = true;
    
    for (const carreraKey of Object.keys(carrerasDataAGODICTrabajo)) {
        const exito = await guardarCarreraAGODIC(carreraKey);
        if (!exito) todasExitosas = false;
    }
    
    return todasExitosas;
}

// Cargar todas las materias desde PocketBase
async function cargarMateriasGlobales() {
    console.log('📚 Cargando materias desde PocketBase...');
    
    try {
        // Cargar ENE-JUN
        const recordsENEJUN = await pb.collection('materias_enejun').getFullList();
        console.log(`📦 ${recordsENEJUN.length} carreras ENE-JUN encontradas`);
        
        if (recordsENEJUN.length > 0) {
            // Limpiar datos actuales
            Object.keys(carrerasDataENEJUNTrabajo).forEach(key => delete carrerasDataENEJUNTrabajo[key]);
            
            // Reconstruir desde los registros
            recordsENEJUN.forEach(record => {
                carrerasDataENEJUNTrabajo[record.carrera] = {
                    nombre: record.nombreCarrera,
                    materias: record.materias
                };
            });
            console.log('✅ Materias ENE-JUN cargadas de PocketBase');
        } else {
            console.log('⚠️ No hay materias ENE-JUN, usando locales');
            Object.assign(carrerasDataENEJUNTrabajo, carrerasDataENEJUNOriginal);
            await guardarMateriasENEJUN();
        }
    } catch (error) {
        console.error('❌ Error cargando ENE-JUN:', error);
        Object.assign(carrerasDataENEJUNTrabajo, carrerasDataENEJUNOriginal);
    }
    
    try {
        // Cargar AGO-DIC
        const recordsAGODIC = await pb.collection('materias_agodic').getFullList();
        console.log(`📦 ${recordsAGODIC.length} carreras AGO-DIC encontradas`);
        
        if (recordsAGODIC.length > 0) {
            Object.keys(carrerasDataAGODICTrabajo).forEach(key => delete carrerasDataAGODICTrabajo[key]);
            
            recordsAGODIC.forEach(record => {
                carrerasDataAGODICTrabajo[record.carrera] = {
                    nombre: record.nombreCarrera,
                    materias: record.materias
                };
            });
            console.log('✅ Materias AGO-DIC cargadas de PocketBase');
        } else {
            console.log('⚠️ No hay materias AGO-DIC, usando locales');
            Object.assign(carrerasDataAGODICTrabajo, carrerasDataAGODICOriginal);
            await guardarMateriasAGODIC();
        }
    } catch (error) {
        console.error('❌ Error cargando AGO-DIC:', error);
        Object.assign(carrerasDataAGODICTrabajo, carrerasDataAGODICOriginal);
    }
    
    return true;
}

// ===== FUNCIONES PARA PROFESORES GLOBALES (VERSIÓN CORREGIDA) =====

// Cargar profesores desde PocketBase
async function cargarProfesoresGlobales() {
    console.log('👥 Cargando profesores desde PocketBase...');
    
    try {
        const records = await pb.collection('profesores').getFullList({
            sort: 'nombre'
        });
        
        if (records.length > 0) {
            // Vaciar el array actual
            profesoresDB.length = 0;
            
            // Llenar con los datos de PocketBase
            records.forEach(r => profesoresDB.push(r.nombre));
            
            console.log(`✅ ${profesoresDB.length} profesores cargados de PocketBase`);
            return true;
        } else {
            console.log('⚠️ No hay profesores en PocketBase, guardando locales...');
            // Guardar los locales en PocketBase
            await guardarProfesoresGlobales();
            return false;
        }
    } catch (error) {
        console.error('❌ Error cargando profesores:', error);
        return false;
    }
}

// Guardar profesores en PocketBase (VERSIÓN ROBUSTA)
async function guardarProfesoresGlobales() {
    if (!adminActivo) {
        console.log('⛔ No es admin, no se guarda');
        return false;
    }
    
    console.log('📤 Guardando profesores en PocketBase...');
    console.log('Total a guardar:', profesoresDB.length);
    
    try {
        // Verificar que la colección existe
        try {
            await pb.collection('profesores').getFirstListItem('id != ""');
        } catch (e) {
            console.log('⚠️ La colección profesores no existe, creándola...');
            // Si no existe, la creamos (aunque debería existir)
        }
        
        // Obtener todos los existentes
        const existentes = await pb.collection('profesores').getFullList();
        console.log('Existentes en PocketBase:', existentes.length);
        
        // Eliminar todos los existentes
        for (let prof of existentes) {
            await pb.collection('profesores').delete(prof.id);
            console.log(`🗑️ Eliminado: ${prof.nombre}`);
        }
        
        // Crear los nuevos
        let exitosos = 0;
        for (let nombre of profesoresDB) {
            if (!nombre || nombre.trim() === '') continue;
            
            try {
                await pb.collection('profesores').create({
                    nombre: nombre.trim()
                });
                exitosos++;
            } catch (error) {
                console.error(`❌ Error creando: ${nombre}`, error);
            }
        }
        
        console.log(`✅ ${exitosos} profesores guardados en PocketBase`);
        
        // Verificar
        const verificacion = await pb.collection('profesores').getFullList();
        console.log('Verificación final:', verificacion.length, 'profesores en PocketBase');
        
        return exitosos === profesoresDB.length;
        
    } catch (error) {
        console.error('❌ Error guardando profesores:', error);
        return false;
    }
}

// ===== FORZAR ACTUALIZACIÓN DE LA VISTA PRINCIPAL =====
function actualizarVistaMaterias() {
    console.log('🔄 Forzando actualización de vista de materias...');
    
    // Regenerar lista global
    todasLasMaterias = generarListaGlobalMaterias();
    
    // Si el buscador está abierto, actualizarlo
    if (document.getElementById('resultadosBusqueda').style.display === 'block') {
        mostrarTodasLasMateriasDelFiltro();
    }
    
    // Actualizar las materias seleccionadas (si las hay)
    if (materiasSeleccionadas.length > 0) {
        renderizarMaterias();
    }
    
    console.log('✅ Vista actualizada');
}

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

// ===== GENERAR LISTA GLOBAL DE MATERIAS =====
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
            inputHoras.addEventListener('input', function() {
                // Limitar a 3 dígitos
                if (this.value.length > 3) {
                    this.value = this.value.slice(0, 3);
                }
                // No permitir valores mayores a 40
                if (parseInt(this.value) > 40) {
                    this.value = '40';
                }
                actualizarDatosProfesor();
            });
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
    console.log('👥 Mostrando todos los profesores. Total:', profesoresDB.length);
    
    const resultadosContainer = document.getElementById('resultadosProfesores');
    const resultadosLista = document.getElementById('listaProfesores');
    const contador = document.getElementById('contadorProfesores');
    
    if (!resultadosContainer) {
        console.error('❌ No se encontró resultadosProfesores');
        return;
    }
    if (!resultadosLista) {
        console.error('❌ No se encontró listaProfesores');
        return;
    }
    
    // FORZAR VISIBILIDAD
    resultadosContainer.style.display = 'block';
    resultadosContainer.style.visibility = 'visible';
    resultadosContainer.style.opacity = '1';
    
    // Actualizar contador
    if (contador) {
        contador.textContent = `${profesoresDB.length} profesores`;
    }
    
    // Limpiar y llenar lista
    resultadosLista.innerHTML = '';
    
    if (profesoresDB.length === 0) {
        resultadosLista.innerHTML = '<div class="resultado-sin-resultados">No hay profesores registrados</div>';
        return;
    }
    
    // Crear items uno por uno
    profesoresDB.forEach((nombre, index) => {
        console.log(`Agregando profesor ${index + 1}:`, nombre);
        const item = crearItemProfesor(nombre);
        resultadosLista.appendChild(item);
    });
    
    console.log('✅ Lista de profesores renderizada. Items:', resultadosLista.children.length);
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
    console.log('Creando item para:', nombre);
    
    const item = document.createElement('div');
    item.className = 'profesor-item';
    item.onclick = () => seleccionarProfesor(nombre);
    
    item.innerHTML = `
        <div style="display: flex; flex-direction: column; width: 100%;">
            <h4 style="margin: 0;"><i class="fas fa-user-circle"></i> ${nombre}</h4>
        </div>
        <i class="fas fa-check-circle" style="color: #0077BE; font-size: 1.3rem;"></i>
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
        selectCarrera.addEventListener('change', manejarCambioFiltros);
    }
    
    // NUEVO: Listener para filtro de semestre
    const selectSemestre = document.getElementById('selectSemestre');
    if (selectSemestre) {
        selectSemestre.addEventListener('change', manejarCambioFiltros);
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

// ===== NUEVA FUNCIÓN PARA MANEJAR AMBOS FILTROS =====
function manejarCambioFiltros() {
    const selectCarrera = document.getElementById('selectCarrera');
    const selectSemestre = document.getElementById('selectSemestre');
    
    filtroCarreraActual = selectCarrera ? selectCarrera.value : '';
    filtroSemestreActual = selectSemestre ? selectSemestre.value : '';
    
    // Actualizar etiqueta visual
    const semestreActivo = document.getElementById('semestreActivo');
    if (semestreActivo) {
        if (filtroSemestreActual) {
            semestreActivo.textContent = `Semestre ${filtroSemestreActual}`;
            semestreActivo.style.background = '#FFD700';
        } else {
            semestreActivo.textContent = 'Todos';
            semestreActivo.style.background = '#FFD700';
        }
    }
    
    const buscador = document.getElementById('buscadorMaterias');
    buscador.value = '';
    
    mostrarTodasLasMateriasDelFiltro();
    
    // Mostrar notificación con los filtros activos
    let mensaje = '';
    if (filtroCarreraActual && filtroSemestreActual) {
        const carreraNombre = carrerasData[filtroCarreraActual]?.nombre || filtroCarreraActual;
        mensaje = `Mostrando ${carreraNombre} - Semestre ${filtroSemestreActual}`;
    } else if (filtroCarreraActual) {
        const carreraNombre = carrerasData[filtroCarreraActual]?.nombre || filtroCarreraActual;
        mensaje = `Mostrando ${carreraNombre} - Todos los semestres`;
    } else if (filtroSemestreActual) {
        mensaje = `Mostrando todas las carreras - Semestre ${filtroSemestreActual}`;
    } else {
        mensaje = 'Mostrando todas las carreras y semestres';
    }
    
    mostrarNotificacion(mensaje, 'info', 2000);
}

function mostrarTodasLasMateriasDelFiltro() {
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    const resultadosLista = document.getElementById('resultadosLista');
    const contador = document.getElementById('contadorResultados');
    
    resultadosContainer.style.display = 'block';
    
    let materiasAMostrar = [];
    
    if (!filtroCarreraActual && !filtroSemestreActual) {
        // Sin filtros: todas las materias
        materiasAMostrar = [...todasLasMaterias];
    } else {
        // Aplicar filtros combinados
        materiasAMostrar = todasLasMaterias.filter(materia => {
            // Verificar cada carrera donde aparece esta materia
            const infoFiltrada = materia.info.filter(info => {
                // Filtro por carrera
                if (filtroCarreraActual) {
                    const carreraKey = Object.keys(carrerasData).find(
                        key => carrerasData[key].nombre === info.carrera
                    );
                    if (carreraKey !== filtroCarreraActual) return false;
                }
                
                // Filtro por semestre
                if (filtroSemestreActual) {
                    if (info.semestre !== parseInt(filtroSemestreActual)) return false;
                }
                
                return true;
            });
            
            // La materia se muestra si tiene al menos una carrera que cumple los filtros
            return infoFiltrada.length > 0;
        }).map(materia => {
            // Crear una versión de la materia solo con las carreras que cumplen los filtros
            const infoFiltrada = materia.info.filter(info => {
                if (filtroCarreraActual) {
                    const carreraKey = Object.keys(carrerasData).find(
                        key => carrerasData[key].nombre === info.carrera
                    );
                    if (carreraKey !== filtroCarreraActual) return false;
                }
                if (filtroSemestreActual) {
                    if (info.semestre !== parseInt(filtroSemestreActual)) return false;
                }
                return true;
            });
            
            return {
                nombre: materia.nombre,
                info: infoFiltrada
            };
        });
    }
    
    contador.textContent = `${materiasAMostrar.length} materias`;
    
    if (materiasAMostrar.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No hay materias disponibles con los filtros seleccionados</p>
                <small>Prueba con otros filtros</small>
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

// ===== NUEVA FUNCIÓN: Actualizar opciones de semestre según período =====
function actualizarOpcionesSemestre() {
    const selectSemestre = document.getElementById('selectSemestre');
    if (!selectSemestre) return;
    
    // Guardar valor actual
    const valorActual = selectSemestre.value;
    
    // Determinar qué semestres mostrar según el período
    let semestres = [];
    if (periodoActivo === 'ene-jun') {
        // ENE-JUN: semestres pares (2,4,6,8)
        semestres = [2, 4, 6, 8];
    } else {
        // AGO-DIC: semestres impares (1,3,5,7,9)
        semestres = [1, 3, 5, 7, 9];
    }
    
    // Generar nuevas opciones
    let opcionesHTML = '<option value="">-- Todos los semestres --</option>';
    semestres.forEach(sem => {
        opcionesHTML += `<option value="${sem}">Semestre ${sem}</option>`;
    });
    
    selectSemestre.innerHTML = opcionesHTML;
    
    // Restaurar valor si era válido
    if (valorActual && semestres.includes(parseInt(valorActual))) {
        selectSemestre.value = valorActual;
    } else {
        selectSemestre.value = '';
        filtroSemestreActual = '';
    }
    
    // Actualizar etiqueta visual
    const semestreActivo = document.getElementById('semestreActivo');
    if (semestreActivo) {
        if (selectSemestre.value) {
            semestreActivo.textContent = `Semestre ${selectSemestre.value}`;
        } else {
            semestreActivo.textContent = 'Todos';
        }
    }
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
        ${!estaSeleccionada ? '<i class="fas fa-plus-circle" style="color: #0077BE; font-size: 1.5rem;"></i>' : '<i class="fas fa-check-circle" style="color: #2ecc71; font-size: 1.5rem;"></i>'}
    `;
    
    if (estaSeleccionada) {
        resultadoItem.style.opacity = '0.7';
        resultadoItem.style.cursor = 'not-allowed';
        resultadoItem.onclick = null;
    }
    
    return resultadoItem;
}

// ===== NUEVA FUNCIÓN: SELECCIONAR TODO EL TURNO ACTUAL =====
function seleccionarTodoTurno() {
    const turno = turnoActivo; // 'matutino' o 'vespertino'
    
    // Determinar las horas según el turno
    let horaInicio, horaFin;
    if (turno === 'matutino') {
        horaInicio = 7;
        horaFin = 14;
    } else {
        horaInicio = 14;
        horaFin = 22;
    }
    
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    const nuevosHorarios = [];
    
    // Generar todos los IDs posibles para el turno actual
    dias.forEach(dia => {
        for (let hora = horaInicio; hora < horaFin; hora++) {
            const id = `${dia}_${hora}`;
            const periodo = hora >= 12 ? 'PM' : 'AM';
            const horaInicioStr = hora.toString();
            const horaFinStr = (hora + 1).toString();
            const bloqueHora = `${horaInicioStr}-${horaFinStr}`;
            const texto = `${bloqueHora} ${periodo}`;
            
            nuevosHorarios.push({
                id: id,
                dia: dia,
                hora: hora,
                texto: texto
            });
        }
    });
    
    // Reemplazar los horarios seleccionados con los nuevos (solo para el turno actual)
    // Mantener horarios de otros turnos
    const horariosOtrosTurnos = horariosSeleccionados.filter(h => {
        const hora = parseInt(h.hora);
        if (turno === 'matutino') {
            return hora >= 14; // Horas vespertinas
        } else {
            return hora < 14; // Horas matutinas
        }
    });
    
    horariosSeleccionados = [...horariosOtrosTurnos, ...nuevosHorarios];
    
    // Actualizar la UI
    restaurarHorariosSeleccionados();
    actualizarResumenHorarios();
    
    // Mostrar notificación
    mostrarNotificacion(`✅ Todos los horarios de ${turno === 'matutino' ? 'mañana' : 'tarde'} seleccionados`, 'success');
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
    
    // Al regenerar la cuadrícula, restaurar los horarios seleccionados
    restaurarHorariosSeleccionados();
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
            const turno = turnoActivo; // 'matutino' o 'vespertino'
            
            // Determinar las horas según el turno
            let horaInicio, horaFin;
            if (turno === 'matutino') {
                horaInicio = 7;
                horaFin = 14;
            } else {
                horaInicio = 14;
                horaFin = 22;
            }
            
            // Filtrar horarios: mantener los que NO son del turno actual
            horariosSeleccionados = horariosSeleccionados.filter(h => {
                const hora = parseInt(h.hora);
                if (turno === 'matutino') {
                    return hora >= 14; // Mantener vespertinos
                } else {
                    return hora < 14; // Mantener matutinos
                }
            });
            
            // Actualizar la UI: remover clase selected solo de las celdas del turno actual
            document.querySelectorAll(`.celda-horario-limpia`).forEach(celda => {
                const hora = parseInt(celda.getAttribute('data-hora'));
                if (turno === 'matutino' && hora < 14) {
                    celda.classList.remove('selected');
                } else if (turno === 'vespertino' && hora >= 14) {
                    celda.classList.remove('selected');
                }
            });
            
            actualizarResumenHorarios();
            mostrarNotificacion(`🧹 Horarios de ${turno === 'matutino' ? 'mañana' : 'tarde'} limpiados`, 'info');
        });
    }
    
    // Botón seleccionar todo
    const btnSeleccionarTodo = document.getElementById('btnSeleccionarTodo');
    if (btnSeleccionarTodo) {
        btnSeleccionarTodo.addEventListener('click', seleccionarTodoTurno);
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
            actualizarInterfazPeriodo();
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
}

async function cambiarPeriodo(nuevoPeriodo) {
    // Solo admin puede cambiar el período
    if (!adminActivo) {
        mostrarNotificacion('No tienes permisos para cambiar el período', 'warning');
        return;
    }
    
    const exito = await guardarPeriodoGlobal(nuevoPeriodo);
    
    if (exito) {
        // Cambiar las materias según el período
        if (nuevoPeriodo === 'ene-jun') {
            carrerasData = carrerasDataENEJUNTrabajo;
        } else {
            carrerasData = carrerasDataAGODICTrabajo;
        }
        
        todasLasMaterias = generarListaGlobalMaterias();
        
        // Actualizar badges
        actualizarInterfazPeriodo();
        
        // ACTUALIZAR OPCIONES DE SEMESTRE
        actualizarOpcionesSemestre();
        
        // Limpiar filtros
        filtroCarreraActual = '';
        filtroSemestreActual = '';
        const selectCarrera = document.getElementById('selectCarrera');
        if (selectCarrera) selectCarrera.value = '';
        
        // Actualizar vista
        if (document.getElementById('resultadosBusqueda').style.display === 'block') {
            mostrarTodasLasMateriasDelFiltro();
        }
        
        mostrarNotificacion(`Período cambiado a ${nuevoPeriodo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC'}`, 'success');
    }
}

// ===== VARIABLES GLOBALES PARA PAGINACIÓN =====
let todasLasEncuestas = [];
let encuestasFiltradas = [];
let paginaActual = 1;
let itemsPorPagina = 10;

// ===== FUNCIÓN PRINCIPAL PARA VER ENCUESTAS =====
async function verTodasLasEncuestas() {
    try {
        mostrarNotificacion('Cargando encuestas...', 'info');
        
        // Obtener TODAS las encuestas de PocketBase
        todasLasEncuestas = await pb.collection('encuestas').getFullList({
            sort: '-created' // Más recientes primero
        });
        
        console.log('📋 Encuestas recibidas:', todasLasEncuestas);
        
        if (!todasLasEncuestas || todasLasEncuestas.length === 0) {
            mostrarNotificacion('No hay encuestas guardadas', 'info');
            return;
        }
        
        encuestasFiltradas = [...todasLasEncuestas];
        paginaActual = 1;
        
        mostrarModalEncuestasAvanzado();
        
    } catch (error) {
        console.error('❌ Error al obtener encuestas:', error);
        mostrarNotificacion('Error al obtener encuestas: ' + (error.message || 'Error desconocido'), 'error');
    }
}

// ===== MOSTRAR MODAL AVANZADO =====
function mostrarModalEncuestasAvanzado() {
    // Calcular estadísticas - SOLO TOTAL
    const totalEncuestas = todasLasEncuestas.length;
    
    let modalHTML = `
        <div class="gestion-modal" id="modalVerEncuestas" style="z-index: 30000;">
            <div class="gestion-contenido" style="max-width: 1000px;">
                <div class="gestion-header">
                    <h3><i class="fas fa-clipboard-list"></i> Todas las Encuestas</h3>
                    <button class="gestion-cerrar" onclick="cerrarModalEncuestas()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="gestion-body" style="max-height: 80vh; overflow-y: auto;">
                    
                    <!-- ESTADÍSTICAS - SOLO TOTAL -->
                    <div class="encuestas-stats" style="justify-content: center;">
                        <div class="stat-item">
                            <div class="stat-valor">${totalEncuestas}</div>
                            <div class="stat-label">Total Encuestas</div>
                        </div>
                    </div>
                    
                    <!-- FILTROS - SOLO NOMBRE Y PERÍODO (SIN TIPO) -->
                    <div class="encuestas-filtros">
                        <input type="text" class="filtro-input" id="filtroNombre" placeholder="Buscar por nombre del profesor..." style="flex: 2;">
                        <select class="filtro-select" id="filtroPeriodo" style="flex: 1;">
                            <option value="todos">Todos los períodos</option>
                            <option value="ene-jun">ENE - JUN</option>
                            <option value="ago-dic">AGO - DIC</option>
                        </select>
                    </div>
                    
                    <!-- LISTA DE ENCUESTAS -->
                    <div id="encuestasListaContainer"></div>
                    
                    <!-- PAGINACIÓN -->
                    <div id="paginacionContainer" class="paginacion"></div>
                    
                </div>
                <div class="gestion-footer">
                    <button class="btn btn-secondary" onclick="cerrarModalEncuestas()">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    
    // Eliminar modal anterior si existe
    const modalAnterior = document.getElementById('modalVerEncuestas');
    if (modalAnterior) modalAnterior.remove();
    
    // Agregar nuevo modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    // Renderizar lista inicial
    renderizarListaEncuestas();
    
    // Agregar event listeners para filtros (solo nombre y período)
    document.getElementById('filtroNombre').addEventListener('input', aplicarFiltros);
    document.getElementById('filtroPeriodo').addEventListener('change', aplicarFiltros);
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
    const nombreFiltro = document.getElementById('filtroNombre').value.toLowerCase().trim();
    const periodoFiltro = document.getElementById('filtroPeriodo').value;
    
    encuestasFiltradas = todasLasEncuestas.filter(enc => {
        // Filtro por nombre
        const nombre = enc.profesor?.nombre?.toLowerCase() || '';
        if (nombreFiltro && !nombre.includes(nombreFiltro)) return false;
        
        // Filtro por período
        if (periodoFiltro !== 'todos' && enc.periodo !== periodoFiltro) return false;
        
        return true;
    });
    
    paginaActual = 1;
    renderizarListaEncuestas();
}

// ===== RENDERIZAR LISTA DE ENCUESTAS =====
function renderizarListaEncuestas() {
    const container = document.getElementById('encuestasListaContainer');
    if (!container) return;
    
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    const encuestasPagina = encuestasFiltradas.slice(inicio, fin);
    
    let html = '<div class="encuestas-lista">';
    
    encuestasPagina.forEach((enc, index) => {
        const profesor = enc.profesor || {};
        const fecha = enc.fecha ? new Date(enc.fecha).toLocaleString('es-MX') : 'Fecha desconocida';
        const tipo = enc.es_borrador ? 'borrador' : 'enviada';
        const periodoTexto = enc.periodo === 'ene-jun' ? 'ENE - JUN' : (enc.periodo === 'ago-dic' ? 'AGO - DIC' : 'No especificado');
        const iniciales = profesor.nombre ? profesor.nombre.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase() : '??';
        
        html += `
            <div class="encuesta-card ${tipo}" onclick="toggleEncuestaDetalle('enc-${index}')">
                <div class="encuesta-header">
                    <div class="encuesta-profesor">
                        <div class="encuesta-avatar">${iniciales}</div>
                        <div class="encuesta-info">
                            <h4>${profesor.nombre || 'Nombre no especificado'}</h4>
                            <p>
                                <i class="fas fa-envelope"></i> ${profesor.correo || 'Sin correo'}
                                <i class="fas fa-id-card" style="margin-left: 10px;"></i> ${profesor.codigo || 'Sin clave'}
                            </p>
                        </div>
                    </div>
                    <div>
                        <span class="encuesta-badge ${tipo === 'borrador' ? 'badge-borrador' : 'badge-enviada'}">${tipo === 'borrador' ? 'Borrador' : 'Enviada'}</span>
                    </div>
                </div>
                
                <div class="encuesta-resumen">
                    <span class="resumen-item"><i class="fas fa-calendar"></i> ${periodoTexto}</span>
                    <span class="resumen-item"><i class="fas fa-book"></i> ${enc.materias?.length || 0} materias</span>
                    <span class="resumen-item"><i class="fas fa-clock"></i> ${enc.horarios?.length || 0} horarios</span>
                    <span class="resumen-item"><i class="fas fa-briefcase"></i> ${profesor.tipoPlaza || 'Plaza no especificada'}</span>
                </div>
                
                <div class="encuesta-footer">
                    <span><i class="far fa-clock"></i> ${fecha}</span>
                </div>
                
                <div class="encuesta-detalles" id="enc-${index}">
                    <div class="detalle-seccion">
                        <h5><i class="fas fa-user-graduate"></i> Datos completos del profesor</h5>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                            <div>
                                <strong><i class="fas fa-phone"></i> Teléfono:</strong><br>
                                <span style="color: #2c3e50;">${profesor.telefono || 'No especificado'}</span>
                            </div>
                            <div>
                                <strong><i class="fas fa-id-card"></i> Clave Docente:</strong><br>
                                <span style="color: #2c3e50;">${profesor.codigo || 'No especificada'}</span>
                            </div>
        `;
        
        // Solo mostrar horas semanales si el tipo de plaza es 'por_horas'
        if (profesor.tipoPlaza === 'por_horas' && profesor.horasPlaza) {
            html += `
                            <div>
                                <strong><i class="fas fa-clock"></i> Horas semanales:</strong><br>
                                <span style="color: #2c3e50;">${profesor.horasPlaza}</span>
                            </div>
            `;
        }
        
        html += `
                        </div>
                    </div>
                    
                    <div class="detalle-seccion">
                        <h5><i class="fas fa-book-open"></i> Materias seleccionadas</h5>
                        <div class="detalle-materias">
        `;
        
        if (enc.materias && enc.materias.length > 0) {
            enc.materias.forEach(m => {
                const carrerasTexto = m.carreras ? m.carreras.map(c => `${c.carrera} - Sem ${c.semestre}`).join(', ') : 'Sin carrera';
                html += `
                    <div class="detalle-materia-item">
                        <strong>${m.nombre}</strong>
                        <small>${carrerasTexto}</small>
                        <div><small>Nivel: ${m.nivel || 'No especificado'}</small></div>
                    </div>
                `;
            });
        } else {
            html += '<div class="detalle-materia-item">No hay materias seleccionadas</div>';
        }
        
        html += `
                        </div>
                    </div>
                    
                    <div class="detalle-seccion">
                        <h5><i class="fas fa-clock"></i> Horarios seleccionados</h5>
                        <div class="detalle-horarios">
        `;
        
        if (enc.horarios && enc.horarios.length > 0) {
            const horariosPorDia = {};
            enc.horarios.forEach(h => {
                if (!horariosPorDia[h.dia]) horariosPorDia[h.dia] = [];
                horariosPorDia[h.dia].push(h);
            });
            
            Object.keys(horariosPorDia).sort().forEach(dia => {
                html += `<div style="grid-column: 1 / -1;"><strong>${dia}:</strong></div>`;
                horariosPorDia[dia].forEach(h => {
                    html += `
                        <div class="detalle-horario-item">
                            <i class="fas fa-clock"></i> ${h.texto}
                        </div>
                    `;
                });
            });
        } else {
            html += '<div class="detalle-horario-item">No hay horarios seleccionados</div>';
        }
        
        html += `
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Renderizar paginación
    renderizarPaginacion();
}

// ===== RENDERIZAR PAGINACIÓN =====
function renderizarPaginacion() {
    const container = document.getElementById('paginacionContainer');
    if (!container) return;
    
    const totalPaginas = Math.ceil(encuestasFiltradas.length / itemsPorPagina);
    
    let html = '';
    
    if (totalPaginas > 1) {
        html = `
            <button class="btn-pagina" onclick="cambiarPagina(${paginaActual - 1})" ${paginaActual === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <span class="pagina-actual">Página ${paginaActual} de ${totalPaginas}</span>
            <button class="btn-pagina" onclick="cambiarPagina(${paginaActual + 1})" ${paginaActual === totalPaginas ? 'disabled' : ''}>
                Siguiente <i class="fas fa-chevron-right"></i>
            </button>
        `;
    }
    
    container.innerHTML = html;
}

// ===== CAMBIAR PÁGINA =====
function cambiarPagina(nuevaPagina) {
    paginaActual = nuevaPagina;
    renderizarListaEncuestas();
}

// ===== TOGGLE DETALLE DE ENCUESTA =====
function toggleEncuestaDetalle(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        if (elemento.style.display === 'block') {
            elemento.style.display = 'none';
        } else {
            elemento.style.display = 'block';
        }
    }
}

// ===== CERRAR MODAL =====
function cerrarModalEncuestas() {
    const modal = document.getElementById('modalVerEncuestas');
    if (modal) modal.remove();
}

// ===== FUNCIONES DE EXPORTACIÓN =====
function exportarAExcel() {
    mostrarNotificacion('Función: Exportar a Excel (próximamente)', 'info');
}

function exportarAPDF() {
    mostrarNotificacion('Función: Exportar a PDF (próximamente)', 'info');
}

// ===== GESTIÓN DE MATERIAS CON FILTROS =====
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
    // Resetear filtros al cambiar de período
    filtroGestionMaterias = '';
    filtroGestionCarrera = '';
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    cargarMateriasParaGestion(periodo);
}

function cargarMateriasParaGestion(periodo) {
    const data = periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
    const container = document.getElementById('gestionCarrerasContainer');
    
    if (!container) return;
    
    // Guardar los valores actuales de los filtros antes de regenerar
    const filtroActual = filtroGestionMaterias;
    const carreraActual = filtroGestionCarrera;
    
    let html = '';
    
    // Agregar los filtros ENCIMA de las carreras
    html += `
        <div class="gestion-filtros" style="margin-bottom: 20px; padding: 15px; background: #f0f7ff; border-radius: 8px;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <div style="flex: 2;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 600;">🔍 Buscar materia:</label>
                    <input type="text" id="filtroMateriaInput" class="filtro-input" 
                           placeholder="Escribe el nombre de la materia..." 
                           style="width: 100%; padding: 10px; border: 2px solid #dfe6e9; border-radius: 6px;"
                           value="${filtroActual}">
                </div>
                <div style="flex: 1;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 600;">📚 Filtrar por carrera:</label>
                    <select id="filtroCarreraSelect" class="filtro-select" style="width: 100%; padding: 10px; border: 2px solid #dfe6e9; border-radius: 6px;">
                        <option value="">Todas las carreras</option>
                        ${Object.keys(data).map(key => `<option value="${key}" ${carreraActual === key ? 'selected' : ''}>${data[key].nombre}</option>`).join('')}
                    </select>
                </div>
            </div>
        </div>
    `;
    
    // Normalizar el término de búsqueda (quitar acentos)
    const terminoBusqueda = filtroGestionMaterias ? quitarAcentos(filtroGestionMaterias.toLowerCase()) : '';
    
    // Filtrar materias según los criterios
    const materiasFiltradas = {};
    
    Object.entries(data).forEach(([carreraKey, carrera]) => {
        // Aplicar filtro por carrera
        if (filtroGestionCarrera && filtroGestionCarrera !== carreraKey) {
            return;
        }
        
        // Filtrar materias por nombre (sin acentos)
        const materiasFiltradasCarrera = carrera.materias.filter(materia => {
            if (!terminoBusqueda) return true;
            const nombreNormalizado = quitarAcentos(materia.nombre.toLowerCase());
            return nombreNormalizado.includes(terminoBusqueda);
        });
        
        if (materiasFiltradasCarrera.length > 0) {
            materiasFiltradas[carreraKey] = {
                nombre: carrera.nombre,
                materias: materiasFiltradasCarrera
            };
        }
    });
    
    // Si no hay resultados, mostrar mensaje
    if (Object.keys(materiasFiltradas).length === 0) {
        html += `
            <div style="text-align: center; padding: 40px; background: #f8f9fa; border-radius: 8px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #bdc3c7; margin-bottom: 15px;"></i>
                <p style="color: #7f8c8d;">No se encontraron materias con "${filtroGestionMaterias}"</p>
            </div>
        `;
    } else {
        // Mostrar las carreras filtradas
        Object.entries(materiasFiltradas).forEach(([carreraKey, carrera]) => {
            html += `
                <div class="gestion-carrera" data-carrera-key="${carreraKey}">
                    <div class="carrera-titulo">
                        <label>Nombre de la carrera:</label>
                        <input type="text" class="carrera-nombre-input" 
                               value="${carrera.nombre.replace(/"/g, '&quot;')}" 
                               data-carrera-key="${carreraKey}"
                               data-periodo="${periodo}">
                    </div>
                    <div class="materias-lista" id="materias-${carreraKey}-${periodo}">
            `;
            
            carrera.materias.forEach((materia, index) => {
                // Encontrar el índice original para mantener consistencia al guardar
                const indexOriginal = data[carreraKey].materias.findIndex(m => 
                    m.nombre === materia.nombre && m.semestre === materia.semestre
                );
                
                html += `
                    <div class="materia-item" data-index="${indexOriginal}">
                        <input type="text" class="materia-nombre" 
                               value="${materia.nombre.replace(/"/g, '&quot;')}" 
                               placeholder="Nombre de la materia"
                               data-carrera="${carreraKey}"
                               data-index="${indexOriginal}"
                               data-periodo="${periodo}">
                        <input type="number" class="materia-semestre" 
                               value="${materia.semestre}" 
                               placeholder="Semestre"
                               min="1" max="12"
                               data-carrera="${carreraKey}"
                               data-index="${indexOriginal}"
                               data-periodo="${periodo}">
                        <button class="btn-remove-materia" onclick="eliminarMateria('${carreraKey}', ${indexOriginal}, '${periodo}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            });
            
            html += `
                    </div>
                    <button class="btn-add-materia" onclick="agregarMateria('${carreraKey}', '${periodo}')">
                        <i class="fas fa-plus"></i> Agregar materia
                    </button>
                </div>
            `;
        });
    }
    
    container.innerHTML = html;
    
    // Agregar event listeners para los filtros con debounce
    setTimeout(() => {
        const inputFiltro = document.getElementById('filtroMateriaInput');
        const selectCarrera = document.getElementById('filtroCarreraSelect');
        
        if (inputFiltro) {
            let timeoutId;
            inputFiltro.addEventListener('input', function() {
                // Guardar la posición del cursor
                const cursorPos = this.selectionStart;
                const valor = this.value;
                
                // Cancelar timeout anterior
                clearTimeout(timeoutId);
                
                // Establecer nuevo timeout para actualizar después de 300ms
                timeoutId = setTimeout(() => {
                    filtroGestionMaterias = valor;
                    cargarMateriasParaGestion(periodo);
                    
                    // Restaurar el foco y la posición del cursor después de la actualización
                    setTimeout(() => {
                        const nuevoInput = document.getElementById('filtroMateriaInput');
                        if (nuevoInput) {
                            nuevoInput.focus();
                            nuevoInput.setSelectionRange(cursorPos, cursorPos);
                        }
                    }, 10);
                }, 300);
            });
        }
        
        if (selectCarrera) {
            selectCarrera.addEventListener('change', function() {
                filtroGestionCarrera = this.value;
                cargarMateriasParaGestion(periodo);
            });
        }
    }, 100);
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

async function eliminarMateria(carreraKey, index, periodo) {
    if (confirm('¿Estás seguro de eliminar esta materia?')) {
        console.log(`🗑️ Eliminando materia ${index} de ${carreraKey} (${periodo})`);
        
        // Eliminar de los datos de trabajo
        const dataTrabajo = periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
        const materiaEliminada = dataTrabajo[carreraKey].materias[index];
        
        if (materiaEliminada) {
            console.log(`📝 Materia eliminada: ${materiaEliminada.nombre}`);
            dataTrabajo[carreraKey].materias.splice(index, 1);
            
            // Guardar en PocketBase
            console.log('📤 Guardando cambio en PocketBase...');
            
            if (periodo === 'ene-jun') {
                await guardarCarreraENEJUN(carreraKey);
            } else {
                await guardarCarreraAGODIC(carreraKey);
            }
            
            // Regenerar lista global
            todasLasMaterias = generarListaGlobalMaterias();
            
            // Actualizar la vista
            cargarMateriasParaGestion(periodo);
            
            // Si la carrera actual es la visible, actualizar también la vista principal
            if (periodo === periodoActivo) {
                if (document.getElementById('resultadosBusqueda').style.display === 'block') {
                    mostrarTodasLasMateriasDelFiltro();
                }
            }
            
            mostrarNotificacion('✅ Materia eliminada correctamente', 'success');
        }
    }
}

async function guardarCambiosMaterias() {
    console.log('💾 INICIANDO GUARDADO DE MATERIAS');
    console.log('👑 Es admin?', adminActivo);
    
    if (!adminActivo) {
        mostrarNotificacion('No tienes permisos de administrador', 'warning');
        return;
    }
    
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
        
        console.log('📝 Materias modificadas:', materiasModificadas);
        
        // Aplicar cambios a los objetos de trabajo
        materiasModificadas.forEach(item => {
            const dataTrabajo = item.periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
            
            if (item.tipo === 'existente') {
                if (dataTrabajo[item.carrera] && dataTrabajo[item.carrera].materias[item.index]) {
                    dataTrabajo[item.carrera].materias[item.index].nombre = item.nombre;
                    dataTrabajo[item.carrera].materias[item.index].semestre = item.semestre;
                }
            } else {
                if (dataTrabajo[item.carrera]) {
                    dataTrabajo[item.carrera].materias.push({
                        nombre: item.nombre,
                        semestre: item.semestre
                    });
                }
            }
        });
        
        // GUARDAR EN POCKETBASE
        console.log('📤 Guardando ENE-JUN en PocketBase...');
        const guardadoENEJUN = await guardarMateriasENEJUN();
        
        console.log('📤 Guardando AGO-DIC en PocketBase...');
        const guardadoAGODIC = await guardarMateriasAGODIC();
        
        if (guardadoENEJUN && guardadoAGODIC) {
            console.log('✅ AMBOS PERÍODOS GUARDADOS CORRECTAMENTE');
            
            // Actualizar localStorage como backup
            localStorage.setItem('carrerasDataENEJUN', JSON.stringify(carrerasDataENEJUNTrabajo));
            localStorage.setItem('carrerasDataAGODIC', JSON.stringify(carrerasDataAGODICTrabajo));
            
            // Forzar actualización de la vista
            actualizarVistaMaterias();
            
            mostrarNotificacion('✅ Materias guardadas correctamente', 'success');
            
            // Cerrar modal después de 1 segundo
            setTimeout(() => {
                cerrarGestionMaterias();
            }, 1000);
            
        } else {
            console.error('❌ Error guardando uno o ambos períodos');
            mostrarNotificacion('⚠️ Error al guardar en PocketBase', 'warning');
        }
        
    } catch (error) {
        console.error('❌ Error al guardar materias:', error);
        mostrarNotificacion('❌ Error al guardar los cambios', 'error');
    }
}

function cerrarGestionMaterias() {
    const modal = document.getElementById('gestionMateriasModal');
    if (modal) modal.remove();
}

// ===== GESTIÓN DE PROFESORES CON FILTROS =====
function gestionarProfesores() {
    console.log('👥 Abriendo gestión de profesores...');
    mostrarNotificacion('Abriendo editor de profesores...', 'info', 2000);
    
    // Resetear filtro al abrir
    filtroGestionProfesores = '';
    
    const modalHTML = `
        <div class="gestion-modal" id="gestionProfesoresModal">
            <div class="gestion-contenido" style="max-width: 600px;">
                <div class="gestion-header">
                    <h3><i class="fas fa-users"></i> Gestionar Profesores (${profesoresDB.length})</h3>
                    <button class="gestion-cerrar" onclick="cerrarGestionProfesores()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="gestion-body" style="max-height: 70vh; overflow-y: auto;">
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
    
    // Eliminar modal anterior si existe
    const modalAnterior = document.getElementById('gestionProfesoresModal');
    if (modalAnterior) modalAnterior.remove();
    
    // Agregar nuevo modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    // Cargar lista de profesores
    setTimeout(() => {
        cargarProfesoresParaGestion();
    }, 100);
}

function cargarProfesoresParaGestion() {
    console.log('📋 Cargando lista de profesores para gestión...');
    
    const container = document.getElementById('listaProfesoresGestion');
    if (!container) {
        console.error('❌ No se encontró el contenedor listaProfesoresGestion');
        return;
    }
    
    // Guardar el valor actual del filtro
    const filtroActual = filtroGestionProfesores;
    
    // Normalizar el término de búsqueda (quitar acentos)
    const terminoBusqueda = filtroGestionProfesores ? quitarAcentos(filtroGestionProfesores.toLowerCase()) : '';
    
    // Filtrar profesores (sin acentos)
    const profesoresFiltrados = profesoresDB.filter(nombre => {
        if (!terminoBusqueda) return true;
        const nombreNormalizado = quitarAcentos(nombre.toLowerCase());
        return nombreNormalizado.includes(terminoBusqueda);
    });
    
    let html = `
        <div style="margin-bottom: 20px; padding: 15px; background: #f0f7ff; border-radius: 8px;">
            <div style="display: flex; gap: 10px;">
                <div style="flex: 1;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 600;">
                        <i class="fas fa-search"></i> Buscar profesor:
                    </label>
                    <input type="text" id="filtroProfesorInput" class="filtro-input" 
                           placeholder="Escribe el nombre del profesor..." 
                           style="width: 100%; padding: 10px; border: 2px solid #dfe6e9; border-radius: 6px;"
                           value="${filtroActual}">
                </div>
            </div>
            <div style="margin-top: 10px; font-size: 0.9rem; color: #7f8c8d;">
                <i class="fas fa-info-circle"></i> Mostrando ${profesoresFiltrados.length} de ${profesoresDB.length} profesores
            </div>
        </div>
    `;
    
    html += `
        <div class="profesor-item-gestion" style="background: #f0f7ff; border: 2px dashed #27ae60;">
            <button class="btn-add-profesor" onclick="agregarProfesor()" style="width: 100%; padding: 15px;">
                <i class="fas fa-user-plus"></i> Agregar nuevo profesor
            </button>
        </div>
    `;
    
    if (profesoresFiltrados.length === 0) {
        html += `
            <div style="text-align: center; padding: 40px; background: #f8f9fa; border-radius: 8px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #bdc3c7; margin-bottom: 15px;"></i>
                <p style="color: #7f8c8d;">No se encontraron profesores con "${filtroGestionProfesores}"</p>
            </div>
        `;
    } else {
        profesoresFiltrados.forEach((nombre, index) => {
            // Encontrar el índice original
            const indexOriginal = profesoresDB.findIndex(p => p === nombre);
            
            // Escapar comillas para evitar errores
            const nombreEscapado = nombre.replace(/"/g, '&quot;');
            
            html += `
                <div class="profesor-item-gestion" data-index="${indexOriginal}" data-original="${nombreEscapado}">
                    <input type="text" class="profesor-nombre-input" 
                           value="${nombreEscapado}" 
                           data-index="${indexOriginal}"
                           placeholder="Nombre completo del profesor">
                    <button class="btn-remove-profesor" onclick="eliminarProfesor(${indexOriginal})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
    }
    
    html += `
        <div class="profesores-nuevos" id="profesoresNuevosContainer">
            <h4 style="margin-top: 20px; color: #2c3e50;">Nuevos profesores:</h4>
            <div id="nuevosProfesoresLista"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Agregar event listener para el filtro con debounce
    setTimeout(() => {
        const inputFiltro = document.getElementById('filtroProfesorInput');
        if (inputFiltro) {
            let timeoutId;
            inputFiltro.addEventListener('input', function() {
                // Guardar la posición del cursor
                const cursorPos = this.selectionStart;
                const valor = this.value;
                
                // Cancelar timeout anterior
                clearTimeout(timeoutId);
                
                // Establecer nuevo timeout para actualizar después de 300ms
                timeoutId = setTimeout(() => {
                    filtroGestionProfesores = valor;
                    cargarProfesoresParaGestion();
                    
                    // Restaurar el foco y la posición del cursor después de la actualización
                    setTimeout(() => {
                        const nuevoInput = document.getElementById('filtroProfesorInput');
                        if (nuevoInput) {
                            nuevoInput.focus();
                            nuevoInput.setSelectionRange(cursorPos, cursorPos);
                        }
                    }, 10);
                }, 300);
            });
        }
    }, 100);
}

function agregarProfesor() {
    console.log('➕ Agregando nuevo profesor');
    
    const container = document.getElementById('nuevosProfesoresLista');
    if (!container) {
        console.error('❌ No se encontró el contenedor nuevosProfesoresLista');
        return;
    }
    
    const nuevoProfesor = document.createElement('div');
    nuevoProfesor.className = 'profesor-item-gestion nuevo';
    nuevoProfesor.style.background = '#f0f7ff';
    nuevoProfesor.style.border = '2px dashed #27ae60';
    nuevoProfesor.innerHTML = `
        <input type="text" class="profesor-nombre-input nuevo" 
               placeholder="Nombre completo del nuevo profesor"
               style="flex: 1; padding: 12px; border: 2px solid #dfe6e9; border-radius: 6px;">
        <button class="btn-remove-profesor" onclick="this.parentElement.remove()" 
                style="background: #e74c3c; color: white; border: none; width: 40px; height: 40px; border-radius: 6px; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(nuevoProfesor);
    
    // Enfocar el input
    setTimeout(() => {
        const input = nuevoProfesor.querySelector('input');
        if (input) input.focus();
    }, 100);
}

async function eliminarProfesor(index) {
    console.log(`🗑️ Intentando eliminar profesor en índice ${index}:`, profesoresDB[index]);
    
    if (!confirm(`¿Estás seguro de eliminar a "${profesoresDB[index]}"?`)) {
        return;
    }
    
    try {
        // Guardar el nombre para el mensaje
        const nombreEliminado = profesoresDB[index];
        
        // Eliminar del array local
        profesoresDB.splice(index, 1);
        console.log('✅ Eliminado del array local');
        
        // Guardar en PocketBase
        console.log('📤 Guardando cambios en PocketBase...');
        const guardado = await guardarProfesoresGlobales();
        
        if (guardado) {
            console.log('✅ Cambios guardados en PocketBase');
            
            // Actualizar localStorage
            localStorage.setItem('profesoresDB', JSON.stringify(profesoresDB));
            
            // Recargar la lista en el modal
            cargarProfesoresParaGestion();
            
            mostrarNotificacion(`✅ Profesor "${nombreEliminado}" eliminado correctamente`, 'success');
        } else {
            console.error('❌ Error guardando en PocketBase');
            mostrarNotificacion('⚠️ Error al guardar en PocketBase', 'warning');
            
            // Recargar la lista para mantener consistencia
            cargarProfesoresParaGestion();
        }
        
    } catch (error) {
        console.error('❌ Error en eliminarProfesor:', error);
        mostrarNotificacion('❌ Error al eliminar', 'error');
        
        // Recargar la lista
        cargarProfesoresParaGestion();
    }
}

async function guardarCambiosProfesores() {
    console.log('💾 INICIANDO GUARDADO DE PROFESORES');
    
    try {
        const modificados = [];
        const nuevos = [];
        
        // Recopilar modificaciones de existentes
        document.querySelectorAll('.profesor-item-gestion:not(.nuevo) .profesor-nombre-input').forEach(input => {
            const index = parseInt(input.dataset.index);
            const nuevoNombre = input.value.trim();
            
            if (nuevoNombre) {
                modificados.push({ index, nuevoNombre });
            }
        });
        
        // Aplicar modificaciones
        modificados.forEach(item => {
            if (item.index >= 0 && item.index < profesoresDB.length) {
                console.log(`✏️ Modificando índice ${item.index}: ${profesoresDB[item.index]} → ${item.nuevoNombre}`);
                profesoresDB[item.index] = item.nuevoNombre;
            }
        });
        
        // Recopilar nuevos profesores
        document.querySelectorAll('.profesor-item-gestion.nuevo .profesor-nombre-input').forEach(input => {
            const nombre = input.value.trim();
            if (nombre) {
                nuevos.push(nombre);
                console.log(`➕ Nuevo profesor: ${nombre}`);
            }
        });
        
        // Agregar nuevos profesores
        if (nuevos.length > 0) {
            profesoresDB.push(...nuevos);
        }
        
        // Ordenar alfabéticamente
        profesoresDB.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
        
        console.log('📋 Total de profesores después de cambios:', profesoresDB.length);
        
        // Guardar en PocketBase
        console.log('📤 Guardando en PocketBase...');
        const guardado = await guardarProfesoresGlobales();
        
        if (guardado) {
            console.log('✅ Profesores guardados en PocketBase');
            
            // Actualizar localStorage
            localStorage.setItem('profesoresDB', JSON.stringify(profesoresDB));
            
            mostrarNotificacion(`✅ ${modificados.length + nuevos.length} cambio(s) guardados correctamente`, 'success');
            
            // Cerrar modal después de 1.5 segundos
            setTimeout(() => {
                cerrarGestionProfesores();
            }, 1500);
            
        } else {
            console.error('❌ Error guardando en PocketBase');
            mostrarNotificacion('⚠️ Error al guardar en PocketBase', 'warning');
        }
        
    } catch (error) {
        console.error('❌ Error en guardarCambiosProfesores:', error);
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
}

// ===== FUNCIONES PARA EL MODAL DE CONFIRMACIÓN =====
function mostrarModalConfirmacion() {
    // Validar que todos los datos estén completos
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
    
    if (horariosSeleccionados.length === 0) {
        mostrarNotificacion('Selecciona al menos un horario disponible', 'warning');
        return;
    }
    
    // Actualizar el contenido del modal
    actualizarModalResumen();
    
    // Mostrar el modal
    document.getElementById('confirmacionModal').style.display = 'flex';
}

function cerrarModalConfirmacion() {
    document.getElementById('confirmacionModal').style.display = 'none';
}

function actualizarModalResumen() {
    // Resumen del profesor
    const resumenProfesor = document.getElementById('modalResumenProfesor');
    let htmlProfesor = '<ul>';
    
    htmlProfesor += `<li><i class="fas fa-user"></i> <strong>Nombre:</strong> ${datosProfesor.nombre || 'No especificado'}</li>`;
    htmlProfesor += `<li><i class="fas fa-envelope"></i> <strong>Correo:</strong> ${datosProfesor.correo || 'No especificado'}</li>`;
    htmlProfesor += `<li><i class="fas fa-id-card"></i> <strong>Clave SIE:</strong> ${datosProfesor.codigo || 'No especificada'}</li>`;
    
    if (datosProfesor.telefono) {
        htmlProfesor += `<li><i class="fas fa-phone"></i> <strong>Teléfono:</strong> ${datosProfesor.telefono}</li>`;
    }
    
    if (datosProfesor.tipoPlaza) {
        let textoPlaza = '';
        switch(datosProfesor.tipoPlaza) {
            case 'tiempo_completo': textoPlaza = 'Tiempo completo'; break;
            case 'tres_cuartos': textoPlaza = '3/4 de tiempo'; break;
            case 'medio_tiempo': textoPlaza = 'Medio tiempo'; break;
            case 'por_horas': textoPlaza = 'Por horas-base'; break;
            case 'honorarios': textoPlaza = 'Honorarios'; break;
            case 'nuevo_ingreso': textoPlaza = 'Nuevo ingreso'; break;
        }
        htmlProfesor += `<li><i class="fas fa-briefcase"></i> <strong>Tipo de plaza:</strong> ${textoPlaza}`;
        
        if (datosProfesor.tipoPlaza === 'por_horas' && datosProfesor.horasPlaza) {
            htmlProfesor += ` (${datosProfesor.horasPlaza} horas/sem)`;
        }
        htmlProfesor += '</li>';
    }
    
    htmlProfesor += '</ul>';
    resumenProfesor.innerHTML = htmlProfesor;
    
    // Resumen de materias
    const resumenMaterias = document.getElementById('modalResumenMaterias');
    if (materiasSeleccionadas.length > 0) {
        let htmlMaterias = '<ul>';
        materiasSeleccionadas.forEach(materia => {
            const nivelTexto = materia.nivel === 'alta' ? 'Alta' : (materia.nivel === 'media' ? 'Media' : 'Baja');
            const nivelColor = materia.nivel === 'alta' ? '#e74c3c' : (materia.nivel === 'media' ? '#f39c12' : '#7f8c8d');
            
            const carrerasTexto = materia.carreras.map(c => `${c.carrera} (Sem ${c.semestre})`).join(', ');
            htmlMaterias += `<li>
                <i class="fas fa-book" style="color: ${nivelColor};"></i>
                <strong>${materia.nombre}</strong> - <span style="color: ${nivelColor};">${nivelTexto}</span>
                <br><small style="margin-left: 26px; color: #7f8c8d;">${carrerasTexto}</small>
            </li>`;
        });
        htmlMaterias += '</ul>';
        resumenMaterias.innerHTML = htmlMaterias;
    } else {
        resumenMaterias.innerHTML = '<p>No has seleccionado materias</p>';
    }
    
    // Resumen de horarios
    const resumenHorarios = document.getElementById('modalResumenHorarios');
    if (horariosSeleccionados.length > 0) {
        let htmlHorarios = '<ul>';
        const diasOrdenados = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
        
        diasOrdenados.forEach(dia => {
            const horariosDia = horariosSeleccionados
                .filter(h => h.dia === dia)
                .sort((a, b) => parseInt(a.hora) - parseInt(b.hora));
            
            if (horariosDia.length > 0) {
                htmlHorarios += `<li style="margin-top: 5px;"><i class="fas fa-calendar-day"></i> <strong>${dia}:</strong></li>`;
                horariosDia.forEach(horario => {
                    htmlHorarios += `<li style="margin-left: 25px;"><i class="far fa-clock"></i> ${horario.texto}</li>`;
                });
            }
        });
        htmlHorarios += '</ul>';
        resumenHorarios.innerHTML = htmlHorarios;
    } else {
        resumenHorarios.innerHTML = '<p>No has seleccionado horarios</p>';
    }
}

// ===== ENVÍO DE ENCUESTA (ahora se llama desde el modal) =====
async function confirmarEnvioEncuesta() {
    try {
        mostrarNotificacion('Enviando encuesta...', 'info');
        
        const encuesta = await pb.collection('encuestas').create({
            profesor: datosProfesor,
            materias: materiasSeleccionadas,
            horarios: horariosSeleccionados,
            periodo: periodoActivo,
            es_borrador: false,
            fecha: new Date().toISOString()
        });
        
        console.log('✅ Encuesta guardada en PocketBase:', encuesta);
        
        mostrarNotificacion('✅ ¡Encuesta enviada exitosamente!', 'success', 6000);
        
        // Cerrar el modal
        cerrarModalConfirmacion();
        
        // Reset del formulario
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
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => {
            mostrarNotificacion('✨ Formulario listo para una nueva encuesta', 'info', 4000);
        }, 1000);
        
    } catch (error) {
        console.error('❌ Error al guardar en PocketBase:', error);
        mostrarNotificacion('Error al guardar la encuesta: ' + (error.message || 'Error desconocido'), 'error');
    }
}

// ===== CONFIGURAR BOTONES DEL MODAL =====
function configurarModal() {
    const btnEnviar = document.getElementById('submitBtn');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', mostrarModalConfirmacion);
    }
    
    const btnCerrar = document.getElementById('cerrarModalBtn');
    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarModalConfirmacion);
    }
    
    const btnCancelar = document.getElementById('cancelarEnvioBtn');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', cerrarModalConfirmacion);
    }
    
    const btnConfirmar = document.getElementById('confirmarEnvioBtn');
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', confirmarEnvioEncuesta);
    }
    
    // Cerrar modal si se hace clic fuera del contenido
    const modalOverlay = document.getElementById('confirmacionModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                cerrarModalConfirmacion();
            }
        });
    }
}

// ===== CONFIGURACIÓN DE BOTONES =====
function configurarBotones() {
    // Eliminado el botón de borrador, solo queda enviar que ahora abre el modal
    // La configuración del botón ahora está en configurarModal()
}

// ===== RESUMEN (funciones legacy que ya no se usan pero mantenemos por si acaso) =====
function actualizarResumenProfesor() {
    // Esta función ya no se usa porque eliminamos el panel de resumen
    // Pero la mantenemos por si acaso
}

function actualizarResumenMaterias() {
    // Esta función ya no se usa
}

function actualizarResumenHorarios() {
    // Esta función ya no se usa
}

// ===== INICIALIZACIÓN =====
async function inicializarAplicacion() {
    console.log('🚀 Iniciando Sistema de Encuesta para Maestros...');
    
    // Cargar período desde PocketBase
    periodoActivo = await obtenerPeriodoGlobal();
    
    // Cargar materias y profesores desde PocketBase
    try {
        await cargarMateriasGlobales();
        await cargarProfesoresGlobales();
        console.log('✅ Datos globales cargados de PocketBase');
    } catch (error) {
        console.warn('⚠️ Usando datos locales:', error);
    }
    
    // Establecer qué conjunto de datos usar según el período
    if (periodoActivo === 'ene-jun') {
        carrerasData = carrerasDataENEJUNTrabajo;
    } else {
        carrerasData = carrerasDataAGODICTrabajo;
    }
    
    todasLasMaterias = generarListaGlobalMaterias();
    
    console.log(`📚 Total de materias únicas: ${todasLasMaterias.length}`);
    console.log(`👤 Total de profesores en base: ${profesoresDB.length}`);
    console.log(`👑 Acceso admin: ?admin=admin2026 en la URL`);
    console.log(`📅 Período activo: ${periodoActivo}`);
    console.log(`🗄️ Base de datos: PocketBase en ${POCKETBASE_URL}`);
    
    try {
        inicializarDatosProfesor();
        inicializarBuscadorProfesores();
        inicializarSistemaMaterias();
        inicializarHorarios();
        inicializarModoAdmin();
        configurarBotones();
        configurarModal();
        
        // Cargar opciones de semestre según el período actual
        actualizarOpcionesSemestre();
        
        setTimeout(() => {
            actualizarInterfazPeriodo();
            mostrarNotificacion(`🎓 Período actual: ${periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC'}`, 'info', 4000);
        }, 500);
        
        console.log('✅ Sistema listo');
    } catch (error) {
        console.error('❌ Error de inicialización:', error);
        mostrarNotificacion('Error al iniciar la aplicación', 'error');
    }
}

// ===== EJECUCIÓN =====
document.addEventListener('DOMContentLoaded', inicializarAplicacion);