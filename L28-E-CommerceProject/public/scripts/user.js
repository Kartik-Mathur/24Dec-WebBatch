/////////////////////// CODE FOR ADD TO CART STARTS ///////////////////////
let cartItems = document.querySelector('.cartItems');
cartItems.addEventListener('click', (ev) => {
    // console.log(ev.target);
    if (ev.target.classList.contains('decreaseQuantityBtn')) {
        let id = ev.target.parentElement.nextElementSibling.getAttribute('id');
        // console.log(id);
        axios.get(`/user/cart/decrease?id=${id}`).then(({ data }) => {
            // console.log(data);
            let { cart, totalPrice, cartQuantity } = data;
            document.querySelector('.totalPrice').innerText = totalPrice;
            cartItems.innerHTML = "";
            // console.log(cart)
            cart.forEach(p => {
                // totalPrice += parseInt(p.id.price) * parseInt(p.quantity);
                let li = document.createElement('li');
                li.innerHTML = `
                <img src=${p.id.imageUrl}></img><br>
                Name: <span>${p.id.name}</span> <br>
                Description: <span>${p.id.description}</span><br>
                Price: <span>${p.id.price}</span><br>
            `
                // if (p.id.reviews.length > 0) {
                //     let str = ""
                //     p.id.reviews.forEach(item => {
                //         str += `${item.details}, ${items.rating}`
                //     });
                // }
                // li.innerText += str;
                li.innerHTML += `<div class="quantity">
                                    <button class="decreaseQuantityBtn">-</button> Quantity: ${p.quantity} <button
                                         class="increaseQuantityBtn">+</button>
                                </div>
                                <div style="display: none;" id="${p.id._id}"></div>
            `
                cartItems.appendChild(li);
                document.querySelector('.cartQuantity').innerText = cartQuantity;
            });
        }).catch(err => {
            alert("Not able to update cart");
        })
    }
    else if(ev.target.classList.contains('increaseQuantityBtn')){
        let id = ev.target.parentElement.nextElementSibling.getAttribute('id');
        // console.log(id);
        axios.get(`/user/cart/increase?id=${id}`).then(({ data }) => {
            // console.log(data);
            let { cart, totalPrice, cartQuantity } = data;
            document.querySelector('.totalPrice').innerText = totalPrice;
            cartItems.innerHTML = "";
            // console.log(cart)
            cart.forEach(p => {
                // totalPrice += parseInt(p.id.price) * parseInt(p.quantity);
                let li = document.createElement('li');
                li.innerHTML = `
                <img src=${p.id.imageUrl}></img><br>
                Name: <span>${p.id.name}</span> <br>
                Description: <span>${p.id.description}</span><br>
                Price: <span>${p.id.price}</span><br>
            `
                // if (p.id.reviews.length > 0) {
                //     let str = ""
                //     p.id.reviews.forEach(item => {
                //         str += `${item.details}, ${items.rating}`
                //     });
                // }
                // li.innerText += str;
                li.innerHTML += `<div class="quantity">
                                    <button class="decreaseQuantityBtn">-</button> Quantity: ${p.quantity} <button
                                         class="increaseQuantityBtn">+</button>
                                </div>
                                <div style="display: none;" id="${p.id._id}"></div>
            `
                cartItems.appendChild(li);

                document.querySelector('.cartQuantity').innerText = cartQuantity;
            });
        }).catch(err => {
            alert("Not able to update cart");
        })
    }
})

/////////////////////// CODE FOR ADD TO CART ENDS ///////////////////////////