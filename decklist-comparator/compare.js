var lastOutput;

var waitForJQuery = setInterval(function () {
    if (typeof $ != 'undefined') {

        $("#send-input").on("click", function(e) {
    
            e.preventDefault();
            doQuery();
        });

        $("#copy-clipboard").on("click", function(e) {
    
            e.preventDefault();
            copyToClipboard();
        });

        clearInterval(waitForJQuery);
    }
}, 10);

function doQuery() {

    var listA = parseInput($("#listA").val().split("\n"));
    var listB = parseInput($("#listB").val().split("\n"));
    var comparedList = compareLists(listA, listB);
    lastOutput = finalMapToString(comparedList);

    createOrUpdateTable(comparedList);
}

function parseInput(input) {
    var map = {};
    
    for (const line of input) {
        if (!line || line.length === 0)
            continue;
        var quantity, cardName;
        quantity = line.match(/\b[0-9]*/)[0];
        if (!quantity) {
            quantity = "1";
            cardName = line;
        } else {
            cardName = line.substring(line.indexOf(quantity) + quantity.length + 1, line.length);
        }
        cardName.trim();
        map[cardName.toLowerCase()] = quantity;
    }

    return map;
}

function compareLists(listA, listB) {
    return _.chain(_.clone(listB))
            .mergeWith(listA, (elem1, elem2) => {
                if (!elem1) return -elem2; return elem1 - elem2;
            })
            .pickBy(v => !(v == 0))
            .map((v, k) => {
                return {"name": applyCapitalisation(k), "quantity": `${v}`};
            })
            .value();
}

function applyCapitalisation(name) {
    return _.chain(name.split(/-|,|\s|\b/))
            .map(v => (v !== "of" && v !== "and" && v !== "the") ? 
                    v.charAt(0).toUpperCase() + v.slice(1) : 
                    v)
            .reduce((v1, v2) => v1.concat(` ${v2}`))
            .value();
}

function finalMapToString(map) {

    return _.chain(_.clone(map))
            .filter((value) => value["quantity"] > 0)
            .map((value) => `${value["quantity"]} ${value["name"]}`)
            .reduce((v1, v2) => `${v1}\n${v2}`)
            .value();
}

function copyToClipboard() {
    if (lastOutput)
        navigator.clipboard.writeText(lastOutput);
}

function createOrUpdateTable(data) {

    if ($.fn.dataTable.isDataTable('#comparator-table')) {
        $('#comparator-table').DataTable().destroy();
    }

    $('#comparator-table').DataTable( {
        "processing": true,
        "data": data,
        "pageLength": 150,
        "columns": [
            { "data": "name"},
            { "data": "quantity" },
        ],
        "order": [[1, "desc"]]
    } );

    $('#response').css("visibility", "visible");
}