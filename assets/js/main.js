(function () {
  const parts = ["55", "13", "99690", "8215"];
  const phone = parts.join("");
  const msg = encodeURIComponent("Olá, vim pelo site da PLC Nutrition e gostaria de fazer um pedido.");
  const url = `https://wa.me/${phone}?text=${msg}`;

  document.querySelectorAll(".js-whatsapp").forEach((el) => {
    el.setAttribute("href", url);
  });
})();
