using System;
using System.Collections.Generic;

namespace DoAnCNPM.Models
{
    public partial class CaSi
    {
        public CaSi()
        {
            MaBhs = new HashSet<BaiHat>();
        }

        public string MaCs { get; set; }
        public string TenCs { get; set; }
        public byte[] HinhAnh { get; set; }
        public string GioiThieu { get; set; }

        public virtual ICollection<BaiHat> MaBhs { get; set; }
    }
}
