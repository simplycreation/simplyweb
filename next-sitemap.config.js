/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://simplycreation.id", // Ganti dengan URL websitemu
  generateRobotsTxt: true, // Membuat robots.txt secara otomatis
  changefreq: "daily", // Frekuensi perubahan (opsional)
  priority: 0.7, // Prioritas default untuk halaman (opsional)
  sitemapSize: 5000, // Maksimal URL per sitemap file (opsional)
  extraPaths: ["/favicon.ico", "/favicon.png"],
  exclude: ["/admin", "/secret-page"], // Halaman yang tidak mau dimasukkan ke sitemap (opsional)
};
