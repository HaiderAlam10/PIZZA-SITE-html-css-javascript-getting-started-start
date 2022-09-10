


var addItemId = 0;
function addItemToCart(item) {
    addItemId += 1;

    // print counter, print the selected element
    console.log({ addItemId, item });

    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);

    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].src);
    // print product image src
    console.log("product image src", item.children[0]);

    var title = document.createElement('div');
    title.setAttribute("class", "dog");
    title.innerText = item.children[1].innerText;
    // print product name
    console.log("product name", item.children[1]);

    var label = document.createElement('div');
    // print price
    console.log("price", item.children[2]);

    // print price text
    console.log("price text", item.children[2].innerText);
    label.innerText = item.children[2].innerText;

    var select = document.createElement('span');

    // print the actual value without '£'
    console.log("value", item.children[2].innerText.substring(1));
    label.append(select);

    var cartItems = document.getElementById('title');
    // print the element
    console.log("cartItems", cartItems);

    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick', 'del(' + addItemId + ')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}

function del(item) {
    document.getElementById(item).remove();
}
