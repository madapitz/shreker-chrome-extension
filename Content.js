function elementsAttributeChanger(elementTag, property, values) {
  const elements = document.getElementsByTagName(elementTag);
  if (elements.length === 0) return;

  for (let i = 0; i < elements.length; i++) {
    const randomValue = Math.floor(Math.random() * values.length);
    elements[i][property] = values[randomValue];
  }
}

function main() {
  const shrekImages = [
    "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ARRDEQXXYJENFESFRCIJM5USLY.jpg",
    "https://static.wikia.nocookie.net/shrek/images/3/3f/Portada_img.jpg/revision/latest/scale-to-width-down/1200?cb=20100719002911&path-prefix=es",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Shrek_lass_nach_-_panoramio.jpg/800px-Shrek_lass_nach_-_panoramio.jpg",
    "https://www.tonica.la/__export/1615664599774/sites/debate/img/2021/03/13/shrek-reestreno-dreamworks.jpg_759710130.jpg",
    "https://www.diariocritico.com/fotos/1/333722_Shrek.jpg",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/08/shrek-2443229.jpg?itok=AYvvW4zT",
    "https://static.independent.co.uk/2021/05/19/16/shutterstock_editorial_5884037o.jpg?quality=75&width=1200&auto=webp",
    "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfEp9GH2gh2Tc-4qXaAUp3aSj1HSjdhF9NOnGK36r6E8K0XUtiAJPcUw2IpDRpK8_BfJ11mHYsvlCH0Sx68QAKEdKRsD.jpg?r=5db",
  ];

  document.getElementById("change_button").addEventListener("click", function() {
    console.log("HOLA");
  });
}