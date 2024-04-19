// const btnAddCart = document.querySelector('.btn-addProductToCart');
// console.log(btnAddCart)
const arrIdProduct = [];
const arrPriceProduct = [];
const arrProduct = [];
showPrice = arrPriceProduct;
fetch(url)
    .then(res => res.json())
    .then(product => {
        product.forEach(product => {
            const btnAddCart = document.querySelector(`[data-id='${product.id}'] .btn-addProductToCart`);
            btnAddCart.addEventListener('click', (e) => {
                const productItem = {
                    idProduct: product.id,
                    nameProduct: product.nameProduct,
                    description: product.description,
                    price: product.price,
                    image: product.image
                };


                const productItemJson = JSON.stringify(productItem);

                localStorage.setItem('productItem', productItemJson)

                const storedproductItemJson = localStorage.getItem('productItem');

                if (storedproductItemJson) {
                    const storedproductItem = JSON.parse(storedproductItemJson);
                    console.log(storedproductItem);
                    var linkImg = storedproductItem.image;
                    var cartNamePRD = storedproductItem.nameProduct;
                    var cartPricePRD = storedproductItem.price;
                    // console.log(linkImg, cartNamePRD, cartPricePRD)
                    addTr = document.createElement("tr");
                    addTr.innerHTML = trContent();
                    var cartTable = document.querySelector(".Content-card");
                    var subnav = document.querySelector(".subnav");
                    subnav.scrollTop = 100;
                    cartTable.append(addTr);
                    function trContent() {
                      return `
                      <tr>
                      <td><img class="card-img-product" src="${linkImg}" alt=""></td>
                      <td class="card-name-product">${cartNamePRD}</td>
                      <td class="card-price-product">${cartPricePRD}</td>
                      </tr>
                      `
                    } 
                    arrIdProduct.push(storedproductItem.idProduct);
                    console.log('Element added to array:', arrIdProduct);
                    alert("ADD PRODUCT SUCCESS <3")
                    arrProduct.push(storedproductItem);
                    console.log('Element added to array product:', arrProduct);
                    arrPriceProduct.push(storedproductItem.price)
                    console.log('Element added to array product:', arrPriceProduct);
                    

                    const showPrice = document.querySelector(".btn-price")

                    // showPrice = arrPriceProduct.map(price => price + price);

                    displayArrayValues();
                  } else {
                
                
                    console.log('productItem information not found in localStorage');
                }
            })



        })
    })

    function displayArrayValues() {
        const arrayValuesDiv = document.getElementById('arrayValues');
        // arrayValuesDiv.innerHTML = 'ID Products add: ' + JSON.stringify(arrIdProduct);
    }


    const formBuy = new bootstrap.Modal(document.querySelector('#showBillProduct'), {
        keyboard: false
    });

    // Button buy product
    const btnBuy = document.querySelector('.btn-buy');
    btnBuy.addEventListener('click', (e) => {
        e.preventDefault();
        formBuy.show();
    })

    // Button send form info

    const btnSendForm = document.querySelector('.btn-sendFormBuyProduct');
    btnSendForm.addEventListener('click', (e) => {
        e.preventDefault();
        const nameCustomer = document.querySelector('#nameCustomer').value;
        const emailCustomer = document.querySelector('#emailCustomer').value;
        const addressCustomer = document.querySelector('#addressCustomer').value;
        const phoneNumberCustomer = document.querySelector('#phoneNumberCustomer').value;
        // console.log(nameCustomer, emailCustomer,addressCustomer,phoneNumberCustomer);
        const infoCustomer = {
            nameCustomer: nameCustomer,
            emailCustomer: emailCustomer,
            addressCustomer: addressCustomer,
            phoneNumberCustomer: phoneNumberCustomer,
            idProduct: arrProduct

        }

        sendDataToServer(infoCustomer);
    })

    function sendDataToServer(infoCustomer) {
        fetch('http://localhost:3000/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(infoCustomer)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Data sent to server:', data);
          alert("CONFIRMED SUCCESSFUL PURCHASE INFORMATION, THANK YOU !!!")
        })
        .catch(error => {
          console.error('Error sending data to server:', error);
        });
      }

   

