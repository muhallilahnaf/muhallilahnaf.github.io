function ipLookUp() {
    var keys = ['ip', 'isp', 'latitude', 'longitude', 'city', 'country_name', 'continent_name', 'region', 'district', 'timezone_name', 'asn'];
    $.getJSON("https://json.geoiplookup.io/")
        .done(function (response) {
            $("#ip").append('<p>Your IP info:</p>\n');
            $("#ip").append('<table>');
            $.each(keys, function (index, value) {
                $("#ip").append('<tr><td class="colA">' + value + '</td><td class="colB">' + response[value] + '</td></tr>');
            });
            $("#ip").append('</table>');
            console.log("success");
        })
        .fail(function () {
            $("#ip").append('<p>IP retrieving failed (try to disable ad-block and then refresh)</p>');
        });
}
