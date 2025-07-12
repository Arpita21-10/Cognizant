using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SwaggerDemo.Controllers
{
    [ApiController]
    [Route("Emp")] // Custom route
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(List<string>), 200)]
        public IEnumerable<string> Get()
        {
            return new List<string> { "John", "Jane", "Sam" };
        }

        [HttpPost]
        [ProducesResponseType(201)]
        public IActionResult Post([FromBody] string employeeName)
        {
            return Created("", $"Employee {employeeName} added");
        }

        [HttpGet("count")]
        [ActionName("Count")]
        public int GetEmployeeCount()
        {
            return 3;
        }
    }
}
