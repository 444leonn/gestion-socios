USE db_gestion_socios;
GO

-- Insertar tipos de socios
INSERT INTO TiposSocios (Nombre, Genero, Cuota, EdadDesde, EdadHasta)
VALUES 
    ('Familiar', NULL, 10000, NULL, NULL),
    ('Individual', NULL, 6000, NULL, NULL),
    ('Juvenil', NULL, 4000, 6, 17),
    ('Infantil', NULL, 2500, 0, 5);

-- Insertar algunos deportes
INSERT INTO Deportes (Nombre) VALUES
    ('Fútbol'),
    ('Natación'),
    ('Tenis'),
    ('Básquet'),
    ('Padel');

-- Insertar socios (usuarios titulares y no titulares)
INSERT INTO Socios (Nombre, Apellido, FechaNacimiento, Dni, Password, TitularId, TipoSocioId, Telefono, Mail, Calle, Altura, Cp, Localidad)
VALUES
    ('Juan', 'Pérez', '1980-05-20', 20000001, 'pw123', NULL, 1, '1122233344', 'juanperez@mail.com', 'Calle Falsa', 123, 1000, 'CABA'),
    ('Ana', 'Gómez', '1990-08-15', 20000002, 'pw456', NULL, 2, '1133344455', 'anagomez@mail.com', 'Av. Siempre Viva', 742, 1400, 'CABA'),
    ('Lucas', 'Pérez', '2010-04-10', 30000001, 'pw789', 1, 3, '1144455566', 'lucasp@mail.com', 'Calle Falsa', 123, 1000, 'CABA'),
    ('Martina', 'Pérez', '2015-12-01', 30000002, 'pw321', 1, 4, '1155566677', 'martinap@mail.com', 'Calle Falsa', 123, 1000, 'CABA'),
    ('Carlos', 'Ruiz', '1975-11-11', 20000003, 'pw654', NULL, 1, '1166677788', 'carlosruiz@mail.com', 'Lopez y Planes', 234, 1200, 'Lanus');

-- Insertar deportes de socios
INSERT INTO DeportesSocios (DeporteId, SocioId) VALUES
    (1, 1), -- Juan juega Fútbol
    (2, 1), -- Juan hace Natación
    (2, 3), -- Lucas hace Natación
    (3, 2), -- Ana juega Tenis
    (5, 2), -- Ana juega Padel
    (4, 4), -- Martina juega Básquet
    (1, 5), -- Carlos juega Fútbol
    (3, 5); -- Carlos juega Tenis