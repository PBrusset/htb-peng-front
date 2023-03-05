using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Penguu.App.Migrations
{
    public partial class sensorpayload : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Payload",
                table: "SensorAlerts",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Payload",
                table: "SensorAlerts");
        }
    }
}
