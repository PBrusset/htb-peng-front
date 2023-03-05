using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Penguu.App.Models
{
    public class SensorAlert
    {
        public int SensorAlertId { get; set; }
        public int SensorUserId { get; set; }

        public virtual SensorUser SensorUser { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public AlertType AlertType { get; set; }

        public DateTime AlertTime { get; set; }

        public bool Active { get; set; }

        public string? Payload { get; set; }
    }
}
