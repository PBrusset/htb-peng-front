using Microsoft.AspNetCore.Mvc;
using Penguu.App.Data.Interface;
using Penguu.App.Models;

namespace Penguu.App.Controllers;

public class SensorUserCreationRequest {
    public string Name { get; set; }
    public string ManagingUserId { get; set; }
}

//[Authorize]
[ApiController]
[Route("api/[controller]")]
public class SensorUserController : ControllerBase
{
    private readonly ISensorManager _sensorManager;

    public SensorUserController(ISensorManager sensorManager)
    {
        _sensorManager = sensorManager;
    }

    [HttpPost]
    [Route("DeactivateAlert")]
    public async Task<ActionResult> DeactivateSensorAlert(int sensorAlertId)
    {
        try
        {
            await _sensorManager.DeactivateSensorAlert(sensorAlertId);
            return Ok();
        }
        catch (ArgumentException)
        {
            return NotFound();
        }
    }

    [HttpGet]
    [Route("GetAlerts")]
    public async Task<ActionResult<SensorAlert>> GetSensorAlertsForUser(
        int sensorUserId)
    {
        var alerts = await _sensorManager.GetActiveAlertsForSensorUser(
            sensorUserId);
        return Ok(alerts);
    }

    [HttpGet]
    [Route("ListUsers")]
    public async Task<ActionResult<SensorUser>> ListUsersForManager(
        string managerId)
    {
        var users = await _sensorManager.GetUsersForManager(managerId);
        if (users.Count() == 0)
        {
            return NotFound();
        }
        return Ok(users);
    }

    [HttpPost]
    [Route("Create")]
    public async Task<ActionResult> Post(SensorUserCreationRequest creationRequest)
    {
        await _sensorManager.CreateSensorUser(creationRequest.ManagingUserId,
            creationRequest.Name);
        return Ok();
    }
}
