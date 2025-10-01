// 3. src/data/village.js - Village and program information
export const villageInfo = {
  name: "Desa Kalianyar",
  location: {
    district: "Bangsalsari",
    regency: "Jember",
    province: "Jawa Timur",
    postalCode: "68154",
    coordinates: {
      lat: -8.160074,
      lng: 113.614397
    }
  },
  demographics: {
    population: 3500,
    households: 875,
    area: "12.5 km²",
    density: "280 jiwa/km²"
  },
  economy: {
    mainSectors: ["Pertanian", "UMKM", "Perdagangan"],
    umkmCount: 150,
    migrantWorkers: 320,
    averageIncome: "2.5 juta/bulan"
  },
  facilities: {
    schools: 3,
    healthCenters: 1,
    markets: 2,
    religiousSites: 5
  },
  potentials: [
    {
      name: "Produksi Tahu Tempe",
      description: "Industri rumahan tahu dan tempe dengan kualitas premium",
      workers: 45
    },
    {
      name: "Kerajinan Genteng",
      description: "Produksi genteng tanah liat berkualitas tinggi",
      workers: 25
    },
    {
      name: "Pertanian Hidroponik",
      description: "Pengembangan pertanian modern sistem hidroponik",
      workers: 15
    },
    {
      name: "Makanan Olahan",
      description: "Berbagai produk makanan tradisional dan modern",
      workers: 35
    },
    {
      name: "Kerajinan Tangan",
      description: "Anyaman, batik, dan kerajinan lokal lainnya",
      workers: 30
    }
  ]
}

export const programInfo = {
  name: "Program Pemberdayaan Kepada Masyarakat (PPK) ORMAWA",
  university: "Universitas Jember",
  duration: "12 bulan",
  funding: "Kementerian Pendidikan dan Kebudayaan RI",
  targetBeneficiaries: 200,
  currentBeneficiaries: 150,
  objectives: [
    "Memberdayakan mantan buruh migran melalui UMKM",
    "Meningkatkan keterampilan digital dan bisnis",
    "Menciptakan lapangan kerja di tingkat desa",
    "Mengembangkan ekonomi lokal berkelanjutan",
    "Membangun platform digital untuk pemasaran produk"
  ],
  phases: [
    {
      phase: 1,
      title: "Identifikasi & Pelatihan Dasar",
      duration: "3 bulan",
      activities: [
        "Survey dan identifikasi calon peserta",
        "Pelatihan keterampilan dasar",
        "Pembentukan kelompok UMKM",
        "Penyusunan rencana bisnis"
      ],
      status: "Selesai"
    },
    {
      phase: 2,
      title: "Pengembangan Produk & Digital",
      duration: "6 bulan",
      activities: [
        "Pengembangan produk berkualitas",
        "Pelatihan digital marketing",
        "Pembuatan platform CerdasBersinar",
        "Pendampingan produksi"
      ],
      status: "Berlangsung"
    },
    {
      phase: 3,
      title: "Pemasaran & Keberlanjutan",
      duration: "3 bulan",
      activities: [
        "Launching platform digital",
        "Ekspansi pasar online",
        "Evaluasi dan monitoring",
        "Persiapan keberlanjutan program"
      ],
      status: "Akan Datang"
    }
  ],
  achievements: [
    {
      metric: "Pelaku UMKM Diberdayakan",
      value: 150,
      target: 200,
      unit: "orang"
    },
    {
      metric: "Peningkatan Pendapatan",
      value: 75,
      target: 80,
      unit: "%"
    },
    {
      metric: "Produk Terdigitalisasi",
      value: 75,
      target: 100,
      unit: "produk"
    },
    {
      metric: "Pelatihan Terselenggara",
      value: 25,
      target: 30,
      unit: "sesi"
    }
  ]
}
