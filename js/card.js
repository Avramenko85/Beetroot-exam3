

class Shopping {
    handleClear() {
        rootShop.innerHTML = '';
    }
    hehe(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
 headerPage.render(products.length);
    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        catalog.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                         <td class="card__el_name ">${name}</td>
                         <td class="card__el_price">${price.toLocaleString()} USD
                       <img class="close__element" src="./img/cancel.png" onclick="shoppingPage.hehe(this, '${id}');"></td>
                    </tr >
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="card__container">
                 <div class="card__close" onclick="shoppingPage.handleClear();"></div>
                 <table>
                     ${htmlCatalog}
                     <tr>
                         <td class="card__el_name border">Price:</td>
                         <td class="card__el_price border">${sumCatalog.toLocaleString()} USD</td>
                     </tr>
                 </table>
             </div>
        `;
        rootShop.innerHTML = html;
    }
}

const shoppingPage = new Shopping();


// class Shopping {
//     handleClear() {
//         rootShop.innerHTML = '';
//     }

//     render() {
//         const productsStore = localStorageUtil.getProducts();
//         let htmlCatalog = '';
//         let sumCatalog = 0;

//         catalog.forEach(({ id, name, price }) => {
//             if (productsStore.indexOf(id) !== -1) {
//                 htmlCatalog += `
//                     <tr>
//                          <td class="card__el_name ">${name}</td>
//                          <td class="card__el_price">${price.toLocaleString()} USD
//                        <img class="close__element" src="./img/cancel.png" ></td>
//                     </tr >
//                 `;
//                 sumCatalog += price;
//             }
//         });

//         const html = `
//             <div class="card__container">
//                  <div class="card__close" onclick="shoppingPage.handleClear();"></div>
//                  <table>
//                      ${htmlCatalog}
//                      <tr>
//                          <td class="card__el_name border">Price:</td>
//                          <td class="card__el_price border">${sumCatalog.toLocaleString()} USD</td>
//                      </tr>
//                  </table>
//              </div>
//         `;
//         rootShop.innerHTML = html;
//     }
// }

// const shoppingPage = new Shopping();

