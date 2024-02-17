// first need to count cart the home cart
const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
// let sum = 0;
for (let btn of allBtn) {
    btn.addEventListener('click', function (event) {
        count = count + 1;
        setInnerText('cart-count', count);
        // select price and place name
        const placeName = event.target.parentNode.childNodes[1].innerText
        console.log(placeName);


        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText
        console.log(price);
        // show price and place name in a ul container
        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;

        const p2 = document.createElement('p');
        p2.innerText = price;

        // append
        li.appendChild(p)
        li.appendChild(p2)
        selectedContainer.appendChild(li);
        // show total cost
        // let totalCost = document.getElementById('total-cost').innerText;
        // let ConvertedTotalCost = parseInt(totalCost);


        // let sum = ConvertedTotalCost + parseInt(price);
        // setInnerText('total-cost', sum);
        totalCost('total-cost', price);

        // grand total
        // let grandTotal = document.getElementById('grand-total').innerText;
        // let ConvertedGrandTotal = parseInt(grandTotal);

        // const sum2 = ConvertedGrandTotal + parseInt(price);

        // setInnerText('grand-total', sum2);
        // everyTotal('grand-total', price)
        grandTotalCost(); 
    })
}

// set innerText function
// for set inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
//for make total function
function totalCost(id, value) {
    let totalCost = document.getElementById(id).innerText;
    let ConvertedTotalCost = parseInt(totalCost);


    let sum = ConvertedTotalCost + parseInt(value);
    setInnerText(id, sum);

}
function grandTotalCost(category) {
    let totalCost = document.getElementById('total-cost').innerText;
    let ConvertedTotalCost = parseInt(totalCost);

    if(category == 'bus'){
        const btn = document.getElementById('btn')
        btn.style.backgroundColor = 'red';
        setInnerText('grand-total', ConvertedTotalCost + 100);
        btn.innerText = "আরে বস";
        btn.disabled = true;

    }
    else if(category == 'train'){
        setInnerText('grand-total', ConvertedTotalCost + 200)
    }
    else if(category == 'flight'){
        setInnerText('grand-total', ConvertedTotalCost + 500)
    }
    else{
        setInnerText('grand-total', ConvertedTotalCost)
    }
    
}
// 
// 
// document.getElementsByClassName('category-btn').disabled = true;
