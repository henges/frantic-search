const binderPosHostsMap = {
    "gufgames.myshopify.com": "Guf",
    "the-hall-of-heroes.myshopify.com": "The Hall of Heroes",
    "cracking-singles.myshopify.com": "Cracking Singles",
    "next-level-games-ringwood.myshopify.com": "Games Portal",
    "good-games-townhall.myshopify.com": "Good Games National",
    "good-games-morley.myshopify.com": "Good Games Morley",
    "good-games-cannington.myshopify.com": "Good Games Cannington",
    "good-games-adelaide-sa.myshopify.com": "Good Games Adelaide",
    "unplugged-games.myshopify.com": "Unplugged Games"
}

const mtgMateMap = {
    "mtgmate.com.au": "MTGMate"
}

var cachedMultimap = {"Snapcaster Mage":[{"name":"Snapcaster Mage","availableQuantity":1,"price":"$45.00","setName":"Innistrad","foil":"No","vendorName":"Games Portal","priceRank":1,"internalPrice":45},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$47.50","setName":"Innistrad","foil":"No","vendorName":"Games Portal","priceRank":2,"internalPrice":47.5},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$48.70","setName":"Innistrad","foil":"No","vendorName":"Good Games National","priceRank":3,"internalPrice":48.7},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$52.30","setName":"The List","foil":"No","vendorName":"Cracking Singles","priceRank":4,"internalPrice":52.3},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$52.90","setName":"Innistrad","foil":"No","vendorName":"The Hall of Heroes","priceRank":5,"internalPrice":52.9},{"name":"Snapcaster Mage","availableQuantity":3,"price":"$56.50","setName":"Innistrad","foil":"No","vendorName":"Games Portal","priceRank":6,"internalPrice":56.5},{"name":"Snapcaster Mage","availableQuantity":3,"price":"$57.60","setName":"The List","foil":"No","vendorName":"Good Games National","priceRank":7,"internalPrice":57.6},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$57.60","setName":"The List","foil":"No","vendorName":"Good Games Morley","priceRank":7,"internalPrice":57.6},{"name":"Snapcaster Mage","availableQuantity":5,"price":"$59.50","setName":"Innistrad","foil":"No","vendorName":"Games Portal","priceRank":8,"internalPrice":59.5},{"name":"Snapcaster Mage","availableQuantity":22,"price":"$60.90","setName":"Innistrad","foil":"No","vendorName":"Guf","priceRank":9,"internalPrice":60.9},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$60.90","setName":"Innistrad","foil":"No","vendorName":"Good Games National","priceRank":9,"internalPrice":60.9},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$60.90","setName":"Innistrad","foil":"No","vendorName":"Good Games Morley","priceRank":9,"internalPrice":60.9},{"name":"Snapcaster Mage","availableQuantity":2,"price":"$60.90","setName":"Innistrad","foil":"No","vendorName":"Good Games Adelaide","priceRank":9,"internalPrice":60.9},{"name":"Snapcaster Mage","availableQuantity":3,"price":"$62.50","setName":"Modern Masters 2017","foil":"No","vendorName":"Games Portal","priceRank":10,"internalPrice":62.5},{"name":"Snapcaster Mage","availableQuantity":2,"price":"$62.50","setName":"Ultimate Masters","foil":"No","vendorName":"Games Portal","priceRank":10,"internalPrice":62.5},{"name":"Snapcaster Mage","availableQuantity":9,"price":"$63.90","setName":"Modern Masters 2017","foil":"No","vendorName":"Guf","priceRank":11,"internalPrice":63.9},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$63.90","setName":"Modern Masters 2017","foil":"No","vendorName":"Good Games National","priceRank":11,"internalPrice":63.9},{"name":"Snapcaster Mage","availableQuantity":3,"price":"$64.30","setName":"Ultimate Masters","foil":"No","vendorName":"Good Games National","priceRank":12,"internalPrice":64.3},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$64.30","setName":"Ultimate Masters","foil":"No","vendorName":"Good Games Adelaide","priceRank":12,"internalPrice":64.3},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$65.00","setName":"Innistrad","foil":"No","vendorName":"MTGMate","priceRank":13,"internalPrice":65},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$134.90","setName":"Ultimate Masters","foil":"Yes","vendorName":"Guf","priceRank":14,"internalPrice":134.9},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$158.60","setName":"Innistrad","foil":"Yes","vendorName":"Good Games National","priceRank":15,"internalPrice":158.6},{"name":"Snapcaster Mage","availableQuantity":4,"price":"$198.30","setName":"Innistrad","foil":"Yes","vendorName":"Guf","priceRank":16,"internalPrice":198.3},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$198.30","setName":"Innistrad","foil":"Yes","vendorName":"Good Games National","priceRank":16,"internalPrice":198.3},{"name":"Snapcaster Mage","availableQuantity":1,"price":"$228.00","setName":"Pro Tour Promos","foil":"Yes","vendorName":"MTGMate","priceRank":17,"internalPrice":228}],"Solitude":[{"name":"Solitude","availableQuantity":1,"price":"$63.40","setName":"Modern Horizons 2","foil":"No","vendorName":"Cracking Singles","priceRank":1,"internalPrice":63.4},{"name":"Solitude","availableQuantity":4,"price":"$65.00","setName":"Modern Horizons 2","foil":"No","vendorName":"MTGMate","priceRank":2,"internalPrice":65},{"name":"Solitude","availableQuantity":1,"price":"$69.70","setName":"Modern Horizons 2","foil":"No","vendorName":"Guf","priceRank":3,"internalPrice":69.7},{"name":"Solitude","availableQuantity":4,"price":"$69.70","setName":"Modern Horizons 2","foil":"No","vendorName":"Good Games Morley","priceRank":3,"internalPrice":69.7},{"name":"Solitude","availableQuantity":2,"price":"$69.70","setName":"Modern Horizons 2","foil":"No","vendorName":"Good Games Cannington","priceRank":3,"internalPrice":69.7},{"name":"Solitude","availableQuantity":3,"price":"$69.70","setName":"Modern Horizons 2","foil":"No","vendorName":"Good Games Adelaide","priceRank":3,"internalPrice":69.7},{"name":"Solitude","availableQuantity":4,"price":"$92.00","setName":"Modern Horizons 2","foil":"No","vendorName":"Games Portal","priceRank":4,"internalPrice":92},{"name":"Solitude","availableQuantity":2,"price":"$92.00","setName":"Modern Horizons 2","foil":"No","vendorName":"MTGMate","priceRank":4,"internalPrice":92},{"name":"Solitude","availableQuantity":2,"price":"$98.30","setName":"Modern Horizons 2","foil":"Yes","vendorName":"Good Games National","priceRank":5,"internalPrice":98.3},{"name":"Solitude","availableQuantity":1,"price":"$98.30","setName":"Modern Horizons 2","foil":"Yes","vendorName":"Good Games Morley","priceRank":5,"internalPrice":98.3},{"name":"Solitude","availableQuantity":1,"price":"$119.00","setName":"Modern Horizons 2 Prerelease Promos","foil":"Yes","vendorName":"Guf","priceRank":6,"internalPrice":119},{"name":"Solitude","availableQuantity":3,"price":"$119.00","setName":"Modern Horizons 2 Prerelease Promos","foil":"Yes","vendorName":"Good Games Adelaide","priceRank":6,"internalPrice":119}]};
var cachedRequestList = [
    {
      "name": "Snapcaster Mage",
      "quantity": "4"
    },
    {
      "name": "Solitude",
      "quantity": "3"
    }
  ];

//Testcomment
window.addEventListener('load', function() {
    var hosts = {...mtgMateMap, ...binderPosHostsMap};
    var checkboxDiv = document.getElementById("checkboxes-list");
    var savedToggles = JSON.parse(localStorage.getItem("frantic-search-toggles"));
    var useToggles = savedToggles && (Object.keys(savedToggles).length === Object.keys(hosts).length);
    for (const [url, name] of Object.entries(hosts)) {
        var li = this.document.createElement("li");
        li.className = "checkbox-list-member";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = url;
        checkbox.checked = useToggles ? savedToggles[url] : true;

        var label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.appendChild(document.createTextNode(name));
        li.appendChild(checkbox);
        li.appendChild(label);
        checkboxDiv.appendChild(li);
    }
});

var waitForJQuery = setInterval(function () {
    if (typeof $ != 'undefined') {

        $("#send-input").on("click", function(e) {
    
            e.preventDefault();
            doQuery();
        });

        //Search shift+enter or ctrl+enter
        $("#input").on("keydown", function(e) {
            if (e.code === "Enter" && (e.shiftKey || e.ctrlKey)) {
                e.preventDefault();
                doQuery();
            }
        })

        clearInterval(waitForJQuery);
    }
}, 10);

var isQueryRunning = false;
// var lastInput = "";

function doQuery() {

    var inputString = $("#input").val();

    if (isQueryRunning /*&& lastInput === inputString*/)
        return;
    
    // lastInput = inputString;
    isQueryRunning = true;
    var inputList = inputString.split("\n");

    spinnerShow();

    var requestList = parseInput(inputList);

    var toggles = {};

    for (var li of $("#checkboxes-list").children()) {
        toggles[`${li.firstElementChild.id}`] = li.firstElementChild.checked;
    }

    localStorage.setItem("frantic-search-toggles", JSON.stringify(toggles));

    var promises = [];

    for (var vendorUrl of Object.keys(binderPosHostsMap)) {
        if (toggles[vendorUrl]) {
            promises.push(createBinderPosPromise(requestList, vendorUrl));
        }
    }

    if (toggles["mtgmate.com.au"]) {
        promises.push(createMtgMatePromise(requestList));
    }

    Promise.all(promises).then((results) => {

        //<String, List<Card>>, with card names as keys
        var cardsMultimap = {};

        results.flat().forEach(card => {
            if (!cardsMultimap.hasOwnProperty(card["name"])){
                cardsMultimap[card["name"]] = [];
            }
            cardsMultimap[card["name"]].push(card);
        });

        deduplicateEntries(cardsMultimap);
        rankPrices(cardsMultimap);

        // var resultStatistics = getResultStatistics(requestList, cardsMultimap);

        createOrUpdateTable(Object.values(cardsMultimap).flat());

        spinnerHide();
        isQueryRunning = false;
    });
}

function parseInput(input) {
    var requestList = [];
    
    for (const line of input) {
        if (!line || line.length === 0)
            continue;
        var quantity, cardName;
        // At the start of a line, match at least one number, then any no. of alphanumeric characters, then any 
        // number of spaces. e.g. "4x Snap" -> "4x ". "234abgdaiogs    Snapcaster Mage" -> "234abgdaiogs    "
        quantityArr = line.match(/\b[0-9]+[A-z|0-9]*\s*/);
        if (quantityArr && quantityArr.length) {
            quantity = quantityArr[0];
        }
        if (!quantity) {
            quantity = "1";
            cardName = line;
        } else {
            cardName = line.substring(line.indexOf(quantity) + quantity.length, line.length);
            // Now get just the numeric quantity
            quantity = quantity.match(/\b[0-9]*/)[0];
        }
        requestList.push({"name": cardName.trim(), "quantity": quantity});
    }

    return requestList;
}

async function createMtgMatePromise(requestList) {

    var requestString = _.chain(requestList)
                            .map((card) => `${card.quantity} ${card.name}`)
                            .reduce((s1, s2) => `${s1}\n${s2}`)
                            .value();

    return $.get("https://fs-cors-anywhere.herokuapp.com/https://www.mtgmate.com.au/cards/decklist_results?utf8=✓&decklist=" +
                encodeURIComponent(requestString))
            .then(r => {
                return processMtgMateResponse(r);
            });
}

async function processMtgMateResponse(response) {

    var list = [];

    //There are two tbodys in the response for some reason, #2 has our data
    $(response).find("tbody").last()
        //For each child elem that's a table row - i.e., for each row
        .children("tr").each(function () { 
            var name = $(this).find("td.card-name").find("a").text().trim();
            if (name.indexOf("(") > 0) {
                name = name.substring(0, name.indexOf("(") - 1);
            }

            list.push({
                "name": name,
                "availableQuantity": parseInt($(this).find("td.available-quantity").text().trim()),
                "price": $(this).find("td.price").text().trim(),
                "setName": $(this).find("td.magic-set-name").find("a").text().trim(),
                "foil": $(this).find("td.card-name").find("span.finish").text().trim() == "Nonfoil" ? "No" : "Yes",
                "vendorName": "MTGMate",
                "priceRank": 0,
                "internalPrice": parseFloat($(this).find("td.price").text().trim().slice(1))
            });
    })

    return list;
}

async function createBinderPosPromise(requestList, host) {

    var requestObj = _.chain(requestList)
                        .map(card => {
                            return {"card": card.name, "quantity": card.quantity}
                        })
                        .value();

    return $.ajax({
        type: 'POST',
        url: `https://portal.binderpos.com/external/shopify/decklist?storeUrl=${host}&type=mtg`,
        data: JSON.stringify(requestObj),
        contentType: "application/json",
        dataType: "json"
    }).then(function (r) {
        //Nothing in the response tells us about the vendor, so embed this info while we still can
        //Saves having to use a map later
        r.forEach((v) => v["vendorName"] = binderPosHostsMap[host]);
        return processBinderPosResponse(r);
    });
}

async function processBinderPosResponse(response) {
    return _.chain(response)
            .flatMap((entry) => _.map(entry["products"], (card) => {
                //variants is always a single-element array
                var variants = card["variants"][0];

                return {
                    "name": card["name"],
                    "availableQuantity": variants["quantity"],
                    "price": `$${variants["price"].toFixed(2)}`,
                    "setName": card["setName"],
                    "foil": variants["title"].toLowerCase().match(/foil/) ? "Yes" : "No",
                    "vendorName": entry["vendorName"],
                    "priceRank": 0,
                    "internalPrice": variants["price"]
                };
            }))
            .value();
}

function rankPrices(cardsMultimap) {
    //Mutates in place
    Object.values(cardsMultimap).forEach(function(arr) {
        arr.sort(function (a, b) { 
            if (a["internalPrice"] < b["internalPrice"])
                return -1;
            if (a["internalPrice"] == b["internalPrice"])
                return 0;
            else return 1;
        });
        var lastRank = 0;
        for (var i = 0; i < arr.length; i++) {
            var priceRank;
            if (i > 0 && arr[i]["internalPrice"] == arr[i - 1]["internalPrice"]) {
                priceRank = lastRank;
            } else {
                priceRank = lastRank + 1;
            }
            arr[i]["priceRank"] = priceRank;
            lastRank = priceRank;
        }
    })
}

//Helps with shops like Guf that have multiple identical entries
function deduplicateEntries(cardsMultimap) {
    
    for (var [cardName, cards] of Object.entries(cardsMultimap)) {
        for (var i = 0; i < cards.length - 1; i++) {
            for (var j = i + 1; j < cards.length; j++) {
                if (!cards[i] || !cards[j] || cards[i]["internalPrice"] != cards[j]["internalPrice"]) {
                    break;
                }

                if (cards[i]["setName"] == cards[j]["setName"] &&
                        cards[i]["foil"] == cards[j]["foil"] &&
                        cards[i]["vendorName"] == cards[j]["vendorName"]) {
                        
                    cards[i]["availableQuantity"] += cards[j]["availableQuantity"];
                    cards[j] = undefined;
                }
            }
        }
        cardsMultimap[cardName] = _.compact(cards);
    }
}

function getResultStatistics(requestList, cardsMultimap) {

    var resultStatistics = {"cards": [], "vendors": []};

    var vendorMultimap = {};

    for (var [cardName, cardList] of Object.entries(cardsMultimap)) {

        //find the average nonfoil price of a card
        var cardListNonFoil = _.filter(cardList, card => card.foil === "No");
        var avgNonfoilPrice = averagePrice(cardListNonFoil);
        resultStatistics.cards.push({"name": cardName, "avg": avgNonfoilPrice});

        //add this card to the vendor map
        for (var card of cardListNonFoil) {

            var vendorName = card.vendorName;
            //Init the vendor if not initialised
            if (!vendorMultimap.hasOwnProperty([vendorName])) {
                vendorMultimap[vendorName] = {
                    "name": vendorName,
                    "cards": {},                        //A map of card names to card lists for this vendor
                    "fulfillableQuantityCount": 0,      //How many individual items the vendor can fulfil
                    "fulfillableCardsCount": 0,         //How many cards this vendor can fulfil in the full requested quantity, regardless of edition
                    // "averagePriceRank": 0,              //The average price rank across this vendor's relevant inventory
                    "totalOrderPrice": 0.00,            //The total price of the order (obviously)
                    "totalPriceRankAcrossCheapest": 0   //
                };
            }
            //Init the card for this vendor if not initialised
            if (!vendorMultimap[vendorName].cards.hasOwnProperty(cardName)) {
                vendorMultimap[vendorName].cards[cardName] = {"entries": [], "availableQuantity": 0, "priceRankAcrossCheapest": 0};
            }
            var vendorCardObj = vendorMultimap[vendorName].cards[cardName];
            vendorCardObj.entries.push(card);
            vendorCardObj.availableQuantity += card.availableQuantity;
        }
    }

    //At this point we can determine how much of the order the vendor can fulfil
    for (var card of requestList) {

        for (var [vendorName, vendor] of Object.entries(vendorMultimap)) {
            var vendorCardObj = vendor.cards[card.name];
            //If the vendor doesn't have this card in stock at all, skip them
            if (!vendorCardObj) {
                continue;
            }

            //This vendor has some amount of this card. Can they fulfil the entire requested amount?
            var canFulfilCard = card.quantity <= vendorCardObj["availableQuantity"];
            vendorCardObj["canFulfilCard"] = canFulfilCard;
            if (canFulfilCard) {
                vendor["fulfillableCardsCount"]++;
            }

            //If the vendor has more copies than we requested, don't incorporate that into our metric. We just want to see
            //if they can fulfil some part of the order.
            vendor["fulfillableQuantityCount"] += Math.min(vendorCardObj["availableQuantity"], card.quantity);
            //Calculate the total price if we were to buy all the cheapest copies we need that the vendor has.
            for (var i = card.quantity, j = 0; i > 0 && j < vendorCardObj["entries"].length; j++) {
                var cardEditionEntity = vendorCardObj["entries"][j];
                //Ensure we only account for what we need if vendor has extra copies
                var numCopies = Math.min(i, cardEditionEntity.availableQuantity);
                vendorCardObj.priceRankAcrossCheapest += (cardEditionEntity.priceRank * numCopies);
                vendor.totalOrderPrice += (cardEditionEntity.internalPrice * numCopies);
                i -= numCopies;
                // disgusting hack, but it's quick n easy
                if (i <= 0 || j + 1 >= vendorCardObj["entries"].length) {
                    vendor.totalPriceRankAcrossCheapest += vendorCardObj.priceRankAcrossCheapest;
                    console.log(`cardname: ${card.name} vendor: ${vendorName}  priceRankAcrossCheapest: ${vendorCardObj.priceRankAcrossCheapest}, totalPriceRankAcrossCheapest: ${vendor.totalPriceRankAcrossCheapest}`)
                }
            }
        }
    }

    //Calculate average price rank for this vendor across all cards 
    for (var vendor of Object.values(vendorMultimap)) {
        var vendorCardEntries = _.flatMap(Object.values(vendor.cards), (card) => card.entries);
        // vendor.averagePriceRank = _.chain(vendorCardEntries)
        //                             .map(entry => entry.priceRank)
        //                             .reduce((e1, e2) => e1 + e2)
        //                             .value() / vendorCardEntries.length;
        vendor["averagePriceRankAcrossCheapest"] = vendor.totalPriceRankAcrossCheapest / vendor.fulfillableQuantityCount;
    }

    //Flatmap of all entries across all vendors
    var totalEntriesList = _.chain(Object.values(vendorMultimap))
                            .flatMap(vendor => vendor.cards)
                            .flatMap(card => Object.values(card))
                            .flatMap(card => card.entries)
                            .value();

    //Average price rank across all vendors
    // var totalAveragePriceRank = _.chain(totalEntriesList)
    //                                 .map(entry => entry.priceRank)
    //                                 .reduce((e1, e2) => e1 + e2)
    //                                 .value() / totalEntriesList.length;

    //The overall quantity of cards requested
    var totalRequestedCardCount = _.chain(requestList)
                                    .flatMap((card) => card.quantity)
                                    .reduce((c1, c2) => parseInt(c1) + parseInt(c2))
                                    .value();

    var sortedVendorMultimap = [];

    var orderedByPriceRank = Object.values(vendorMultimap).sort((v1, v2) => { 
        if (v1.averagePriceRankAcrossCheapest < v2.averagePriceRankAcrossCheapest)
            return -1;
        if (v1.averagePriceRankAcrossCheapest == v2.averagePriceRankAcrossCheapest)
            return 0;
        return 1;
    });

    for (var i = 0; i < orderedByPriceRank.length; i++) {
        vendorMultimap[orderedByPriceRank[i].name].priceRankScore = 25 / (i + 1);
    }

    for (var [vendorName, vendor] of Object.entries(vendorMultimap)) {
        vendor.totalScore = (vendor.priceRankScore) + 
                            ((vendor.fulfillableCardsCount / requestList.length) * 25) + 
                            ((vendor.fulfillableQuantityCount / totalRequestedCardCount) * 50);
        sortedVendorMultimap.push(vendor);
    }

    sortedVendorMultimap.sort((v1, v2) => { 
        if (v1.totalScore < v2.totalScore)
            return -1;
        if (v1.totalScore == v2.totalScore)
            return 0;
        return 1;
    }).reverse();

    var wholeOrderFulfillers = [];

    //One last check: look for vendors who can fulfil the ENTIRE order, and rank them just on order price
    for (var vendor of sortedVendorMultimap) {
        if (vendor.fulfillableQuantityCount === totalRequestedCardCount) {
            wholeOrderFulfillers.push(vendor);
        }
    }

    wholeOrderFulfillers.sort((v1, v2) => { 
        if (v1.totalOrderPrice < v2.totalOrderPrice)
            return -1;
        if (v1.totalOrderPrice == v2.totalOrderPrice)
            return 0;
        return 1;
    });

    console.log(sortedVendorMultimap);
    console.log(wholeOrderFulfillers);
}

function averagePrice(cardList) {

    var totalPrice = _.chain(cardList)
                        .map(card => card["internalPrice"])
                        .reduce((p1, p2) => p1 + p2)
                        .value();

    return totalPrice / cardList.length;
}

function createOrUpdateTable(data) {

    if ($.fn.dataTable.isDataTable('#fs-table')) {
        $('#fs-table').DataTable().destroy();
    }

    $('#fs-table').DataTable( {
        "processing": true,
        "data": data,
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "price" },
            { "data": "availableQuantity" },
            { "data": "setName" },
            { "data": "priceRank" },
            { "data": "foil" },
            { "data": "vendorName" }
        ]
    } );

    $('#fs-table').css("visibility", "visible");
}

function spinnerShow() {
    $("#working").css("animation-play-state", "running");
    $("#working").css("visibility", "visible");
}

function spinnerHide() {
    $("#working").css("animation-play-state", "paused");
    $("#working").css("opacity", "0");
    $("#working").css("visibility", "hidden");
}