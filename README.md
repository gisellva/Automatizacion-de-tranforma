### Pruebas Automatizadas para Transforma - Fundación Capital
Este repositorio contiene un conjunto de pruebas automatizadas para la página Transforma de Fundación Capital, desarrollado con Cypress. Estas pruebas están diseñadas para verificar las funcionalidades clave de la plataforma y asegurar la estabilidad de la misma en cada actualización.

Tabla de Contenidos
Pre-requisitos
Instalación
Estructura del Proyecto
Ejecutar las Pruebas
Comandos de Cypress
Reportes
Contribuir
Pre-requisitos
Para ejecutar este proyecto necesitas tener instalado:

Node.js (versión 12 o superior)
Cypress (versión 10 o superior)
Un navegador compatible (Chrome, Firefox, Edge o Electron)
###Instalación

Clona el repositorio:
git clone https://github.com/tu-usuario/nombre-repositorio.git

Navega al directorio del proyecto:

bash
Copiar código
cd nombre-repositorio
Instala las dependencias necesarias:

bash
Copiar código
npm install
Estructura del Proyecto
La estructura de archivos y carpetas es la siguiente:


Ejecutar las Pruebas
Para ejecutar las pruebas en modo interactivo con la interfaz de Cypress:

bash
Copiar código
npx cypress open
Para ejecutar las pruebas en modo headless (sin interfaz gráfica):

bash
Copiar código
npx cypress run
Comandos de Cypress
Abrir Cypress: npx cypress open
Ejecutar en modo headless: npx cypress run
Ejecutar pruebas específicas:
bash
Copiar código
npx cypress run --spec "cypress/integration/nombre-de-la-prueba.spec.js"
Reportes
Este repositorio está configurado para generar reportes de prueba automáticamente usando Mocha Reporter al finalizar cada ejecución. Los reportes se guardan en la carpeta reports y pueden visualizarse en diferentes formatos, como .html o .json.

Contribuir
Si deseas contribuir a este proyecto:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -am 'Agrega nueva funcionalidad').
Sube tu rama (git push origin nueva-funcionalidad).
Abre un Pull Request.
