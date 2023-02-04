# Agregando Migraciones a un proyecto

crear archivo .sequelizerc

y agregar los siguientes datos

instalar sequelize cli de forma global

```
sudo npm install -g sequelize-cli
```

Iniciar el sequelize para iniciar un proyecto de sequelize

```
sequelize init
```

# crear un nuevo modelo

```
sequelize model:create --name Course --attributes name:string,status:string
```

sequelize model:create --name Subject --attributes name:string description:string status:string

sequelize model:create --name Teacher --attributes name:string,lastname:string,biography:string,birthdate:date,email:string,username:string,password:string,status:string

sequelize model:create --name Section --attributes teacherId:integer,subjectId:integer,courseId:integer,status:string

sequelize model:create --name Student --attributes name:string,lastname:string,birthdate:date,email:string,username:string,password:string,status:string

sequelize model:create --name Registration --attributes sectionId:integer,studentId:integer,status:string

# Hacer la migración

sequelize db:migrate --url "postgres://postgres:mysecretpassword@localhost:5432/school_dev"

```
sequelize db:migrate --url "mysql://admin:sfHkzk1rfBmrKhstDjSw@pabs.cd57e7n9tuqe.us-west-2.rds.amazonaws.com/grocery"
```

Crear semillas con datos iniciales

sequelize seed:generate --name primeros_usuarios

Ejemplo para agregar dentro del seed:

```
    return await queryInterface.insert("User", {
      name: "Oscar2",
      surName: "Moralex2",
      nickname: "MoralexCode2",
      email: "oscar@moralexcode.com2",
      password: "Moralex20232",
      confirmed: "yes",
      status: true,
      enable: true,
    });
```

Ejecutas las migraciones a la DB:

```
npx sequelize-cli db:migrate
```

\_
