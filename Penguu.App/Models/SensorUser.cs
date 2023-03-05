namespace Penguu.App.Models
{
    public class SensorUser
    {
        public int SensorUserId { get; set; }
        public string Name { get; set; }

        public string ManagingUserId { get; set; }

        public virtual ApplicationUser ManagingUser { get; set; }
    }
}
