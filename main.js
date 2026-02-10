function discount_percent() {
    let listprice = Number(document.getElementById('base').value);
    let sellingprice = Number(document.getElementById('height').value);
    let discountpercent = ('listprice' - 'sellingprice') / 'listprice' * 100;
    document.getElementById('output').innerHTML = 'You are eligible for' + discountpercent + '%';
}