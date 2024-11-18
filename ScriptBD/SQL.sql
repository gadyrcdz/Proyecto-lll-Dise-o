-- Crear la base de datos si no existe
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'RegistroVehiculosDB')
BEGIN
    CREATE DATABASE RegistroVehiculosDB;
END
GO

-- Usar la base de datos
USE RegistroVehiculosDB;
GO

-- Crear la tabla Usuarios si no existe
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Usuarios' AND xtype='U')
BEGIN
    CREATE TABLE Usuarios (
        UsuarioID INT IDENTITY(1,1) PRIMARY KEY,
        TipoIdentificacion NVARCHAR(50) NOT NULL,
        NumeroIdentificacion NVARCHAR(50) UNIQUE NOT NULL,
        Nombre NVARCHAR(100) NOT NULL,
        Apellido1 NVARCHAR(100) NOT NULL,
        Apellido2 NVARCHAR(100) NOT NULL,
        Nacionalidad NVARCHAR(50) NOT NULL,
        FechaNacimiento DATE NOT NULL,
        CorreoElectronico NVARCHAR(100) UNIQUE NOT NULL,
        Telefono NVARCHAR(20) NOT NULL,
        Provincia NVARCHAR(100) NOT NULL,
        Canton NVARCHAR(100) NOT NULL,
        Distrito NVARCHAR(100) NOT NULL,
        Contrasena NVARCHAR(256) NOT NULL,  -- Se recomienda almacenar contrase�as de forma segura (ej. con hash)
        FechaRegistro DATETIME DEFAULT GETDATE()
    );
END
GO

--InsertarNuevoUsuario===================================================================================
IF OBJECT_ID('InsertarNuevoUsuario', 'P') IS NOT NULL
BEGIN
    DROP PROCEDURE InsertarNuevoUsuario;
END;
GO
CREATE PROCEDURE InsertarNuevoUsuario
    @TipoIdentificacion NVARCHAR(50),
    @NumeroIdentificacion NVARCHAR(50),
    @Nombre NVARCHAR(100),
    @Apellido1 NVARCHAR(100),
    @Apellido2 NVARCHAR(100),
    @Nacionalidad NVARCHAR(50),
    @FechaNacimiento DATE,
    @CorreoElectronico NVARCHAR(100),
    @Telefono NVARCHAR(20),
    @Provincia NVARCHAR(100),
    @Canton NVARCHAR(100),
    @Distrito NVARCHAR(100),
    @Contrasena NVARCHAR(256)
AS
BEGIN
    INSERT INTO Usuarios 
    (TipoIdentificacion, NumeroIdentificacion, Nombre, Apellido1, Apellido2, Nacionalidad, 
     FechaNacimiento, CorreoElectronico, Telefono, Provincia, Canton, Distrito, Contrasena)
    VALUES 
    (@TipoIdentificacion, @NumeroIdentificacion, @Nombre, @Apellido1, @Apellido2, @Nacionalidad, 
     @FechaNacimiento, @CorreoElectronico, @Telefono, @Provincia, @Canton, @Distrito, @Contrasena);
END

CREATE SYNONYM intoUs FOR dbo.InsertarNuevoUsuario;
----------------------------------------------------------------
------------------------------------------------------------
-------------------------------------------------------------
IF OBJECT_ID('VerificarUsuarioExistente', 'P') IS NOT NULL
BEGIN
    DROP PROCEDURE VerificarUsuarioExistente;
END;
GO
CREATE PROCEDURE VerificarUsuarioExistente
(
    @CorreoElectronico NVARCHAR(100),
    @Cedula NVARCHAR(50)
)
AS
BEGIN
    -- Verificar si el correo electrónico ya está registrado
    IF EXISTS (SELECT 1 FROM dbo.Usuarios WHERE correoElectronico = @CorreoElectronico)
    BEGIN
        -- El correo electrónico ya está registrado
        RAISERROR('El correo electrónico ya está registrado', 16, 1);
        RETURN;
    END

    -- Verificar si la cédula ya está registrada
    IF EXISTS (SELECT 1 FROM dbo.Usuarios WHERE numeroIdentificacion = @Cedula)
    BEGIN
        -- La cédula ya está registrada
        RAISERROR('La cédula ya está registrada', 16, 1);
        RETURN;
    END

END;

CREATE SYNONYM verUS FOR dbo.VerificarUsuarioExistente;





EXEC intoUs
    @tipoIdentificacion = 'DNI',
    @numeroIdentificacion = '1234567810',
    @nombre = 'Juan',
    @apellido1 = 'Pérez',
    @apellido2 = 'Gómez',
    @nacionalidad = 'Costa Rica',
    @fechaNacimiento = '1990-01-01',
    @correoElectronico = 'juan.perez@example.com',
    @telefono = '12345678',
    @provincia = 'San José',
    @canton = 'Central',
    @distrito = 'Mata Redonda',
    @contrasena = 'secreta123'


EXEC intoUs 'DNI', '12345678sadas91', 'Juan', 'Pérez', 'Gómez', 'Costa Rica', '1990-01-01', 'gadyrasdasd.perez@example.com', '12345678', 'San José', 'Central', 'Mata Redonda', 'secreta123';


select * from Usuarios;