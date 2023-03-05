using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Penguu.App.Models;

namespace Penguu.App.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public DbSet<SensorUser> SensorUsers { get; set; }
    public DbSet<SensorAlert> SensorAlerts { get; set; }

    public ApplicationDbContext(DbContextOptions options)
        : base(options)
    {
    }

    /*
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<SensorUser>()
            .HasOne(e => e.Sensor)
            .WithOne()
            .HasForeignKey<SensorUser>(e => e.SensorUserId);
    }
    */
}
