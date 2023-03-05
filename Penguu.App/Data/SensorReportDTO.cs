using Penguu.App.Models;

namespace Penguu.App.Data
{
    public class SensorReportDTO
    {
        public int SensorUserId { get; set; }
        public AlertType AlertType { get; set; }
        public string? Payload { get; set; }
    }
}
