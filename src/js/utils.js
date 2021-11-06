(function () {
    window.Utils = {
        sizes: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    };

    window.addEventListener('resize', () => {
        // Update sizes
        Utils.sizes.width = window.innerWidth;
        Utils.sizes.height = window.innerHeight;
    });

}) ();