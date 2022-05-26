class Products {
    constructor() {
        this.classNameActive = 'product__btn-active';
        this.labelAdd = 'Add to Card';
        this.labelRemove = 'Added';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        catalog.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
               <div class="product_elem">
                <div class="product__ranting">★★★★★</div>
                    <div class="product__name">${name}</div>
                    <img class="product__img" src="${img}" />
                    <div class="product__price">
                    <span class="">
                        $ ${price.toLocaleString()} USD
                    </span>
                    <button class="product__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                    </div>
                </div>
            `;
        });

        const html = `
            <div class="product_section">
                ${htmlCatalog}
            </div>
        `;

        rootProduct.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();


