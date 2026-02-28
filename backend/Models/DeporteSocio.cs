using System;

namespace backend.Models;

public class DeporteSocio
{
    public int Id { get; set; }

    public required Deporte Deporte { get; set; }

    public required Socio Socio { get; set; }
}
