puppe = require("puppeteer");

inicio(); // llamar a la funcion principal
async function inicio() {
  //muestra el navegador en la pantalla
  browser = await puppe.launch({ headless: true }); //new
  // nueva pagina en el navegador (chrome)
  pagina = await browser.newPage();
  // indicar que vamos a abrir el navegador en la pagina
  //PAGINA DE LOGUEO
    await pagina.goto("http://192.168.10.4:4002/sgh_v20/hlogin.aspx");
    await pagina.waitForSelector('#vCUSUARIOALIAS'); //eséra a q el selector este disponible
    await pagina.type('#vCUSUARIOALIAS', 'simendoza');
    await pagina.type('#vCUSUARIOCLAVE', '1234');
    await pagina.click('#BTNENTER')
  //PAGINA DE HC
    

  //scrap
  valorweb = await pagina.evaluate((() => {
    return document.querySelector('#TEXTBLOCKCUSUARIOALIAS').innerText;
  }));

  console.log(valorweb);

  setTimeout(() => {
    browser.close();
  }, 2000);
}
