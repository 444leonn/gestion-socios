using System;
using backend.Models;

namespace backend.Dto;

public class SocioDto
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Apellido { get; set; } = string.Empty;
    public DateOnly FechaNacimiento { get; set; }
    public DateTime? FechaAlta { get; set; }
    public int Dni { get; set; }
    public string Telefono { get; set; } = string.Empty;
    public string Mail { get; set; } = string.Empty;
    public string? Calle { get; set; }
    public int? Altura { get; set; }
    public int? Cp { get; set; }
    public string? Localidad { get; set; }
    
    public int? TitularId { get; set; }
    public string? TitularNombre { get; set; }
    
    public int TipoSocioId { get; set; }
    public string TipoSocioNombre { get; set; } = string.Empty;
    
    public List<int> AdherentesIds { get; set; } = new List<int>();
}