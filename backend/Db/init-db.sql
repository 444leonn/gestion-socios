IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'db_gestion_socios')
BEGIN
    CREATE DATABASE db_gestion_socios;
END;
GO

USE db_gestion_socios;
GO

/**
Debemos almacenar los datos de cada socio registrado
*/
CREATE TABLE [Socios] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Nombre] varchar(max) NOT NULL,
    [Apellido] varchar(max) NOT NULL,
    [FechaNacimiento] date NOT NULL,
    [FechaAlt] datetime DEFAULT GETDATE(),
    [Dni] int NOT NULL UNIQUE,
    [Password] varchar(max),
    [TitularId] int,
    [TipoSocioId] int NOT NULL,
    [Telefono] varchar(max) NOT NULL,
    [Mail] varchar(max) NOT NULL,
    [Calle] varchar(max),
    [Altura] int,
    [Cp] int,
    [Localidad] varchar(max),
    PRIMARY KEY ([Id])
);


/**
Almacenamos los distintos tipos de socios que hay (por el momento es grupo familiar y simple)
*/
CREATE TABLE [TiposSocios] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Nombre] varchar(max) NOT NULL,
    [Genero] varchar(max),
    [Cuota] float NOT NULL,
    [EdadDesde] int,
    [EdadHasta] int,
    PRIMARY KEY ([Id])
);


/**
Almacenamos los deportes que hacen los distintos socios
*/
CREATE TABLE [DeportesSocios] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [DeporteId] int NOT NULL,
    [SocioId] int NOT NULL,
    PRIMARY KEY ([Id])
);


/**
Almacenamos los distintos deportes que los distintos socios pueden realizar
*/
CREATE TABLE [Deportes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Nombre] varchar(max) NOT NULL,
    PRIMARY KEY ([Id])
);

-- Foreign key constraints
ALTER TABLE [DeportesSocios]
    ADD CONSTRAINT [fk_deportes_socios_deporte]
        FOREIGN KEY ([DeporteId]) REFERENCES [Deportes]([Id]),
    CONSTRAINT [fk_deportes_socios_socio]
        FOREIGN KEY ([SocioId]) REFERENCES [Socios]([Id])
        ON DELETE CASCADE;

ALTER TABLE [Socios]
    ADD CONSTRAINT [fk_socios_titular]
        FOREIGN KEY ([TitularId]) REFERENCES [Socios]([Id]);

ALTER TABLE [Socios]
    ADD CONSTRAINT [fk_socios_tipo]
        FOREIGN KEY ([TipoSocioId]) REFERENCES [TiposSocios]([Id]);
