function managerProducts() {
    
    const url = 'http://localhost:3000/product';
    const addModalForm = document.querySelector('.form-user');
    const editFormSub = document.querySelector('#myEditModal .form-user')
    // const editModalFormSub = document.querySelector('#myEditModal .form-user')
    const editForm = new bootstrap.Modal(document.querySelector('#myEditModal'), {
        keyboard: false
    });
    let id = '';
    // var galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'), {
    //     keyboard: false
    //   });
    
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(product => {
                renderProduct(product);    
            });
        });
    
    const tableProduct = document.querySelector("#table-products");
    const renderProduct = (product) => {
        const output = `
            <tr class="title-product" data-id='${product.id}'>
                <td>${product.nameProduct}</td>
                <td>${product.idCate}</td>
                <td>${product.description}</td>
                <td>${product.price}đ</td>
                <td>
                    <img class="image-product" src="${product.image}" alt="" srcset="">
                </td>
                <td style="display: flex; justify-content: space-around;" class='size-edition'>
                    <a class="btn-edit btn btn-primary btn-sm">Edit</a>
                    <a class="btn-del btn btn-danger btn-sm">Del</a>
                </td>
            </tr>
        `;
    
        tableProduct.insertAdjacentHTML('beforeend', output)
    
        //delete
        const btnDel = document.querySelector(`[data-id='${product.id}'] .btn-del`);
        btnDel.addEventListener('click', (e) => {
            const deleteForm = document.getElementById("deleteForm");
              const cancelDeleteButton = document.querySelector(".cancelDelete");
              const btnDelete = document.querySelector(".confirmDelete");
              deleteForm.style.display = "block";
              cancelDeleteButton.addEventListener("click", function() {
                deleteForm.style.display = "none"; // Ẩn form khi click nút "Cancel"
              })
              btnDelete.addEventListener('click', (e)=> {
                  fetch(`${url}/${product.id}`, {
                      method: 'DELETE'
                  })
                  .then(res => res.json)
                  .then(() => location.reload()) 
              })
              
            console.log('delete ' + product.nameProduct);
                 
            
        })
    
        //edit
        const btnEdit = document.querySelector(`[data-id='${product.id}'] .btn-edit`);
        btnEdit.addEventListener('click', (e) => {
            editForm.show();
            id = product.id;
            const valueNameProduct = document.querySelector('#valueNameProduct');
            const valueDescProduct = document.querySelector('#valueDescProduct');
            const valuePriceProduct = document.querySelector('#valuePriceProduct');
            const valueImgProduct = document.querySelector('#valueImgProduct');
            const valueIdCategory = document.querySelector('#valueIdCategory');
            // console.log('edit');
            valueNameProduct.value = product.nameProduct;
            valueDescProduct.value = product.description;
            valuePriceProduct.value = product.price ;
            valueImgProduct.value = product.image;
            valueIdCategory.value = product.idCate;

            console.log(editForm.nameProduct)
            console.log(product.nameProduct)
            
        })
    
    }
    
    // edit
    editFormSub.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log('Edit success');
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nameProduct: editFormSub.nameProduct.value,
                idCate: editFormSub.idCategory.value,
                description: editFormSub.description.value,
                price: editFormSub.price.value,
                image: editFormSub.image.value
            })
        })
        .then(res => res.json)
        .then(() => location.reload())
         
    })
    
    //ADD
    addModalForm.addEventListener('submit', (e) => {
        const form_add = document.querySelector(".validate-form-add")
        console.log(form_add);
        if(form_add.value == '') {
            alert("Vui lòng nhập đầy đủ thông tin")
            e.preventDefault();

        }else {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    nameProduct: addModalForm.nameProduct.value,
                    idCate: addModalForm.idCategory.value,
                    description: addModalForm.description.value,
                    price: addModalForm.price.value,
                    image: addModalForm.image.value
                })
            })
            .then(res => res.json)
            .then(data => {
                const dataArr = [];
                dataArr.push(data);
                renderProduct(dataArr)
            })

        }
        console.log("add thành công");
        e.preventDefault();
        // console.log('modal' + addModalForm.nameProduct.value);
    
        addModalForm.nameProduct = '';
        addModalForm.idCategory = '';
        addModalForm.description = '';
        addModalForm.price = '';
        addModalForm.image = '';
    
    })
}

managerProducts();




// function showProducts() {
// var url = 'http://localhost:3000/product';
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             data.forEach(product => {
//                 renderProduct1(product);    
//             });
//         });
//     const tableProduct1 = document.querySelector(".list-product");
//     const renderProduct1 = (product) => {
//         const output = `
//     <div class="col">
//     <div class="card card-product">
//         <div class="card-body">
//             <div class="text-center position-relative">
//                 <div class="position-absolute top-0 start-0">
//                     <span class="badge bg-danger">sale</span>
//                 </div>
//                 <a href="#!">
//                     <img class="mb-3 img-fluid" src="${product.image}" alt="">
//                 </a>
//             </div>
//             <div class="text-small text-center">
//                 <a href="" class="text-decoration-none text-muted">
//                     <small class="text-center">${product.description}</small>
//                 </a>
//             </div>
//             <h2 class="text-center">
//                 <a href="" class="text-primaryColor text-center text-inherit text-decoration-none fs-3">${product.nameProduct}</a>
//             </h2>
//             <div class="text-center">
//                 <span class="text-dark">${product.price}đ</span>
//             </div>
//         </div>
//     </div>
// </div>
//         `;
    
//         tableProduct1.insertAdjacentHTML('beforeend', output)
//     }
// }

// var divProduct = document.querySelector('.product').innerHTML = showProducts();



// showProducts();


// var bodyCard = document.getElementsByClassName('card-prd').innerHTML = showProducts();
// var chart = document.querySelector('#chart');
// chart.innerHTML = showProducts();

// console.log(bodyCard);