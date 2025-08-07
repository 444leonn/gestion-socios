using System;

namespace backend.Models;

public class DeporteSocio
{
    public int Id { get; set; }

    public int IdDeporte { get; set; }
    public Deporte? Deporte { get; set; }

    public int IdSocio { get; set; }
    public Socio? Socio { get; set; }
}
