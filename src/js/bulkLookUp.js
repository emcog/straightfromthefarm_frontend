var bulkTimeout, $bulkPostcodeInput = $("#bulk-postcodes-input").keyup(function(event) {
    clearTimeout(bulkTimeout);
    bulkTimeout = setTimeout(function() {
        var data;
        try {
            data = JSON.parse($bulkPostcodeInput.val());
            if (Object.keys(data).length > 1)
                throw "Invalid";
            if (!data["postcodes"])
                throw "Invalid";
            if (!Array.isArray(data["postcodes"]))
                throw "Invalid";
            $bulkPostcodeInput.removeClass("invalid");
        } catch (e) {
            $bulkPostcodeInput.addClass("invalid");
        }
    }, 1000);
});


$("#bulk-postcodes").click(function(event) {
    event.preventDefault();
    var $result = $("#bulk-postcodes-result"), data = $bulkPostcodeInput.val(), postcodes;
    try {
        postcodes = JSON.parse(data);
        $.post("/postcodes", postcodes).done(function(data) {
            displayJsonResult($result, data);
        }).fail(function(error) {
            displayJsonResult($result, error.responseJSON);
        });
    } catch (e) {
        $bulkPostcodeInput.addClass("invalid");
    }