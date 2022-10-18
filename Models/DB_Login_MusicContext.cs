using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DoAnCNPM.Models
{
    public partial class DB_Login_MusicContext : DbContext
    {
        public DB_Login_MusicContext()
        {
        }

        public DB_Login_MusicContext(DbContextOptions<DB_Login_MusicContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BaiHat> BaiHats { get; set; }
        public virtual DbSet<CaSi> CaSis { get; set; }
        public virtual DbSet<DanhSachBaiHat> DanhSachBaiHats { get; set; }
        public virtual DbSet<Login> Logins { get; set; }
        public virtual DbSet<NguoiDung> NguoiDungs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DANGKHOA;Initial Catalog=DB_Login_Music;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BaiHat>(entity =>
            {
                entity.HasKey(e => e.MaBh)
                    .HasName("PK__BaiHat__272475A3AF26F612");

                entity.ToTable("BaiHat");

                entity.Property(e => e.MaBh)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MaBH")
                    .IsFixedLength();

                entity.Property(e => e.HinhAnh).HasColumnType("image");

                entity.Property(e => e.LoiBaiHat).HasColumnType("ntext");

                entity.Property(e => e.NgayCapNhat).HasColumnType("datetime");

                entity.Property(e => e.NhacSi)
                    .HasMaxLength(100)
                    .IsFixedLength();

                entity.Property(e => e.TenBh)
                    .HasMaxLength(100)
                    .HasColumnName("TenBH");

                entity.Property(e => e.TheLoai).HasMaxLength(30);

                entity.HasMany(d => d.MaCs)
                    .WithMany(p => p.MaBhs)
                    .UsingEntity<Dictionary<string, object>>(
                        "CtbaiHat",
                        l => l.HasOne<CaSi>().WithMany().HasForeignKey("MaCs").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__CTBaiHat__MaCS__35BCFE0A"),
                        r => r.HasOne<BaiHat>().WithMany().HasForeignKey("MaBh").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__CTBaiHat__MaBH__31EC6D26"),
                        j =>
                        {
                            j.HasKey("MaBh", "MaCs").HasName("PK__CTBaiHat__65562D441E1C9ECB");

                            j.ToTable("CTBaiHat");

                            j.IndexerProperty<string>("MaBh").HasMaxLength(10).IsUnicode(false).HasColumnName("MaBH").IsFixedLength();

                            j.IndexerProperty<string>("MaCs").HasMaxLength(10).IsUnicode(false).HasColumnName("MaCS").IsFixedLength();
                        });

                entity.HasMany(d => d.MaDs)
                    .WithMany(p => p.MaBhs)
                    .UsingEntity<Dictionary<string, object>>(
                        "CtdsbaiHat",
                        l => l.HasOne<DanhSachBaiHat>().WithMany().HasForeignKey("MaDs").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__CTDSBaiHat__MaDS__34C8D9D1"),
                        r => r.HasOne<BaiHat>().WithMany().HasForeignKey("MaBh").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__CTDSBaiHat__MaBH__32E0915F"),
                        j =>
                        {
                            j.HasKey("MaBh", "MaDs").HasName("PK__CTDSBaiH__75562DC60FD3E74C");

                            j.ToTable("CTDSBaiHat");

                            j.IndexerProperty<string>("MaBh").HasMaxLength(10).IsUnicode(false).HasColumnName("MaBH").IsFixedLength();

                            j.IndexerProperty<string>("MaDs").HasMaxLength(10).IsUnicode(false).HasColumnName("MaDS").IsFixedLength();
                        });
            });

            modelBuilder.Entity<CaSi>(entity =>
            {
                entity.HasKey(e => e.MaCs)
                    .HasName("PK__CaSi__27258E75D95534B6");

                entity.ToTable("CaSi");

                entity.Property(e => e.MaCs)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MaCS")
                    .IsFixedLength();

                entity.Property(e => e.GioiThieu).HasColumnType("ntext");

                entity.Property(e => e.HinhAnh).HasColumnType("image");

                entity.Property(e => e.TenCs)
                    .HasMaxLength(100)
                    .HasColumnName("TenCS");
            });

            modelBuilder.Entity<DanhSachBaiHat>(entity =>
            {
                entity.HasKey(e => e.MaDs)
                    .HasName("PK__DanhSach__2725865471D2C552");

                entity.ToTable("DanhSachBaiHat");

                entity.Property(e => e.MaDs)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MaDS")
                    .IsFixedLength();

                entity.Property(e => e.NgayCapNhat).HasColumnType("datetime");

                entity.Property(e => e.TenDs)
                    .HasMaxLength(100)
                    .HasColumnName("TenDS");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("Login");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<NguoiDung>(entity =>
            {
                entity.HasKey(e => new { e.MaNd, e.Id })
                    .HasName("PK__NguoiDun__440499E6D0283A0A");

                entity.ToTable("NguoiDung");

                entity.Property(e => e.MaNd)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MaND")
                    .IsFixedLength();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DiaChi).HasMaxLength(100);

                entity.Property(e => e.NgayDangKy).HasColumnType("datetime");

                entity.Property(e => e.NgaySinh).HasColumnType("datetime");

                entity.Property(e => e.TenNd)
                    .HasMaxLength(100)
                    .HasColumnName("TenND");

                entity.HasOne(d => d.IdNavigation)
                    .WithMany(p => p.NguoiDungs)
                    .HasForeignKey(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__NguoiDung__ID__37A5467C");

                entity.HasMany(d => d.MaBhs)
                    .WithMany(p => p.NguoiDungs)
                    .UsingEntity<Dictionary<string, object>>(
                        "Ctnghe",
                        l => l.HasOne<BaiHat>().WithMany().HasForeignKey("MaBh").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__CTNghe__MaBH__33D4B598"),
                        r => r.HasOne<NguoiDung>().WithMany().HasForeignKey("MaNd", "Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__CTNghe__36B12243"),
                        j =>
                        {
                            j.HasKey("MaNd", "MaBh", "Id").HasName("PK__CTNghe__23658492E904E4DE");

                            j.ToTable("CTNghe");

                            j.IndexerProperty<string>("MaNd").HasMaxLength(10).IsUnicode(false).HasColumnName("MaND").IsFixedLength();

                            j.IndexerProperty<string>("MaBh").HasMaxLength(10).IsUnicode(false).HasColumnName("MaBH").IsFixedLength();

                            j.IndexerProperty<int>("Id").HasColumnName("ID");
                        });
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
