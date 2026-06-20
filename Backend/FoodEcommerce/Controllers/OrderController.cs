using FoodEcommerce.Data;
using FoodEcommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodEcommerce.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrderController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetOrders()
        {
            var orders = _context.Orders.ToList();

            return Ok(orders);
        }

        [HttpPost]
        public IActionResult PlaceOrder()
        {
            var cartItems = _context.Carts.ToList();

            if (!cartItems.Any())
            {
                return BadRequest("Cart Empty");
            }

            var order = new Order
            {
                TotalAmount = cartItems.Sum(x =>
                    x.Price * x.Quantity),

                OrderDate = DateTime.Now
            };

            _context.Orders.Add(order);

            _context.Carts.RemoveRange(cartItems);

            _context.SaveChanges();

            return Ok(order);
        }

    }
}
