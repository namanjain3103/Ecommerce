// function addToCart(n) {
//     // let item=document.getElementById(n)
//     let cartItems=document.getElementById("cartItems")
//     // let data=``

//     cartItems.innerHTML=n.innerHTML
//     console.log(n.innerHTML)
//     // console.log(n)
// }

function addToCart(n){
    
    // console.log(n)
    // console.log(n.childNodes)
    var values=n.childNodes
    // console.log(values[1].getAttribute("src"))
    // console.log(values[3].innerText)
    if(localStorage.getItem("items") == null){
        jsonarray = []
        jsonarray.push([values[1].getAttribute("src"),values[3].innerText,values[5].innerText])
        // console.log(jsonarray[0][0])
        localStorage.setItem('items',JSON.stringify(jsonarray))
    }
    else{
        jsonarray = JSON.parse(localStorage.getItem("items"))
        jsonarray.push([values[1].getAttribute("src"),values[3].innerText,values[5].innerText])
        console.log(jsonarray[0][0])
        localStorage.setItem('items',JSON.stringify(jsonarray))
    }
    update()
}

function update(){
    // console.log("hi")
    
    // console.log(cartItems)
    if(localStorage.getItem("items") != null){
        let cartItems=document.getElementById("cartItems")
        jsonarray = JSON.parse(localStorage.getItem("items"))
        data='<tr><th>Product</th><th>Quantity</th><th>Subtotal</th></tr>'
        // console.log(jsonarray[0][0])
        console.log(jsonarray[0])
        for (var i = 0; i < jsonarray.length; i++) {
            data += `<tr>
            <td>
                <div class="cartInfo">
                    <img src="${jsonarray[i][0]}" >
                    <div>
                        <p>${jsonarray[i][1]}</p>
                        <small>Price:${jsonarray[i][2]} <br></small>
                        <button class="btnCart">Remove</button>
                    </div>
                </div>
            </td>
            <td><input type="number" value="1"></td>
            <td>${jsonarray[i][2]}</td>
        </tr>`
        }
        cartItems.innerHTML=data
        localStorage.setItem('items',JSON.stringify(jsonarray))
    }
    else{
        console.log("None")
    }
}

setTimeout(()=>{update()},0)