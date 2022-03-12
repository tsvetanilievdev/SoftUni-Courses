import page from '//unpkg.com/page/page.mjs';



page('/home', homePage);
page('/catalog', catalogPage);
page('/catalog/:category', catalogShoesPage);
page('/about', aboutPage);
page('/checkout', checkoutPage)

page.redirect('/', '/home')

page.start();


function homePage(context, next) {
    console.log(context);
  document.querySelector('main').innerHTML =
    '<h2>Welcome Home</h2><p>Hash Change Event information</p>';
}
function catalogPage(context, next) {
  document.querySelector('main').innerHTML =
    '<h3>Catalog</h3><ul><li>Shoes</li><li>Tracksuit</li><li>T-shirt</li></ul>';
}

function catalogShoesPage(context, next) {
    const category = context.params.category;

    if(category == 'shoes'){
        document.querySelector('main').innerHTML = '<h3>Shoes</h3><ul><li>Nike</li><li>Adidas</li><li>Navigare</li></ul><button>Buy now</button>';
    }else if(category == 'tracksuits'){
        document.querySelector('main').innerHTML = '<h3>Tracksuits</h3><ul><li>Jako</li><li>Uhlsport</li><li>Puma</li></ul><button>Buy now</button>';
    }

    document.querySelector('button').addEventListener('click', (e) => {
        context.page.redirect('/checkout')
    })
}
function aboutPage(context, next) {
  document.querySelector('main').innerHTML =
  '<h4>Contact us on 0888 642621</h4>';
}

function checkoutPage(context, next){
    document.querySelector('main').innerHTML =
    '<h3>Checkout</h3><p>Total price is 138 USD!</p>';
}
