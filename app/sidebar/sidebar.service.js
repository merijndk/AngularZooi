System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SidebarService;
    return {
        setters:[],
        execute: function() {
            SidebarService = (function () {
                function SidebarService() {
                }
                SidebarService.prototype.renderToolsMenu = function () {
                    return [
                        { "id": "1", "name": "Doe" },
                        { "id": "2", "name": "Smith" },
                        { "id": "3", "name": "Jones" }
                    ];
                };
                return SidebarService;
            }());
            exports_1("SidebarService", SidebarService);
        }
    }
});
//# sourceMappingURL=sidebar.service.js.map