using Penguu.App.Models;

namespace Penguu.App.Data.Interface
{
    public interface ISensorManager
    {
        Task ReportSensorData(SensorReportDTO report);
        Task<IEnumerable<SensorAlert>> GetActiveAlertsForSensorUser(int sensorUserId);
        Task DeactivateSensorAlert(int sensorAlertId); 
        Task CreateSensorUser(string managingUserId, string name);
        Task<IEnumerable<SensorUser>> GetUsersForManager(string managerId);
    }
}
