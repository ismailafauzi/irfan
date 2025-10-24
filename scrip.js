const quotes = [
  "“Barangsiapa beriman kepada Allah dan hari akhir, hendaklah berkata baik atau diam.” (HR. Bukhari)",
  "“Ketahuilah, dengan berdzikir hati menjadi tenang.” (QS. Ar-Ra’d: 28)",
  "“Sesungguhnya Allah bersama orang-orang yang sabar.” (QS. Al-Baqarah: 153)"
];

window.onload = () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  alert(random);
};
