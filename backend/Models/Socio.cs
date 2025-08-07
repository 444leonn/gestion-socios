using System;

namespace backend.Models;

public class Socio
{
    public int Id { get; set; }

    public string Nombre { get; set; } = string.Empty;

    public string Apellido { get; set; } = string.Empty;

    public DateOnly FechaNacimiento { get; set; }

    public int Dni { get; set; }

    public string? Password { get; set; }

    public int? IdTitular { get; set; }

    public int IdTipo { get; set; }
    public TipoSocio? TipoSocio { get; set; }

    public string Telefono { get; set; } = string.Empty;

    public string Mail { get; set; } = string.Empty;

    public string? Calle { get; set; }

    public int Altura { get; set; }

    public int Cp { get; set; }

    public string? Localidad { get; set; }

    public ICollection<DeporteSocio> DeportesSocios { get; set; } = new List<DeporteSocio>();
}
