
class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
           <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    CART (${count})
                </div>
        `;

        rootHeader.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
 

 