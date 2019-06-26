(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/annotation.service.ts":
/*!***************************************!*\
  !*** ./src/app/annotation.service.ts ***!
  \***************************************/
/*! exports provided: AnnotationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationService", function() { return AnnotationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AnnotationService = /** @class */ (function () {
    function AnnotationService(http) {
        this.http = http;
        this.reportUrl = "./assets/json-reports/ar.json";
    }
    AnnotationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AnnotationService.prototype.getJson = function () {
        var _this = this;
        return this.http.get(this.reportUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (d) { return _this.jsonData = d; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getJson', [])));
    };
    AnnotationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnnotationService);
    return AnnotationService;
}());



/***/ }),

/***/ "./src/app/annotation/annotation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/annotation/annotation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/annotation/annotation.component.html":
/*!******************************************************!*\
  !*** ./src/app/annotation/annotation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3>Antibiotic Resistance</h3>\n</div>\n<div class=\"row\">\n  <div *ngFor=\"let sample of arData\">\n    <h2 class=\"col-md-12\">{{sample[\"sample\"]}}</h2>\n    <div *ngFor=\"let seq of sample['data']\" class=\"row shadow-sm p-3 mb-5 bg-white rounded\">\n      <ul class=\"list-group col-md-2\">\n  \t<li class=\"list-group-item\"><div class=\"bg-primary p-3 mb-2\">Coverage</div> {{seq[\"coverage\"] * 100}} %</li>\n  \t<li class=\"list-group-item\"><div class=\"bg-primary p-3 mb-2\">Per base depth</div> {{seq[\"avg_depth_per_base\"]}}</li>\n  \t<li class=\"list-group-item\"><div class=\"bg-primary p-3 mb-2\">NCBI Accession ID</div> {{seq[\"ncbi_accession_id\"]}}</li>\n      </ul>\n      <div *ngFor=\"let model of seq['card_data']\" class=\"col-md-10\">\n\t<div>\n      \t  <h3>{{model[\"ARO_name\"]}}</h3>\n      \t  <p>{{model[\"ARO_description\"]}}</p>\n      \t  <span *ngFor=\"let m of model['model_sequences']['sequence'] | keyvalue\" class=\"badge badge-primary\">\n      \t    {{m.value[\"NCBI_taxonomy\"][\"NCBI_taxonomy_name\"]}}\n      \t  </span>\n      \t</div>\n      \t<span *ngFor=\"let category of model['ARO_category'] | keyvalue\" class=\"float-left\">\n      \t  <div [ngSwitch]=\"category.value['category_aro_class_name']\">\n      \t    <span class=\"badge badge-danger\" *ngSwitchCase=\"'Resistance Mechanism'\">{{category.value[\"category_aro_name\"]}}</span>\n      \t    <span class=\"badge badge-success\" *ngSwitchCase=\"'Antibiotic'\">{{category.value[\"category_aro_name\"]}}</span>\n      \t    <span class=\"badge badge-success\" *ngSwitchCase=\"'Drug Class'\">{{category.value[\"category_aro_name\"]}}</span>\n      \t    <span class=\"badge badge-info\" *ngSwitchDefault>{{category.value[\"category_aro_name\"]}}</span>\n      \t  </div>\n      \t</span>\n      </div>\n      <hr>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/annotation/annotation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/annotation/annotation.component.ts ***!
  \****************************************************/
/*! exports provided: AnnotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationComponent", function() { return AnnotationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _annotation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../annotation.service */ "./src/app/annotation.service.ts");



var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent(annotationService) {
        this.annotationService = annotationService;
    }
    AnnotationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.annotationService.getJson().subscribe(function (_) { return _this.arData = _; });
    };
    AnnotationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-annotation',
            template: __webpack_require__(/*! ./annotation.component.html */ "./src/app/annotation/annotation.component.html"),
            styles: [__webpack_require__(/*! ./annotation.component.css */ "./src/app/annotation/annotation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_annotation_service__WEBPACK_IMPORTED_MODULE_2__["AnnotationService"]])
    ], AnnotationComponent);
    return AnnotationComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taxonomy_view_taxonomy_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxonomy-view/taxonomy-view.component */ "./src/app/taxonomy-view/taxonomy-view.component.ts");
/* harmony import */ var _annotation_annotation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotation/annotation.component */ "./src/app/annotation/annotation.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'taxonomy' },
    { path: 'taxonomy', component: _taxonomy_view_taxonomy_view_component__WEBPACK_IMPORTED_MODULE_3__["TaxonomyViewComponent"] },
    { path: 'antibiotic-resistance', component: _annotation_annotation_component__WEBPACK_IMPORTED_MODULE_4__["AnnotationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <span class=\"navbar-brand mb-0 h1\">Floki</span>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/taxonomy\">Taxonomy</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/antibiotic-resistance\">Antibiotic Resistance</a></li>\n    </ul>\n</nav>\n<div class=\"container-fluid\">\n  <!-- <app-taxonomy-view></app-taxonomy-view> -->\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Floki';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _taxonomy_view_taxonomy_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taxonomy-view/taxonomy-view.component */ "./src/app/taxonomy-view/taxonomy-view.component.ts");
/* harmony import */ var _node_bar_chart_node_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node-bar-chart/node-bar-chart.component */ "./src/app/node-bar-chart/node-bar-chart.component.ts");
/* harmony import */ var _annotation_annotation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annotation/annotation.component */ "./src/app/annotation/annotation.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _taxonomy_view_taxonomy_view_component__WEBPACK_IMPORTED_MODULE_7__["TaxonomyViewComponent"],
                _node_bar_chart_node_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["NodeBarChartComponent"],
                _annotation_annotation_component__WEBPACK_IMPORTED_MODULE_9__["AnnotationComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/node-bar-chart/node-bar-chart.component.css":
/*!*************************************************************!*\
  !*** ./src/app/node-bar-chart/node-bar-chart.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chart-wrapper{\n    width: 100%;\n    height:100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9kZS1iYXItY2hhcnQvbm9kZS1iYXItY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9ub2RlLWJhci1jaGFydC9ub2RlLWJhci1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0LXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/node-bar-chart/node-bar-chart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/node-bar-chart/node-bar-chart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{keyTitle | uppercase}}</h4>\n<canvas #chartWrapper id=\"chart-wrapper\"></canvas>\n"

/***/ }),

/***/ "./src/app/node-bar-chart/node-bar-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/node-bar-chart/node-bar-chart.component.ts ***!
  \************************************************************/
/*! exports provided: NodeBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBarChartComponent", function() { return NodeBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taxon */ "./src/app/taxon.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var NodeBarChartComponent = /** @class */ (function () {
    function NodeBarChartComponent() {
        this.keyTitle = "";
        this.offset = {
            "x": 50,
            "y": 10
        };
        this.padding = 20;
    }
    NodeBarChartComponent.prototype.ngOnInit = function () {
        this.keyTitle = this.key.replace(/_/g, " ");
    };
    NodeBarChartComponent.prototype.ngAfterViewInit = function () {
        this.setUpCanvas();
    };
    NodeBarChartComponent.prototype.ngOnChanges = function (changes) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](this.nodeData))
            this.drawChart();
    };
    NodeBarChartComponent.prototype.drawChart = function () {
        this.cx.clearRect(0, 0, this.screenWidth / 3, this.screenHeight / 4);
        var _width = this.screenWidth / 3 - 30 - (2 * this.offset.x);
        var _height = this.screenHeight / 4 - (2 * this.offset.y) - 50;
        var _padding = this.padding;
        var _data = this.nodeData;
        var x = d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"]()
            .rangeRound([0, _width])
            .padding(0.1);
        var y = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .rangeRound([0, _height]);
        x.domain(_data["file"]);
        var y_domain_elmns = _data[this.key].slice();
        y_domain_elmns.push(_data["ctrl_" + this.key]); // Get ctrl value as well
        y_domain_elmns.push(0); // Add zero
        var y_domain = [Math.min.apply(Math, y_domain_elmns), Math.max.apply(Math, y_domain_elmns)];
        if (y_domain[0] == y_domain[1]) {
            y_domain[0] = y_domain[1] - 0.5; // If value 0 show zero.
        }
        y.domain(y_domain);
        // x and y axis
        this.cx.beginPath();
        this.cx.lineWidth = 2;
        this.cx.strokeStyle = "#000000";
        this.cx.moveTo(this.offset.x, _height + this.offset.y);
        this.cx.lineTo(this.offset.x + (x.padding() + x.bandwidth()) * (_data[this.key].length + 1), _height + this.offset.y);
        this.cx.moveTo(this.offset.x, this.offset.y);
        this.cx.lineTo(this.offset.x, this.offset.y + _height + 1);
        this.cx.stroke();
        this.cx.closePath();
        // x ticks
        this.cx.beginPath();
        this.cx.fillStyle = "#000000";
        this.cx.strokeStyle = "#000000";
        var _this = this;
        x.domain().forEach(function (d) {
            _this.cx.moveTo(_this.offset.x + x(d) + x.bandwidth() / 2, _this.offset.y + _height);
            _this.cx.lineTo(_this.offset.x + x(d) + x.bandwidth() / 2, _this.offset.y + _height + 6);
            _this.cx.font = "12px Open Sans";
            _this.cx.save();
            _this.cx.translate(_this.offset.x + x(d) + x.bandwidth() / 2, _this.offset.y + _height + 6);
            _this.cx.rotate(-Math.PI / 2);
            _this.cx.translate(-1 * (_this.offset.x + x(d) + x.bandwidth() / 2), -1 * (_this.offset.y + _height + 6));
            _this.cx.textAlign = "right";
            _this.cx.textBaseline = "middle";
            _this.cx.fillText(d.split(".")[0], _this.offset.x + x(d) + x.bandwidth() / 2, _this.offset.y + _height + 6);
            _this.cx.restore();
        });
        _this.cx.strokeStyle = "#000000";
        _this.cx.stroke();
        // y ticks
        y.ticks(10).forEach(function (d) {
            _this.cx.moveTo(_this.offset.x, _this.offset.y + _height - y(d) + 0.5);
            _this.cx.lineTo(_this.offset.x - 6, _this.offset.y + _height - y(d) + 0.5);
            _this.cx.textAlign = "right";
            _this.cx.textBaseline = "middle";
            if (_this.key == "percentage") {
                _this.cx.fillText((d * 100).toExponential(1), _this.offset.x - 6, _this.offset.y + _height - y(d) + 0.5);
            }
            else {
                _this.cx.fillText(d.toExponential(1), _this.offset.x - 6, _this.offset.y + _height - y(d) + 0.5);
            }
        });
        this.cx.strokeStyle = "#000000";
        this.cx.stroke();
        for (var i = 0; i < _data[this.key].length; i++) {
            _this.cx.fillStyle = "steelblue";
            _this.cx.rect(_this.offset.x + x(_data["file"][i]), _this.offset.y + (_height - y(_data[_this.key][i])), x.bandwidth(), y(_data[_this.key][i]));
            _this.cx.fill();
        }
        this.cx.beginPath();
        this.cx.strokeStyle = "#FF0000";
        this.cx.moveTo(this.offset.x, this.offset.y + (_height - y(_data["ctrl_" + this.key])));
        this.cx.lineTo(this.offset.x + _width, this.offset.y + (_height - y(_data["ctrl_" + this.key])));
        this.cx.stroke();
    };
    NodeBarChartComponent.prototype.setUpCanvas = function () {
        var canvasEl = this.canvas.nativeElement;
        this.canvasEl = canvasEl;
        var dpr = window.devicePixelRatio || 1;
        var rect = canvasEl.getBoundingClientRect();
        canvasEl.width = (this.screenWidth / 2 - 30) * dpr;
        canvasEl.height = this.screenHeight / 4 * dpr;
        canvasEl.style.width = String(this.screenWidth / 2 - 30) + "px";
        canvasEl.style.height = String(this.screenHeight / 4) + "px";
        this.cx = canvasEl.getContext('2d');
        this.cx.scale(dpr, dpr);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chartWrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NodeBarChartComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _taxon__WEBPACK_IMPORTED_MODULE_2__["Taxon"])
    ], NodeBarChartComponent.prototype, "nodeData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NodeBarChartComponent.prototype, "key", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NodeBarChartComponent.prototype, "screenHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NodeBarChartComponent.prototype, "screenWidth", void 0);
    NodeBarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-node-bar-chart',
            template: __webpack_require__(/*! ./node-bar-chart.component.html */ "./src/app/node-bar-chart/node-bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./node-bar-chart.component.css */ "./src/app/node-bar-chart/node-bar-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NodeBarChartComponent);
    return NodeBarChartComponent;
}());



/***/ }),

/***/ "./src/app/taxon.ts":
/*!**************************!*\
  !*** ./src/app/taxon.ts ***!
  \**************************/
/*! exports provided: Taxon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Taxon", function() { return Taxon; });
var Taxon = /** @class */ (function () {
    function Taxon() {
    }
    return Taxon;
}());



/***/ }),

/***/ "./src/app/taxonomy-tree.service.ts":
/*!******************************************!*\
  !*** ./src/app/taxonomy-tree.service.ts ***!
  \******************************************/
/*! exports provided: TaxonomyTreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTreeService", function() { return TaxonomyTreeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _taxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taxon */ "./src/app/taxon.ts");








var TaxonomyTreeService = /** @class */ (function () {
    function TaxonomyTreeService(http) {
        this.http = http;
        this.reportUrl = "./assets/json-reports/test.json";
        this.jsonData = new _taxon__WEBPACK_IMPORTED_MODULE_7__["Taxon"]();
    }
    TaxonomyTreeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    TaxonomyTreeService.prototype.getTree = function () {
        var _this_1 = this;
        return this.http.get(this.reportUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (d) { return _this_1.jsonData = d; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTree', [])));
    };
    TaxonomyTreeService.prototype.getLayout = function (data, height, width, offsetX, offsetY, depth) {
        var root = d3__WEBPACK_IMPORTED_MODULE_6__["hierarchy"](data, function (d) { return d.children; });
        var tree_layout = d3__WEBPACK_IMPORTED_MODULE_6__["cluster"]().size([height - offsetX * 2, width - offsetY * 2]);
        var tree = tree_layout(root);
        var nodes = tree.descendants();
        nodes.forEach(function (d) {
            if (d.parent == null)
                d.y = offsetX;
            else if (d.data.tax_id == -1) // compressd nodes
                d.y = d.parent.y + 40;
            else
                d.y = d.parent.y + depth;
            d.x += offsetY;
        });
        return nodes;
    };
    TaxonomyTreeService.prototype.filterTaxonomyTree = function (d, minReads, sigLevel, minOddsRatio) {
        var cond = [], keep_node = false, tmp, _this = this;
        // Minimum number of reads
        keep_node = d.taxon_reads.some(function (x) {
            return x >= minReads;
        });
        cond.push(keep_node);
        // Maximum pvalue
        keep_node = d.pvalue.some(function (x) {
            return x <= sigLevel;
        });
        cond.push(keep_node);
        // Minimum odds ratio
        keep_node = d.oddsratio.some(function (x) {
            return x >= minOddsRatio;
        });
        cond.push(keep_node);
        keep_node = cond.every(function (x) {
            return x;
        });
        cond = [keep_node];
        if (d.children != null) {
            for (var i = 0; i < d.children.length; i++) {
                tmp = this.filterTaxonomyTree(d.children[i], minReads, sigLevel, minOddsRatio);
                cond.push(tmp);
                if (!tmp) {
                    d.children.splice(i, 1);
                    i--;
                }
            }
        }
        keep_node = cond.some(function (x) {
            return x;
        });
        return keep_node;
    };
    TaxonomyTreeService.prototype.filterBasedOnAnnotations = function (d, key, minReads, sigLevel, minOddsRatio) {
        var cond = [], keep_node = false, tmp, _this = this;
        // Minimum number of reads
        keep_node = d.taxon_reads.some(function (x) {
            return x >= minReads;
        });
        cond.push(keep_node);
        // Maximum pvalue
        keep_node = d.pvalue.some(function (x) {
            return x <= sigLevel;
        });
        cond.push(keep_node);
        // Minimum odds ratio
        keep_node = d.oddsratio.some(function (x) {
            return x >= minOddsRatio;
        });
        cond.push(keep_node);
        keep_node = (d[key] == 1);
        cond.push(keep_node);
        keep_node = cond.every(function (x) {
            return x;
        });
        cond = [keep_node];
        if (d.children != null) {
            for (var i = 0; i < d.children.length; i++) {
                tmp = this.filterBasedOnAnnotations(d.children[i], key, minReads, sigLevel, minOddsRatio);
                cond.push(tmp);
                if (!tmp) {
                    d.children.splice(i, 1);
                    i--;
                }
            }
        }
        keep_node = cond.some(function (x) {
            return x;
        });
        return keep_node;
    };
    TaxonomyTreeService.prototype.compressNodesBasedOnAnnotation = function (d, key) {
        if (d[key] == 0 && d.depth > 1) {
            d.taxon_name = "Compressed";
            d.tax_id = -1;
            d.num_nodes = 1;
            while (!d.children.every(function (x) { return (x[key] == 1); })) {
                for (var i = 0; i < d.children.length; i++) {
                    if (d.children[i][key] == 0) {
                        if (d.children[i].children != null)
                            d.children = d.children.concat(d.children[i].children);
                        d.children.splice(i, 1);
                        d.num_nodes += 1;
                        i--;
                    }
                }
            }
        }
        for (var i = 0; i < d.children.length; i++) {
            this.compressNodesBasedOnAnnotation(d.children[i], key);
        }
    };
    TaxonomyTreeService.prototype.filterPathogenic = function (minReads, sigLevel, minOddsRatio) {
        var data = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.jsonData);
        this.filterBasedOnAnnotations(data, "pathogenic", minReads, sigLevel, minOddsRatio);
        this.compressNodesBasedOnAnnotation(data, "pathogenic");
        console.log(data);
        return data;
    };
    TaxonomyTreeService.prototype.setViewPort = function (tax_id) {
        if (tax_id === void 0) { tax_id = 1; }
        var data = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.jsonData);
        var path_to_root = this.getPathToNode(data, tax_id);
        this.removeChildrenAtDepth(path_to_root[path_to_root.length - 1]);
        return path_to_root;
    };
    TaxonomyTreeService.prototype.getRangeOfKeyAtDepth = function (_data, key, depth, min, max) {
        if (min == null || max == null) {
            min = Array(_data[key].length).fill(Infinity);
            max = Array(_data[key].length).fill(-1);
        }
        if (_data.depth == depth) {
            for (var i = 0; i < _data[key].length; i++) {
                min[i] = (_data[key][i] < min[i]) ? _data[key][i] : min[i];
                max[i] = (_data[key][i] > max[i]) ? _data[key][i] : max[i];
            }
        }
        var m;
        if (_data.children == null || _data.depth > depth) {
            return [min, max];
        }
        for (var i = 0; i < _data.children.length; i++) {
            m = this.getRangeOfKeyAtDepth(_data.children[i], key, depth, min, max);
            min = m[0];
            max = m[1];
        }
        return [min, max];
    };
    TaxonomyTreeService.prototype.removeChildrenAtDepth = function (node, depth) {
        if (depth === void 0) { depth = 2; }
        if (depth == 0) {
            delete node.children;
            return true;
        }
        for (var i = 0; i < node.children.length; i++) {
            this.removeChildrenAtDepth(node.children[i], depth - 1);
        }
    };
    TaxonomyTreeService.prototype.getPathToNode = function (node, tax_id, path_root) {
        if (path_root === void 0) { path_root = []; }
        if (node.tax_id == tax_id) {
            path_root.push(node);
            return path_root;
        }
        if (node.children != null) {
            var t = void 0;
            for (var i = 0; i < node.children.length; i++) {
                t = this.getPathToNode(node.children[i], tax_id, path_root);
                if (t.length != 0) {
                    t.unshift(node);
                    return t;
                }
            }
        }
        return path_root;
    };
    TaxonomyTreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaxonomyTreeService);
    return TaxonomyTreeService;
}());



/***/ }),

/***/ "./src/app/taxonomy-view/taxonomy-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/taxonomy-view/taxonomy-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\n    width:100%;\n    height: 600px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGF4b25vbXktdmlldy90YXhvbm9teS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RheG9ub215LXZpZXcvdGF4b25vbXktdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/taxonomy-view/taxonomy-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/taxonomy-view/taxonomy-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <canvas #wrapper id=\"wrapper\" (click)=\"onCanvasClick($event)\" (mousemove)=\"onCanvasHover($event)\">\n    </canvas>\n  </div>\n  <div class=\"col-md-4\">\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n\t<li *ngFor=\"let t of pathToRoot\" (click)=\"drawCanvas(t.tax_id)\" class=\"breadcrumb-item\"><a href=\"#\" onclick=\"return false;\">{{t.taxon_name}}</a></li>\n      </ol>\n    </nav>\n    <form>\n      <div class=\"form-row\">\n\t<div class=\"form-group col-md-4\">\n\t  <label for=\"minReads\">Minimum read count</label>\n\t  <input type=\"text\" class=\"form-control\" id=\"minReads\" placeholder=\"Minimum number of reads\" [(ngModel)]=\"minReads\" name=\"minReads\">\n\t</div>\n\t<div class=\"form-group col-md-4\">\n\t  <label for=\"minOR\">Minimum odds ratio</label>\n\t  <input type=\"text\" class=\"form-control\" id=\"minOR\" placeholder=\"Minimum odds ratio\" [(ngModel)]=\"minOddsRatio\" name=\"minOR\">\n\t</div>\n\t<div class=\"form-group col-md-4\">\n\t  <label for=\"sigLevel\">Significance Level</label>\n\t  <input type=\"text\" class=\"form-control\" id=\"sigLevel\" placeholder=\"Significance Level\" [(ngModel)]=\"sigLevel\" name=\"sigLevel\">\n\t</div>\t\n      </div>\n      <div class=\"form-row\">\n\t<div class=\"col-md-6\">\n\t  <button class=\"btn btn-primary mb-2\" (click)=\"drawCanvas(taxonomyTree.tax_id)\">Filter</button>\n\t</div>\n\t<div class=\"col-md-6\">\n\t  <button class=\"btn btn-primary mb-2\" (click)=\"showPathogenic()\">Show Pathogenic</button>\n\t</div>\n      </div>\n    </form>\n    <h3><span class=\"badge badge-light\">{{currentNode.taxon_name}}</span></h3>\n    <app-node-bar-chart [screenHeight]=\"screenHeight\" [screenWidth]=\"screenWidth\" [nodeData]=\"currentNode\" key=\"percentage\"></app-node-bar-chart>\n    <app-node-bar-chart [screenHeight]=\"screenHeight\" [screenWidth]=\"screenWidth\" [nodeData]=\"currentNode\" key=\"taxon_reads\"></app-node-bar-chart>\n    <app-node-bar-chart [screenHeight]=\"screenHeight\" [screenWidth]=\"screenWidth\" [nodeData]=\"currentNode\" key=\"kmer_coverage\"></app-node-bar-chart>\n    <app-node-bar-chart [screenHeight]=\"screenHeight\" [screenWidth]=\"screenWidth\" [nodeData]=\"currentNode\" key=\"kmer_depth\"></app-node-bar-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/taxonomy-view/taxonomy-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/taxonomy-view/taxonomy-view.component.ts ***!
  \**********************************************************/
/*! exports provided: TaxonomyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyViewComponent", function() { return TaxonomyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taxonomy-tree.service */ "./src/app/taxonomy-tree.service.ts");
/* harmony import */ var _taxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../taxon */ "./src/app/taxon.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");





var TaxonomyViewComponent = /** @class */ (function () {
    function TaxonomyViewComponent(taxonomyTreeService) {
        this.taxonomyTreeService = taxonomyTreeService;
        this.screenWidth = 100;
        this.screenHeight = 100;
        this.minReads = 10;
        this.sigLevel = 0.05;
        this.minOddsRatio = 1;
        // Styles
        this.nodeSize = 5;
        this.strokeWidth = 2;
        this.colorScheme = {
            "fill": "#4682b4",
            "hover_fill": "#86C67C",
            "compressed_fill": "#FF0000",
            "compressed_text_fill": "#FFFFFF",
            "stroke_style": "#000000",
            "text_fill": "#000000",
            "link_stroke_style": "#000000"
        };
        this.scales = {
            "percentage": [null, null]
        };
        this.canvasOffset = {
            "x": 50,
            "y": 0
        };
        this.heatmap = {
            "square_size": 10
        };
        this.taxonomyTree = new _taxon__WEBPACK_IMPORTED_MODULE_3__["Taxon"]();
        this.currentNode = new _taxon__WEBPACK_IMPORTED_MODULE_3__["Taxon"]();
        this.pathToRoot = [];
    }
    TaxonomyViewComponent.prototype.ngOnInit = function () {
        this.getScreenSize(); // On init since value passed to node-bar-chart component
    };
    TaxonomyViewComponent.prototype.ngAfterViewInit = function () {
        var _this_1 = this;
        this.setUpCanvas();
        this.canvasWrapper = d3__WEBPACK_IMPORTED_MODULE_4__["select"]("#wrapper");
        this.taxonomyTreeService.getTree().subscribe(function (_) { return _this_1.drawCanvas(1); });
    };
    TaxonomyViewComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    };
    TaxonomyViewComponent.prototype.drawCanvas = function (tax_id) {
        var t = this.taxonomyTreeService.setViewPort(tax_id);
        this.pathToRoot = t;
        this.taxonomyTree = t[t.length - 1];
        this.taxonomyTreeService.filterTaxonomyTree(this.taxonomyTree, this.minReads, this.sigLevel, this.minOddsRatio);
        this.currentNode = this.taxonomyTree;
        this.treeDescendants = this.taxonomyTreeService.getLayout(this.taxonomyTree, this.screenHeight, this.screenWidth * (2 / 3), this.canvasOffset.x, this.canvasOffset.y, this.screenWidth * (1 / 6));
        this.update();
    };
    TaxonomyViewComponent.prototype.showPathogenic = function () {
        this.taxonomyTree = this.taxonomyTreeService.filterPathogenic(this.minReads, this.sigLevel, this.minOddsRatio);
        this.taxonomyTreeService.filterTaxonomyTree(this.taxonomyTree, this.minReads, this.sigLevel, this.minOddsRatio);
        this.pathToRoot = [this.taxonomyTree];
        this.currentNode = this.taxonomyTree;
        this.treeDescendants = this.taxonomyTreeService.getLayout(this.taxonomyTree, this.screenHeight, this.screenWidth * (2 / 3), this.canvasOffset.x, this.canvasOffset.y, this.screenWidth * (1 / 12));
        this.update();
    };
    TaxonomyViewComponent.prototype.onCanvasClick = function (event) {
        var _y = event.clientX - this.canvasEl.getBoundingClientRect()["x"];
        var _x = event.clientY - this.canvasEl.getBoundingClientRect()["y"];
        var _this = this;
        d3__WEBPACK_IMPORTED_MODULE_4__["selectAll"]("custom-node")
            .each(function (d) {
            if (_this.checkWithinRadius([d.y, d.x], [_y, _x], _this.nodeSize + _this.strokeWidth)) {
                if (d.data.tax_id != -1) // Avoid compressed nodes
                    _this.drawCanvas(d.data.tax_id);
            }
        });
    };
    TaxonomyViewComponent.prototype.onCanvasHover = function (event) {
        var _y = event.clientX - this.canvasEl.getBoundingClientRect()["x"];
        var _x = event.clientY - this.canvasEl.getBoundingClientRect()["y"];
        var _this = this;
        var hoverEvent = false;
        d3__WEBPACK_IMPORTED_MODULE_4__["selectAll"]("custom-node")
            .each(function (d) {
            if (_this.checkWithinRadius([d.y, d.x], [_y, _x], _this.nodeSize + _this.strokeWidth)) {
                if (d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("_fill") == null)
                    d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("_fill", String(d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("fill")));
                d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("fill", _this.colorScheme["hover_fill"]);
                if (d.data.tax_id != -1) // Avoid hover oncompressed nodes
                    _this.currentNode = d.data;
                _this.canvasEl.style.cursor = "pointer";
                hoverEvent = true;
            }
            else if (d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("_fill") != null) {
                d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("fill", d3__WEBPACK_IMPORTED_MODULE_4__["select"](this).attr("_fill"));
            }
        });
        if (!hoverEvent)
            this.canvasEl.style.cursor = "auto";
        this.renderCanvas();
    };
    TaxonomyViewComponent.prototype.checkWithinRadius = function (p1, p2, r) {
        var a = Math.pow((p1[0] - p2[0]), 2) + Math.pow((p1[1] - p2[1]), 2);
        a = Math.sqrt(a);
        return (a <= r);
    };
    TaxonomyViewComponent.prototype.drawHeatmap = function (nodeEl, d, key) {
        var start_x = parseFloat(nodeEl.attr("x")) + this.heatmap.square_size, start_y = parseFloat(nodeEl.attr("y"));
        if (d.children != null) {
            start_x = parseFloat(nodeEl.attr("x")) - (this.heatmap.square_size * d.data[key].length) / 2;
            start_y = start_y + 22;
        }
        for (var i = 0; i < d.data[key].length; i++) {
            if (d.children == null) {
                this.cx.fillStyle = this.scales[key][1](d.data[key][i]);
            }
            else if (d.children.every(function (x) { return (x.children == null); })) {
                this.cx.fillStyle = this.scales[key][0](d.data[key][i]);
            }
            else {
                continue;
            }
            this.cx.beginPath();
            this.cx.moveTo(start_x + (this.heatmap.square_size * i), start_y - (this.heatmap.square_size / 2));
            this.cx.rect(start_x + (this.heatmap.square_size * i), start_y - (this.heatmap.square_size / 2), this.heatmap.square_size, this.heatmap.square_size);
            this.cx.fill();
            this.cx.strokeStyle = "#000000";
            this.cx.stroke();
            this.cx.closePath();
        }
    };
    TaxonomyViewComponent.prototype.update = function () {
        var _this = this;
        var nodes = this.treeDescendants;
        var links = this.treeDescendants.slice(1);
        var duration = 300;
        var node = this.canvasWrapper.selectAll("custom-node").data(nodes);
        var node_enter = node.enter()
            .append("custom-node")
            .classed("node", true)
            .attr("x", function (d) {
            return d.y;
        })
            .attr("y", function (d) {
            return d.x;
        })
            .text(function (d) {
            if (d.data.tax_id == -1)
                return String(d.data.num_nodes);
            return d.data["taxon_name"];
        })
            .attr("size", function (d) {
            if (d.data.tax_id == -1)
                return _this.nodeSize * 2.5;
            return _this.nodeSize;
        })
            .attr("fill", function (d) {
            if (d.data.tax_id == -1)
                return _this.colorScheme["compressed_fill"];
            return _this.colorScheme.fill;
        })
            .attr("text_fill", function (d) {
            if (d.data.tax_id == -1)
                return _this.colorScheme["compressed_text_fill"];
            return _this.colorScheme.fill;
        })
            .attr("stroke_style", this.colorScheme["stroke_style"])
            .attr("text_fill", this.colorScheme["text_fill"])
            .attr("line_width", this.strokeWidth)
            .attr("_fill", null);
        var node_update = node_enter.merge(node);
        node_update
            .attr("x", function (d) {
            return d.y;
        })
            .attr("y", function (d) {
            return d.x;
        })
            .text(function (d) {
            if (d.data.tax_id == -1)
                return String(d.data.num_nodes);
            return d.data["taxon_name"];
        })
            .attr("text_fill", function (d) {
            if (d.data.tax_id == -1)
                return _this.colorScheme["compressed_text_fill"];
            return _this.colorScheme.fill;
        })
            .attr("size", function (d) {
            if (d.data.tax_id == -1)
                return _this.nodeSize * 2;
            return _this.nodeSize;
        })
            .attr("fill", function (d) {
            if (d.data.tax_id == -1)
                return _this.colorScheme["compressed_fill"];
            return _this.colorScheme.fill;
        })
            .attr("_fill", null);
        var node_exit = node.exit()
            .remove();
        var link = this.canvasWrapper.selectAll("custom-link").data(links);
        var linkEnter = link.enter()
            .append("custom-link")
            .classed("link", true)
            .attr("sx", function (d) {
            return d.parent.y;
        })
            .attr("sy", function (d) {
            return d.parent.x;
        })
            .attr("tx", function (d) {
            return d.y;
        })
            .attr("ty", function (d) {
            return d.x;
        })
            .attr("line_width", this.strokeWidth)
            .attr("stroke_style", this.colorScheme["link_stroke_style"]);
        var linkUpdate = linkEnter.merge(link);
        linkUpdate
            .transition()
            .duration(duration)
            .attr("sx", function (d) {
            return d.parent.y;
        })
            .attr("sy", function (d) {
            return d.parent.x;
        })
            .attr("tx", function (d) {
            return d.y;
        })
            .attr("ty", function (d) {
            return d.x;
        });
        var linkExit = link.exit()
            .transition()
            .duration(duration)
            .attr("sx", function (d) {
            return d.parent.y;
        })
            .attr("sy", function (d) {
            return d.parent.x;
        })
            .attr("tx", function (d) {
            return d.parent.y;
        })
            .attr("ty", function (d) {
            return d.parent.x;
        })
            .remove();
        var m1 = this.taxonomyTreeService.getRangeOfKeyAtDepth(this.taxonomyTree, "percentage", this.taxonomyTree.depth + 1);
        var m2 = this.taxonomyTreeService.getRangeOfKeyAtDepth(this.taxonomyTree, "percentage", this.taxonomyTree.depth + 2);
        this.scales["percentage"][0] = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_4__["interpolateGreens"])
            .domain([Math.min.apply(Math, m1[0]), Math.max.apply(Math, m1[1])]);
        this.scales["percentage"][1] = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_4__["interpolateBlues"])
            .domain([Math.min.apply(Math, m2[0]), Math.max.apply(Math, m2[1])]);
        var t = d3__WEBPACK_IMPORTED_MODULE_4__["timer"](function (elapsed) {
            _this.renderCanvas();
            if (elapsed > duration + (2 * duration))
                t.stop();
        });
    };
    TaxonomyViewComponent.prototype.renderCanvas = function () {
        var _this = this;
        var tx, ty, sx, sy;
        this.cx.clearRect(0, 0, this.screenWidth * (2 / 3), this.screenHeight);
        this.canvasWrapper.selectAll("custom-link").each(function (d) {
            var _link = d3__WEBPACK_IMPORTED_MODULE_4__["select"](this);
            _this.cx.beginPath();
            sx = parseFloat(_link.attr("sx"));
            sy = parseFloat(_link.attr("sy"));
            tx = parseFloat(_link.attr("tx"));
            ty = parseFloat(_link.attr("ty"));
            _this.cx.moveTo(sx, sy);
            _this.cx.lineTo(0.5 * (tx + sx), sy);
            _this.cx.lineTo(0.5 * (tx + sx), ty);
            _this.cx.lineTo(tx, ty);
            _this.cx.strokeStyle = _link.attr("stroke-style");
            _this.cx.lineWidth = parseFloat(_link.attr("line-width"));
            _this.cx.stroke();
            _this.cx.closePath();
        });
        this.canvasWrapper.selectAll("custom-node").each(function (d) {
            var _node = d3__WEBPACK_IMPORTED_MODULE_4__["select"](this), x, y;
            x = parseFloat(_node.attr("x"));
            y = parseFloat(_node.attr("y"));
            _this.cx.moveTo(x, y);
            _this.cx.beginPath();
            _this.cx.arc(x, y, parseFloat(_node.attr("size")), 0, 2 * Math.PI);
            _this.cx.fillStyle = _node.attr("fill");
            _this.cx.lineWidth = parseFloat(_node.attr("line-width"));
            _this.cx.strokeStyle = _node.attr("stroke-style");
            _this.cx.fill();
            _this.cx.stroke();
            _this.cx.closePath();
            _this.cx.beginPath();
            _this.cx.font = "18px Open Sans";
            _this.cx.fillStyle = _node.attr("text_fill");
            if (d.data.tax_id == -1) {
                _this.cx.textAlign = "center";
                _this.cx.textBaseline = 'middle';
                _this.cx.fillText(_node.text(), x, y);
            }
            else if (d.children != null) {
                _this.cx.textAlign = "center";
                _this.cx.textBaseline = 'middle';
                _this.cx.fillText(_node.text(), x, y + parseFloat(_node.attr("size")) + 5);
            }
            else {
                _this.cx.textAlign = "left";
                _this.cx.textBaseline = 'middle';
                _this.cx.fillText(_node.text(), x + _this.heatmap.square_size * (d.data.percentage.length + 1) + parseFloat(_node.attr("size")), y);
            }
            _this.cx.fill();
            _this.cx.closePath();
            if (d.depth > 0 && d.data.tax_id != -1) {
                _this.drawHeatmap(_node, d, "percentage");
            }
        });
        // this.canvasWrapper.selectAll("custom-node").each(function(d){
        //   var _node = d3.select(this);
        //   if(_node.attr("hover-status")=="active"){
        // 	draw_hover(d, ["percentage", "taxon_reads", "kmer_depth", "kmer_coverage"]);
        //   }
        // });
    };
    TaxonomyViewComponent.prototype.setUpCanvas = function () {
        var canvasEl = this.canvas.nativeElement;
        this.canvasEl = canvasEl;
        var dpr = window.devicePixelRatio || 1;
        var rect = canvasEl.getBoundingClientRect();
        canvasEl.width = (this.screenWidth * (2 / 3) - 30) * dpr;
        canvasEl.height = this.screenHeight * dpr;
        // canvasEl.style.width = String(this.screenWidth/2 - 30)+"px";
        canvasEl.style.height = String(this.screenHeight) + "px";
        this.cx = canvasEl.getContext('2d');
        this.cx.scale(dpr, dpr);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaxonomyViewComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaxonomyViewComponent.prototype, "getScreenSize", null);
    TaxonomyViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taxonomy-view',
            template: __webpack_require__(/*! ./taxonomy-view.component.html */ "./src/app/taxonomy-view/taxonomy-view.component.html"),
            styles: [__webpack_require__(/*! ./taxonomy-view.component.css */ "./src/app/taxonomy-view/taxonomy-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_2__["TaxonomyTreeService"]])
    ], TaxonomyViewComponent);
    return TaxonomyViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karthik/Documents/floki-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map