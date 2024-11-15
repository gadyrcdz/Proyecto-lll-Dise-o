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
        Contrasena NVARCHAR(256) NOT NULL,  -- Se recomienda almacenar contraseñas de forma segura (ej. con hash)
        FechaRegistro DATETIME DEFAULT GETDATE()
    );
END
GO
