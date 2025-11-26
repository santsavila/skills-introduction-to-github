# Login Básico

Un formulario de login básico implementado con HTML, CSS y JavaScript puro.

## Características

- 📝 Formulario de inicio de sesión con campos de usuario y contraseña
- ✅ Validación de campos en el cliente
- 🎨 Diseño moderno y responsivo
- 💬 Mensajes de retroalimentación al usuario
- 🔒 Validación básica de credenciales (solo demo)

## Estructura del Proyecto

```
login/
├── index.html    # Página principal del login
├── styles.css    # Estilos CSS
├── script.js     # Lógica de JavaScript
└── README.md     # Este archivo
```

## Uso

1. Abre el archivo `index.html` en tu navegador
2. Ingresa las credenciales de prueba:
   - **Usuario:** `admin`
   - **Contraseña:** `admin123`
3. Haz clic en "Ingresar"

## Credenciales de Prueba

| Usuario | Contraseña |
|---------|------------|
| admin   | admin123   |

## Validaciones

El formulario incluye las siguientes validaciones:
- Campos obligatorios
- Usuario mínimo 3 caracteres
- Contraseña mínimo 6 caracteres

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Gradientes, Animaciones)
- JavaScript (Vanilla JS)

## Notas Importantes

⚠️ **Este es un proyecto de demostración.** En un entorno de producción, nunca se deben validar credenciales en el cliente. La autenticación siempre debe realizarse en el servidor con medidas de seguridad apropiadas como:
- Encriptación de contraseñas
- Tokens de sesión
- HTTPS
- Protección contra ataques de fuerza bruta

## Licencia

MIT License
