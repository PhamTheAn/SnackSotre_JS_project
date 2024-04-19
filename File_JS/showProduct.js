function showProducts() {
    var url = 'http://localhost:3000/product';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(product => {
                renderProduct1(product);
            });
        });
    const tableProduct1 = document.querySelector(".list-product");
    const renderProduct1 = (product) => {
        const output = `
        <div class="col">
        <div class="card-height-402 card card-product" >
            <div class="card-body" data-id='${product.id}'>
                <div class="text-center position-relative">
                   
                    <a href="#!">
                        <img class="img-scale mb-3 img-fluid" src="${product.image}" alt="">
                    </a>
                </div>
                <div class="text-small text-center">
                    <a href="" class="text-decoration-none text-muted">
                        <small class="text-center">${product.description}</small>
                    </a>
                </div>
                <h2 class="text-center">
                    <a href="" class="text-primaryColor text-center text-inherit text-decoration-none fs-3">${product.nameProduct}</a>
                </h2>
                <div class="text-center">
                    <span class="text-dark">${product.price}đ</span>
                </div>
                <div class="button-product">
                    <button id="btn-addProductToCart"  type="button" class="btn-addProductToCart btn btn-primary">Add to cart </button>
                    <button  type="button" class="btn-view-detail btn btn-primary">View detail </button>
                </div>
            </div>
        </div>
    </div>
            `;

        tableProduct1.insertAdjacentHTML('beforeend', output);

    }

}
showProducts();