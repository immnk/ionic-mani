var ELA = {
    APP_NAME: "ela",
    MESSAGES : "ELA_MESSAGES",
    MODULE_NAMES: {
        CONTROLLERS: "ela.controllers",
        FACTORIES: "ela.factories",
        DIRECTIVES : "ela.directives",
        UTILS: "ela.utils",
        MESSAGES : "ela.messages",
        LOGGER : "Logger",
        LOCAL_STORAGE : "LocalStorage"
    },
    CONTROLLERS : {
        MainController : "MainController",
        EmployeeDetailController : "EmployeeDetailController",
        LoginController : "LoginController",
        SideMenuController : "SideMenuController"
    },
    FACTORIES :  {
        MainFactory : "MainFactory",
        EmployeeDetailFactory : "EmployeeDetailFactory",
        LoginFactory: "LoginFactory",
        Logger : "Logger",
        LocalStorage : "LocalStorage"
    },
    STATES: {
        SIDE_MENU: {
            controller: 'SideMenuController',
            factory: 'SideMenuFactory'
        },
        MAIN: {
            name: 'main',
            url: '/main',
            templateUrl: 'templates/pages/main.html',
            controller: 'MainController',
            factory: 'MainFactory',
            cache: true
        },
        EMPLOYEE_DETAIL: {
            name: 'employeeDetail',
            url: '/employeeDetail:eid',
            templateUrl: 'templates/pages/employeeDetail.html',
            controller: 'EmployeeDetailController',
            factory: 'EmployeeDetailFactory',
            cache: false
        },
        LOGIN: {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/pages/login.html',
            controller: 'LoginController',
            factory: 'LoginFactory',
            cache: false
        }
    },
    BACK_END: {
        RootURL: "http://satwebdev2.siriuscom.com/ela/mobiledev/rest.php?methodName=",
        IMAGEURL: "http://satwebdev2.siriuscom.com/ela/mobiledev/imageprovider.php?methodName=getUserAvatar&eid=",
        MethodName: {
            "login" : "login",
            "getUserPermission" : "getUserPermission",
            "getAllEmployees" : "getAllEmployees",
            "getEmployeeDetails" : "getEmployeeDetails",
            "getReportingEmployees" : "getReportingEmployees",
            "updateSalesRepNum" : "updateSalesRepNum",
            "getUserAvatar" : "getUserAvatar"
        },
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        ResponseType: {
            SUCCESS: "success",
            ERROR: "error"
        },
        ERROR_CODES : {
            NETWORK_ERROR : "NETWORK_ERROR",
            UNAUTHORIZED : "UNAUTHORIZED"
        }
    },
    USER_PERMISSIONS : {
        READ : "r",
        WRITE : "w"
    },
    LOCAL_STORAGE : {
        KEYS : {
            USER : "USER",
        }
    }
};

var controllers = angular.module(ELA.MODULE_NAMES.CONTROLLERS, []);
var factories = angular.module(ELA.MODULE_NAMES.FACTORIES, []);
var directives = angular.module(ELA.MODULE_NAMES.DIRECTIVES, []);
var utils = angular.module(ELA.MODULE_NAMES.UTILS, [ELA.MODULE_NAMES.LOGGER, ELA.MODULE_NAMES.LOCAL_STORAGE]);
var messages = angular.module(ELA.MODULE_NAMES.MESSAGES, []);
var logger = angular.module(ELA.MODULE_NAMES.LOGGER, []);
var localStorage = angular.module(ELA.MODULE_NAMES.LOCAL_STORAGE, []);
