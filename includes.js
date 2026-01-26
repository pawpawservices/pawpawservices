async function inject(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(file, { cache: "no-cache" });
  el.innerHTML = await res.text();
}

inject("#site-header", "header.html");
inject("#site-footer", "footer.html");
