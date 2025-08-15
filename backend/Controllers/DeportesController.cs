using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using backend.Dto;

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
        public async Task<ActionResult<IEnumerable<DeporteDto>>> GetDeportes()
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
                    Nombre = d.Nombre
                });

                return Ok(deporteDtos);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DeporteDto>> GetDeporte(int id)
        {
            Deporte? deporte = await _context.Deportes.FirstOrDefaultAsync(d => d.Id == id);

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
                        Nombre = deporte.Nombre
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
        public async Task<ActionResult<DeporteDto>> PostDeporte(DeporteDto deporteDto)
        {
            Deporte deporte = new Deporte
            {
                Nombre = deporteDto.Nombre
            };

            try
            {
                _context.Deportes.Add(deporte);
                await _context.SaveChangesAsync();

                deporteDto.Id = deporte.Id;
                return CreatedAtAction(nameof(GetDeporte), new { id = deporte.Id }, deporteDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}