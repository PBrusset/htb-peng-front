using Microsoft.AspNetCore.Identity;

namespace Penguu.App.Models;

public class ApplicationUser : IdentityUser
{
    public virtual ICollection<SensorUser> SensorUsers { get; set; }
}
