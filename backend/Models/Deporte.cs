using System;

namespace backend.Models;

public class Deporte
{
    public int Id { get; set; }

    public string Nombre { get; set; } = string.Empty;

    public ICollection<DeporteSocio> DeportesSocios { get; set; } = new List<DeporteSocio>();
}
