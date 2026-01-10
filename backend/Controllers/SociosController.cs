using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using backend.Dto;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SociosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SociosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SocioDto>>> GetAllSocios()
        {
            try
            {
                var socios = await _context.Socios
                    .Include(s => s.Titular)
                    .Include(s => s.TipoSocio)
                    .Include(s => s.Adherentes)
                    .ToListAsync();

                if (!socios.Any())
                {
                    return NotFound("No se encontraron Socios.");
                }

                var sociosDto = socios.Select(s => new SocioDto
                {
                    Id = s.Id,
                    Nombre = s.Nombre,
                    Apellido = s.Apellido,
                    FechaNacimiento = s.FechaNacimiento,
                    FechaAlta = s.FechaAlta,
                    Dni = s.Dni,
                    Telefono = s.Telefono,
                    Mail = s.Mail,
                    Calle = s.Calle,
                    Altura = s.Altura,
                    Cp = s.Cp,
                    Localidad = s.Localidad,
                    TitularId = s.Titular?.Id,
                    TitularNombre = s.Titular != null ? $"{s.Titular.Nombre} {s.Titular.Apellido}" : null,
                    TipoSocioId = s.TipoSocio.Id,
                    TipoSocioNombre = s.TipoSocio.Nombre,
                    AdherentesIds = s.Adherentes.Select(a => a.Id).ToList()
                }).ToList();

                return Ok(sociosDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SocioDto>> GetByIdSocio(int id)
        {
            try
            {
                Socio? socio = await _context.Socios
                    .Include(s => s.Titular)
                    .Include(s => s.TipoSocio)
                    .Include(s => s.Adherentes)
                    .FirstOrDefaultAsync(s => s.Id == id);

                if (socio == null)
                    return NotFound("No se encontro el Socio");

                SocioDto socioDto = new SocioDto
                {
                    Id = socio.Id,
                    Nombre = socio.Nombre,
                    Apellido = socio.Apellido,
                    FechaNacimiento = socio.FechaNacimiento,
                    FechaAlta = socio.FechaAlta,
                    Dni = socio.Dni,
                    Telefono = socio.Telefono,
                    Mail = socio.Mail,
                    Calle = socio.Calle,
                    Altura = socio.Altura,
                    Cp = socio.Cp,
                    Localidad = socio.Localidad,
                    TitularId = socio.Titular?.Id,
                    TitularNombre = socio.Titular != null ? $"{socio.Titular.Nombre} {socio.Titular.Apellido}" : null,
                    TipoSocioId = socio.TipoSocio.Id,
                    TipoSocioNombre = socio.TipoSocio.Nombre,
                    AdherentesIds = socio.Adherentes.Select(a => a.Id).ToList()
                };

                return Ok(socioDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<SocioDto>> CreateSocio([FromBody] SocioDto socioDto)
        {
            try
            {
                var tipoSocio = await _context.TiposSocios.FindAsync(socioDto.TipoSocioId);
                if (tipoSocio == null)
                {
                    return BadRequest("El tipo de socio especificado no existe.");
                }

                Socio? titular = null;
                if (socioDto.TitularId.HasValue)
                {
                    titular = await _context.Socios.FindAsync(socioDto.TitularId.Value);
                    if (titular == null)
                    {
                        return BadRequest("El titular especificado no existe.");
                    }
                }

                Socio socio = new Socio
                {
                    Nombre = socioDto.Nombre,
                    Apellido = socioDto.Apellido,
                    FechaNacimiento = socioDto.FechaNacimiento,
                    FechaAlta = socioDto.FechaAlta,
                    Dni = socioDto.Dni,
                    Telefono = socioDto.Telefono,
                    Mail = socioDto.Mail,
                    Calle = socioDto.Calle,
                    Altura = socioDto.Altura,
                    Cp = socioDto.Cp,
                    Localidad = socioDto.Localidad,
                    TipoSocio = tipoSocio,
                    Titular = titular
                };

                _context.Socios.Add(socio);
                await _context.SaveChangesAsync();

                var result = new SocioDto
                {
                    Id = socio.Id,
                    Nombre = socio.Nombre,
                    Apellido = socio.Apellido,
                    FechaNacimiento = socio.FechaNacimiento,
                    FechaAlta = socio.FechaAlta,
                    Dni = socio.Dni,
                    Telefono = socio.Telefono,
                    Mail = socio.Mail,
                    Calle = socio.Calle,
                    Altura = socio.Altura,
                    Cp = socio.Cp,
                    Localidad = socio.Localidad,
                    TitularId = socio.Titular?.Id,
                    TitularNombre = socio.Titular != null ? $"{socio.Titular.Nombre} {socio.Titular.Apellido}" : null,
                    TipoSocioId = socio.TipoSocio.Id,
                    TipoSocioNombre = socio.TipoSocio.Nombre,
                    AdherentesIds = new List<int>()
                };

                return CreatedAtAction(nameof(GetByIdSocio), new { id = socio.Id }, result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult> UpdateSocio([FromBody] SocioDto socioDto)
        {
            Socio? socio = await _context.Socios
                .Include(s => s.Titular)
                .Include(s => s.TipoSocio)
                .Include(s => s.Adherentes)
                .FirstOrDefaultAsync(s => s.Id == socioDto.Id);
            
            try
            {
                if (socio == null)
                    return NotFound();

                var tipoSocio = await _context.TiposSocios.FindAsync(socioDto.TipoSocioId);
                if (tipoSocio == null)
                {
                    return BadRequest("El tipo de socio especificado no existe.");
                }

                Socio? titular = null;
                if (socioDto.TitularId.HasValue)
                {
                    titular = await _context.Socios.FindAsync(socioDto.TitularId.Value);
                    if (titular == null)
                    {
                        return BadRequest("El titular especificado no existe.");
                    }
                }

                socio.Nombre = socioDto.Nombre;
                socio.Apellido = socioDto.Apellido;
                socio.FechaNacimiento = socioDto.FechaNacimiento;
                socio.FechaAlta = socioDto.FechaAlta;
                socio.Dni = socioDto.Dni;
                socio.Telefono = socioDto.Telefono;
                socio.Mail = socioDto.Mail;
                socio.Calle = socioDto.Calle;
                socio.Altura = socioDto.Altura;
                socio.Cp = socioDto.Cp;
                socio.Localidad = socioDto.Localidad;
                socio.TipoSocio = tipoSocio;
                socio.Titular = titular;

                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteSocio(int id)
        {
            try
            {
                Socio? socio = await _context.Socios
                    .Include(s => s.Adherentes)
                    .FirstOrDefaultAsync(s => s.Id == id);
                    
                if (socio == null)
                    return NotFound("No se encontró el Socio");

                if (socio.Adherentes.Any())
                {
                    return BadRequest("No se puede eliminar un socio que tiene adherentes asociados.");
                }

                _context.Socios.Remove(socio);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
