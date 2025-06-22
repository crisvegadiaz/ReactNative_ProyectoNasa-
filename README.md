# Proyecto NASA APOD - React Native

Una aplicación móvil sencilla desarrollada con React Native que consume la API de la NASA para mostrar la "Foto Astronómica del Día" (APOD - Astronomy Picture of the Day).

## ✨ Características Principales

- **Ver la Foto del Día:** Muestra la imagen o video astronómico del día actual proporcionado por la NASA.
- **Explorar Fotos Anteriores:** Permite ver las imágenes de los últimos 5 días.
- **Ver Detalles:** Muestra el título, la fecha y una explicación detallada de cada imagen.

## 🚀 Tecnologías Utilizadas

- **React Native:** Framework para construir aplicaciones móviles nativas.
- **JavaScript:** Lenguaje de programación principal.
- **React Navigation:** Para manejar la navegación entre las pantallas.
- **Fetch API:** Para realizar las peticiones a la API de la NASA.

## 🔧 Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

**Requisitos:**
- Node.js (v16 o superior)
- npm o yarn
- Tener configurado el entorno de desarrollo para React Native. Puedes seguir la [guía oficial](https://reactnative.dev/docs/environment-setup).

**Pasos:**

1.  **Clona el repositorio:**
    *(Recuerda reemplazar `tu-usuario` con tu nombre de usuario de GitHub si lo subes)*
    ```bash
    git clone https://github.com/tu-usuario/ReactNative_ProyectoNasa-.git
    cd ReactNative_ProyectoNasa-
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    # O si prefieres usar yarn:
    # yarn install
    ```

3.  **Ejecuta la aplicación:**

    -   **Para Android:**
        ```bash
        npx react-native run-android
        ```
    -   **Para iOS:**
        ```bash
        npx react-native run-ios
        ```

## 🛰️ API Utilizada

Este proyecto utiliza la API pública de la NASA, específicamente el endpoint de APOD (Astronomy Picture of the Day). Para este proyecto se utiliza la clave `DEMO_KEY` que tiene ciertas limitaciones. Para un uso más extensivo, se recomienda obtener una clave personal en el sitio de la NASA.