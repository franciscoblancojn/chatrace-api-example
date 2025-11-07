# Configuracion de Chatrace

1. **Whatsapp**, Para poder enviar mensajes desde Chatrace debes [conectar el canal de whatsapp](https://panel.lucidbot.co//en/settings?acc=1115278) ![image.png](/.attachments/image-1e1da1bc-f3a6-4ce8-b476-15502d20f0e4.png)

2. **Sincronizar plantillas de meta**, en casos necesario debes [sincronizar las plantillas](https://panel.lucidbot.co//en/whatsapp?acc=1115278)  ![image.png](/.attachments/image-75ca00db-d08e-4477-861e-45bae80e89d3.png)

3. **Configurar Campos personalizados**, debes [crear todos los campos](https://panel.lucidbot.co//en/user-custom-fields?acc=1115278) necesarios que requieran tus plantillas de meta, y agregar un campo adicional llamado **sendTemplate** ![image.png](/.attachments/image-b76f366d-240c-44d9-a730-979155916b5f.png)

4. **Crear Flujo**, debes crear un [flujo](https://panel.lucidbot.co//en/flows?acc=1115278) que crear un selector de la plantilla a enviar por medio del valor  **sendTemplate** ![image.png](/.attachments/image-c853faea-f9f8-48b0-a3ea-60cb284123c0.png) ![image.png](/.attachments/image-c957d66e-67b1-4e1b-9427-c6237661fa14.png)

5. **Crear Disparador**, debes que crear un [disparador](https://panel.lucidbot.co//en/rules?acc=1115278) que ejecute el flujo creado en el paso 4 cuando el campo sendTemplate cambia ![image.png](/.attachments/image-effd411e-4155-4815-8b64-5fdba8fb860c.png) ![image.png](/.attachments/image-e6464975-a002-4447-afe9-0092dca03b0b.png)

6. **Configurar token**, se debe generar un token de acceso api en las configuraciones ![image.png](/.attachments/image-39cbe8a8-b4d0-4649-9b29-7a3d81c83126.png)

# Creación de Api

1. Se debe crear un Api para enviar los mensajes en Chatrace, para este ejemplo se creara con nodejs y express, puedes ver el ejemplo en [https://github.com/franciscoblancojn/chatrace-api-example](https://github.com/franciscoblancojn/chatrace-api-example), usaremos la librería [chatrace](http://npmjs.com/package/chatrace)

2. **Estructura del api**, para mantener un buen sistema de gestión de peticiones es necesario una estructura ordenada y simple, para este ejemplo usaremos la siguiente estructura: ![image.png](/.attachments/image-d78b49cb-ebb4-48a1-857b-94bf9fa81343.png)

- src
  - index.ts (cargador por app)
  - chat
    - config.ts (configuración para cargar ChatRace)
    - index.ts (instancia tu clase de ChatRace)
  - cola
    - index.ts (sistema para configurar las peticiones en formato cola con limite de **100 peticiones por minuto**, esto es muy importante puesto que ChatRace tiene una **limitación de 100 peticiones por minuto**)

3. **Configura env**, crea un archivo **.env** basándote en **.env.example** y remplaza las variables con los datos de tu chatrace

4. **Inicia el api**, puedes correr el api usando el comando:
```
npm run start
```

5. **Usa Postman**, ya puedes hacer peticiones para probar el envió de mensaje o crear usuarios, a través de postman ![image.png](/.attachments/image-923a58e5-77f3-4d4a-a05f-e288c988f458.png)
  
# Despliegue del api
Para despegar el api puede hacerlo en tu propio servidor usando herramientas como pm2, docker, etc; o usar servicios como vercel
