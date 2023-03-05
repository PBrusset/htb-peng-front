using Microsoft.AspNetCore.Mvc;
using Penguu.App.Data;
using Penguu.App.Data.Interface;

namespace Penguu.App.Controllers;

//[Authorize]
[ApiController]
[Route("[controller]")]
public class DeviceDataController : ControllerBase
{
    private readonly ISensorManager _sensorManager;

    public DeviceDataController(ISensorManager sensorManager)
    {
        _sensorManager = sensorManager;
    }

    [HttpPost]
    public async Task<ActionResult> Post(SensorReportDTO sensorReport)
    {
        await _sensorManager.ReportSensorData(sensorReport);
        return Ok();
    }
}
