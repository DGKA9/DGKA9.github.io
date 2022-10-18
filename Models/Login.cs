using System;
using System.Collections.Generic;

namespace DoAnCNPM.Models
{
    public partial class Login
    {
        public Login()
        {
            NguoiDungs = new HashSet<NguoiDung>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public virtual ICollection<NguoiDung> NguoiDungs { get; set; }
    }
}
