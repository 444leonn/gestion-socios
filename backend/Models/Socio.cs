using System;

namespace backend.Models;

public class Socio
{
    public int Id { get; set; }

    public string Nombre { get; set; } = string.Empty;

    public string Apellido { get; set; } = string.Empty;

    public DateOnly FechaNacimiento { get; set; }

    public DateTime? FechaAlta { get; set; } = DateTime.Now;

    public int Dni { get; set; }

    public string? Password { get; set; }

    public Socio? Titular { get; set; }

    public required TipoSocio TipoSocio { get; set; }

    public string Telefono { get; set; } = string.Empty;

    public string Mail { get; set; } = string.Empty;

    public string? Calle { get; set; }

    public int? Altura { get; set; }

    public int? Cp { get; set; }

    public string? Localidad { get; set; }

    public ICollection<Socio> Adherentes { get; set; } = new List<Socio>();
    public ICollection<DeporteSocio> DeportesSocios { get; set; } = new List<DeporteSocio>();
}
