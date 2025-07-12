using Microsoft.AspNetCore.Mvc;

namespace MyFirstApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok(new[] { "value1", "value2" });

        [HttpPost]
        public IActionResult Post([FromBody] string value) => Ok("Value Posted: " + value);

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] string value) => Ok($"Updated id {id} with {value}");

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) => Ok($"Deleted id {id}");
    }
}
