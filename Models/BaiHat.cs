using System;
using System.Collections.Generic;

namespace DoAnCNPM.Models
{
    public partial class BaiHat
    {
        public BaiHat()
        {
            MaCs = new HashSet<CaSi>();
            MaDs = new HashSet<DanhSachBaiHat>();
            NguoiDungs = new HashSet<NguoiDung>();
        }

        public string MaBh { get; set; }
        public string TenBh { get; set; }
        public string LoiBaiHat { get; set; }
        public int? SoLanNghe { get; set; }
        public DateTime? NgayCapNhat { get; set; }
        public byte[] HinhAnh { get; set; }
        public string TheLoai { get; set; }
        public string NhacSi { get; set; }

        public virtual ICollection<CaSi> MaCs { get; set; }
        public virtual ICollection<DanhSachBaiHat> MaDs { get; set; }
        public virtual ICollection<NguoiDung> NguoiDungs { get; set; }
    }
}
