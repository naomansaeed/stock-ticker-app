import { getStockData } from './fakeStockAPI.js';

// Select elements
const nameEl = document.getElementById("name-el");
const symbolEl = document.getElementById("symbol-el");
//const priceEl = document.getElementById("price-el");
const timeEl = document.getElementById("time-el");
const trendEl = document.getElementById("trend-icon");
const price = document.getElementById("price-value");



let previousPrice = null;
// Call function

function updateStock() {
    const data = getStockData();
    // Update DOM
    nameEl.textContent = data.name;
    symbolEl.textContent = data.sym;
    //priceEl.querySelector('#price-value').textContent = data.price.toFixed(2);
    price.textContent = data.price.toFixed(2);
    timeEl.textContent = data.time;

    //compare previous price
    if(previousPrice!==null){

        trendEl.classList.remove('trend-up', 'trend-down', 'trend-unchanged');

        if(data.price > previousPrice){
            trendEl.textContent = "  ▲";
            trendEl.classList.add('trend-up');
        }
        else if (data.price < previousPrice) {
            trendEl.textContent = "  ▼";
            trendEl.classList.add('trend-down');
        }
        else{
            trendEl.textContent = "  ►";
            trendEl.classList.add('trend-unchanged');
        }
    }

    previousPrice = data.price;
}

updateStock();
setInterval(updateStock,1500);