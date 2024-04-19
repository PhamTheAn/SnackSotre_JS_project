const url = "http://localhost:3000/category";

const tableCategory = document.querySelector('#table-category');

const addModalForm = document.querySelector('.form-user');

const editFormSub = document.querySelector('#myEditModal .form-user')

const editForm = new bootstrap.Modal(document.querySelector('#myEditModal'), {
    keyboard: false
});


fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(category => {
        renderProduct(category);    
    });
});

const renderProduct = (category) => {
    const output = `
        <tr class="title-product" data-id='${category.id}'>
            <td>${category.id}</td>
            <td>${category.name}</td>
            <td class='size-edition'>
                <a class="btn-edit-category btn btn-primary btn-sm">Edit</a> |
                <a class="btn-del-category btn btn-danger btn-sm">Del</a>
            </td>
        </tr>
    `;

    tableCategory.insertAdjacentHTML('beforeend', output);

    //delete
    const btnDel = document.querySelector(`[data-id='${category.id}'] .btn-del-category`);
    btnDel.addEventListener('click', (e) => {
        console.log("Delete success");
        const deleteForm = document.getElementById("deleteForm");
        const cancelDeleteButton = document.querySelector(".cancelDelete");
        const btnDelete = document.querySelector(".confirmDelete");
        deleteForm.style.display = "block";
        cancelDeleteButton.addEventListener("click", function() {
        deleteForm.style.display = "none"; // Ẩn form khi click nút "Cancel"
          })
        btnDelete.addEventListener('click', (e)=> {
              fetch(`${url}/${category.id}`, {
                  method: 'DELETE'
              })
              .then(res => res.json)
              .then(() => location.reload()) 
            })
          
        console.log('delete ' + category.name);
             
        
    })

    // //edit
    const btnEdit = document.querySelector(`[data-id='${category.id}'] .btn-edit-category`);
    btnEdit.addEventListener('click', (e) => {
        editForm.show();
        id = category.id;
        const valueNameCategory = document.querySelector('#valueNameCategory');
        console.log(category.name);
        // console.log('edit');
        valueNameCategory.value = category.name;
    // }

    })
}

// Add
addModalForm.addEventListener('submit', (e) => {
console.log("add thành công");
e.preventDefault();
// console.log('modal' + addModalForm.nameProduct.value);
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: addModalForm.nameCategory.value,
    })
})
.then(res => res.json)
.then(data => {
    const dataArr = [];
    dataArr.push(data);
    renderProduct(dataArr)
})
addModalForm.nameCategory = '';
})

// Edit
editFormSub.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Edit success');
    fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: editFormSub.nameCategory.value,
        })
    })
    .then(res => res.json)
    .then(() => location.reload())
     
})

