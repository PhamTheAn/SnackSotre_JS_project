
const showManagerProduct = () => {
    return `
    <div class="container">
    <div class="d-flex justify-content-evenly mt-5 mb-2">
        <a href="product_manager.html" class="btn btn-primary">MANAGER PRODUCTS</a>
        <a href="order_manager.html" class="btn btn-primary">MANAGER ORDERS</a>
    </div>
</div>
<div class="container">
    <!-- <h2>LIST PRODUCT</h2> -->
    <!-- Button trigger modal -->
    <button type="button" class="mb-2 btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ADD PRODUCTS
    </button>

    <!-- Modal add -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add new products</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form-user">
                        <div class="form-group">
                            <label class="mb-2">Name product</label>
                            <input type="text" class="form-control" name="nameProduct"
                                placeholder="Enter Name product">
                        </div>
                        <div class="form-group">
                            <label class="mb-2">Description</label>
                            <input type="text" class="form-control" name="description"
                                placeholder="Enter Description">
                        </div>
                        <div class="form-group">
                            <label class="mb-2">Price</label>
                            <input type="text" class="form-control" name="price" placeholder="Enter Price">
                        </div>
                        <div class="form-group">
                            <label class="mb-2">Image url</label>
                            <input type="text" class="form-control" name="image" placeholder="Enter image">
                        </div>

                        <button type="submit" class="mt-3 btn btn-primary">Save</button>
                    </form>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
            </div>
        </div>
    </div>
    <!-- Modal edit  -->
   <div id="myEditModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit new products</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form-user">
                        <div class="form-group">
                            <label class="mb-2">Name product</label>
                            <input type="text" class="form-control" name="nameProduct"
                                placeholder="Enter Name product">
                        </div>
                        <div class="form-group">
                            <label class="mb-2">Description</label>
                            <input type="text" class="form-control" name="description"
                                placeholder="Enter Description">
                        </div>
                        <div class="form-group">
                            <label class="mb-2">Price</label>
                            <input type="text" class="form-control" name="price" placeholder="Enter Price">
                        </div>
                        <div class="form-group">
                            <label class="mb-2">Image url</label>
                            <input type="text" class="form-control" name="image" placeholder="Enter image">
                        </div>

                        <button type="submit" class="mt-3 btn btn-primary">Update products</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 

    <table id="table-products" class="table table-bordered">
        <tr class="title-product">
            <th>Name product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
        </tr>


    </table>
</div>
    `
    
}

export {showManagerProduct}