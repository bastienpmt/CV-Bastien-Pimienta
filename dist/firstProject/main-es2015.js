(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/competences/competences.component */ "./src/app/components/competences/competences.component.ts");
/* harmony import */ var _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome-page/welcome-page.component */ "./src/app/components/welcome-page/welcome-page.component.ts");
/* harmony import */ var _components_profil_profil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profil/profil.component */ "./src/app/components/profil/profil.component.ts");
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/experiences/experiences.component */ "./src/app/components/experiences/experiences.component.ts");
/* harmony import */ var _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/formation/formation.component */ "./src/app/components/formation/formation.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_infos_infos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/infos/infos.component */ "./src/app/components/infos/infos.component.ts");












const routes = [
    { path: '', component: _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'navbar', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'competences', component: _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_3__["CompetencesComponent"] },
    { path: 'welcome-page', component: _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"] },
    { path: 'profil', component: _components_profil_profil_component__WEBPACK_IMPORTED_MODULE_5__["ProfilComponent"] },
    { path: 'experience', component: _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_6__["ExperiencesComponent"] },
    { path: 'formation', component: _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_7__["FormationComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'infos', component: _components_infos_infos_component__WEBPACK_IMPORTED_MODULE_9__["InfosComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'firstProject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/competences/competences.component */ "./src/app/components/competences/competences.component.ts");
/* harmony import */ var _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/welcome-page/welcome-page.component */ "./src/app/components/welcome-page/welcome-page.component.ts");
/* harmony import */ var _components_profil_profil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profil/profil.component */ "./src/app/components/profil/profil.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/experiences/experiences.component */ "./src/app/components/experiences/experiences.component.ts");
/* harmony import */ var _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/formation/formation.component */ "./src/app/components/formation/formation.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_infos_infos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/infos/infos.component */ "./src/app/components/infos/infos.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_8__["CompetencesComponent"],
        _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_9__["WelcomePageComponent"],
        _components_profil_profil_component__WEBPACK_IMPORTED_MODULE_10__["ProfilComponent"],
        _components_url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_12__["UrlReferenceComponent"],
        _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_13__["ExperiencesComponent"],
        _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_14__["FormationComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        _components_infos_infos_component__WEBPACK_IMPORTED_MODULE_16__["InfosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_8__["CompetencesComponent"],
                    _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_9__["WelcomePageComponent"],
                    _components_profil_profil_component__WEBPACK_IMPORTED_MODULE_10__["ProfilComponent"],
                    _components_url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_12__["UrlReferenceComponent"],
                    _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_13__["ExperiencesComponent"],
                    _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_14__["FormationComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                    _components_infos_infos_component__WEBPACK_IMPORTED_MODULE_16__["InfosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/competences/competences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/competences/competences.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompetencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetencesComponent", function() { return CompetencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");




class CompetencesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CompetencesComponent.ɵfac = function CompetencesComponent_Factory(t) { return new (t || CompetencesComponent)(); };
CompetencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetencesComponent, selectors: [["app-competences"]], decls: 47, vars: 0, consts: [[1, "menu-container"], ["href", "#"], [1, "fab", "fa-html5", "icon"], [1, "iconTitle"], [1, "fab", "fa-css3-alt", "icon"], [1, "fab", "fa-angular", "icon"], [1, "fab", "fa-php", "icon"], [1, "fab", "fa-js", "icon"], [1, "fab", "fa-github", "icon"], ["href", "#", 1, "imageIcon"], ["src", "/assets/img/competences/adobe.png", 1, "icon"], ["src", "/assets/img/competences/symfony.png", 1, "icon"], [1, "iconTitle", "hoverMe"]], template: function CompetencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "html 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "css 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "php");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "gitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "adobe xd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Symfony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hover me !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-url-reference");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_2__["UrlReferenceComponent"]], styles: [".menu-container[_ngcontent-%COMP%]{\r\n  height: 90vh;\r\n  background: linear-gradient(117deg, rgba(0,0,0,0) 0%, rgba(0,0,0,9) 40%, rgba(0,0,0,0) 100%),\r\n   url(/assets/img/header/794329.png);\r\n  background-size: 90%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n  ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    background-color: #fff;\r\n    text-align: center;\r\n    line-height: 80px;\r\n    font-size: 35px;\r\n    margin: 0 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border: 3px solid #fff;\r\n    z-index: 1;\r\n  }\r\n  .imageIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n  }\r\n  a.imageIcon[_ngcontent-%COMP%]{\r\n    display: flex!important;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    color: #262626;\r\n    transition: .5s;\r\n    z-index: 3;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transform: rotateY(360deg);\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    -webkit-filter: invert(1)!important;\r\n            filter: invert(1)!important;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .iconTitle[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #f00;\r\n    transition: .5s;\r\n    z-index: 2;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\r\n    top: 0%;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%]:before{\r\n    background: #e75319;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:before{\r\n    background: #4226e4;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:hover:before{\r\n    top:5%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:before {\r\n    background: #df2020;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:hover:before{\r\n    top:10%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:before {\r\n    background: #8e3fe9;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:hover:before{\r\n    top:11%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:before {\r\n    background: #f5d000;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:hover:before{\r\n    top:17%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)   a[_ngcontent-%COMP%]:before {\r\n    background: #333333;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)   a[_ngcontent-%COMP%]:hover:before{\r\n    top:3%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7)   a[_ngcontent-%COMP%]:before {\r\n    background: #138a37;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8)   a[_ngcontent-%COMP%]:before {\r\n    background: #000000;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8)   a[_ngcontent-%COMP%]:hover:before{\r\n    top:60%\r\n  }\r\n  .iconTitle[_ngcontent-%COMP%]{\r\n  color: white;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  position: absolute;\r\n  top: -100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0;\r\n  left: 0;\r\n  display: none;\r\n}\r\n  \r\n  @media screen and (min-width: 770px){\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{\r\n  background: none;\r\n  -webkit-animation: showAll 2s ease;\r\n          animation: showAll 2s ease;\r\n}\r\n\r\n.hoverMe[_ngcontent-%COMP%]{\r\n  -webkit-animation: showHover 2s ease;\r\n          animation: showHover 2s ease;\r\n  display: block;\r\n  opacity: 0;\r\n}\r\n@-webkit-keyframes showHover{\r\n  0%{opacity: 0;}\r\n  50%{opacity: 1;}\r\n  100%{opacity: 0;}\r\n}\r\n@keyframes showHover{\r\n  0%{opacity: 0;}\r\n  50%{opacity: 1;}\r\n  100%{opacity: 0;}\r\n}\r\n@-webkit-keyframes showAll{\r\n  0%{top: 100%;}\r\n  50%{ top:0%;}\r\n  100%{top:100%;}\r\n}\r\n@keyframes showAll{\r\n  0%{top: 100%;}\r\n  50%{ top:0%;}\r\n  100%{top:100%;}\r\n}\r\n\r\n}\r\n  \r\n  @media screen and (max-width: 770px){\r\n  .menu-container[_ngcontent-%COMP%]{\r\n      height: unset!important;\r\n  }\r\n  ul[_ngcontent-%COMP%]{\r\n    margin: 100px 0;\r\n    display: block;\r\n  }\r\n  li[_ngcontent-%COMP%]{\r\n    margin: 10px 0;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    top: 0%;\r\n  }\r\n  \r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%]:before{\r\n    background: #e75319;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:before{\r\n    background: #4226e4;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:before{\r\n    top:5%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:before {\r\n    background: #df2020;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:before{\r\n    top:10%\r\n  }\r\n  \r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:before {\r\n    background: #8e3fe9;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:before{\r\n    top:11%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:before {\r\n    background: #f5d000;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:before{\r\n    top:17%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)   a[_ngcontent-%COMP%]:before {\r\n    background: #333333;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)   a[_ngcontent-%COMP%]:before{\r\n    top:3%\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7)   a[_ngcontent-%COMP%]:before {\r\n    background: #138a37;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n  .imageIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    -webkit-filter: invert(1);\r\n            filter: invert(1);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wZXRlbmNlcy9jb21wZXRlbmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWjtxQ0FDbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7RUFDWjtFQUVBO0lBQ0UsV0FBVztJQUNYLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0VBQ1o7RUFFQTtJQUNFLE9BQU87RUFDVDtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0U7RUFDRjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFO0VBQ0Y7RUFFRjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7QUFDZjtFQUVBLGVBQWU7RUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFDQTtFQUNFLEdBQUcsVUFBVSxDQUFDO0VBQ2QsSUFBSSxVQUFVLENBQUM7RUFDZixLQUFLLFVBQVUsQ0FBQztBQUNsQjtBQUpBO0VBQ0UsR0FBRyxVQUFVLENBQUM7RUFDZCxJQUFJLFVBQVUsQ0FBQztFQUNmLEtBQUssVUFBVSxDQUFDO0FBQ2xCO0FBQ0E7RUFDRSxHQUFHLFNBQVMsQ0FBQztFQUNiLEtBQUssTUFBTSxDQUFDO0VBQ1osS0FBSyxRQUFRLENBQUM7QUFDaEI7QUFKQTtFQUNFLEdBQUcsU0FBUyxDQUFDO0VBQ2IsS0FBSyxNQUFNLENBQUM7RUFDWixLQUFLLFFBQVEsQ0FBQztBQUNoQjs7QUFFQTtFQUVBLGdCQUFnQjtFQUVoQjtFQUNFO01BQ0ksdUJBQXVCO0VBQzNCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wZXRlbmNlcy9jb21wZXRlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tZW51LWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExN2RlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCw5KSA0MCUsIHJnYmEoMCwwLDAsMCkgMTAwJSksXHJcbiAgIHVybCgvYXNzZXRzL2ltZy9oZWFkZXIvNzk0MzI5LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHVsIGxpIGEge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlSWNvbiBpbWd7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIGEuaW1hZ2VJY29ue1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICB1bCBsaSBhIC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgei1pbmRleDogMztcclxuICB9XHJcbiAgXHJcbiAgdWwgbGkgYTpob3ZlciAuaWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gIH1cclxuICB1bCBsaSBhOmhvdmVyIGltZ3tcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEpIWltcG9ydGFudDtcclxuICB9XHJcbiAgdWwgbGk6aG92ZXIgLmljb25UaXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgdWwgbGkgYTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICB1bCBsaSBhOmhvdmVyOmJlZm9yZSB7XHJcbiAgICB0b3A6IDAlO1xyXG4gIH1cclxuICBcclxuICB1bCBsaTpudGgtY2hpbGQoMSkgYTpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc1MzE5O1xyXG4gIH1cclxuXHJcbiAgdWwgbGk6bnRoLWNoaWxkKDIpIGE6YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZDogIzQyMjZlNDtcclxuICB9XHJcbiAgdWwgbGk6bnRoLWNoaWxkKDIpIGE6aG92ZXI6YmVmb3Jle1xyXG4gICAgdG9wOjUlXHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCgzKSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGYyMDIwO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoMykgYTpob3ZlcjpiZWZvcmV7XHJcbiAgICB0b3A6MTAlXHJcbiAgfVxyXG4gIFxyXG4gIHVsIGxpOm50aC1jaGlsZCg0KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGUzZmU5O1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoNCkgYTpob3ZlcjpiZWZvcmV7XHJcbiAgICB0b3A6MTElXHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCg1KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVkMDAwO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoNSkgYTpob3ZlcjpiZWZvcmV7XHJcbiAgICB0b3A6MTclXHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCg2KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoNikgYTpob3ZlcjpiZWZvcmV7XHJcbiAgICB0b3A6MyVcclxuICB9XHJcbiAgdWwgbGk6bnRoLWNoaWxkKDcpIGE6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMzhhMzc7XHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCg4KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoOCkgYTpob3ZlcjpiZWZvcmV7XHJcbiAgICB0b3A6NjAlXHJcbiAgfVxyXG5cclxuLmljb25UaXRsZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBBTklNQVRJT04gICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3MHB4KXtcclxudWwgbGkgYTpiZWZvcmV7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBhbmltYXRpb246IHNob3dBbGwgMnMgZWFzZTtcclxufVxyXG5cclxuLmhvdmVyTWV7XHJcbiAgYW5pbWF0aW9uOiBzaG93SG92ZXIgMnMgZWFzZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbkBrZXlmcmFtZXMgc2hvd0hvdmVye1xyXG4gIDAle29wYWNpdHk6IDA7fVxyXG4gIDUwJXtvcGFjaXR5OiAxO31cclxuICAxMDAle29wYWNpdHk6IDA7fVxyXG59XHJcbkBrZXlmcmFtZXMgc2hvd0FsbHtcclxuICAwJXt0b3A6IDEwMCU7fVxyXG4gIDUwJXsgdG9wOjAlO31cclxuICAxMDAle3RvcDoxMDAlO31cclxufVxyXG5cclxufVxyXG5cclxuLyogUkVTUE9OU0lWRSAgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcclxuICAubWVudS1jb250YWluZXJ7XHJcbiAgICAgIGhlaWdodDogdW5zZXQhaW1wb3J0YW50O1xyXG4gIH1cclxuICB1bHtcclxuICAgIG1hcmdpbjogMTAwcHggMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBsaXtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuICB1bCBsaSBhOmJlZm9yZSB7XHJcbiAgICB0b3A6IDAlO1xyXG4gIH1cclxuICBcclxuICB1bCBsaTpudGgtY2hpbGQoMSkgYTpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc1MzE5O1xyXG4gIH1cclxuXHJcbiAgdWwgbGk6bnRoLWNoaWxkKDIpIGE6YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZDogIzQyMjZlNDtcclxuICB9XHJcbiAgdWwgbGk6bnRoLWNoaWxkKDIpIGE6YmVmb3Jle1xyXG4gICAgdG9wOjUlXHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCgzKSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGYyMDIwO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoMykgYTpiZWZvcmV7XHJcbiAgICB0b3A6MTAlXHJcbiAgfVxyXG4gIFxyXG4gIHVsIGxpOm50aC1jaGlsZCg0KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGUzZmU5O1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoNCkgYTpiZWZvcmV7XHJcbiAgICB0b3A6MTElXHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCg1KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVkMDAwO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoNSkgYTpiZWZvcmV7XHJcbiAgICB0b3A6MTclXHJcbiAgfVxyXG4gIHVsIGxpOm50aC1jaGlsZCg2KSBhOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gIH1cclxuICB1bCBsaTpudGgtY2hpbGQoNikgYTpiZWZvcmV7XHJcbiAgICB0b3A6MyVcclxuICB9XHJcbiAgdWwgbGk6bnRoLWNoaWxkKDcpIGE6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMzhhMzc7XHJcbiAgfVxyXG4gIHVsIGxpIGEgLmljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5pbWFnZUljb24gaW1ne1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompetencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-competences',
                templateUrl: './competences.component.html',
                styleUrls: ['./competences.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");




class ContactComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 28, vars: 0, consts: [[1, "container-fluid"], [1, "container"], ["target", "_blank", "href", "https://www.linkedin.com/in/bastien-pimienta-0732a219b/"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "bastien.pimienta@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "06.61.83.76.52 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "200 all\u00E9e de gratigny");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "38530 chapareillan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pimienta bastien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-url-reference");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_2__["UrlReferenceComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n    overflow: hidden;\r\n    background: radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,1) 100%), url(/assets/img/header/13382.jpg);\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    height: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 25px;\r\n    margin-right: 10%;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    padding: 20px 0;    \r\n    font-size: 20px;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: lighter;\r\n    letter-spacing: 5px;\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n    background-color: rgb(122, 122, 122);\r\n    width: 20%;\r\n}\r\nli[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    text-transform: uppercase;\r\n    color: rgb(131, 131, 131);\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: unset;\r\n}\r\n@media screen and (max-width: 770px){\r\n    li[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUlBQW1JO0FBQ3ZJO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLDAsMCwwLjgpIDAlLCByZ2JhKDAsMCwwLDAuOSkgNTAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpLCB1cmwoL2Fzc2V0cy9pbWcvaGVhZGVyLzEzMzgyLmpwZyk7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubGkgaW1ne1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5saXtcclxuICAgIHBhZGRpbmc6IDIwcHggMDsgICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcbmhye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5saSBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHVuc2V0O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcclxuICAgIGxpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/experiences/experiences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");





const _c0 = function (a0) { return { "displayItem": a0 }; };
class ExperiencesComponent {
    constructor() {
        this.displayContent1 = false;
        this.displayContent2 = false;
        this.displayContent3 = false;
    }
    ngOnInit() {
    }
    active(number) {
        switch (number) {
            case 1:
                this.displayContent1 = !this.displayContent1;
                this.displayContent2 = false;
                this.displayContent3 = false;
                break;
            case 2:
                this.displayContent2 = !this.displayContent2;
                this.displayContent1 = false;
                this.displayContent3 = false;
                break;
            case 3:
                this.displayContent3 = !this.displayContent3;
                this.displayContent1 = false;
                this.displayContent2 = false;
                break;
        }
    }
}
ExperiencesComponent.ɵfac = function ExperiencesComponent_Factory(t) { return new (t || ExperiencesComponent)(); };
ExperiencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperiencesComponent, selectors: [["app-experiences"]], decls: 50, vars: 9, consts: [[1, "container-fluid"], [1, "container"], [1, "gallery-wrap"], [1, "item", "item-1", 3, "ngClass", "click"], [1, "itemText"], [1, "mt-3"], [1, "item", "item-2", 3, "ngClass", "click"], [1, "item", "item-3", 3, "ngClass", "click"]], template: function ExperiencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperiencesComponent_Template_div_click_4_listener() { return ctx.active(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "stage soci\u00E9t\u00E9 ebusinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Premiers pas dans le d\u00E9veloppement web et cr\u00E9ation de mon premier site internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "D\u00E9couverte du m\u00E9tier de d\u00E9veloppeur web freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HTML-CSS, SQL et PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EMPLOY\u00C9 POLYVALENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cr\u00E9ation d'une base de donn\u00E9es excel et pr\u00E9paration de commandes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Analyse et receuil de donn\u00E9es, coh\u00E9sion d'\u00E9quipe (soci\u00E9t\u00E9 Hilaire)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperiencesComponent_Template_div_click_25_listener() { return ctx.active(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Missions d'int\u00E9rim diverses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Travail \u00E0 la chaine, conditionnement et garnissage de patisseries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Travail dans des conditions difficiles, organisation et coh\u00E9sion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperiencesComponent_Template_div_click_37_listener() { return ctx.active(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Pr\u00E9parateur de commandes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Pr\u00E9paration de commandes d'outillage pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Concentration, rapidit\u00E9 et rigueur mise en avant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-url-reference");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.displayContent1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.displayContent2 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.displayContent3 === true));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_3__["UrlReferenceComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n\r\n.gallery-wrap[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 70vh;\r\n  }\r\n\r\n.item[_ngcontent-%COMP%] {\r\n      overflow: hidden;\r\n    display: block;\r\n    flex: 1;\r\n    height: 100%;\r\n    transition: flex 0.8s ease;\r\n    border-bottom: 0.5px solid rgb(170, 170, 170);\r\n  }\r\n\r\n.item-1[_ngcontent-%COMP%] { \r\n    background-color: rgba(255, 255, 255, 0.021);\r\n  border-top: 0.5px solid rgb(168, 168, 168);\r\n}\r\n\r\n.item-2[_ngcontent-%COMP%] { \r\n  background-color: rgba(184, 184, 184, 0.041);\r\n}\r\n\r\n.item-3[_ngcontent-%COMP%] { \r\n  background-color: rgba(255, 255, 255, 0.021);\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  transform: translateY(-100%);\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.5s;\r\n  letter-spacing: 8px;\r\n  color: white;\r\n  font-size: 50px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.itemText[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n    height: 100%;\r\n    width: 100%;\r\n    transform: translateY(-100%);\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.itemText[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: lighter;\r\n    text-transform: uppercase;\r\n    letter-spacing: 8px;\r\n}\r\n\r\n.itemText[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    color: rgb(170, 170, 170);\r\n    margin-top: 5px;\r\n    line-height: 30px;\r\n}\r\n\r\n\r\n\r\n.displayItem[_ngcontent-%COMP%]{\r\n    flex: 7;\r\n}\r\n\r\n.displayItem[_ngcontent-%COMP%]   .itemText[_ngcontent-%COMP%]{\r\n    transform: translateY(0%);\r\n    opacity: 1;\r\n}\r\n\r\n.displayItem[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    transform: translateY(0%);\r\n}\r\n\r\n@media screen and (max-width: 770px){\r\n    .itemText[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .itemText[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .container-fluid[_ngcontent-%COMP%]{\r\n        height: 120vh;\r\n    }\r\n    .gallery-wrap[_ngcontent-%COMP%]{\r\n        height: 100vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7TUFDSSxnQkFBZ0I7SUFDbEIsY0FBYztJQUNkLE9BQU87SUFDUCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZDQUE2QztFQUMvQzs7QUFFRjtJQUNJLDRDQUE0QztFQUM5QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVFLGFBQWE7O0FBQ2Y7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxPQUFPO0FBQ1g7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2VzL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEFDQ09SREVPTiAgKi9cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgLmdhbGxlcnktd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuICBcclxuICAuaXRlbSB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBmbGV4IDAuOHMgZWFzZTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICB9XHJcbiAgXHJcbi5pdGVtLTEgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjEpO1xyXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYigxNjgsIDE2OCwgMTY4KTtcclxufVxyXG4uaXRlbS0yIHsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE4NCwgMTg0LCAwLjA0MSk7XHJcbn1cclxuLml0ZW0tMyB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjEpO1xyXG59XHJcbi5pdGVtIGg0e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufSBcclxuLml0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiAgLyogQ09OVEVOVSAgKi9cclxuLml0ZW1UZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pdGVtVGV4dCBoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxufVxyXG5cclxuLml0ZW1UZXh0IHVse1xyXG4gICAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vKiBBTk5JTUFUSU9OICAqL1xyXG5cclxuLmRpc3BsYXlJdGVte1xyXG4gICAgZmxleDogNztcclxufVxyXG4uZGlzcGxheUl0ZW0gLml0ZW1UZXh0e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn0gXHJcbi5kaXNwbGF5SXRlbSBoNHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbn0gXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgICAuaXRlbVRleHQgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW1UZXh0IGxpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5LXdyYXB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperiencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experiences',
                templateUrl: './experiences.component.html',
                styleUrls: ['./experiences.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/formation/formation.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/formation/formation.component.ts ***!
  \*************************************************************/
/*! exports provided: FormationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationComponent", function() { return FormationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");






const _c0 = function (a0) { return { "displayItem": a0 }; };
class FormationComponent {
    constructor() {
        this.displayContent1 = false;
        this.displayContent2 = false;
        this.displayContent3 = false;
    }
    ngOnInit() {
    }
    active(number) {
        switch (number) {
            case 1:
                this.displayContent1 = !this.displayContent1;
                this.displayContent2 = false;
                this.displayContent3 = false;
                break;
            case 2:
                this.displayContent2 = !this.displayContent2;
                this.displayContent1 = false;
                this.displayContent3 = false;
                break;
            case 3:
                this.displayContent3 = !this.displayContent3;
                this.displayContent1 = false;
                this.displayContent2 = false;
                break;
        }
    }
}
FormationComponent.ɵfac = function FormationComponent_Factory(t) { return new (t || FormationComponent)(); };
FormationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormationComponent, selectors: [["app-formation"]], decls: 53, vars: 9, consts: [[1, "container-fluid"], [1, "container"], [1, "gallery-wrap", "pb-2"], [1, "item", "item-1", 3, "ngClass", "click"], [1, "itemText"], [1, "formationDate"], [1, "item", "item-2", 3, "ngClass", "click"], [1, "item", "item-3", 3, "ngClass", "click"], ["routerLink", "/infos", 1, "text-light"]], template: function FormationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormationComponent_Template_div_click_4_listener() { return ctx.active(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Formation d\u00E9veloppeur web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "human booster | grenoble(38000)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "HTML/CSS/Bootstrap, Angular, Javascript/JQuery, PHP/PHP POO, Symfony, WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "M\u00E9thode SCRUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Algorithmie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2020 - Aujourd'hui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Formation d\u00E9veloppeur web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormationComponent_Template_div_click_22_listener() { return ctx.active(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Licence \u00E9conomie et gestion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Universit\u00E9 grenoble-alpes | grenoble(38000)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Formation \u00E0 la comptabilit\u00E9 et \u00E0 la gestion d'entreprises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2017 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "licence \u00E9conomie-gestion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormationComponent_Template_div_click_36_listener() { return ctx.active(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bac \u00E9conomique et social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lyc\u00E9e pierre du terrail | pontcharra(38530)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Premi\u00E8res notions \u00E9conomiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2015 - 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "bac \u00E9conomique et social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Voir mes projets en cours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-url-reference");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.displayContent1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.displayContent2 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.displayContent3 === true));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_4__["UrlReferenceComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n\r\n.gallery-wrap[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 70vh;\r\n  }\r\n\r\n.item[_ngcontent-%COMP%] {\r\n      padding: 5px;\r\n      overflow: hidden;\r\n    display: block;\r\n    flex: 1;\r\n    height: 100%;\r\n    transition: flex 0.8s ease;\r\n    border-bottom: 0.5px solid rgb(170, 170, 170);\r\n  }\r\n\r\n.item-1[_ngcontent-%COMP%] { \r\n    background-color: rgba(255, 255, 255, 0.021);\r\n  border-top: 0.5px solid rgb(168, 168, 168);\r\n}\r\n\r\n.item-2[_ngcontent-%COMP%] { \r\n  background-color: rgba(184, 184, 184, 0.041);\r\n}\r\n\r\n.item-3[_ngcontent-%COMP%] { \r\n  background-color: rgba(255, 255, 255, 0.021);\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  transform: translateY(-100%);\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.5s;\r\n  letter-spacing: 8px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  font-size: 30px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.itemText[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n    height: 100%;\r\n    width: 100%;\r\n    transform: translateY(-100%);\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.itemText[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: lighter;\r\n    text-transform: uppercase;\r\n    letter-spacing: 8px;\r\n}\r\n\r\n.itemText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: rgb(148, 148, 148);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.itemText[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    color: rgb(170, 170, 170);\r\n    margin-top: 5px;\r\n    line-height: 30px;\r\n}\r\n\r\n\r\n\r\n.formationDate[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: rgb(231, 44, 44)!important;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n\r\n\r\n.displayItem[_ngcontent-%COMP%]{\r\n    flex: 7;\r\n}\r\n\r\n.displayItem[_ngcontent-%COMP%]   .itemText[_ngcontent-%COMP%]{\r\n    transform: translateY(0%);\r\n    opacity: 1;\r\n}\r\n\r\n.displayItem[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    transform: translateY(0%);\r\n}\r\n\r\n@media screen and (max-width: 770px){\r\n    .itemText[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .itemText[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .container-fluid[_ngcontent-%COMP%]{\r\n        height: 120vh;\r\n    }\r\n    .gallery-wrap[_ngcontent-%COMP%]{\r\n        height: 100vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQSxlQUFlOztBQUNmO0lBQ0ksY0FBYztJQUNkLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEIsY0FBYztJQUNkLE9BQU87SUFDUCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZDQUE2QztFQUMvQzs7QUFFRjtJQUNJLDRDQUE0QztFQUM5QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFRSxhQUFhOztBQUNmO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxPQUFPO0FBQ1g7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogQUNDT1JERU9OICAqL1xyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBcclxuICAuZ2FsbGVyeS13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogZmxleCAwLjhzIGVhc2U7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbiAgfVxyXG4gIFxyXG4uaXRlbS0xIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIxKTtcclxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2IoMTY4LCAxNjgsIDE2OCk7XHJcbn1cclxuLml0ZW0tMiB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxODQsIDE4NCwgMC4wNDEpO1xyXG59XHJcbi5pdGVtLTMgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIxKTtcclxufVxyXG4uaXRlbSBoNHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufSBcclxuLml0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiAgLyogQ09OVEVOVSAgKi9cclxuLml0ZW1UZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pdGVtVGV4dCBoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxufVxyXG4uaXRlbVRleHQgcHtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5pdGVtVGV4dCB1bHtcclxuICAgIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLyogREFURSAgKi9cclxuXHJcbi5mb3JtYXRpb25EYXRle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyMzEsIDQ0LCA0NCkhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5cclxuLyogQU5OSU1BVElPTiAgKi9cclxuXHJcbi5kaXNwbGF5SXRlbXtcclxuICAgIGZsZXg6IDc7XHJcbn1cclxuLmRpc3BsYXlJdGVtIC5pdGVtVGV4dHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59IFxyXG4uZGlzcGxheUl0ZW0gaDR7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG59IFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gICAgLml0ZW1UZXh0IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5pdGVtVGV4dCBsaXtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbSBoNHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeS13cmFwe1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formation',
                templateUrl: './formation.component.html',
                styleUrls: ['./formation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");




class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 0, consts: [[1, "homeSection"], [1, "headerHome"], [1, "keyWords"], [1, "ambitionsLabel", "d-flex"], [1, "hiddenText", "ambitionsText"], [1, ""], [1, "determinationLabel", "d-flex"], [1, "hiddenText", "determinationText"], [1, "travailLabel", "d-flex"], [1, "hiddenText", "travailText"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ambitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "D\u00E9sir ardent de parvenir \u00E0 mon but");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "D\u00E9termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ne jamais lacher, \u00EAtre audacieux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Travail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S'impliquer \u00E0 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-url-reference");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_2__["UrlReferenceComponent"]], styles: [".homeSection[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n.headerHome[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 80%;\r\n    margin-left: 20%;\r\n    height: 90vh;\r\n    background: radial-gradient(rgba(0,0,0,0) 20%, black 70%), url(/assets/img/header/13382.jpg);\r\n    background-size: cover;\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n}\r\n.headerHome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: lighter;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    font-size: 40px;\r\n    letter-spacing: 10px;\r\n    margin: 20px 0;\r\n    transition: 0.15s;\r\n}\r\n.keyWords[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    position: relative;\r\n    top: 25%;\r\n    left: 10%;\r\n}\r\n.keyWords[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{\r\n    cursor: default;\r\n    opacity: 1!important;\r\n    transition: 0.2s;\r\n}\r\n.keyWords[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{\r\n    opacity: 0.3;\r\n    transition: 0.2s;\r\n}\r\n\r\n.hiddenText[_ngcontent-%COMP%]{\r\n    color: rgb(240, 218, 218);\r\n    position: relative;\r\n    left: 25%;\r\n    transition: 0.3s;\r\n    display: none;\r\n}\r\n\r\n.ambitionsLabel[_ngcontent-%COMP%]:hover   .ambitionsText[_ngcontent-%COMP%]{\r\n    -webkit-animation: fondu 0.4s;\r\n            animation: fondu 0.4s;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n.ambitionsText[_ngcontent-%COMP%]{\r\n    bottom: 30px;\r\n}\r\n.determinationLabel[_ngcontent-%COMP%]:hover   .determinationText[_ngcontent-%COMP%]{\r\n    -webkit-animation: fondu 0.4s;\r\n            animation: fondu 0.4s;\r\n    opacity: 1;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n.determinationText[_ngcontent-%COMP%]{\r\n    top: 40px;\r\n}\r\n.travailLabel[_ngcontent-%COMP%]:hover   .travailText[_ngcontent-%COMP%]{\r\n    -webkit-animation: fondu 0.4s;\r\n            animation: fondu 0.4s;\r\n    opacity: 1;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n.travailText[_ngcontent-%COMP%]{\r\n    top: 90px;\r\n}\r\n.keyWords[_ngcontent-%COMP%]:hover{\r\n    width: unset;\r\n}\r\n@-webkit-keyframes fondu{\r\n    0%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes fondu{\r\n    0%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n@media screen and (max-width: 770px){\r\n    .keyWords[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n    }\r\n    .hiddenText[_ngcontent-%COMP%]{\r\n        display: none!important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRGQUE0RjtJQUM1RixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLFVBQVU7QUFDVjtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBLGlCQUFpQjtBQUNqQjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksR0FBRyxVQUFVLENBQUM7SUFDZCxLQUFLLFVBQVUsQ0FBQztBQUNwQjtBQUhBO0lBQ0ksR0FBRyxVQUFVLENBQUM7SUFDZCxLQUFLLFVBQVUsQ0FBQztBQUNwQjtBQUlBLGdCQUFnQjtBQUVoQjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSEVBREVSIFNJWkUgICovXHJcbi5ob21lU2VjdGlvbntcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaGVhZGVySG9tZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwwLDAsMCkgMjAlLCBibGFjayA3MCUpLCB1cmwoL2Fzc2V0cy9pbWcvaGVhZGVyLzEzMzgyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5oZWFkZXJIb21lIGltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogVEVYVCAgKi9cclxuLmtleVdvcmRzIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG59XHJcbi5rZXlXb3Jkc3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcbi5rZXlXb3JkcyBkaXY6aG92ZXIgaDJ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLmtleVdvcmRzOmhvdmVyIGgye1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG4vKiBISURERU4gVEVYVCAgKi9cclxuLmhpZGRlblRleHR7XHJcbiAgICBjb2xvcjogcmdiKDI0MCwgMjE4LCAyMTgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhPVkVSIEVGRkVDVCAgKi9cclxuLmFtYml0aW9uc0xhYmVsOmhvdmVyIC5hbWJpdGlvbnNUZXh0e1xyXG4gICAgYW5pbWF0aW9uOiBmb25kdSAwLjRzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbi5hbWJpdGlvbnNUZXh0e1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG59XHJcbi5kZXRlcm1pbmF0aW9uTGFiZWw6aG92ZXIgLmRldGVybWluYXRpb25UZXh0e1xyXG4gICAgYW5pbWF0aW9uOiBmb25kdSAwLjRzO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4uZGV0ZXJtaW5hdGlvblRleHR7XHJcbiAgICB0b3A6IDQwcHg7XHJcbn1cclxuLnRyYXZhaWxMYWJlbDpob3ZlciAudHJhdmFpbFRleHR7XHJcbiAgICBhbmltYXRpb246IGZvbmR1IDAuNHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbi50cmF2YWlsVGV4dHtcclxuICAgIHRvcDogOTBweDtcclxufVxyXG4ua2V5V29yZHM6aG92ZXJ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbn1cclxuQGtleWZyYW1lcyBmb25kdXtcclxuICAgIDAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5cclxuXHJcblxyXG4vKiBSRVNQT05TSVZFICAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gICAgLmtleVdvcmRzIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5oaWRkZW5UZXh0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/infos/infos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/infos/infos.component.ts ***!
  \*****************************************************/
/*! exports provided: InfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosComponent", function() { return InfosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






function InfosComponent_ngb_carousel_11_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function InfosComponent_ngb_carousel_11_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfosComponent_ngb_carousel_11_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function InfosComponent_ngb_carousel_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfosComponent_ngb_carousel_11_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class InfosComponent {
    constructor() {
        this.images = ['assets/img/infos/BusinessCase1.png',
            'assets/img/infos/BusinessCase2.png',
            'assets/img/infos/BusinessCase3.png',
            'assets/img/infos/BusinessCase4.png'
        ];
    }
    ngOnInit() {
    }
}
InfosComponent.ɵfac = function InfosComponent_Factory(t) { return new (t || InfosComponent)(); };
InfosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfosComponent, selectors: [["app-infos"]], decls: 13, vars: 1, consts: [[1, "container-fluid"], [1, "py-5"], [1, "mt-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random slide", 3, "src"]], template: function InfosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "D\u00E9veloppement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CV cr\u00E9e avec Angular CLI 9.0.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "projets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "en cours: Business Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InfosComponent_ngb_carousel_11_Template, 2, 1, "ngb-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-url-reference");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_3__["UrlReferenceComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    background: radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,1) 100%), url(/assets/img/header/13382.jpg);\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    text-transform: uppercase;\r\n    color: rgb(131, 131, 131);\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 40vh!important;\r\n}\r\n\r\na.carousel-control-prev-icon[_ngcontent-%COMP%]{\r\n    background-color: tomato!important;\r\n}\r\n\r\n@media screen and (max-width: 770px){\r\n    img[_ngcontent-%COMP%] {\r\n        height: 20vh!important;\r\n    }\r\n    .picsum-img-wrapper[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvcy9pbmZvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1JQUFtSTtBQUN2STs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUEsY0FBYzs7QUFDZDtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZm9zL2luZm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCwwLDAsMC44KSAwJSwgcmdiYSgwLDAsMCwwLjkpIDUwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKSwgdXJsKC9hc3NldHMvaW1nL2hlYWRlci8xMzM4Mi5qcGcpO1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcbn1cclxuXHJcbi8qIENBUk9VU0VMICAqL1xyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiA0MHZoIWltcG9ydGFudDtcclxufVxyXG5hLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjB2aCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGljc3VtLWltZy13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-infos',
                templateUrl: './infos.component.html',
                styleUrls: ['./infos.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "color": a0 }; };
const _c1 = function (a0) { return { "displayMenu": a0 }; };
function NavbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_div_10_Template_h4_mouseover_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.activeTranslate = "home"; })("click", function NavbarComponent_div_10_Template_h4_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acceuil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_div_10_Template_h4_mouseover_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.activeTranslate = "profil"; })("click", function NavbarComponent_div_10_Template_h4_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mon profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_div_10_Template_h4_mouseover_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.activeTranslate = "competences"; })("click", function NavbarComponent_div_10_Template_h4_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Comp\u00E9tences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_div_10_Template_h4_mouseover_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.activeTranslate = "formation"; })("click", function NavbarComponent_div_10_Template_h4_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_div_10_Template_h4_mouseover_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.activeTranslate = "experience"; })("click", function NavbarComponent_div_10_Template_h4_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Exp\u00E9riences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_div_10_Template_h4_mouseover_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.randomClass() + (ctx_r18.activeTranslate = "contact"); })("click", function NavbarComponent_div_10_Template_h4_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.activeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "T\u00E9l\u00E9charger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r5.collapseActive === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r5.collapseActive === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.activeTranslate)("ngClass", ctx_r5.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.randomNumber);
} }
class NavbarComponent {
    constructor(router) {
        this.router = router;
        // SHOW MENU 
        this.collapseActive = false;
    }
    ngOnInit() {
        this.url = this.router.url;
        this.url = this.url.replace('/', '');
        console.log(this.url);
    }
    randomClass() {
        // this.randomNumber = Math.floor(Math.random() * 4) + 1  ;
        while (this.randomNumber === this.lastNumber) {
            this.randomNumber = Math.floor(Math.random() * 4) + 1;
            if (this.randomNumber === 1) {
                this.randomNumber = 'first';
            }
            else if (this.randomNumber === 2) {
                this.randomNumber = 'second';
            }
            else if (this.randomNumber === 3) {
                this.randomNumber = 'third';
            }
            else if (this.randomNumber === 4) {
                this.randomNumber = 'four';
            }
            else if (this.randomNumber === 5) {
                this.randomNumber = 'five';
            }
        }
        console.log(this.randomNumber);
        this.lastNumber = this.randomNumber;
    }
    activeCollapse() {
        this.collapseActive = !this.collapseActive;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 1, consts: [[1, "navbar", "py-3", "d-flex", "justify-content-between"], [1, "burgerMenu", "ml-3", "d-block", 3, "click"], [1, "top"], [1, "mid"], [1, "bottom"], [1, "navbar-brand", "p-0", "m-0", "h1", "text-light"], ["src", "assets/img/navbar/sign.png", "routerLink", "/home"], [1, "contactIcon", "mr-3", "navbar-items", "text-light"], ["routerLink", "/contact", "src", "assets/img/navbar/phone.png"], [4, "ngIf"], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", 1, "modal", "fade", "d-flex", "justify-content-start", 3, "ngClass"], [1, "menuActive", 3, "ngClass"], [1, "closeModal", "ml-3", "mt-3"], ["src", "assets/img/navbar/menu/arrowLeft.png", 3, "click"], [1, "py-5", "contentContainer"], [1, "logoModal", "text-center"], [1, "navbarConstruct"], [1, "menu-list"], [1, "menu-title", "mb-4"], [1, "d-flex"], [1, "translateDiv", 3, "ngClass"], ["routerLinkActive", "activeItem", "routerLink", "/home", 1, "menu-items", 3, "mouseover", "click"], ["src", "assets/img/navbar/menu/home.png"], ["routerLink", "/profil", 1, "menu-items", 3, "mouseover", "click"], ["src", "assets/img/navbar/menu/user.png"], ["routerLink", "/competences", 1, "menu-items", 3, "mouseover", "click"], ["src", "assets/img/navbar/menu/star.png"], ["routerLink", "/formation", 1, "menu-items", 3, "mouseover", "click"], ["src", "assets/img/navbar/menu/business.png"], ["routerLink", "/experience", 1, "menu-items", 3, "mouseover", "click"], ["src", "assets/img/navbar/menu/list.png"], ["routerLink", "/contact", 1, "menu-items", 3, "ngClass", "mouseover", "click"], ["src", "assets/img/navbar/menu/mail.png"], [1, "downloadCV", "mb-5"], [1, "d-flex", "justify-content-center"], ["routerLink", "/infos"], ["src", "assets/img/navbar/menu/infos.png"], ["target", "_blank", "href", "https://www.linkedin.com/in/bastien-pimienta-0732a219b/"], ["src", "assets/img/navbar/menu/linkedin.png"], ["href", "assets/documents/CV-Bastien-Pimienta.pdf", "download", "CV Bastien Pimienta"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_2_listener() { return ctx.activeCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_div_10_Template, 42, 9, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapseActive === true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 10vh;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    outline: 0;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.burgerMenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 255, 255);\r\n    width: 22px;\r\n    height: 1px!important;\r\n    margin: 7px 0;\r\n    transition: 0.2s;\r\n}\r\n.burgerMenu[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n.burgerMenu[_ngcontent-%COMP%]:hover   .top[_ngcontent-%COMP%]{\r\n    transform: translateX(-8px);\r\n    transition: 0.2s;\r\n}\r\n.burgerMenu[_ngcontent-%COMP%]:hover   .bottom[_ngcontent-%COMP%]{\r\n    transform: translateX(-4px);\r\n    transition: 0.2s;\r\n}\r\n\r\n.contactIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 25px;\r\n    -webkit-filter: invert(1);\r\n            filter: invert(1);\r\n}\r\n.contactIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]{\r\n    z-index: 999;\r\n    opacity: 1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    transition: 2s;\r\n}\r\n.logoModal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 60px;\r\n}\r\n.closeModal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n}\r\n.closeModal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n.color[_ngcontent-%COMP%]{\r\n    -webkit-animation: color 0.3s forwards;\r\n            animation: color 0.3s forwards;\r\n}\r\n@-webkit-keyframes color{\r\n    from{ background-color: transparent;}\r\n    to{background-color: rgba(0, 0, 0, 0.849);}\r\n}\r\n@keyframes color{\r\n    from{ background-color: transparent;}\r\n    to{background-color: rgba(0, 0, 0, 0.849);}\r\n}\r\n\r\n.menuActive[_ngcontent-%COMP%]{\r\n    border-right: 0.5px solid white;\r\n    height: 100%;\r\n    width: 230px;\r\n    background-color: black;\r\n    border-radius: 0;\r\n    transition: ease 0.4s;\r\n}\r\n.displayMenu[_ngcontent-%COMP%]{\r\n    -webkit-animation: ease translateMenu 0.5s;\r\n            animation: ease translateMenu 0.5s;\r\n    transition: ease 0.4s;\r\n}\r\n@-webkit-keyframes translateMenu {\r\n    0% {transform: translateX(-100%);}\r\n    100% {transform: translateX(0%);}\r\n}\r\n@keyframes translateMenu {\r\n    0% {transform: translateX(-100%);}\r\n    100% {transform: translateX(0%);}\r\n}\r\n.menu-items[_ngcontent-%COMP%]{\r\n    border-left: 2px solid black;\r\n    color: white;\r\n    font-weight: lighter;\r\n    font-size: 19px;\r\n    letter-spacing: 2px;\r\n    padding: 20px 15px;\r\n    margin-bottom: 0;\r\n    transition: 0.1s ease;\r\n    display: flex;\r\n    align-items: center;\r\n    outline: 0;\r\n}\r\n.menu-items[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n.menu-title[_ngcontent-%COMP%]{\r\n    padding: 0px 15px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n}\r\n.menu-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 18px;\r\n    margin-right: 13px;\r\n}\r\n\r\n.first[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    -webkit-animation: jump 0.5s;\r\n            animation: jump 0.5s;\r\n}\r\n@-webkit-keyframes jump{\r\n    0%{transform: translateY(0px);}\r\n    50%{transform: translateY(-10px);}\r\n    100%{transform: translateY(0px);}\r\n}\r\n@keyframes jump{\r\n    0%{transform: translateY(0px);}\r\n    50%{transform: translateY(-10px);}\r\n    100%{transform: translateY(0px);}\r\n}\r\n.second[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    -webkit-animation: rotateY 0.5s;\r\n            animation: rotateY 0.5s;\r\n}\r\n@-webkit-keyframes rotateY{\r\n    0%{transform: rotateY(0);}\r\n    100%{transform: rotateY(360deg);}\r\n}\r\n@keyframes rotateY{\r\n    0%{transform: rotateY(0);}\r\n    100%{transform: rotateY(360deg);}\r\n}\r\n.third[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    -webkit-animation: translate 0.5s;\r\n            animation: translate 0.5s;\r\n}\r\n@-webkit-keyframes translate{\r\n    0%{transform: translateX(0);}\r\n    50%{transform: translateX(5px);}\r\n    100%{transform: translateX(0);}\r\n}\r\n@keyframes translate{\r\n    0%{transform: translateX(0);}\r\n    50%{transform: translateX(5px);}\r\n    100%{transform: translateX(0);}\r\n}\r\n.four[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    -webkit-animation: rotate 0.5s;\r\n            animation: rotate 0.5s;\r\n}\r\n@-webkit-keyframes rotate{\r\n    0%{transform: rotate(0);}\r\n    100%{transform: rotate(360deg);}\r\n}\r\n@keyframes rotate{\r\n    0%{transform: rotate(0);}\r\n    100%{transform: rotate(360deg);}\r\n}\r\n\r\n.translateDiv[_ngcontent-%COMP%]{\r\n    width: 2px;\r\n    background: white;\r\n    transition: ease 0.3s;\r\n}\r\n.home[_ngcontent-%COMP%]{\r\n    transform: translateY(0);\r\n}\r\n.profil[_ngcontent-%COMP%]{\r\n    transform: translateY(100%);\r\n}\r\n.formation[_ngcontent-%COMP%]{\r\n    transform: translateY(300%);\r\n}\r\n.competences[_ngcontent-%COMP%]{\r\n    transform: translateY(200%);\r\n}\r\n.experience[_ngcontent-%COMP%]{\r\n    transform: translateY(400%);\r\n}\r\n.contact[_ngcontent-%COMP%]{\r\n    transform: translateY(500%);\r\n}\r\n\r\n.downloadCV[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: transparent;\r\n    border: 1px solid white;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    transition: 0.3s;\r\n}\r\n.downloadCV[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    padding: 10px 30px;\r\n}\r\n.downloadCV[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin: 15px 10px;\r\n    height: 40px;\r\n    transition: 0.3s;\r\n}\r\n.downloadCV[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    transform: rotateY(180deg);\r\n}\r\n.contentContainer[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n.navbarConstruct[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQSxpQkFBaUI7QUFDakI7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBRUEsVUFBVTtBQUNWO0lBQ0ksWUFBWTtJQUNaLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxNQUFNLDZCQUE2QixDQUFDO0lBQ3BDLEdBQUcsc0NBQXNDLENBQUM7QUFDOUM7QUFIQTtJQUNJLE1BQU0sNkJBQTZCLENBQUM7SUFDcEMsR0FBRyxzQ0FBc0MsQ0FBQztBQUM5QztBQUNBLFVBQVU7QUFDVjtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksSUFBSSw0QkFBNEIsQ0FBQztJQUNqQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BDO0FBSEE7SUFDSSxJQUFJLDRCQUE0QixDQUFDO0lBQ2pDLE1BQU0seUJBQXlCLENBQUM7QUFDcEM7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxHQUFHLDBCQUEwQixDQUFDO0lBQzlCLElBQUksNEJBQTRCLENBQUM7SUFDakMsS0FBSywwQkFBMEIsQ0FBQztBQUNwQztBQUpBO0lBQ0ksR0FBRywwQkFBMEIsQ0FBQztJQUM5QixJQUFJLDRCQUE0QixDQUFDO0lBQ2pDLEtBQUssMEJBQTBCLENBQUM7QUFDcEM7QUFDQTtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLEdBQUcscUJBQXFCLENBQUM7SUFDekIsS0FBSywwQkFBMEIsQ0FBQztBQUNwQztBQUhBO0lBQ0ksR0FBRyxxQkFBcUIsQ0FBQztJQUN6QixLQUFLLDBCQUEwQixDQUFDO0FBQ3BDO0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxHQUFHLHdCQUF3QixDQUFDO0lBQzVCLElBQUksMEJBQTBCLENBQUM7SUFDL0IsS0FBSyx3QkFBd0IsQ0FBQztBQUNsQztBQUpBO0lBQ0ksR0FBRyx3QkFBd0IsQ0FBQztJQUM1QixJQUFJLDBCQUEwQixDQUFDO0lBQy9CLEtBQUssd0JBQXdCLENBQUM7QUFDbEM7QUFDQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLEdBQUcsb0JBQW9CLENBQUM7SUFDeEIsS0FBSyx5QkFBeUIsQ0FBQztBQUNuQztBQUhBO0lBQ0ksR0FBRyxvQkFBb0IsQ0FBQztJQUN4QixLQUFLLHlCQUF5QixDQUFDO0FBQ25DO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOQVZCQVIgICovXHJcbi5uYXZiYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTB2aDtcclxufVxyXG4ubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLm5hdmJhci1icmFuZDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBNRU5VIEJVUkdFUiAgKi9cclxuLmJ1cmdlck1lbnUgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDFweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDdweCAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG4uYnVyZ2VyTWVudTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnVyZ2VyTWVudTpob3ZlciAudG9we1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG4uYnVyZ2VyTWVudTpob3ZlciAuYm90dG9te1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLyogSUNPTlMgKi9cclxuLmNvbnRhY3RJY29uIGltZ3tcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcbi5jb250YWN0SWNvbiBpbWc6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIE1FTlUgTU9EQUwqL1xyXG4ubW9kYWx7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMnM7XHJcbn1cclxuLmxvZ29Nb2RhbCBpbWd7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmNsb3NlTW9kYWwgaW1ne1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5jbG9zZU1vZGFsIGltZzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29sb3J7XHJcbiAgICBhbmltYXRpb246IGNvbG9yIDAuM3MgZm9yd2FyZHM7XHJcbn1cclxuQGtleWZyYW1lcyBjb2xvcntcclxuICAgIGZyb217IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cclxuICAgIHRve2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NDkpO31cclxufVxyXG4vKiBNRU5VICAqL1xyXG4ubWVudUFjdGl2ZXtcclxuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNHM7XHJcbn1cclxuLmRpc3BsYXlNZW51e1xyXG4gICAgYW5pbWF0aW9uOiBlYXNlIHRyYW5zbGF0ZU1lbnUgMC41cztcclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC40cztcclxufVxyXG5cclxuQGtleWZyYW1lcyB0cmFuc2xhdGVNZW51IHtcclxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO31cclxuICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxyXG59XHJcblxyXG4ubWVudS1pdGVtc3tcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4ubWVudS1pdGVtczpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWVudS10aXRsZXtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnUtbGlzdCBpbWd7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi8qIFJBTkRPTSBBTklNQVRJT04gSE9WRVIgICovXHJcbi5maXJzdCBpbWd7XHJcbiAgICBhbmltYXRpb246IGp1bXAgMC41cztcclxufVxyXG5Aa2V5ZnJhbWVzIGp1bXB7XHJcbiAgICAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICA1MCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTt9XHJcbiAgICAxMDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO31cclxufVxyXG4uc2Vjb25kIGltZ3tcclxuICAgIGFuaW1hdGlvbjogcm90YXRlWSAwLjVzO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlWXtcclxuICAgIDAle3RyYW5zZm9ybTogcm90YXRlWSgwKTt9XHJcbiAgICAxMDAle3RyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO31cclxufVxyXG4udGhpcmQgaW1ne1xyXG4gICAgYW5pbWF0aW9uOiB0cmFuc2xhdGUgMC41cztcclxufVxyXG5Aa2V5ZnJhbWVzIHRyYW5zbGF0ZXtcclxuICAgIDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTt9XHJcbiAgICA1MCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7fVxyXG4gICAgMTAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7fVxyXG59XHJcbi5mb3VyIGltZ3tcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGV7XHJcbiAgICAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwKTt9XHJcbiAgICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG59XHJcblxyXG4vKiBUUkFOU0xBVEUgSE9WRVIgICovXHJcbi50cmFuc2xhdGVEaXZ7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XHJcbn1cclxuLmhvbWV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuLnByb2ZpbHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxufVxyXG5cclxuLmZvcm1hdGlvbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDAlKTtcclxufVxyXG4uY29tcGV0ZW5jZXN7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbn1cclxuLmV4cGVyaWVuY2V7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDAwJSk7XHJcbn1cclxuLmNvbnRhY3R7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAwJSk7XHJcbn1cclxuXHJcbi8qIEJPVVRPTiBURUxFQ0hBUkdFTUVOVCAgKi9cclxuLmRvd25sb2FkQ1YgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmRvd25sb2FkQ1YgYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG59XHJcbi5kb3dubG9hZENWIGltZ3tcclxuICAgIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4uZG93bmxvYWRDViBpbWc6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG4uY29udGVudENvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubmF2YmFyQ29uc3RydWN0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/profil/profil.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/profil/profil.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../url-reference/url-reference.component */ "./src/app/components/url-reference/url-reference.component.ts");





const _c0 = function (a0) { return { "displayLanguage": a0 }; };
const _c1 = function (a0) { return { "displayKeyWords": a0 }; };
class ProfilComponent {
    constructor() {
        this.profilInfo = false;
        this.showPoints = 0;
        this.countFrench = 0;
        this.countEnglish = 0;
        this.countSpanish = 0;
        this.maxFrench = 5;
        this.maxEnglish = 3;
        this.maxSpanish = 3;
    }
    // LANGUES ANNIMATION 
    ngOnInit() {
    }
    completePoints() {
        if (this.showPoints === 1) {
            setTimeout(() => this.f(), 500);
            setTimeout(() => this.e(), 1600);
            setTimeout(() => this.s(), 2300);
        }
    }
    f() {
        this.french = document.querySelectorAll(".français > i");
        this.french[this.countFrench].classList.add("starStyle");
        this.countFrench = this.countFrench + 1;
        if (this.countFrench < this.maxFrench) {
            setTimeout(() => this.f(), 200);
        }
    }
    e() {
        this.english = document.querySelectorAll(".anglais > i");
        this.english[this.countEnglish].classList.add("starStyle");
        this.countEnglish = this.countEnglish + 1;
        if (this.countEnglish < this.maxEnglish) {
            setTimeout(() => this.e(), 200);
        }
    }
    s() {
        this.spanish = document.querySelectorAll(".espagnol > i");
        this.spanish[this.countSpanish].classList.add("starStyle");
        this.countSpanish = this.countSpanish + 1;
        if (this.countSpanish < this.maxSpanish) {
            setTimeout(() => this.s(), 200);
        }
    }
}
ProfilComponent.ɵfac = function ProfilComponent_Factory(t) { return new (t || ProfilComponent)(); };
ProfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilComponent, selectors: [["app-profil"]], decls: 63, vars: 6, consts: [[1, "container-fluid"], [1, "profilPhoto"], [1, "textBlock"], [1, "name"], [1, "profilText", "mt-4"], ["src", "assets/img/profil/quote.png"], ["src", "assets/img/profil/quote2.png"], [1, "infoContainer", "p-4"], [1, "keyWords", 3, "ngClass"], [1, "buttonCollapse", 3, "click"], [1, "languageLevel"], [1, "fran\u00E7ais"], [1, "far", "fa-circle"], [1, "fas", "fa-circle"], [1, "anglais"], [1, "espagnol", "mb-0"], [1, "profilInfo"], ["src", "assets/img/profil/interface.png"]], template: function ProfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bastien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pimienta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "d\u00E9veloppeur web fullstack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apr\u00E8s 2 ann\u00E9es de fac d'\u00E9conomie-gestion \u00E0 Grenoble, j'ai d\u00E9cid\u00E9 de me consacrer au d\u00E9veloppement web, une passion qui m'est venu apr\u00E8s un stage chez un d\u00E9veloppeur web freelance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilComponent_Template_div_click_19_listener() { ctx.languageLevel = !ctx.languageLevel; ctx.showPoints = ctx.showPoints + 1; return ctx.completePoints(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "langues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fran\u00E7ais :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Anglais :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Espagnol :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilComponent_Template_div_click_48_listener() { return ctx.profilInfo = !ctx.profilInfo; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "20 ans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "200 all\u00E9e de gratigny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "38530 Chapareillan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Permis B - V\u00E9hicul\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-url-reference");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.languageLevel === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.profilInfo === true));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _url_reference_url_reference_component__WEBPACK_IMPORTED_MODULE_3__["UrlReferenceComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 10%, rgba(0,0,0,1) 100%), url(/assets/img/header/13382.jpg);\r\n    background-size: cover;\r\n    background-position: bottom;\r\n    padding: 0 50px\r\n}\r\n\r\n.textBlock[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 70vh;\r\n    width: 65%;\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n\r\n.profilPhoto[_ngcontent-%COMP%]{\r\n    height: 70vh;\r\n    width: 35%;\r\n    background: url(/assets/img/profil/IMG_4161nb3.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n\r\n\r\n.name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 65px;\r\n    line-height: 50px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 10px;\r\n    color: rgb(119, 119, 119);\r\n}\r\n\r\n.name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    line-height: 80px;\r\n    \r\n}\r\n\r\n.name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: lighter;\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    letter-spacing: 7px;\r\n    color: white;\r\n    line-height: 20px;\r\n}\r\n\r\n\r\n\r\n.profilText[_ngcontent-%COMP%]{\r\n    color: rgb(199, 199, 199);\r\n    font-weight: lighter;\r\n}\r\n\r\n.profilText[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 17px;\r\n    margin: 0 10px 15px 10px;\r\n}\r\n\r\n\r\n\r\n.languageLevel[_ngcontent-%COMP%]{\r\n    color: white;\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.languageLevel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin: 0 3px;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: lighter;\r\n    font-size: 80%;\r\n}\r\n\r\n.languageLevel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin: 15px 0;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.starStyle[_ngcontent-%COMP%]{\r\n    font-weight: bold!important;\r\n    color: rgb(255, 255, 255)!important;\r\n}\r\n\r\n\r\n\r\n.infoContainer[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    display: flex;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    padding: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    transition: 0.3s;\r\n    transition-delay: 0.7s;\r\n    transform: rotate(-45deg);\r\n    font-size: 20px;\r\n    margin: 0;\r\n    color: white;\r\n    font-weight: lighter;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    position: absolute;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]:hover{\r\n    cursor: default;\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%]:hover, .keyWords[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .languageLevel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    font-weight: lighter;\r\n    margin: 0;\r\n    color: white;\r\n    letter-spacing: 5px;\r\n    line-height: 25px;\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 18px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.keyWords[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    transition: 1s;\r\n    border: 1px solid white;\r\n    height: 120px;\r\n    width: 120px;\r\n    transform: rotate(45deg);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.displayLanguage[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%], .displayKeyWords[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%] {\r\n    transform: rotate(0);\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: 1s;\r\n}\r\n\r\n.displayLanguage[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .displayKeyWords[_ngcontent-%COMP%]   .buttonCollapse[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    transition: 0.7s;\r\n    transition-delay: 0!important;\r\n}\r\n\r\n.displayLanguage[_ngcontent-%COMP%]   .languageLevel[_ngcontent-%COMP%], .displayKeyWords[_ngcontent-%COMP%]   .profilInfo[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n    transform: translateX(0%);\r\n    transition: 0.7s;\r\n    transition-delay: 0.5s ;\r\n}\r\n\r\n.profilInfo[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 770px){\r\n    .container-fluid[_ngcontent-%COMP%]{\r\n        height: unset;\r\n        display:flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        padding: 10px 0 0 0!important;\r\n        overflow: visible!important;\r\n    }\r\n    .textBlock[_ngcontent-%COMP%]{\r\n        padding: 0;\r\n        width: 90%;\r\n        height: 100%;\r\n    }\r\n    .name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n        margin-top: 10px;\r\n    }\r\n    .infoContainer[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .keyWords[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 200px;\r\n       margin: 10px 0;\r\n    }\r\n    .keyWords[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n        letter-spacing: 2px;\r\n    }\r\n    .profilPhoto[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1JQUFtSTtJQUNuSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1EQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQSxTQUFTOztBQUNUO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUNqQjtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUNBLG1CQUFtQjs7QUFDbkI7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsbUNBQW1DO0FBQ3ZDOztBQUVBLGNBQWM7O0FBQ2Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3QiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVixVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7T0FDZCxjQUFjO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLDAsMCwwLjgpIDAlLCByZ2JhKDAsMCwwLDAuOSkgMTAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpLCB1cmwoL2Fzc2V0cy9pbWcvaGVhZGVyLzEzMzgyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgcGFkZGluZzogMCA1MHB4XHJcbn1cclxuXHJcbi50ZXh0QmxvY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFBIT1RPICBDT05UQUlORVIqL1xyXG4ucHJvZmlsUGhvdG97XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3Byb2ZpbC9JTUdfNDE2MW5iMy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIE5PTSAgKi9cclxuLm5hbWUgaDF7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xyXG59XHJcbi5uYW1lIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogODBweDsgKi9cclxufVxyXG4ubmFtZSBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vKiBERVNDUklQVElPTiAgKi9cclxuLnByb2ZpbFRleHR7XHJcbiAgICBjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuLnByb2ZpbFRleHQgaW1ne1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMTVweCAxMHB4O1xyXG59XHJcbi8qIE5JVkVBVSBMQU5HVUUgICovXHJcbi5sYW5ndWFnZUxldmVse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcbi5sYW5ndWFnZUxldmVsIGl7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5sYW5ndWFnZUxldmVsIGRpdntcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnN0YXJTdHlsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBLRVlXT1JEUyAgKi9cclxuLmluZm9Db250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuLmtleVdvcmRze1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5rZXlXb3JkcyBoM3tcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjdzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuaDE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuLmtleVdvcmRzIC5idXR0b25Db2xsYXBzZTpob3ZlciwgLmtleVdvcmRzIC5idXR0b25Db2xsYXBzZSBoMzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ua2V5V29yZHMgaDQsIC5sYW5ndWFnZUxldmVsIHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4ua2V5V29yZHMgaW1ne1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ua2V5V29yZHMgLmJ1dHRvbkNvbGxhcHNle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5kaXNwbGF5TGFuZ3VhZ2UgLmJ1dHRvbkNvbGxhcHNlLCAuZGlzcGxheUtleVdvcmRzIC5idXR0b25Db2xsYXBzZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuLmRpc3BsYXlMYW5ndWFnZSAuYnV0dG9uQ29sbGFwc2UgaDMsIC5kaXNwbGF5S2V5V29yZHMgLmJ1dHRvbkNvbGxhcHNlIGgze1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwIWltcG9ydGFudDtcclxufVxyXG4uZGlzcGxheUxhbmd1YWdlIC5sYW5ndWFnZUxldmVsLCAuZGlzcGxheUtleVdvcmRzIC5wcm9maWxJbmZve1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC41cyA7XHJcbn1cclxuLnByb2ZpbEluZm97XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcblxyXG4vKiBSRVNQT05TSVZFICAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50ZXh0QmxvY2t7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uYW1lIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmluZm9Db250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAua2V5V29yZHN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLmtleVdvcmRzIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbFBob3Rve1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profil',
                templateUrl: './profil.component.html',
                styleUrls: ['./profil.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/url-reference/url-reference.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/url-reference/url-reference.component.ts ***!
  \*********************************************************************/
/*! exports provided: UrlReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlReferenceComponent", function() { return UrlReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UrlReferenceComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.url = this.router.url;
        this.url = this.url.replace('/', '');
    }
}
UrlReferenceComponent.ɵfac = function UrlReferenceComponent_Factory(t) { return new (t || UrlReferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UrlReferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UrlReferenceComponent, selectors: [["app-url-reference"]], decls: 5, vars: 1, consts: [[1, "pageReference"]], template: function UrlReferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.url);
    } }, styles: [".pageReference[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    color: rgb(119, 119, 119);\r\n    width: 100%; \r\n    bottom: 0;\r\n    display: flex;  \r\n    align-items: center;\r\n    padding: 10px 10%;\r\n}\r\n.pageReference[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    background-color: rgb(119, 119, 119);\r\n    margin: 0;\r\n    width: 100%; \r\n}\r\n.pageReference[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0 8px;\r\n    letter-spacing: 5px;\r\n    text-transform: uppercase;\r\n}\r\n@media screen and (max-width: 770px){\r\n    .pageReference[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cmwtcmVmZXJlbmNlL3VybC1yZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cmwtcmVmZXJlbmNlL3VybC1yZWZlcmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJBUyBQQUdFICAqL1xyXG4ucGFnZVJlZmVyZW5jZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2IoMTE5LCAxMTksIDExOSk7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMCU7XHJcbn1cclxuLnBhZ2VSZWZlcmVuY2UgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCAxMTksIDExOSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbn1cclxuLnBhZ2VSZWZlcmVuY2UgcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcclxuICAgIC5wYWdlUmVmZXJlbmNle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlReferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-url-reference',
                templateUrl: './url-reference.component.html',
                styleUrls: ['./url-reference.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/welcome-page/welcome-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/welcome-page/welcome-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "showProgress1": a0 }; };
const _c1 = function (a0, a1) { return { "condition": a0, "hideWelcomeMenu": a1 }; };
const _c2 = function (a0) { return { "showProgress2": a0 }; };
class WelcomePageComponent {
    constructor(router) {
        this.router = router;
        this.screenHeight = screen.height;
        this.screenWidth = screen.width;
    }
    ngOnInit() {
        this.selector1 = document.querySelectorAll("#container1 > span");
        this.selector2 = document.querySelectorAll("#container2 > span");
        // CONTAINER 1
        setTimeout(() => this.progress1 = true, 300);
        setTimeout(() => this.progress1 = false, 2100);
        for (let entry of this.selector1) {
            // console.log(entry); 
            this.varX = Math.floor(Math.random() * (this.screenWidth - (this.screenWidth + 2000)) + this.screenWidth + 2000);
            this.varY = Math.floor(Math.random() * (this.screenHeight - (this.screenHeight + 2000)) + this.screenHeight + 2000);
            this.varRotate = Math.floor(Math.random() * 800);
            this.signX = Math.floor(Math.random() * (1 - (-1)));
            this.signY = Math.floor(Math.random() * (1 - (-1)));
            if (this.signX === 0) {
                this.varX = this.varX * (-1);
            }
            if (this.signY === 0) {
                this.varY = this.varY * (-1);
            }
            entry.animate([
                // keyframes
                { transform: 'translate(' + this.varX + 'px, ' + this.varY + 'px) rotate(' + this.varRotate + 'deg) ' },
                { transform: 'translate(0)' }
            ], {
                duration: 2500,
                easing: 'cubic-bezier(.76,1.03,.87,.7)',
                direction: 'reverse',
                fill: 'forwards',
                delay: 2000,
            });
        }
        // CONTAINER 2
        for (let entry of this.selector2) {
            // console.log(entry); 
            this.varX = Math.floor(Math.random() * (this.screenWidth - (this.screenWidth + 2000)) + this.screenWidth + 2000);
            this.varY = Math.floor(Math.random() * (this.screenHeight - (this.screenHeight + 2000)) + this.screenHeight + 2000);
            this.varRotate = Math.floor(Math.random() * 800);
            this.signX = Math.floor(Math.random() * (1 - (-1)));
            this.signY = Math.floor(Math.random() * (1 - (-1)));
            if (this.signX === 0) {
                this.varX = this.varX * (-1);
            }
            if (this.signY === 0) {
                this.varY = this.varY * (-1);
            }
            setTimeout(() => this.balance = true, 2200);
            setTimeout(() => this.progress2 = true, 4000);
            setTimeout(() => this.progress2 = false, 5800);
            entry.animate([
                // keyframes
                { transform: 'translate(' + this.varX + 'px, ' + this.varY + 'px) rotate(' + this.varRotate + 'deg)' },
                { transform: 'translate(0)' },
            ], {
                duration: 2500,
                easing: 'cubic-bezier(.57,1.04,.88,.99)',
                fill: 'forwards',
                delay: 1500,
            });
            setTimeout(() => this.hideAll = true, 5700);
            setTimeout(() => this.router.navigate(['/home']), 6700);
        }
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome-page"]], decls: 74, vars: 10, consts: [["id", "container1", 1, "animationContainer"], [1, "ml-3"], [1, "progress", "position-absolute", 3, "ngClass"], ["id", "container2", 1, "animationContainer", 3, "ngClass"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "j");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.progress1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, ctx.balance === true, ctx.hideAll === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.progress2 === true));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".animationContainer[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    opacity: 1;\r\n    transition: 1s;\r\n}\r\n#container1[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    -webkit-animation: display 2s;\r\n            animation: display 2s;\r\n}\r\n#container2[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: 0.4s;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font-weight: lighter;\r\n}\r\n.condition[_ngcontent-%COMP%]{\r\n    opacity: 1!important;\r\n}\r\n@-webkit-keyframes display{\r\n    from{margin: 0 50%}\r\n    to{margin: 0;}\r\n}\r\n@keyframes display{\r\n    from{margin: 0 50%}\r\n    to{margin: 0;}\r\n}\r\n.hideWelcomeMenu[_ngcontent-%COMP%]{\r\n    opacity: 0!important;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    background-color: white;\r\n    width: 0;\r\n    height: 2px;\r\n}\r\n\r\n@media screen and (min-width: 640px){\r\n    .showProgress1[_ngcontent-%COMP%]{\r\n        width: 380px;\r\n        transition: 1.8s linear;\r\n    }\r\n    .showProgress2[_ngcontent-%COMP%]{\r\n        width: 550px;\r\n        transition: 1.8s linear;\r\n    }\r\n    .animationContainer[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n}\r\n@media screen and (max-width: 640px){\r\n    .showProgress1[_ngcontent-%COMP%]{\r\n        width: 200px;\r\n        transition: 1.8s linear;\r\n    }\r\n    .showProgress2[_ngcontent-%COMP%]{\r\n        width: 300px;\r\n        transition: 1.8s linear;\r\n    }\r\n    .animationContainer[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n    }\r\n    .progress[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksS0FBSyxhQUFhO0lBQ2xCLEdBQUcsU0FBUyxDQUFDO0FBQ2pCO0FBSEE7SUFDSSxLQUFLLGFBQWE7SUFDbEIsR0FBRyxTQUFTLENBQUM7QUFDakI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFdBQVc7QUFDZjtBQUNBLGdCQUFnQjtBQUNoQjtJQUNJO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5pbWF0aW9uQ29udGFpbmVye1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuI2NvbnRhaW5lcjF7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYW5pbWF0aW9uOiBkaXNwbGF5IDJzO1xyXG59XHJcbiNjb250YWluZXIye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5zcGFue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbi5jb25kaXRpb257XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5Aa2V5ZnJhbWVzIGRpc3BsYXl7XHJcbiAgICBmcm9te21hcmdpbjogMCA1MCV9XHJcbiAgICB0b3ttYXJnaW46IDA7fVxyXG59XHJcblxyXG4uaGlkZVdlbGNvbWVNZW51e1xyXG4gICAgb3BhY2l0eTogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFBST0dSRVNTIEJBUiAgKi9cclxuLnByb2dyZXNze1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufVxyXG4vKiBSRVNQT05TSVZFICAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCl7XHJcbiAgICAuc2hvd1Byb2dyZXNzMXtcclxuICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMS44cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgICAuc2hvd1Byb2dyZXNzMntcclxuICAgICAgICB3aWR0aDogNTUwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMS44cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgICAuYW5pbWF0aW9uQ29udGFpbmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XHJcbiAgICAuc2hvd1Byb2dyZXNzMXtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMS44cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgICAuc2hvd1Byb2dyZXNzMntcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMS44cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgICAuYW5pbWF0aW9uQ29udGFpbmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-page',
                templateUrl: './welcome-page.component.html',
                styleUrls: ['./welcome-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HB\Documents\CV ANGULAR\CV\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map