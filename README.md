# Programacion con tecnologias web - Parcial1

## Descripción

Este es el proyecto del parcial 1 para la materia de Programación Web. La aplicación es una plataforma basada en React que implementa autenticación, navegación entre pantallas y soporte para internacionalización (i18n) con los idiomas inglés y español.

## Instalación y Ejecución

### 1. Clonar el repositorio 

```sh
git clone https://github.com/pontoandres/ProgWebParcial1.git
cd parcial1
```

### 2. Instalar dependencias 

```sh
npm install
```

### 3. Ejecutar el proyecto 

```sh
npm start
```

Esto levanta el servidor de desarrollo en http://localhost:3000.

---

## Funcionalidades Implementadas 

### 1. Autenticación 

- La aplicación inicia en una página de Login.
- Se valida que la contraseña tenga entre 5 y 8 caracteres.
- Al hacer login, se redirige a la pantalla principal (/home).

### 2. Navegación 

- Se usa react-router-dom para manejar las rutas.
- Desde la pantalla de inicio (/home), se puede acceder a las pantallas de MENU, STORES y CART.

### 3. Internacionalización 

- Se usa la librería react-intl para manejar i18n.
- Se detecta el idioma del navegador automáticamente.
  - Esto se hace en index.js con `const language = navigator.language.split(/[-_]/)[0];`
- Los textos de la app cambian entre inglés y español usando `FormattedMessage` y archivos json que están en `src/locales/`.
- Se pueden probar ambos idiomas modificando el idioma del navegador o forzándolo en `index.js`.

---

## Decisiones de Desarrollo 

1. **Uso de react-intl para i18n**
   - Se decidió usar react-intl en lugar de otras opciones como `i18next` porque es más ligero y se integra bien con React.
   - Los textos están en archivos `locales/en.json` y `locales/es.json`.

2. **Manejo de imágenes y assets**
   - Se almacenaron en `public/` para que se pudieran acceder con rutas relativas (`/icons/cart.png`).
   - Inicialmente hubo problemas con la carga de imágenes dentro de `src/`, por lo que se optó por la solución actual.

3. **Problemas con react-intl en los inputs**
   - No se podía usar `<FormattedMessage />` directamente en `placeholder`.
   - Se resolvió con `intl.formatMessage({id: "login.username"})` y `useIntl()`.

4. **Problema con la instalación de react-intl**
   - Hubo un conflicto de dependencias con TypeScript, se solucionó usando:
   
     ```sh
     npm install react-intl --legacy-peer-deps
     ```

5. **Uso de react-router-dom para navegación**
   - Se manejaron rutas dinámicas (`/detalle/:id`).
   - Se usó `useNavigate()` para cambiar entre páginas.

---

## Componentes de la Aplicación 

- **Login.js** → Pantalla de autenticación.
- **Home.js** → Pantalla principal con botones de navegación.
- **Detalle.js** → Muestra detalles de Menu, STORES o CART (pendiente de implementación).
- **App.js** → Configura las rutas con react-router-dom.
- **index.js** → Inicia la app y configura react-intl.

---

## Tecnologías Usadas 

- **React** con create-react-app.
- **React Router** para la navegación.
- **React Intl** para la internacionalización.
- **Bootstrap** para el estilo.
- **Mockaroo API** (pendiente de integración en Detalle.js).

---

## Pendientes 

- Implementar `Detalle.js` con consumo de API de Mockaroo.
- Agregar estilos personalizados a la pantalla de detalles.
- Mejorar el manejo de errores en el login.

---

## Notas finales 

Este proyecto fue desarrollado como parte de un parcial de Programación Web. Se enfocó en la implementación de conceptos de React, manejo de estado, navegación y configuración de `react-intl`.
