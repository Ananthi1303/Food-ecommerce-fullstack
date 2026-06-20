using FoodEcommerce.Data;
using FoodEcommerce.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodEcommerce.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FoodController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetFoods()
        {
            var foods = _context.Foods.ToList();

            return Ok(foods);
        }

        [HttpPost]
        public IActionResult AddFood(Food food)
        {
            _context.Foods.Add(food);

            _context.SaveChanges();

            return Ok(food);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFood(int id)
        {
            var food = _context.Foods.Find(id);

            if (food == null)
            {
                return NotFound("Food Not Found");
            }

            _context.Foods.Remove(food);

            _context.SaveChanges();

            return Ok("Food Deleted");
        }
    }
}

