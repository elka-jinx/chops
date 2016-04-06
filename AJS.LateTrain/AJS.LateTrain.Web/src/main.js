define(["require", "exports", 'bootstrap'], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.use.plugin('aurelia-animator-css');
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map