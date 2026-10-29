# 🏦 Nova-Bank – Modern Banking Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/ShadCN_UI-000000?style=for-the-badge" alt="ShadCN UI" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
</p>

## 📌 Descripción del Proyecto

Interfaz web moderna, segura y responsiva para la banca digital **Nova Bank**. Proporciona una experiencia financiera fluida que permite a los usuarios gestionar sus cuentas, realizar transferencias bancarias protegidas por autenticación de dos factores (2FA), consultar balances y descargar comprobantes de transacciones.

> 🔗 **Repositorio Original:** [CristiannLimaR/Nova-Bank](https://github.com/CristiannLimaR/Nova-Bank)

---

## ✨ Funcionalidades Principales

### 👤 Portal del Cliente
- **Panel Principal:** Resumen en tiempo real de cuentas activas, saldo total y acceso rápido a operaciones.
- **Transferencias & Movimientos:** Envío de fondos entre cuentas con verificación de seguridad **2FA**.
- **Historial Financiero:** Consulta detallada de transacciones, depósitos y retiros con filtros avanzados.
- **Gestión de Contactos:** Agenda de cuentas favoritas y destinatarios frecuentes para transferencias inmediatas.
- **Generación de Comprobantes:** Descarga de reportes y recibos en PDF con `jsPDF` y `html2canvas`.

### 🛡️ Módulo de Administración
- **Gestión de Usuarios:** Panel administrativo para control, suspensión y visualización de usuarios.
- **Apertura de Cuentas y Depósitos:** Emisión de nuevos productos financieros y acreditación de montos.
- **Dashboard Estadístico:** Gráficas financieras interactivas de flujo y transacciones.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** React.js con Vite
- **Estilos:** Tailwind CSS + DaisyUI + ShadCN UI
- **Iconografía:** Lucide React + React Icons
- **Enrutamiento:** React Router DOM (v6) con rutas protegidas por roles
- **Reportes:** jsPDF + html2canvas
- **Peticiones HTTP:** Axios con interceptores de autenticación JWT

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- Node.js (v18 o superior)
- Backend en ejecución ([Nova-Bank-Backend](https://github.com/RafaelCastroRR/Nova-Bank-Backend))

### 1. Clonar el repositorio
```bash
git clone git@github.com:RafaelCastroRR/Nova-Bank.git
cd Nova-Bank
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el entorno de desarrollo
```bash
npm run dev
```

### 4. Compilar para producción
```bash
npm run build
```

---

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── assets/              # Recursos multimedia e ilustraciones
│   ├── components/          # Componentes modulares y reutilizables
│   │   ├── forms/           # Formularios de usuarios, productos y transferencias
│   │   └── ui/              # Componentes base (Button, Card, Dialog, Table, etc.)
│   ├── layouts/             # Plantillas base de navegación y dashboards
│   ├── pages/               # Vistas principales (Login, Register, Dashboard, etc.)
│   │   └── admin/           # Vistas exclusivas para administradores
│   ├── services/            # Clientes Axios y consumo de endpoints
│   └── shared/              # Hooks y utilidades compartidas
├── package.json
└── README.md
```

---

## 🔗 Backend Asociado
Este frontend consume la API RESTful de:  
👉 **[Nova-Bank-Backend](https://github.com/RafaelCastroRR/Nova-Bank-Backend)**

---

## 📄 Licencia
Proyecto desarrollado con fines académicos y de demostración técnica.
