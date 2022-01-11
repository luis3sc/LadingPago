const standardPriceMonthly = 10;
const advancedPriceMonthly = 15;
const enterprisePriceMonthly = 20;

const standardPricesemestral = standardPriceMonthly * 5 ;
const advancedPricesemestral = advancedPriceMonthly * 5 ;
const enterprisePricesemestral = enterprisePriceMonthly * 5 ;

const standardPriceYearly = standardPriceMonthly * 10;
const advancedPriceYearly = advancedPriceMonthly * 10;
const enterprisePriceYearly = enterprisePriceMonthly * 10 ;



const standardPrice = document.querySelector(".standard .price");
const advancedPrice = document.querySelector(".advanced .price");
const enterprisePrice = document.querySelector(".enterprise .price");

const standardOldPrice = document.querySelector(".standard .old-price");
const advancedOldPrice = document.querySelector(".advanced .old-price");
const enterpriseOldPrice = document.querySelector(".enterprise .old-price");

const standardImportantMessage = document.querySelector(".standard .important-message");
const advancedImportantMessage = document.querySelector(".advanced .important-message");
const enterpriseImportantMessage = document.querySelector(".enterprise .important-message");

const standardSmalltext = document.querySelector(".standard .small-text");
const advancedSmalltext = document.querySelector(".advanced .small-text");
const enterprieSmalltext = document.querySelector(".enterprise .small-text");

const form = document.querySelector(".form");

const radioBtnMonthly = document.querySelector('input[name=price]');
const radioBtnsemestral = document.querySelector('input[value="semestral"]');
const radioBtnYearly = document.querySelector('input[value="yearly"]');

radioBtnMonthly.addEventListener("click", monthly);
radioBtnsemestral.addEventListener("click", semestral);
radioBtnYearly.addEventListener("click", yearly);

window.addEventListener("load", () => {
  form.reset();
});

function monthly () {
  standardPrice.innerText = `s/ ${standardPriceMonthly} soles`;
  advancedPrice.innerText = `s/ ${advancedPriceMonthly} soles`;
  enterprisePrice.innerText = `s/ ${enterprisePriceMonthly} soles`;

  standardOldPrice.style.display = "none";
  advancedOldPrice.style.display = "none";
  enterpriseOldPrice.style.display = "none";

  standardOldPrice.innerText = "";
  advancedOldPrice.innerText = "";
  enterpriseOldPrice.innerText = "";

  standardImportantMessage.style.display = "none";
  advancedImportantMessage.style.display = "none";
  enterpriseImportantMessage.style.display = "none";

  standardImportantMessage.innerText = "";
  advancedImportantMessage.innerText = "";
  enterpriseImportantMessage.innerText = "";

  standardSmalltext.style.display = "block";
  advancedSmalltext.style.display = "block";
  enterprieSmalltext.style.display = "block";

  standardSmalltext.innerText = "por mes";
  advancedSmalltext.innerText = "por mes";
  enterprieSmalltext.innerText = "por mes";
}

function semestral () {
  standardPrice.innerText = `s/ ${standardPricesemestral} soles`;
  advancedPrice.innerText = `${advancedPricesemestral} soles`;
  enterprisePrice.innerText = `${enterprisePricesemestral} soles`;

  standardOldPrice.style.display = "block";
  advancedOldPrice.style.display = "block";
  enterpriseOldPrice.style.display = "block";

  standardOldPrice.innerText = `s/ ${standardPriceMonthly * 6} soles`;
  advancedOldPrice.innerText = `s/ ${advancedPriceMonthly * 6} soles`;
  enterpriseOldPrice.innerText = `s/ ${enterprisePriceMonthly * 6} soles`;

  standardImportantMessage.style.display = "block";
  advancedImportantMessage.style.display = "block";
  enterpriseImportantMessage.style.display = "block";

  standardImportantMessage.innerText = "Ahorras 10 soles";
  advancedImportantMessage.innerText = "Ahorras 15 soles";
  enterpriseImportantMessage.innerText = "Ahorras 20 soles";

  standardSmalltext.style.display = "block";
  advancedSmalltext.style.display = "block";
  enterprieSmalltext.style.display = "block";

  standardSmalltext.innerText = "por 6 meses";
  advancedSmalltext.innerText = "por 6 meses";
  enterprieSmalltext.innerText = "por 6 meses";
}

function yearly () {
  standardPrice.innerText = `s/ ${standardPriceYearly} soles`;
  advancedPrice.innerText = `s/ ${advancedPriceYearly} soles`;
  enterprisePrice.innerText = `s/ ${enterprisePriceYearly} soles`;

  standardOldPrice.style.display = "block";
  advancedOldPrice.style.display = "block";
  enterpriseOldPrice.style.display = "block";

  standardOldPrice.innerText = `s/ ${standardPriceMonthly *12} soles`;
  advancedOldPrice.innerText = `s/ ${advancedPriceMonthly *12} soles`;
  enterpriseOldPrice.innerText = `s/ ${enterprisePriceMonthly *12} soles`;

  standardImportantMessage.style.display = "block";
  advancedImportantMessage.style.display = "block";
  enterpriseImportantMessage.style.display = "block";

  standardImportantMessage.innerText = "Ahorras 20 soles";
  advancedImportantMessage.innerText = "Ahorras 30 soles";
  enterpriseImportantMessage.innerText = "Ahorras 40 soles";

  standardSmalltext.style.display = "block";
  advancedSmalltext.style.display = "block";
  enterprieSmalltext.style.display = "block";

  standardSmalltext.innerText = "por 12 meses";
  advancedSmalltext.innerText = "por 12 meses";
  enterprieSmalltext.innerText = "por 12 meses";
}