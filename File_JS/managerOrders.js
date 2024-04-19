const url = 'http://localhost:3000/order';

fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(order => {
                renderProduct(order);    
            });
        });

        const tableOrders = document.querySelector("#table-orders");
        // function createOrderHTML(idProduct) {
        //     return `
        //       <ul>
        //         ${idProduct.map(idPrd => `<li>${idPrd}</li>`).join('')}
        //       </ul>
        //     `;
        //   }
        const renderProduct = (order) => {
            const output = `
                <tr class="title-product" data-id='${order.id}'>
                    <td>${order.id}</td>
                    <td>${order.nameCustomer}</td>
                    <td>${order.emailCustomer}</td>
                    <td>${order.addressCustomer}</td>
                    <td>${order.phoneNumberCustomer}</td>
                    <td>${order.idProduct.map(obj=> `ID: ${obj.idProduct}`)}</td>
                    <td class='size-edition'>
                    <a class="btn-detail-order btn btn-success btn-sm">Detail</a> 
                    <a class="btn-del-order btn btn-danger btn-sm">Del</a>
                </td>
                </tr>
            `
            tableOrders.insertAdjacentHTML('beforeend', output)
            const btnDelOrder = document.querySelector(`[data-id='${order.id}'] .btn-del-order`).addEventListener('click', (e)=> {
              const deleteForm = document.getElementById("deleteForm");
              const cancelDeleteButton = document.querySelector(".cancelDelete");
              const btnDelete = document.querySelector(".confirmDelete");
              deleteForm.style.display = "block";
              cancelDeleteButton.addEventListener("click", function() {
                deleteForm.style.display = "none"; // Ẩn form khi click nút "Cancel"
              })

              btnDelete.addEventListener('click', (e)=> {
                fetch(`${url}/${order.id}`, {
                  method: 'DELETE'
              })
              .then(res => res.json)
              .then(() => {
                alert("DELETE SUCCESS")
                location.reload()  
              })
              })
            })

            const outputDetail = order.idProduct;
            console.log(outputDetail[0].idProduct);
            console.log(outputDetail);
            const btnDetailOder = document.querySelector(`[data-id='${order.id}'] .btn-detail-order`).addEventListener('click', (e)=> {
              const box_detail = document.querySelector('.box-order-detail')
              box_detail.style.display = "block";
              console.log(order.id);
              // const tableOrderDetail = document.querySelector("#table-orders-detail")
              const tableBody = document.getElementById('tableBody');

              outputDetail.forEach(obj => {
                const row = document.createElement('tr');
                const idOrder = document.createElement('td')
                const idProduct = document.createElement('td')
                const nameProduct = document.createElement('td')
                const boxImageProduct = document.createElement('td')
                const imageProduct = document.createElement('img')
                const priceProduct = document.createElement('td')
                
                idOrder.textContent = order.id;
                idProduct.textContent = obj.idProduct;
                nameProduct.textContent = obj.nameProduct;
                imageProduct.src = obj.image;
                priceProduct.textContent = obj.price + ' đ';

                row.appendChild(idOrder);
                row.appendChild(idProduct);
                row.appendChild(nameProduct);
                boxImageProduct.appendChild(imageProduct);
                row.appendChild(boxImageProduct);
                row.appendChild(priceProduct);

                tableBody.appendChild(row);

              })

              
                
            })


            const btnClose = document.querySelector('.btn-close').addEventListener('click', (e)=> {
              const box_detail = document.querySelector('.box-order-detail');
              box_detail.style.display = "none";
              location.href = window.location.hash
            })
          }
