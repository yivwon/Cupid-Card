$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_reset = $("#reset");

    function startVibratingInterval() {
        setInterval(() => {
            
            if (!envelope.hasClass("open")) {
                envelope.addClass("vibrating");

                setTimeout(() => {
                    envelope.removeClass("vibrating");
                }, 800);
            }
        }, 3000);
    }

    startVibratingInterval();

    envelope.click(function() {
        vibrateAndOpen();
    });

    btn_reset.click(function() {
        close();
    });

    function vibrateAndOpen() {
        envelope.removeClass("vibrating");

        setTimeout(function() {
            open();
        }, 100);
    }

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        setTimeout(() => {
            startVibratingInterval(); // Restart vibration cycle
        }, 1000);
    }
});
