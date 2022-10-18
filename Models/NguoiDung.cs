using System;
using System.Collections.Generic;

namespace DoAnCNPM.Models
{
    public partial class NguoiDung
    {
        public NguoiDung()
        {
            MaBhs = new HashSet<BaiHat>();
        }

        public string MaNd { get; set; }
        public string TenNd { get; set; }
        public string DiaChi { get; set; }
        public DateTime? NgaySinh { get; set; }
        public DateTime? NgayDangKy { get; set; }
        public int Id { get; set; }

        public virtual Login IdNavigation { get; set; }

        public virtual ICollection<BaiHat> MaBhs { get; set; }
    }
}
