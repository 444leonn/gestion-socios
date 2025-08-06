IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'db_gestion_socios')
    BEGIN
        EXEC('CREATE SCHEMA [db_gestion_socios]');
    END;
/**
Debemos almacenar los datos de cada socio registrado
*/
CREATE TABLE [db_gestion_socios].[socios] (
    [id] int NOT NULL,
    [nombre] varchar(max) NOT NULL,
    [apellido] varchar(max) NOT NULL,
    [fecha_nacimiento] date NOT NULL,
    [dni] int NOT NULL UNIQUE,
    [password] varchar(max),
    [id_titular] int,
    [id_tipo] int NOT NULL,
    [telefono] varchar(max) NOT NULL,
    [mail] varchar(max) NOT NULL,
    [calle] varchar(max),
    [altura] int,
    [cp] int,
    [localidad] varchar(max),
    PRIMARY KEY ([id])
);


/**
Almacenamos los distintos tipos de socios que hay (por el momento es grupo familiar y simple)
*/
CREATE TABLE [db_gestion_socios].[tipos_socios] (
    [id] int NOT NULL,
    [nombre] varchar(max) NOT NULL,
    [genero] varchar(max),
    [cuota] float NOT NULL,
    [edad_desde] int,
    [edad_hasta] int,
    PRIMARY KEY ([id])
);


/**
Almacenamos los deportes que hacen los distintos socios
*/
CREATE TABLE [db_gestion_socios].[deportes_socios] (
    [id] int NOT NULL,
    [id_deporte] int NOT NULL,
    [id_socio] int NOT NULL,
    PRIMARY KEY ([id])
);


/**
Almacenamos los distintos deportes que los distintos socios pueden realizar
*/
CREATE TABLE [db_gestion_socios].[deportes] (
    [id] int NOT NULL,
    [nombre] varchar(max) NOT NULL,
    PRIMARY KEY ([id])
);

-- Foreign key constraints
-- Schema: db_gestion_socios
ALTER TABLE [db_gestion_socios].[deportes_socios]
    ADD CONSTRAINT [fk_deportes_socios_deporte]
        FOREIGN KEY ([id_deporte]) REFERENCES [db_gestion_socios].[deportes]([id]),
    CONSTRAINT [fk_deportes_socios_socio]
        FOREIGN KEY ([id_socio]) REFERENCES [db_gestion_socios].[socios]([id]);

ALTER TABLE [db_gestion_socios].[socios]
    ADD CONSTRAINT [fk_socios_titular]
        FOREIGN KEY ([id_titular]) REFERENCES [db_gestion_socios].[socios]([id]);

ALTER TABLE [db_gestion_socios].[socios]
    ADD CONSTRAINT [fk_socios_tipo]
        FOREIGN KEY ([id_tipo]) REFERENCES [db_gestion_socios].[tipos_socios]([id]);
