using FoodEcommerce.Data;
using FoodEcommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodEcommerce.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CartController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCart()
        {
            var cartItems = _context.Carts.ToList();

            return Ok(cartItems);
        }
        //[HttpGet]
        //public IActionResult GetCart()
        //{
        //    var cartItems = _context.Carts
        //        .Select(c => new
        //        {
        //            c.Id,
        //            c.Quantity,

        //            Food = _context.Foods.FirstOrDefault(f => f.Id == c.FoodId)
        //        })
        //        .ToList();
        //    return Ok(cartItems);
        //}

        [HttpPost]
        public IActionResult AddToCart(Cart cart)
        {

            var existingItem = _context.Carts
       .FirstOrDefault(c => c.Name == cart.Name);

            if (existingItem != null)
            {
                existingItem.Quantity += 1;
            }
            else
            {
                cart.Quantity = 1;

                _context.Carts.Add(cart);
            }
            _context.SaveChanges();

            return Ok(cart);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateQuantity(int id, [FromQuery] int quantity)
        {
            var item = _context.Carts.Find(id);

            if (item == null)
            {
                return NotFound("Cart Item Not Found");
            }

            item.Quantity = quantity;

            _context.SaveChanges();

            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCart(int id)
        {
            var item = _context.Carts.Find(id);
         

            if (item == null)
            {
                return NotFound("Item Not Found");
            }

            _context.Carts.Remove(item);

            _context.SaveChanges();

            return Ok("Deleted");
        }
    }
}