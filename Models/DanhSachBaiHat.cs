using System;
using System.Collections.Generic;

namespace DoAnCNPM.Models
{
    public partial class DanhSachBaiHat
    {
        public DanhSachBaiHat()
        {
            MaBhs = new HashSet<BaiHat>();
        }

        public string MaDs { get; set; }
        public string TenDs { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public int? ThuTu { get; set; }

        public virtual ICollection<BaiHat> MaBhs { get; set; }
    }
}
