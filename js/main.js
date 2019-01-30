$(document).ready(function () {

    function getPLNData() {
        let buyPrice = $('#buy-price').html();
        let sellPrice = $('#sell-price').html();

        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            let PLNbuy = data.PLN.buy.toFixed(2);
            let PLNsell = data.PLN.sell.toFixed(2);
            let PLNsym = data.PLN.symbol;

            $('#buy-price').text(PLNbuy + PLNsym);

            $('#sell-price').text(PLNsell + PLNsym);

            if (buyPrice > PLNbuy + PLNsym) {
                $('#buy-arrow').removeClass().addClass('fa fa-arrow-down');
            } else if (buyPrice < PLNbuy + PLNsym) {
                $('#buy-arrow').removeClass().addClass('fa fa-arrow-up');
            } else {
                $('#buy-arrow').removeClass().addClass('fa fa-minus');
            }

            if (sellPrice > PLNsell + PLNsym) {
                $('#sell-arrow').removeClass().addClass('fa fa-arrow-down');
            } else if (sellPrice < PLNsell + PLNsym) {
                $('#sell-arrow').removeClass().addClass('fa fa-arrow-up');
            } else {
                $('#sell-arrow').removeClass().addClass('fa fa-minus');
            }

        })
    };
    getPLNData();
    setInterval(getPLNData, 300);
});
