# Matriz Insumo-Producto 2023 (Ecuador)

Este proyecto es una visualización interactiva de la **Matriz Insumo-Producto (MIP) 2023** del Ecuador, basada en datos del **Banco Central del Ecuador**.

La visualización permite explorar las interconexiones económicas entre diferentes sectores productivos, destacando los flujos monetarios significativos.

## 🚀 Despliegue

La visualización está disponible en vivo en:
[https://jp1309.github.io/MIP2023/](https://jp1309.github.io/MIP2023/)

## 📊 Características de la Visualización

*   **Nodos (Sectores Económicos)**:
    *   **Tamaño**: Representa la cantidad de insumos *recibidos* por el sector.
    *   **Color**: Representa la cantidad de insumos *enviados* a otros sectores.
*   **Aristas (Enlaces)**:
    *   Representan flujos económicos entre sectores.
    *   Solo se muestran flujos superiores a **200 millones de dólares** para mantener la legibilidad.
*   **Interactividad**:
    *   Arrastre de nodos para reorganizar la red.
    *   Zoom y desplazamiento.
    *   Tooltips con información detallada al pasar el mouse sobre un nodo.
    *   Panel de configuración física para ajustar la gravedad y la repulsión de los nodos.

## 🛠️ Tecnologías Utilizadas

*   **[Vis.js Network](https://visjs.github.io/vis-network/)**: Para la renderización del grafo interactivo.
*   **[Bootstrap 5](https://getbootstrap.com/)**: Para el diseño responsivo y componentes de interfaz.
*   **HTML5 / CSS3 / JavaScript (ES6)**.

## 📁 Estructura del Proyecto

El proyecto ha sido reestructurado para seguir mejores prácticas:

```
MIP2023/
├── css/
│   └── style.css       # Estilos personalizados
├── js/
│   └── script.js       # Lógica de la visualización y datos
├── index.html          # Punto de entrada principal
└── README.md           # Documentación
```

## 📝 Fuente de Datos

Los datos provienen de las Cuentas Nacionales y la Matriz Insumo-Producto publicada por el **Banco Central del Ecuador (BCE)** para el año 2023.

---
*Nota: Se excluye el sector "Comercio al por mayor y por menor" para focalizar el análisis en sectores productivos primarios y secundarios.*
