using Microsoft.EntityFrameworkCore;
using Penguu.App.Data.Interface;
using Penguu.App.Models;

namespace Penguu.App.Data
{
    public class SensorManager : ISensorManager
    {
        private readonly ApplicationDbContext _context;
        public SensorManager(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SensorUser>> GetUsersForManager(
            string managerId)
        {
            return await _context.SensorUsers.Where(i => i.ManagingUserId
                == managerId).ToListAsync();
        }

        public async Task CreateSensorUser(string managingUserId, string name)
        {
            SensorUser sensorUser = new SensorUser {
                Name = name,
                ManagingUserId = managingUserId, 
            };
            _context.SensorUsers.Add(sensorUser);
            await _context.SaveChangesAsync();
        }

        public async Task ReportSensorData(SensorReportDTO sensorReport)
        {
            // Create an alert from the report
            SensorAlert newAlert = new SensorAlert {
                SensorUserId = sensorReport.SensorUserId,
                AlertType = sensorReport.AlertType,
                AlertTime = DateTime.UtcNow,
                Active = true,
                Payload = sensorReport.Payload,
            };
            await _context.SensorAlerts.AddAsync(newAlert);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<SensorAlert>>
            GetActiveAlertsForSensorUser(int sensorUserId)
        {
            IEnumerable<SensorAlert> alerts = await _context.SensorAlerts
                .Where(i => i.SensorUserId == sensorUserId
                        && i.Active == true).ToListAsync();
            return alerts;
        }

        public async Task DeactivateSensorAlert(int sensorAlertId)
        {
            SensorAlert? alert = await _context.SensorAlerts.FindAsync(
                sensorAlertId);
            if (alert == null)
            {
                throw new ArgumentException();
            }
            alert.Active = false;
            await _context.SaveChangesAsync();
        }
    }
}
