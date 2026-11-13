# Agencia Sueños de Libertad

Prototipo frontend con Next.js, React y JavaScript. Incluye inicio de sesión simulado y espacios de cliente, guía y administrador. Los datos y acciones viven en el navegador para la demostración; no se guardan en una base de datos.

## Requisitos

- Node.js 20.9 o superior
- npm

## Ejecutar en VS Code

1. Abre esta carpeta en VS Code.
2. En la terminal integrada ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre http://localhost:3000.

Desde la pantalla de acceso puedes elegir el rol y entrar con el botón **Entrar a la demo**. El selector de rol queda disponible en la barra superior para cambiar rápidamente entre las vistas.

## Alcance de esta demo

- Catálogo de planes por ciudad y presupuesto.
- Solicitud simulada de un plan y vista de próximas experiencias.
- Horarios, disponibilidad y asignaciones para guías.
- Panel administrativo para revisar reservas, cambiar asignaciones y cancelar un tour.
- Chat de demostración y enlace de WhatsApp para el guía seleccionado.

No hay autenticación real, backend, persistencia, pagos ni envío real de mensajes. Los precios y horarios son ilustrativos y se reemplazarán con los datos de la agencia. La estructura usa Next.js sobre Node.js y permite añadir endpoints en `app/api/` cuando empecemos el backend.

