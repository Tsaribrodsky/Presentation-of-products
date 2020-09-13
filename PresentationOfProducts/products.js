$(document).ready(function(){
    var div = document.getElementsByClassName('content')[0],
        img = div.getElementsByClassName('image'),
        productName = div.getElementsByClassName('productName'),
        price = div.getElementsByClassName('price'),
        unitInStock = div.getElementsByClassName('unitInStock'),
        deliveryOn = div.getElementsByClassName('deliveryOn'),
        data = {
            "items": [
                {
                    "img": "img/chai.jpg",
                    "ProductID": "1",
                    "ProductName": "Chai",
                    "UnitPrice": "18",
                    "UnitsInStock": "39",
                    "DeliveryOn": "new Date(1996, 8, 20)"
                },
                {
                    "img": "img/chang.png",
                    "ProductID": "2",
                    "ProductName": "Chang",
                    "UnitPrice": "19",
                    "UnitsInStock": "17",
                    "DeliveryOn": "new Date(1996, 7, 12)"
                },
                {
                    "img": "img/Aniseed Syrup.jpg",
                    "ProductID": "3",
                    "ProductName": "Aniseed Syrup",
                    "UnitPrice": "10",
                    "UnitsInStock": "0",
                    "DeliveryOn": "new Date(1996, 8, 26)"
                },
                {
                    "img": "img/Cajun Seasoning.jpg",
                    "ProductID": "4",
                    "ProductName": "Chef Anton's Cajun Seasoning",
                    "UnitPrice": "22",
                    "UnitsInStock": "53",
                    "DeliveryOn": "new Date(1996, 9, 19)"
                },
                {
                    "img": "img/Gumbo Mix.jpg",
                    "ProductID": "5",
                    "ProductName": "Chef Anton's Gumbo Mix",
                    "UnitPrice": "21.35",
                    "UnitsInStock": "0",
                    "DeliveryOn": "new Date(1996, 7, 17)"
                },
                {
                    "img": "img/Boysenberry Spread.jpeg",
                    "ProductID": "6",
                    "ProductName": "Grandma's Boysenberry Spread",
                    "UnitPrice": "25",
                    "UnitsInStock": "120",
                    "DeliveryOn": "new Date(1996, 9, 19)"
                },
                {
                    "img": "img/Organic Dried Pears.jpeg",
                    "ProductID": "7",
                    "ProductName": "Uncle Bob's Organic Dried Pears",
                    "UnitPrice": "30",
                    "UnitsInStock": "0",
                    "DeliveryOn": "new Date(1996, 7, 22)"
                },
                {
                    "img": "img/Cranberry Sauce.jpg",
                    "ProductID": "8",
                    "ProductName": "Northwoods Cranberry Sauce",
                    "UnitPrice": "40",
                    "UnitsInStock": "0",
                    "DeliveryOn": "new Date(1996, 11, 1)"
                },
                {
                    "img": "img/Mishi Kobe Niku.jpg",
                    "ProductID": "9",
                    "ProductName": "Mishi Kobe Niku",
                    "UnitPrice": "97",
                    "UnitsInStock": "29",
                    "DeliveryOn": "new Date(1997, 1, 21)"
                },
                {
                    "img": "img/Ikura.jpg",
                    "ProductID": "10",
                    "ProductName": "Ikura",
                    "UnitPrice": "31",
                    "UnitsInStock": "31",
                    "DeliveryOn": "new Date(1996, 8, 5)"
                }
            ]
        };

    data.items.forEach(function(v,i) {
        img[i].src = v.img;
        productName[i].innerHTML = v.ProductName;
        price[i].innerHTML = "Price: " + v.UnitPrice + "$";
        unitInStock[i].innerHTML = "Units in stock: " + v.UnitsInStock;
        deliveryOn[i].innerHTML = "Next delivery: " + v.DeliveryOn;
    });

    $(".hidden").hide();
    $(".flip").click(function(){
        $(this).next().slideToggle(700);
    });

    $('.unitInStock').each(function () {
        if ($(this).text() === `Units in stock: 0`) {
            $(this).append('<p style="color: red">'+'Out of stock'+'</p>');
        }else if (($(this).text() !== `Units in stock: 0`)) {
            $(this).append('<p>' + '<br>' + '</p>')
        }
    });
});
