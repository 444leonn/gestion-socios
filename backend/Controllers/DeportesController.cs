using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using backend.Dto;
using Microsoft.AspNetCore.RateLimiting;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeportesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DeportesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeporteDto>>> GetAllDeportes()
        {
            var deportes = await _context.Deportes.ToListAsync();
            try
            {
                if (deportes == null || !deportes.Any())
                {
                    return NotFound("No se encontraron deportes.");
                }

                var deporteDtos = deportes.Select(d => new DeporteDto
                {
                    Id = d.Id,
                    Nombre = d.Nombre,
                    Imagen = d.Imagen
                });

                return Ok(deporteDtos);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DeporteDto>> GetByIdDeporte(int id)
        {
            Deporte? deporte = await _context.Deportes.FindAsync(id);

            try
            {
                if (deporte == null)
                {
                    return NotFound("No se encontro el deporte");
                }
                else
                {
                    DeporteDto deporteDto = new DeporteDto
                    {
                        Id = deporte.Id,
                        Nombre = deporte.Nombre,
                        Imagen = deporte.Imagen,
                    };

                    return Ok(deporteDto);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<DeporteDto>> CreateDeporte([FromBody] DeporteDto deporteDto)
        {
            Deporte deporte = new Deporte
            {
                Nombre = deporteDto.Nombre,
                Imagen = deporteDto.Imagen
            };

            try
            {
                _context.Deportes.Add(deporte);
                await _context.SaveChangesAsync();

                deporteDto.Id = deporte.Id;
                return CreatedAtAction(nameof(GetByIdDeporte), new { id = deporte.Id }, deporteDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDeporte([FromBody] DeporteDto deporteDto)
        {
            Deporte? deporte = await _context.Deportes.FindAsync(deporteDto.Id);
            
            try
            {
                if (deporte == null)
                {
                    return NotFound();
                }

                deporte.Nombre = deporteDto.Nombre;
                deporte.Imagen = deporteDto.Imagen;

                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeporte(int id)
        {
            Deporte? deporte = await _context.Deportes.FindAsync(id);

            try
            {
                if (deporte == null)
                {
                    return NotFound();
                }

                var relaciones = _context.DeportesSocios.Where(ds => ds.Deporte.Id == id);
                _context.DeportesSocios.RemoveRange(relaciones);
                _context.Deportes.Remove(deporte);
                
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}