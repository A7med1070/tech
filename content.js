document.querySelectorAll("[data-icon]").forEach((el) => {
  if (typeof svgIcon === "function") el.innerHTML = svgIcon(el.dataset.icon);
});

document.querySelectorAll(".icon:not([data-icon])").forEach((el, index) => {
  if (typeof svgIcon === "function") {
    const icons = ["shield", "wrench", "star"];
    el.innerHTML = svgIcon(icons[index % icons.length]);
  }
});

document.querySelectorAll(".footer").forEach((footer) => {
  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <img src="assets/logo.svg" alt="Fresh air" style="width:190px">
        <p>Fresh air تقدم خدمات شراء وبيع وتركيب وصيانة التكييفات المستعملة بالرياض بجودة عالية وسرعة استجابة.</p>
      </div>
      <div>
        <h3>روابط</h3>
        <a href="about.html">من نحن</a>
        <a href="services.html">الخدمات</a>
        <a href="products.html">المكيفات</a>
      </div>
      <div>
        <h3>خدمات</h3>
        <a href="services.html">شراء المكيفات</a>
        <a href="services.html">فك وتركيب</a>
        <a href="services.html">صيانة وتنظيف</a>
      </div>
      <div>
        <h3>تواصل</h3>
        <a href="tel:+966556800314">0556800314</a>
        <a href="https://wa.me/966556800314">واتساب</a>
        <a href="mailto:info@freshair-ac.sa">info@freshair-ac.sa</a>
        <a href="https://www.google.com/maps/search/RCNE2830%D8%8C+2830+%D8%AD%D8%A8%D9%8A%D8%A8+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%D8%8C+7283%D8%8C+%D8%AD%D9%8A+%D9%85%D9%86%D9%81%D9%88%D8%AD%D8%A9%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+12683%D8%8C+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%E2%80%AD/@24.5995,46.7275,17z?hl=ar" target="_blank" rel="noopener">حي منفوحة، الرياض 12683</a>
      </div>
    </div>
    <div class="container copy">© 2026 Fresh air. جميع الحقوق محفوظة.</div>
  `;
});

