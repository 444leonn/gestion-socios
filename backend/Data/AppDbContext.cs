using System;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {
    }

    public DbSet<Socio> Socios { get; set; }
    public DbSet<TipoSocio> TiposSocios { get; set; }

    public DbSet<Deporte> Deportes { get; set; }

    public DbSet<DeporteSocio> DeportesSocios { get; set; }
}
