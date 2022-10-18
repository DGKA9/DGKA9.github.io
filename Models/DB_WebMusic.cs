using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DoAnCNPM.Models
{
    public class DB_WebMusic : IdentityDbContext
    {
        public DB_WebMusic(DbContextOptions<DB_WebMusic> options) : base(options)
        {

        }
    }
}
