const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


async function automationTest(){

    var searchString = "How To Perform Web Scraping With JavaScript And Selenium";
    var docSearchig = "Javascript Selenium";
    var email = "elvinpouriet@gmail.com"
    var password = "#Qwerty123"
 
       
        //Inicializa el driver de selenium para el navegador de crome
       let driver = await new Builder().forBrowser("chrome").build();
 
        
       //Hace un fetch de la pagina donde se realizará el test
       //En este caso la pagina es: 'LambdaTest'
        await driver.get("https://www.lambdatest.com/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Toma screeshot del home  de la pagina
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Lambdatest-Home.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        // Presiobamos la el link que nos lleva al login
        await driver.findElement(By.linkText('Login')).click();
            
        //Rellena los input del email y el password con los datos correspondientes
        await driver.findElement(By.id('email')).sendKeys(email);
        await driver.findElement(By.id('password')).sendKeys(password)

        await driver.findElement(By.id('login-button')).click()

        //await driver.findElement(By.id("element-0")).sendKeys(email,Key.RETURN);
 
        //Extrae el titulo de la pagina
        var title = await driver.getTitle();
        console.log('Log in with my email and password ✅')

        // Toma screeshor de la pagina actual
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/${title}.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        //Fetch al blog
        await driver.get("https://www.lambdatest.com/blog/");
        var title = await driver.getTitle();
        console.log('Interact with the blog without log in ✅')

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/${title}.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        // Hace una busqueda en el foro
        await driver.findElement(By.name('s')).sendKeys(searchString, Key.ENTER)
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Search in the Blog.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.get("https://www.lambdatest.com/blog/web-scraping-with-javascript-and-selenium/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Screen del resultado de la busqueda
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Solomon Eseme Publication.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );


        // Fetch a la documentacion
        await driver.get("https://www.lambdatest.com/support/docs/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/documentation.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        console.log('Interact with the documentation without log in ✅')
        
        //Busca en la documentación: 'Selenium With Javascript'
        await driver.findElement(By.className('DocSearch-Button')).click()
        //await driver.findElement(By.className('DocSearch-Input')).sendKeys(docSearchig, Key.ENTER)
    

        await driver.get("https://www.lambdatest.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-lambdatest-selenium-grid/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //await driver.findElement(By.linkText('Javascript')).click();

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Javascript-Selenium-Search.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );


        // Cambia el tema de la pagina al black mode
        await driver.findElement(By.className('toggleButton_gllP')).click();

        //Toma screeshot ahora en el black mode
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Switch to black mode.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        
        console.log('Switch to black mode successfully ✅')
 
        //Cierra en navegador y termina el programa
        await driver.quit();

        console.log('\n- - - - - - - - - - - - - - \n✅Test carried out satisfactorily 🚀\n- - - - - - - - - - - - - - ')
 
}

automationTest()