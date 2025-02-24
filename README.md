# Bamboo Closet - E-commerce en React

¡Bienvenido/a al repositorio de **Bamboo Closet**! Este proyecto es un E-commerce construido con **React** y **Vite**, inspirado en productos ecológicos y sostenibles hechos de bambú.

## Características Principales

- **Listado de Productos**: Visualiza todos los ítems disponibles en la tienda.
- **Filtrado por Categoría**: Navega a través de `/category/:categoryId` para ver productos específicos (ropa, decoración, electrónica, etc.).
- **Detalle de Producto**: Haz clic en "Ver Detalle" para ver información detallada, imágenes y un selector de cantidad.
- **Carrito de Compras**: 
  - Usa **Context API** para manejar el estado global del carrito.
  - Permite agregar, eliminar y vaciar productos.
  - Muestra el total de ítems y el precio total.
- **Checkout**:
  - Formulario para ingresar datos de comprador (nombre, email, teléfono).
  - Resumen de la compra (productos, cantidades, total).
  - Generación de un ID de orden simulado (podrías integrar Firebase si deseas persistencia real).
- **Navegación con React Router DOM**:
  - Se implementa `react-router-dom` para la navegación entre páginas.
  - Manejo de rutas dinámicas (`/category/:categoryId`, `/item/:id`).
  - Redirección en caso de ruta no encontrada (`404`).

## Tecnologías Utilizadas

- **React 18** (con Vite)
- **React Router DOM** (v6) para la navegación.
- **Context API** para el manejo global del carrito.
- **CSS** modular para cada componente (NavBar, Footer, etc.).
- **HTML5, ES6+**.

## Instalación y Uso

Sigue estos pasos para **descargar** y **ejecutar** el proyecto localmente:

1. **Clona** este repositorio o descarga el ZIP:
   ```bash
   git clone https://github.com/Marisol14/e-commerce-React-Proyecto-final.git
   ```
2. **Ingresa** a la carpeta del proyecto:
   ```bash
   cd e-commerce-React-Proyecto-final
   ```
3. **Instala Vite y las dependencias necesarias**:
   ```bash
   npm install
   ```
   o
   ```bash
   yarn
   ```
4. **Instala React Router DOM**:
   ```bash
   npm install react-router-dom
   ```
   o
   ```bash
   yarn add react-router-dom
   ```
5. **Verifica que tengas Vite instalado globalmente (opcional, si lo necesitas)**:
   ```bash
   npm install -g vite
   ```
6. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Esto abrirá (o te indicará) la URL local, generalmente <http://localhost:5173>.

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera una versión de producción en la carpeta `dist`.
- `npm run preview`: Previsualiza la versión de producción localmente.

## Estructura de Carpetas (Resumen)

```plaintext
e-commerce-React-Proyecto-final/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── NavBar/
│   │   ├── Footer/
│   │   ├── CartWidget/
│   │   ├── ItemListContainer/
│   │   ├── ItemDetailContainer/
│   │   ├── ...
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── routes/
│   │   ├── Router.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## Próximos Pasos / Mejoras

- **Integrar Firebase** para persistir los productos y las órdenes de compra. (Lo que aprendí en Backend 1)
- **Validar** los campos del formulario de Checkout (email, teléfono, etc.).
- **Estilos Responsivos**: Asegurar una experiencia óptima en dispositivos móviles.
- **Testing**: Añadir pruebas unitarias o de integración.

## Autor/a

- **Marisol14** (GitHub: [Marisol14](https://github.com/Marisol14))  
  *Este proyecto fue desarrollado como parte de un curso de React.*

## Licencia

¡Gracias por visitar **Bamboo Closet**! Cualquier comentario o sugerencia es bienvenido. 

