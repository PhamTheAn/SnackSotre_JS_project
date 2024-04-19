const url = 'http://localhost:3000/product';
const showDetail = new bootstrap.Modal(document.querySelector('#showDetaiProduct'), {
    keyboard: false
});



// const btnShowDetail = document.querySelector(`[data-id='${product.id}'] .btn-view-detail`);
    
    fetch(url)
    .then(res => res.json())
    .then(product => {
        product.forEach(product => {
            const btnViewDetail = document.querySelector(`[data-id='${product.id}'] .btn-view-detail`);
            btnViewDetail.addEventListener('click', (e) => { 
                id = product.id;
                // bodyModal = document.querySelector(".modal-body");
                // bodyModal.setAttribute('data-id', id);
                const modalContent = document.querySelector("#showDetaiProduct");
                console.log(modalContent);
                modalContent.setAttribute('data-id', id);

                // console.log(bodyModal);
                showDetail.show();
                const nameproduct = document.querySelector('.name-product').innerHTML = product.nameProduct;
                const description = document.querySelector('.description-product').innerHTML = product.description + ":" + "<span class= 'text-desc'> products are manufactured using the world's most advanced technology with famous brands</span>";
                const price = document.querySelector('.price-product').innerHTML = product.price + "Đ" ;
                const image = document.querySelector('.image-product').src = product.image;
            })
        });
        // console.log(product);
        // const btnViewDetail = document.querySelector('.btn-view-detail');
    });

    
    
    // btnEdit.addEventListener('click', (e) => {
    //     editModalForm.show();
    //     id = product.id;
    //     // console.log('edit');
    //     editModalForm.nameProduct = product.nameProduct;
    //     editModalForm.description = product.description;
    //     editModalForm.price = product.price ;
    //     editModalForm.image = product.image;
        

// })


