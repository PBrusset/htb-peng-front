using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Penguu.App.Controllers;

//[Authorize]
[ApiController]
[Route("[controller]")]
public class DeviceDataController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };


    public DeviceDataController()
    {
    }

    [HttpGet]
    public async Task<ActionResult> Get()
    {
       return Ok(); 
    }

    [HttpPost]
    public async Task<ActionResult> Post()
    {
        return Ok();
    }
}
