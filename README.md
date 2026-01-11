# Matriz Insumo-Producto 2023 (Ecuador)

![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

Una visualización interactiva y dinámica de la **Matriz Insumo-Producto (MIP) 2023** del Ecuador, construida con datos oficiales del **Banco Central del Ecuador**.

Esta herramienta permite explorar las complejas interconexiones económicas entre los distintos sectores productivos del país, facilitando la identificación de clústeres y flujos monetarios clave.

---
## 🚀 Demo en Vivo

Explora la visualización directamente en tu navegador:
🔗 **[https://jp1309.github.io/MIP2023-BCE/](https://jp1309.github.io/MIP2023-BCE/)**

---

## 📊 Características Principales

*   **Visualización de Redes**: Uso de grafos dirigidos para mostrar relaciones insumo-producto.
*   **Codificación Visual**:
    *   **Tamaño del Nodo**: Proporcional a los insumos **recibidos** (Demanda).
    *   **Color del Nodo**: Indica la intensidad de los insumos **enviados** (Oferta).
*   **Filtrado Inteligente**: Para garantizar la claridad, se visualizan únicamente los flujos económicos superiores a **$200 millones USD**.
*   **Interactividad Avanzada**:
    *   Física de nodos ajustable en tiempo real (gravedad, repulsión).
    *   Zoom y navegación fluida.
    *   Detalles *on-hover* (tooltips) para cada sector.

## 🛠️ Tecnologías

Este proyecto ha sido desarrollado utilizando tecnologías web modernas y librerías de visualización de datos:

*   ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
*   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
*   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
*   **[Vis.js Network](https://visjs.github.io/vis-network/)**: Motor de renderizado de grafos.
*   **[Bootstrap 5](https://getbootstrap.com/)**: Framework para diseño responsivo y componentes UI.

## 📁 Estructura del Proyecto

```bash
MIP2023-BCE/
├── css/
│   └── style.css       # Estilos personalizados y ajustes de visualización
├── js/
│   └── script.js       # Lógica de la red, configuración de nodos y datos
├── index.html          # Interfaz principal
└── README.md           # Documentación del proyecto
```

## 💻 Instalación y Uso Local

Para ejecutar este proyecto en tu máquina local:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/jp1309/MIP2023-BCE.git
    ```
2.  **Abrir el proyecto**:
    Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador web de preferencia (Chrome, Firefox, Edge, etc.).

    *Opcional: Para una mejor experiencia, utiliza una extensión como "Live Server" en VS Code.*

## 📝 Origen de los Datos

*   **Fuente**: Cuentas Nacionales y Matriz Insumo-Producto (MIP).
*   **Entidad**: Banco Central del Ecuador (BCE).
*   **Periodo**: 2023.
*   *Nota: El sector "Comercio al por mayor y por menor" ha sido excluido deliberadamente para resaltar las interacciones entre sectores productivos directos.*

---
Desarrollado con ❤️ para el análisis económico de Ecuador.
