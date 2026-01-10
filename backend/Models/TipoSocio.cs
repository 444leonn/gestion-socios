using System;

namespace backend.Models;

public class TipoSocio
{
    public int Id { get; set; }

    public string Nombre { get; set; } = string.Empty;

    public string? Genero { get; set; }

    public double Cuota { get; set; }

    public int? EdadDesde { get; set; }

    public int? EdadHasta { get; set; }

    public ICollection<Socio> Socios { get; set; } = new List<Socio>();
}
