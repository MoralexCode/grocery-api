# Grocery

![personal-brand](https://img.shields.io/badge/MORALEX-%20CODE-indigo)![test](https://img.shields.io/badge/LICENSE-%20MIT-green) ![test](https://img.shields.io/badge/TEST-%20JEST-green)

![grocery-screenshot](.github/grocery-title.png)

# Descripción

Esta aplicación es una demo de punto de ventas para una tienda (Grocery) o una empresa de ventas en general.

Puedes obtener mas informacion en mi pagina web : ![test](https://img.shields.io/badge/Working-%20On%20it-red)

![grocery-running-screenshot](.github/grocery-run.png)

# Caracteristicas

    ✓ CRUD User

    ✓ CRUD Ventas

    ✓ CRUD Producto

# Instalación y configuración:

1.-Para instalar el proyecto se debe seguir lo siguientes pasos.

```

  git clone https://github.com/MoralexCode/grocery-api.git
```

2.-Entras al proyecto con `cd grocery-api`

3.-Crea un archivo `.env` en la raiz del proyecto y agregar las siguientes variables de entorno:

```
DB_PASSWORD=s3cr3t
DB_USER=MoralexCode
DB_NAME=grocery
DB_HOST=mysql_server
DB_DIALECT=mysql
DB_PORT=3307
NODE_ENV=development
PORT=3700
HOST=localhost
JWT_KEY=MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAJGN
JWT_PUBLIC_KEY=MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAJGN/pB3qU/V6lV7l2gqZV67kbpV+ITRz5HwuLYbiRb5AgMBAAE=
JWT_PRIVATE_KEY=MIHBAgEAMA0GCSqGSIb3DQEBAQUABIGsMIGpAgEAAiEAkY3+kHepT9XqVXuXaCplXruRulX4hNHPkfC4thuJFvkCAwEAAQIgD6Rl3hqt/GFtzH/6tnwP5qMAtjjtgJfhtZY2dsA/7gECEQDss1987RWbt5cwRVUTvobBAhEAnWwkDETrEmOHv8IcRSiWOQIQY3D0Q9qiwlm99bSbCoF3wQIQVYRzqL6fvOOY0REP7nn38QIQL82SsMTJL5Eh1YymVKgj2A==

```

![test](https://img.shields.io/badge/Installar%20Docker-%20recomendado-blue)

4.-Si tienes docker instalado puedes ejecutar el siguiente comando:

```

    npm run dev:build

```

Para crear la DB e iniciar los datos, puedes ejecutar:

```
docker compose run --rm grocery node sql/index.js
```

> Nota solo es necesario construir la primera vez, posteriormente solo ejecuta `npm run dev`

5.-De lo contrario ejecuta este correrlo dentro de tu equipo local para instalar las dependencias:

```

    npm i

```

6.-Correr la aplicacion:

```
    node sql/index.js

    npm start

```

# Cómo usar:

Una vez descargado, puedes ejecutar el siguiente endpoint en un cliente rest, te recomiendo que importes las siguientes petciones curl o tambien lo puedes ejecutar en una terminal directamente si lo deseas:

Crear usuario:

```

curl --location --request POST 'http://localhost:3700/api/v1/users' \

--header 'Content-Type: application/json' \

--data-raw ' {

  "email": "oscar@moralexcode.com",

  "password": "123$5"

}'

```

Hacer login y generar un token:

```
curl --location --request POST 'http://localhost:3700/api/v1/login' \
--header 'Content-Type: application/json' \
--data-raw ' {
  "email": "oscar@moralexcode.com",
  "password": "123$5"
}'
```

Crear un producto:

```
curl --location --request POST 'http://localhost:3700/api/v1/products' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiZGF0YVVzZXIiOnsibmFtZSI6IiIsImVtYWlsIjoib3NjYXJAbW9yYWxleGNvZGUuY29tIiwidXNlcl9pZCI6NDU0LCJmaXJzdF90aW1lIjpmYWxzZX0sImlhdCI6MTY3NTA0MDI0NywiZXhwIjoxNjc3NjMyMjQ3fQ.R86rJtDHg6ZMNgfyn5-FUtw0XCX_DyH87vlY3YbbGOM' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Atun Premium 250g",
  "description": "Pescado con al valor nutrimental",
  "stock": 150,
  "proces": 35.6,
  "expiration_date": "2024-10-28 23:40:20",
  "barcode": "1234567890"
}'
```

### Respuesta

Para dudas, comentarios y soporte contactar al ![test](https://img.shields.io/badge/Ing-%20Oscar%20Morales-green) por correo : [oscarmorales.fullstackdeveloper@gmail.com](oscarmorales.fullstackdeveloper@gmail.com)

# Test

Para correr los test usando docker, pueden ejecutar el siguiente comando:

```
docker compose run --rm grocery npm run test:watch
```

> Nota: se entiende que el contenedor ya fue creado entonces deberia encontrar `grocery` y ejecutar el test sin causar colisión de puertos.

![cli-colors-alertsscreenshot](.github/grocey-docker-running.png)

De lo contrario solo ejecutar :

```

    npm run test

```

## Licencia

MIT

# Conclusión

Este es mini proyecto que fué utilizado para un mini Tsuper.

Dudas y comentarios me puedes contactar a este correo: [oscarmorales.fullstackdeveloper@gmail.com](oscarmorales.fullstackdeveloper@gmail.com)

![personal-brand-screenshot](.github/personal-brand.png)
