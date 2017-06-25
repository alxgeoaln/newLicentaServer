webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_locations_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationListComponent = (function () {
    function LocationListComponent(locationService, http, router) {
        this.locationService = locationService;
        this.http = http;
        this.router = router;
    }
    LocationListComponent.prototype.ngOnInit = function () {
        this.getLocationNow();
        this.getLocation();
    };
    LocationListComponent.prototype.getLocationNow = function () {
        var _this = this;
        this.locationService.getLocations()
            .subscribe(function (data) {
            _this.locations = data;
        });
    };
    LocationListComponent.prototype.getLocation = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(3000)
            .flatMap(function () { return _this.http.get('http://localhost:3000/getRequests/', { headers: headers })
            .map(function (res) { return res.json(); }); })
            .subscribe(function (data) {
            _this.locations = data;
        });
    };
    LocationListComponent.prototype.updateLocation = function (location) {
        if (location.isActive === true) {
            console.log('noting to update');
        }
        else {
            this.locationService.updateStatus(location._id).subscribe(function (data) {
                console.log(data);
            });
        }
    };
    return LocationListComponent;
}());
LocationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-location-list',
        template: __webpack_require__(408),
        styles: [__webpack_require__(399)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_locations_service__["a" /* GetLocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_locations_service__["a" /* GetLocationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LocationListComponent);

var _a, _b, _c;
//# sourceMappingURL=location-list.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_locations_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(locationService, route) {
        this.locationService = locationService;
        this.route = route;
        this.zoom = 17;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.location = this.route.snapshot.data['location'];
        this.lat = parseFloat(this.location.lat);
        this.lng = parseFloat(this.location.lng);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(409),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_locations_service__["a" /* GetLocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_locations_service__["a" /* GetLocationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_locations_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var dataForChart = [];
var StatisticsComponent = (function () {
    function StatisticsComponent(http, locationService, route) {
        this.http = http;
        this.locationService = locationService;
        this.route = route;
        this.lineChartLabels = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.accidents = this.route.snapshot.data['accidents'];
        this.lineChartData = [{ data: this.accidents, label: 'Accidente' }];
    }
    StatisticsComponent.prototype.ngOnInit = function () { };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(411),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_locations_service__["a" /* GetLocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_get_locations_service__["a" /* GetLocationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], StatisticsComponent);

var _a, _b, _c;
//# sourceMappingURL=statistics.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_locations_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResolverService = (function () {
    function ResolverService(locationService) {
        this.locationService = locationService;
    }
    ResolverService.prototype.resolve = function (route) {
        return this.locationService.getSpecificLocation(route.params['id']);
    };
    return ResolverService;
}());
ResolverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__get_locations_service__["a" /* GetLocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__get_locations_service__["a" /* GetLocationsService */]) === "function" && _a || Object])
], ResolverService);

var _a;
//# sourceMappingURL=resolver.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_locations_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsResolver = (function () {
    function StatisticsResolver(locationService) {
        this.locationService = locationService;
    }
    StatisticsResolver.prototype.resolve = function (route) {
        return this.locationService.getAccidentsPerMonth().map(function (accidents) { return accidents; });
    };
    return StatisticsResolver;
}());
StatisticsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__get_locations_service__["a" /* GetLocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__get_locations_service__["a" /* GetLocationsService */]) === "function" && _a || Object])
], StatisticsResolver);

var _a;
//# sourceMappingURL=statistics-resolver.service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 281;


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(297);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(407),
        styles: [__webpack_require__(398)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_get_locations_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_location_list_location_list_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_map_map_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_resolver_resolver_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_webcam_webcam_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_statistics_statistics_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_resolver_statistics_resolver_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_location_list_location_list_component__["a" /* LocationListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_webcam_webcam_component__["a" /* WebcamComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_statistics_statistics_component__["a" /* StatisticsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* appRoutes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDf1UU4Zz6Z-c-6_bv-zOel5_yCYxtjTQE'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_get_locations_service__["a" /* GetLocationsService */], __WEBPACK_IMPORTED_MODULE_10__services_resolver_resolver_service__["a" /* ResolverService */], __WEBPACK_IMPORTED_MODULE_16__services_resolver_statistics_resolver_service__["a" /* StatisticsResolver */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(410),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebcamComponent = (function () {
    function WebcamComponent(sanitizer, element) {
        this.sanitizer = sanitizer;
        this.element = element;
    }
    WebcamComponent.prototype.ngOnInit = function () {
        this.showCam();
    };
    WebcamComponent.prototype.showCam = function () {
        var _this = this;
        // 1. Casting necessary because TypeScript doesn't
        // know object Type 'navigator';
        var nav = navigator;
        // 2. Adjust for all browsers
        nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;
        // 4. Get stream from webcam
        nav.getUserMedia({ video: true }, function (stream) {
            var webcamUrl = URL.createObjectURL(stream);
            // 4a. Tell Angular the stream comes from a trusted source
            _this.videosrc = _this.sanitizer.bypassSecurityTrustUrl(webcamUrl);
            // 4b. Start video element to stream automatically from webcam.
            _this.element.nativeElement.querySelector('video').autoplay = true;
        }, function (err) { return console.log(err); });
    };
    return WebcamComponent;
}());
WebcamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-webcam',
        template: __webpack_require__(412),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], WebcamComponent);

var _a, _b;
//# sourceMappingURL=webcam.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_components_location_list_location_list_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_components_map_map_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_resolver_resolver_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_components_statistics_statistics_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_resolver_statistics_resolver_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });





var appRoutes = [
    { path: 'location-list', component: __WEBPACK_IMPORTED_MODULE_0__app_components_location_list_location_list_component__["a" /* LocationListComponent */] },
    { path: 'location-list/:id', component: __WEBPACK_IMPORTED_MODULE_1__app_components_map_map_component__["a" /* MapComponent */], resolve: { location: __WEBPACK_IMPORTED_MODULE_2__app_services_resolver_resolver_service__["a" /* ResolverService */] } },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_3__app_components_statistics_statistics_component__["a" /* StatisticsComponent */], resolve: { accidents: __WEBPACK_IMPORTED_MODULE_4__app_services_resolver_statistics_resolver_service__["a" /* StatisticsResolver */] } },
    { path: '', redirectTo: '/location-list', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLocationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = 'http://localhost:3000/';
var GetLocationsService = (function () {
    function GetLocationsService(http) {
        this.http = http;
    }
    GetLocationsService.prototype.getSpecificLocation = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url + 'getRequests/' + id)
            .map(function (res) { return res.json(); });
    };
    GetLocationsService.prototype.updateStatus = function (id) {
        console.log(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url + 'getRequests/updateStatus/' + id)
            .map(function (res) { return res.json(); });
    };
    GetLocationsService.prototype.getLocations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url + 'getRequests/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetLocationsService.prototype.getAccidentsPerMonth = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url + 'getRequests/accidentsPerMonth', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    return GetLocationsService;
}());
GetLocationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GetLocationsService);

var _a;
//# sourceMappingURL=get-locations.service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "agm-map {\r\n  width: 90%;\r\n  height: 600px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".cssWebCam{\r\n  height: 600px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 127,
	"./af.js": 127,
	"./ar": 134,
	"./ar-dz": 128,
	"./ar-dz.js": 128,
	"./ar-kw": 129,
	"./ar-kw.js": 129,
	"./ar-ly": 130,
	"./ar-ly.js": 130,
	"./ar-ma": 131,
	"./ar-ma.js": 131,
	"./ar-sa": 132,
	"./ar-sa.js": 132,
	"./ar-tn": 133,
	"./ar-tn.js": 133,
	"./ar.js": 134,
	"./az": 135,
	"./az.js": 135,
	"./be": 136,
	"./be.js": 136,
	"./bg": 137,
	"./bg.js": 137,
	"./bn": 138,
	"./bn.js": 138,
	"./bo": 139,
	"./bo.js": 139,
	"./br": 140,
	"./br.js": 140,
	"./bs": 141,
	"./bs.js": 141,
	"./ca": 142,
	"./ca.js": 142,
	"./cs": 143,
	"./cs.js": 143,
	"./cv": 144,
	"./cv.js": 144,
	"./cy": 145,
	"./cy.js": 145,
	"./da": 146,
	"./da.js": 146,
	"./de": 149,
	"./de-at": 147,
	"./de-at.js": 147,
	"./de-ch": 148,
	"./de-ch.js": 148,
	"./de.js": 149,
	"./dv": 150,
	"./dv.js": 150,
	"./el": 151,
	"./el.js": 151,
	"./en-au": 152,
	"./en-au.js": 152,
	"./en-ca": 153,
	"./en-ca.js": 153,
	"./en-gb": 154,
	"./en-gb.js": 154,
	"./en-ie": 155,
	"./en-ie.js": 155,
	"./en-nz": 156,
	"./en-nz.js": 156,
	"./eo": 157,
	"./eo.js": 157,
	"./es": 159,
	"./es-do": 158,
	"./es-do.js": 158,
	"./es.js": 159,
	"./et": 160,
	"./et.js": 160,
	"./eu": 161,
	"./eu.js": 161,
	"./fa": 162,
	"./fa.js": 162,
	"./fi": 163,
	"./fi.js": 163,
	"./fo": 164,
	"./fo.js": 164,
	"./fr": 167,
	"./fr-ca": 165,
	"./fr-ca.js": 165,
	"./fr-ch": 166,
	"./fr-ch.js": 166,
	"./fr.js": 167,
	"./fy": 168,
	"./fy.js": 168,
	"./gd": 169,
	"./gd.js": 169,
	"./gl": 170,
	"./gl.js": 170,
	"./gom-latn": 171,
	"./gom-latn.js": 171,
	"./he": 172,
	"./he.js": 172,
	"./hi": 173,
	"./hi.js": 173,
	"./hr": 174,
	"./hr.js": 174,
	"./hu": 175,
	"./hu.js": 175,
	"./hy-am": 176,
	"./hy-am.js": 176,
	"./id": 177,
	"./id.js": 177,
	"./is": 178,
	"./is.js": 178,
	"./it": 179,
	"./it.js": 179,
	"./ja": 180,
	"./ja.js": 180,
	"./jv": 181,
	"./jv.js": 181,
	"./ka": 182,
	"./ka.js": 182,
	"./kk": 183,
	"./kk.js": 183,
	"./km": 184,
	"./km.js": 184,
	"./kn": 185,
	"./kn.js": 185,
	"./ko": 186,
	"./ko.js": 186,
	"./ky": 187,
	"./ky.js": 187,
	"./lb": 188,
	"./lb.js": 188,
	"./lo": 189,
	"./lo.js": 189,
	"./lt": 190,
	"./lt.js": 190,
	"./lv": 191,
	"./lv.js": 191,
	"./me": 192,
	"./me.js": 192,
	"./mi": 193,
	"./mi.js": 193,
	"./mk": 194,
	"./mk.js": 194,
	"./ml": 195,
	"./ml.js": 195,
	"./mr": 196,
	"./mr.js": 196,
	"./ms": 198,
	"./ms-my": 197,
	"./ms-my.js": 197,
	"./ms.js": 198,
	"./my": 199,
	"./my.js": 199,
	"./nb": 200,
	"./nb.js": 200,
	"./ne": 201,
	"./ne.js": 201,
	"./nl": 203,
	"./nl-be": 202,
	"./nl-be.js": 202,
	"./nl.js": 203,
	"./nn": 204,
	"./nn.js": 204,
	"./pa-in": 205,
	"./pa-in.js": 205,
	"./pl": 206,
	"./pl.js": 206,
	"./pt": 208,
	"./pt-br": 207,
	"./pt-br.js": 207,
	"./pt.js": 208,
	"./ro": 209,
	"./ro.js": 209,
	"./ru": 210,
	"./ru.js": 210,
	"./sd": 211,
	"./sd.js": 211,
	"./se": 212,
	"./se.js": 212,
	"./si": 213,
	"./si.js": 213,
	"./sk": 214,
	"./sk.js": 214,
	"./sl": 215,
	"./sl.js": 215,
	"./sq": 216,
	"./sq.js": 216,
	"./sr": 218,
	"./sr-cyrl": 217,
	"./sr-cyrl.js": 217,
	"./sr.js": 218,
	"./ss": 219,
	"./ss.js": 219,
	"./sv": 220,
	"./sv.js": 220,
	"./sw": 221,
	"./sw.js": 221,
	"./ta": 222,
	"./ta.js": 222,
	"./te": 223,
	"./te.js": 223,
	"./tet": 224,
	"./tet.js": 224,
	"./th": 225,
	"./th.js": 225,
	"./tl-ph": 226,
	"./tl-ph.js": 226,
	"./tlh": 227,
	"./tlh.js": 227,
	"./tr": 228,
	"./tr.js": 228,
	"./tzl": 229,
	"./tzl.js": 229,
	"./tzm": 231,
	"./tzm-latn": 230,
	"./tzm-latn.js": 230,
	"./tzm.js": 231,
	"./uk": 232,
	"./uk.js": 232,
	"./ur": 233,
	"./ur.js": 233,
	"./uz": 235,
	"./uz-latn": 234,
	"./uz-latn.js": 234,
	"./uz.js": 235,
	"./vi": 236,
	"./vi.js": 236,
	"./x-pseudo": 237,
	"./x-pseudo.js": 237,
	"./yo": 238,
	"./yo.js": 238,
	"./zh-cn": 239,
	"./zh-cn.js": 239,
	"./zh-hk": 240,
	"./zh-hk.js": 240,
	"./zh-tw": 241,
	"./zh-tw.js": 241
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 404;


/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover \">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>Nume</th>\n    <th>Data</th>\n    <th>Adresa</th>\n    <th>Actiuni</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let location of locations;\" >\n    <td [ngClass]=\"location.isActive ? '' : 'danger'\">{{location.id}}</td>\n    <td>{{location.author}}</td>\n    <td>{{location.createdAt | date:'short'}}</td>\n    <td>{{location.address}}</td>\n    <td>\n      <button class=\"btn btn-success btn-xs\" (click)=\"updateLocation(location)\" [routerLink] = \"['/location-list', location._id]\">Arata locatia</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left: 0px; margin-right: 0px; margin-top: 10px;\">\n  <div style=\"width: 50%\" class=\"col-md-6\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n  <div style=\"width: 50%\" class=\"col-md-6\">\n    <app-webcam></app-webcam>\n  </div>\n</div>\n"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Licenta Dispecerat</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\" [routerLink] = \"['/location-list']\">Acasa</a></li>\n        <li><a href=\"#\" [routerLink] = \"['/statistics']\" >Statistici</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 0px;\">\n  <div class=\"col-md-10\">\n    <div style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"200\"\n              [datasets]=\"lineChartData\"\n              [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\"\n              [colors]=\"lineChartColors\"\n              [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\">\n             </canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<video style=\"float: right;\" [src]=\"videosrc\" class=\"cssWebCam\"></video>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(282);


/***/ })

},[681]);
//# sourceMappingURL=main.bundle.js.map