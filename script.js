import { getStockData } from './fakeStockAPI.js';

// Select elements
const nameEl = document.getElementById("name-el");
const symbolEl = document.getElementById("symbol-el");
const priceEl = document.getElementById("price-el");
const timeEl = document.getElementById("time-el");
const trendEl = document.getElementById("trend-icon");



let previousPrice = 0;
// Call function

function updateStock() {
    // Update DOM
    nameEl.textContent = getStockData().name;
    symbolEl.textContent = getStockData().sym;
    priceEl.textContent = getStockData().price;
    timeEl.textContent = getStockData().time;
}

