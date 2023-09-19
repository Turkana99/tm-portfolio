"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 8094:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 2,
  vars: 0,
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects.component */ 5274);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}, {
  path: 'projects',
  component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 6515);




class AppComponent {
  constructor() {
    this.title = 'portfolio';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ 5274);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 1117);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ 9099);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 1117:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 2,
  vars: 0,
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 59,
  vars: 0,
  consts: [[1, "container-fluid"], [1, "card"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "row", "mb-4"], [1, "col-md-4", "col-sm-11", "col-xs-11"], [1, "footer-text", "pull-left"], [1, "d-flex", "my_logo"], ["src", "../../assets/images/LogoN2.png", "alt", ""], [1, "card-text"], [1, "social", "mt-2", "mb-3"], [1, "fa", "fa-facebook-official", "fa-lg"], [1, "fa", "fa-instagram", "fa-lg"], [1, "fa", "fa-twitter", "fa-lg"], [1, "fa", "fa-linkedin-square", "fa-lg"], [1, "fa", "fa-facebook"], [1, "col-md-2", "col-sm-1", "col-xs-1", "mb-2"], [1, "col-md-2", "col-sm-4", "col-xs-4"], [1, "heading"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "divider", "mb-4"], [1, "row", 2, "font-size", "10px", "color", "#646771"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "pull-left"], [1, "fa", "fa-copyright"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9)(11, "i", 10)(12, "i", 11)(13, "i", 12)(14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15)(17, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul")(20, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "IT Consulting ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cloud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "DevOps & Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15)(29, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Industries");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 7)(32, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Finance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Public Sector");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Smart Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Retail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 7)(44, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Join Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18)(54, "div", 19)(55, "div", 20)(56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 2023 By Turkana");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".copyright[_ngcontent-%COMP%] {\n  background-color: #63B1D3 !important;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  border-radius: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 4% 7%;\n  color: #646771;\n  background-color: black;\n  border-radius: 0px !important;\n  line-height: 35px;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-width: 3px;\n}\n\n.social[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 1%;\n  font-size: 15px;\n}\n\n.social[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.policy[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Titillium Web\", sans-serif;\n  color: #63B1D3;\n  padding-bottom: 10px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(189, 196, 203, 0.5);\n}\n\n.frs_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px !important;\n  color: white !important;\n  font-weight: bold;\n}\n\n.scd_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n  color: #63B1D3 !important;\n  font-weight: bold;\n}\n\n.my_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBSUY7O0FBREE7RUFDRSw4Q0FBQTtBQUlGOztBQURBO0VBQ0UsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyIuY29weXJpZ2h0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M0IxRDMhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgcGFkZGluZzowcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbn1cclxuLmNhcmR7XHJcbiAgcGFkZGluZzogNCUgNyU7XHJcbiAgY29sb3I6ICM2NDY3NzE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLXRleHR7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbnVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudWwgPmxpe1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxudWwgPiBsaTpob3ZlcntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmhye1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG4uc29jaWFsID4gaXtcclxuICBwYWRkaW5nOiAxJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgPiBpOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4ucG9saWN5ID4gZGl2e1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzYzQjFEMztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMTg5LCAxOTYsIDIwMywgMC41KTs7XHJcbn1cclxuXHJcbi5mcnNfdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNjZF90aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzYzQjFEMyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubXlfbG9nbyBpbWd7XHJcbiAgd2lkdGg6NzVweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


const _c0 = function () {
  return {
    exact: true
  };
};
class HeaderComponent {
  onWindowScroll() {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 24,
  vars: 10,
  consts: [["s", "", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 3, "scroll"], [1, "container-fluid"], [1, "d-flex", "justify-content-between"], [1, "my_logo"], ["src", "../../assets/images/LogoN2.png", "alt", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "d-flex", "justify-content-end"], [1, "nav-item"], ["routerLinkActive", "router-link-active", "routerLink", "/", 1, "nav-link", 3, "routerLinkActiveOptions"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_nav_scroll_0_listener() {
        return ctx.onWindowScroll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9)(16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Education & Work Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9)(19, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  padding: 6px 20px !important;\n  color: white !important;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 18px;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: #63B1D3 !important;\n  font-weight: bold;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 20px;\n  background-color: transparent !important;\n  position: fixed;\n  z-index: 100000;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  flex-grow: 0 !important;\n}\n\n.my_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 70px;\n}\n\n.my_title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-left: 10px;\n}\n\n.my_title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  font-weight: bolder;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #63B1D3 !important;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background-color: black !important;\n  transition: 1s;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url('menu.svg') !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNFLDRDQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xyXG4gIHBhZGRpbmc6IDZweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNjNCMUQzICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlfbG9nbyBpbWcge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLm15X3RpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5teV90aXRsZSBhIHtcclxuICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gYTpob3ZlcntcclxuY29sb3I6ICM2M0IxRDMhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWludmVyc2Uge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVudS5zdmcpIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 5144);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);







function HomeComponent_p_309_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This field should not be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_312_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This field should not be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_313_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Please provide a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_316_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This field should not be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_317_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Your message can't exceed 250 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HomeComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.age = this.calculate_age(new Date(1999, 2, 19));
    this.contactForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(250)]]
    });
  }
  ngOnInit() {
    console.log(this.contactForm.value);
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
    aos__WEBPACK_IMPORTED_MODULE_0__.refresh();
  }
  Send() {
    console.log(this.contactForm.value);
  }
  calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 349,
  vars: 7,
  consts: [[1, "jumbotron", "container-fluid", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "my_video"], ["loop", "true", 3, "canplay", "loadedmetadata"], ["myVideo", ""], ["src", "../../assets/images/video1.mp4", "type", "video/mp4"], [1, "my_info"], [1, "d-flex", "justify-content-center", "pb-4"], [1, "box"], [1, "spin-container"], [1, "shape"], [1, "bd"], [1, "my_text", "pt-5"], [1, "type-writter", "pt-3"], [1, "about", "container-fluid", "pt-5", "pb-5"], [1, "row", "pt-5"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-5"], [1, "grid"], ["src", "../../assets/images/bg1.jpg", "alt", ""], ["data-aos", "flip-left", "data-aos-easing", "ease-out-cybic", "data-aos-duration", "2000", 1, "col-lg-2", "title"], [1, "rotate"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-5", "my_infor"], [1, "ps-3"], [1, "pb-2"], ["href", "https://www.linkedin.com/in/TurkanaMammadova"], [1, "history", "container-fluid", "pt-5", "pb-5"], [1, "row", "pt-5", "pb-5"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-9"], [1, "page", "d-flex", "justify-content-around"], [1, "timeline"], [1, "timeline__group"], ["aria-hidden", "true", 1, "timeline__year", "time"], [1, "timeline__cards"], [1, "timeline__card", "card"], [1, "card__header"], ["datetime", "2008-02-02", 1, "time"], [1, "time__month"], [1, "card__content"], ["datetime", "2008-07-14", 1, "time"], ["data-aos", "flip-left", "data-aos-easing", "ease-out-cybic", "data-aos-duration", "2000", 1, "col-lg-3", "title", "titleEdu", "d-flex", "justify-content-center", "align-items-center", "pt-5", "mt-5"], [1, "my_service", "container-fluid", "pt-5", "pb-5"], [1, "row", "px-5"], ["data-aos", "flip-left", "data-aos-easing", "ease-out-cybic", "data-aos-duration", "2000", 1, "pb-5"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-3", "col-sm-6", "col-12", "pt-5"], [1, "service"], ["src", "../../assets/images/wb-design.svg", "alt", ""], [1, "pt-4"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1900", 1, "col-lg-3", "col-sm-6", "col-12", "pt-5"], ["src", "../../assets/images/graphic-designN.svg", "alt", ""], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2300", 1, "col-lg-3", "col-sm-6", "col-12", "pt-5"], ["src", "../../assets/images/ui-uxN.svg", "alt", ""], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2700", 1, "col-lg-3", "col-sm-6", "col-12", "pt-5"], ["src", "../../assets/images/soft.svg", "alt", ""], [1, "my_skill", "container-fluid"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-5", "ps-5", "pe-5"], ["for", "", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2000"], ["mode", "determinate", "value", "99"], ["for", "", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2100"], ["for", "", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2200"], ["mode", "determinate", "value", "70"], ["for", "", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2300"], ["mode", "determinate", "value", "60"], ["for", "", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "2400"], [1, "projects", "pt-5"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center", "data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500"], ["label", "All"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container"], [1, "card"], ["src", "../../assets/images/cook-love.png"], [1, "card__head"], ["href", "https://turkana99.github.io/cook-love/home"], ["src", "../../assets/images/trendist.png"], ["href", "https://turkana99.github.io/Trendist/home"], ["src", "../../assets/images/home-pet.png"], ["href", "https://turkana99.github.io/homepet/"], ["src", "../../assets/images/vibrant.png"], ["href", ""], ["src", "../../assets/images/tm-course.png"], ["label", "Angular"], ["src", "../../assets/images/treaveller.png"], ["href", "https://turkana99.github.io/Traveller/"], ["label", "Bootstrap"], ["label", "HTML/CSS"], ["src", "../../assets/images/book.png"], ["href", "https://turkana99.github.io/book-publisher/"], ["src", "../../assets/images/online.png"], ["href", "https://turkana99.github.io/online-updates/"], ["src", "../../assets/images/northgate.png"], ["href", "https://turkana99.github.io/northgate-states/"], ["src", "../../assets/images/winslow.png"], ["href", "https://turkana99.github.io/winslow-news/"], ["src", "../../assets/images/freemont.png"], ["href", "https://turkana99.github.io//freemont/"], [1, "container", "ps-5"], ["src", "../../assets/images/best.png"], ["href", "https://turkana99.github.io//best-release/"], ["src", "../../assets/images/beechtown.png"], ["href", "https://turkana99.github.io//beechtown-paper/"], ["src", "../../assets/images/nordiv.png"], ["href", "https://turkana99.github.io/nordic/"], ["src", "../../assets/images/beoreo.png"], ["href", "https://turkana99.github.io//beoreo/"], ["src", "../../assets/images/beauty.png"], ["href", "https://turkana99.github.io//beauty/"], ["id", "contact", 1, "contact", "pt-5"], [1, "container-fluid", "pt-5"], [1, "main", "wow", "fadeInUp", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "row"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-7", "left"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-sm-6"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], [4, "ngIf"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "form-group"], ["rows", "5", "id", "comment", "placeholder", "Message", "formControlName", "message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block"], ["data-aos", "zoom-in", "data-aos-easing", "linear", "data-aos-duration", "1500", 1, "col-lg-3", "right-hand"], [1, "right"], [1, "info", "d-flex", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["aria-hidden", "true", 1, "fa", "fa-chrome"], ["aria-hidden", "true", 1, "fa", "fa-phone"], [1, "social"], ["href", "https://github.com/Turkana99"], [1, "fa-brands", "fa-github"], ["href", "https://www.linkedin.com/in/turkana-mammadova-b39b07232"], [1, "fa-brands", "fa-linkedin"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "video", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("canplay", function HomeComponent_Template_video_canplay_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.play());
      })("loadedmetadata", function HomeComponent_Template_video_loadedmetadata_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.muted = true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "source", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Your browser does not support HTML5 video. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "My name is Turkana Mammadova");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "h2", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "I am a Designer and Software Developer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20)(29, "div", 21)(30, "h2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Hello! I\u2019m Turkana Mammadova");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " I am highly skilled and innovative designer with a strong background in software development. Proficient in designing user interfaces (UI) and user experiences (UX) while also prosessing a deep understanding of programming languages and software development methodologies. Commited to delivering visually appealing and functional software solitions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span")(35, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Age:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span")(40, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " mmmmadova.turkana@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span")(45, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Phone:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " +994 70 404 55 06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span")(50, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Azerbaijan, Baku");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span")(55, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Linkedin:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " https://www.linkedin.com/in/TurkanaMammadova");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24)(62, "div", 25)(63, "div", 26)(64, "div", 27)(65, "div", 28)(66, "div", 29)(67, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "2016 - 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 31)(70, "div", 32)(71, "header", 33)(72, "time", 34)(73, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Azerbaijan State Oil and Industry University");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 36)(76, "p")(77, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Faculty: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Information Texnology Management - Computer Science ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 29)(81, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "2020 - 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 31)(84, "div", 32)(85, "header", 33)(86, "time", 37)(87, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "GTSolutions Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 36)(90, "p")(91, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Position: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Designer And Software Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Collaborated with cross-functional teams to gather software requirements and translate them into scalable and efficient software solutions. Designed and developed responsive user interfaces (UI) and implement intuitive user experiences (UX) for web and mobile applications. Write clean, well-structured code using programming languages such as HTML/CSS and Angular. Conduct thorough testing and debugging of software applications to ensure high-quality deliverables. Continuously research and implement emerging technologies and best practices to enhance software development processes. Work closely with clients to understand their business needs and provide innovative software solutions that align with their objectives.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 38)(97, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Education");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Work Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 39)(102, "div", 40)(103, "h1", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " My Services ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 42)(106, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "img", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h3", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Web Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 46)(111, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h3", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Graphic Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 48)(116, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "h3", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "UI/UX");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 50)(121, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "img", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h3", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Software Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 52)(126, "div", 14)(127, "div", 53)(128, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "HMTL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "mat-progress-bar", 55)(131, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "mat-progress-bar", 55)(135, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "JAVASCRIPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "mat-progress-bar", 58)(139, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "JQUERY");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "mat-progress-bar", 60)(143, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "BOOTSTRAP");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "mat-progress-bar", 55)(147, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 18)(149, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "My");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 53)(154, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "TYPESCRIPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "mat-progress-bar", 58)(157, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "ANGULAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "mat-progress-bar", 58)(161, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "FIGMA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "mat-progress-bar", 55)(165, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "ADOBE PHOTOSHOP");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "mat-progress-bar", 58)(169, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "ADOBE ILLUSTRATOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "mat-progress-bar", 58)(173, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 62)(175, "h1", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " My Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div")(178, "mat-tab-group", 63)(179, "mat-tab", 64)(180, "div", 65)(181, "div", 66)(182, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 69)(185, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Cook-Love");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 69)(190, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Trendist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 69)(195, "a", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "HomePet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "img", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 69)(200, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Vibrant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "img", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 69)(205, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "TM-Course");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "mat-tab", 78)(208, "div", 65)(209, "div", 66)(210, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 69)(213, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Cook-Love");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 69)(218, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Trendist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "img", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 69)(223, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Vibrant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "img", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 69)(228, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "TM-Course");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "img", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 69)(233, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "TM-Course");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "mat-tab", 81)(236, "div", 65)(237, "div", 66)(238, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "img", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 69)(241, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "HomePet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "mat-tab", 82)(244, "div", 65)(245, "div", 66)(246, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 69)(249, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Book Publisher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "img", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 69)(254, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Online-Updates");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 69)(259, "a", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Northgate-States");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "img", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 69)(264, "a", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Winslow-News");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "img", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 69)(269, "a", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Freemont");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 65)(272, "div", 93)(273, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "img", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 69)(276, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Best Release");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "img", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 69)(281, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Beechtown Paper");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "img", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 69)(286, "a", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Nordic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 69)(291, "a", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Beoreo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "img", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 69)(296, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "The Beauty");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "section", 104)(299, "div", 105)(300, "div", 106)(301, "div", 107)(302, "div", 108)(303, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "form", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_305_listener() {
        return ctx.Send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 110)(307, "div", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "input", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](309, HomeComponent_p_309_Template, 2, 0, "p", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "input", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](312, HomeComponent_p_312_Template, 2, 0, "p", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](313, HomeComponent_p_313_Template, 2, 0, "p", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "textarea", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](316, HomeComponent_p_316_Template, 2, 0, "p", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](317, HomeComponent_p_317_Template, 2, 0, "p", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Send Now!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 18)(322, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 118)(327, "div", 119)(328, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Contact Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "i", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Azerbaijan, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Baku");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](337, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "+994 70 404 55 06 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "i", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "mmmmadova.turkana@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 124)(345, "a", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "i", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "a", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](348, "i", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.age, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](268);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["name"].errors == null ? null : ctx.contactForm.controls["name"].errors["required"]) && (ctx.contactForm.controls["name"].dirty && ctx.contactForm.controls["name"].invalid || ctx.contactForm.controls["name"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["email"].errors == null ? null : ctx.contactForm.controls["email"].errors["required"]) && (ctx.contactForm.controls["email"].dirty && ctx.contactForm.controls["email"].invalid || ctx.contactForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["email"].errors == null ? null : ctx.contactForm.controls["email"].errors["email"]) && (ctx.contactForm.controls["email"].dirty && ctx.contactForm.controls["email"].invalid || ctx.contactForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["message"].errors == null ? null : ctx.contactForm.controls["message"].errors["required"]) && (ctx.contactForm.controls["message"].dirty && ctx.contactForm.controls["message"].invalid || ctx.contactForm.controls["message"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactForm.controls["message"].errors == null ? null : ctx.contactForm.controls["message"].errors["maxlength"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["body[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  background-color: black;\n  overflow-x: hidden !important;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 740px;\n  padding: 0px !important;\n  position: relative;\n  overflow-x: hidden !important;\n  overflow-y: hidden !important;\n}\n\n.my_video[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  overflow-y: hidden !important;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n#myVideo[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  margin: 0px !important;\n  overflow-y: hidden !important;\n}\n\n.my_info[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center !important;\n}\n\n\n\n\n\n\n\n.my_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 30px;\n  font-family: \"Courgette\", cursive;\n}\n\n\n\n.type-writter[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-size: 1.6rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n  font-family: \"Rokkitt\", serif;\n  \n\n  border-right: 3px solid #63b1d3;\n  \n\n  animation: _ngcontent-%COMP%_typist 15s steps(32) infinite, _ngcontent-%COMP%_caret 0.15s infinite step-end;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_caret {\n  0%, 100% {\n    border-color: transparent;\n  }\n  50% {\n    border-color: #63b1d3;\n  }\n}\n@keyframes _ngcontent-%COMP%_typist {\n  0% {\n    width: 0ch;\n  }\n  30% {\n    width: 32ch;\n  }\n  80% {\n    width: 32ch;\n  }\n  90% {\n    width: 0ch;\n  }\n  100% {\n    width: 0ch;\n  }\n}\n\n\n.about[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #63b1d3 !important;\n}\n\n.my_infor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.my_infor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n\n.my_infor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  line-height: 40px;\n  font-family: \"Open Sans\", sans-serif;\n  opacity: 0.8;\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-mask: url(https://assets.codepen.io/1101822/circles-mask-whole.svg) no-repeat center;\n          mask: url(https://assets.codepen.io/1101822/circles-mask-whole.svg) no-repeat center;\n  max-width: 100%;\n  display: block;\n  aspect-ratio: 1;\n  object-fit: cover;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30ch), 1fr));\n  gap: 5vmax;\n  width: min(60ch, 100%);\n  margin-inline: auto;\n  padding: 30px;\n}\n\n\n\n.title[_ngcontent-%COMP%] {\n  display: grid;\n  height: 70vh;\n  color: #63b1d3;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: max-content max-content;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 100px;\n  margin: 0;\n  writing-mode: vertical-lr;\n  text-align: center;\n  line-height: 0.9;\n}\n\n.rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n\n\n.history[_ngcontent-%COMP%] {\n  background-color: black;\n  overflow-x: hidden;\n}\n\n.history[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: grid;\n  color: #63b1d3;\n  justify-content: center !important;\n  align-items: center;\n  grid-template-columns: max-content max-content;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.r-title[_ngcontent-%COMP%] {\n  margin-top: var(--rTitleMarginTop, 0) !important;\n  margin-bottom: var(--rTitleMarginBottom, 0) !important;\n}\n\np[_ngcontent-%COMP%]:not([class]) {\n  line-height: var(--cssTypographyLineHeight, 1.78);\n  margin-top: var(--cssTypographyBasicMargin, 1em);\n  margin-bottom: 0;\n}\n\np[_ngcontent-%COMP%]:not([class]):first-child {\n  margin-top: 0;\n}\n\n\n\n\n\n.text[_ngcontent-%COMP%] {\n  display: var(--textDisplay, inline-flex);\n  font-size: var(--textFontSize, 1rem);\n}\n\n\n\n\n\n\n\n\n\n.time[_ngcontent-%COMP%] {\n  display: var(--timeDisplay, inline-flex);\n}\n\n\n\n\n\n.time__month[_ngcontent-%COMP%] {\n  margin-left: var(--timelineMounthMarginLeft, 0.25em);\n}\n\n\n\n\n\n.time[_ngcontent-%COMP%] {\n  background-color: #63b1d3;\n  font-size: var(--timeFontSize, 0.75rem);\n  font-weight: var(--timeFontWeight, 700);\n  text-transform: var(--timeTextTransform, uppercase);\n  color: var(--timeColor, currentColor);\n}\n\n\n\n\n\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);\n}\n\n.card__content[_ngcontent-%COMP%] {\n  margin-top: var(--cardContentMarginTop, 0.5rem);\n}\n\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  border-radius: var(--timelineCardBorderRadius, 2px);\n  border-left: var(--timelineCardBorderLeftWidth, 3px) solid var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));\n  box-shadow: var(--timelineCardBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24));\n  background-color: var(--timelineCardBackgroundColor, #fff);\n}\n\n\n\n\n\n.card__title[_ngcontent-%COMP%] {\n  --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);\n  font-size: var(--cardTitleFontSize, 1.25rem);\n}\n\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  width: 90%;\n  display: var(--timelineDisplay, grid);\n  grid-row-gap: var(--timelineGroupsGap, 2rem);\n}\n\n\n\n\n\n.timeline__year[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem; \n\n}\n\n.timeline__cards[_ngcontent-%COMP%] {\n  display: var(--timeloneCardsDisplay, grid);\n  grid-row-gap: var(--timeloneCardsGap, 1.5rem);\n}\n\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  --uiTimelineMainColor: var(--timelineMainColor, #222);\n  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);\n  border-left: var(--timelineLineWidth, 3px) solid var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n}\n\n.timeline__year[_ngcontent-%COMP%] {\n  --timePadding: var(--timelineYearPadding, 0.5rem 1.5rem);\n  --timeColor: var(--uiTimelineSecondaryColor);\n  --timeBackgroundColor: var(--uiTimelineMainColor);\n  --timeFontWeight: var(--timelineYearFontWeight, 400);\n}\n\n.timeline__card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: var(--timelineCardLineGap, 1rem);\n}\n\n\n\n\n\n.timeline__cards[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-top: 0.25rem; \n\n  padding-bottom: 0.25rem; \n\n}\n\n.timeline__card[_ngcontent-%COMP%] {\n  background-color: black;\n  border: 1px solid #63b1d3;\n  color: white;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px !important;\n}\n\n.timeline__card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: var(--timelineCardLineWidth, 2px);\n  background-color: var(--timelineCardLineBackgroundColor, var(--uiTimelineMainColor));\n  position: absolute;\n  top: var(--timelineCardLineTop, 1rem);\n  left: -50%;\n  z-index: -1;\n}\n\n\n\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  --timelineMainColor: #63b1d3;\n}\n\n\n\n\n\n\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n\np[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.substack[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  background-color: #fff;\n  width: 100%;\n  max-width: 480px;\n  height: 280px;\n  margin: 1rem auto;\n}\n\n.r-link[_ngcontent-%COMP%] {\n  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);\n  --uirLinkTextColor: var(--rLinkTextColor);\n  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);\n  display: var(--uirLinkDisplay) !important;\n  color: var(--uirLinkTextColor) !important;\n  -webkit-text-decoration: var(--uirLinkTextDecoration) !important;\n          text-decoration: var(--uirLinkTextDecoration) !important;\n}\n\n\n\n.box[_ngcontent-%COMP%] {\n  width: 28vmin;\n  height: 28vmin;\n  border: 1px dashed #63b1d3;\n  position: relative;\n}\n.box[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  border: 1px dashed #63b1d3;\n  transform: scale(1.42);\n}\n\n.spin-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  animation: _ngcontent-%COMP%_spin 12s ease-in-out infinite alternate;\n  position: relative;\n}\n\n.shape[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: border-radius 1s ease-out;\n  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;\n  animation: _ngcontent-%COMP%_morph 8s ease-in-out infinite both alternate;\n  position: absolute;\n  overflow: hidden;\n  z-index: 5;\n}\n\n.bd[_ngcontent-%COMP%] {\n  width: 142%;\n  height: 142%;\n  position: absolute;\n  left: -21%;\n  top: -21%;\n  background: url('bg1.jpg');\n  background-size: 100%;\n  background-position: center center;\n  display: flex;\n  color: #003;\n  font-size: 5vw;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  text-transform: uppercase;\n  animation: _ngcontent-%COMP%_spin 12s ease-in-out infinite alternate-reverse;\n  opacity: 1;\n  z-index: 2;\n}\n\n@keyframes _ngcontent-%COMP%_morph {\n  0% {\n    border-radius: 40% 60% 60% 40%/60% 30% 70% 40%;\n  }\n  100% {\n    border-radius: 40% 60%;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n\n.my_service[_ngcontent-%COMP%] {\n  background-color: black;\n  text-align: center !important;\n  overflow-x: hidden !important;\n}\n\n.my_service[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-size: 80px;\n  margin: 0;\n  text-align: center;\n  line-height: 0.9;\n}\n\n.my_service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 24px;\n  font-family: \"Rokkitt\", serif;\n}\n\n.my_service[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #63b1d3 !important;\n}\n.my_service[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  fill: #63b1d3 !important;\n}\n\n\n\n.my_skill[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 100px 50px;\n}\n\n.my_skill[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.my_skill[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  padding-bottom: 15px;\n  font-family: \"Rokkitt\", serif;\n}\n\n  .mdc-linear-progress__bar-inner {\n  border-color: #63b1d3 !important;\n}\n\n\n\n.projects[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: black;\n  color: white;\n  overflow-x: hidden !important;\n}\n\n.projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-size: 80px;\n  margin: 0;\n  text-align: center;\n  line-height: 0.9;\n}\n\n\n\n  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%] {\n  color: #63b1d3 !important;\n  border-color: #63b1d3 !important;\n}\n\n  .mdc-tab__ripple::before, .mat-mdc-tab[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mdc-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mdc-tab-link[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #63b1d3 !important;\n  border-color: #63b1d3 !important;\n}\n\n  .mat-mdc-tab .mdc-tab__text-label {\n  color: white !important;\n}\n\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10vmin;\n  overflow: hidden;\n  transform: skew(5deg);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex: 1;\n  transition: all 1s ease-in-out;\n  height: 75vmin;\n  position: relative;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__head[_ngcontent-%COMP%] {\n  color: black;\n  background: #63b1d3;\n  padding: 0.5em;\n  transform: rotate(-90deg);\n  transform-origin: 0% 0%;\n  transition: all 0.5s ease-in-out;\n  min-width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 1em;\n  white-space: nowrap;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  flex-grow: 10;\n  padding: var(--timelineCardPadding, 1.5rem 0.5rem 1.25rem);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card__head[_ngcontent-%COMP%] {\n  text-align: center;\n  top: calc(100% - 2em);\n  color: white;\n  background: rgba(0, 0, 0, 0.5);\n  font-size: 2em;\n  transform: rotate(0deg) skew(-5deg);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: all 1s ease-in-out;\n  filter: grayscale(100%);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:nth-child(5)) {\n  margin-right: 1em;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white !important;\n}\n\n\n\n.contact[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #404356;\n  margin: 0;\n  margin-bottom: 15px;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-weight: 300;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #525f7f;\n  line-height: 26px;\n  margin: 0;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  background: black;\n  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.08);\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  margin: 0;\n  margin-bottom: 20px;\n}\n\n.contact[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 25px;\n  font-size: 13px;\n  margin-bottom: 10px;\n  background: #f8f8f9;\n  border: 0;\n  border-radius: 5px;\n}\n\n.contact[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 15px;\n  background: #63b1d3;\n  color: #ffffff;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding: 40px 60px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  background: #63b1d3;\n  background-size: cover;\n  padding: 60px;\n  color: #ffffff;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 30px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #ffffff;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  margin-left: 15px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 30px;\n  color: #ffffff;\n  margin-right: 20px;\n}\n\n.contact[_ngcontent-%COMP%]   .right-hand[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: red;\n  font-style: italic;\n  font-family: \"Rokkitt\", serif;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREEsMkJBQUE7QUFrREEsMkJBQUE7QUFFQSxvQkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQS9DRjs7QUFrREEscUJBQUE7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7QUFoREY7O0FBbURBLGNBQUE7QUFDQTtFQUNFO0lBRUUseUJBQUE7RUFqREY7RUFtREE7SUFDRSxxQkFBQTtFQWpERjtBQUNGO0FBb0RBO0VBQ0U7SUFDRSxVQUFBO0VBbERGO0VBb0RBO0lBQ0UsV0FBQTtFQWxERjtFQW9EQTtJQUNFLFdBQUE7RUFsREY7RUFvREE7SUFDRSxVQUFBO0VBbERGO0VBb0RBO0lBQ0UsVUFBQTtFQWxERjtBQUNGO0FBcURBLGFBQUE7QUFDQTtFQUNFLHVCQUFBO0FBbkRGOztBQXFEQTtFQUNFLHlCQUFBO0FBbERGOztBQW9EQTs7RUFFRSxZQUFBO0FBakRGOztBQW1EQTtFQUNFLGlCQUFBO0FBaERGOztB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ZHkge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzQwcHg7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbi5teV92aWRlbyB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcbiNteVZpZGVvIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlfaW5mbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBKdW1ib3Ryb24gZmlyc3QgdmVyc2lvbiovXHJcblxyXG4vLyAuYmVzaWRle1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuLy8gfVxyXG5cclxuLy8gLmdhbGxlcnkge1xyXG4vLyAgIC0tZzogOHB4OyAgIC8qIHRoZSBnYXAgKi9cclxuLy8gICAtLXM6IDQwMHB4OyAvKiB0aGUgc2l6ZSAqL1xyXG5cclxuLy8gICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG4vLyAuZ2FsbGVyeSA+IGltZyB7XHJcbi8vICAgZ3JpZC1hcmVhOiAxLzE7XHJcbi8vICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgIGFzcGVjdC1yYXRpbzogMTtcclxuLy8gICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tX3gsMCksdmFyKC0tX3ksMCkpO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB6LWluZGV4OiAwO1xyXG4vLyAgIHRyYW5zaXRpb246IC4zcywgei1pbmRleCAwcyAuM3M7XHJcbi8vIH1cclxuLy8gLmdhbGxlcnkgaW1nOmhvdmVyIHtcclxuLy8gICAtLV9pOiAxO1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycywgY2xpcC1wYXRoIC4zcyAuMnMsIHotaW5kZXggMHM7XHJcbi8vIH1cclxuLy8gLmdhbGxlcnk6aG92ZXIgaW1nIHtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xyXG4vLyB9XHJcbi8vIC5nYWxsZXJ5ID4gaW1nOm50aC1jaGlsZCgxKSB7XHJcbi8vICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsY2FsYyg1MCUqdmFyKC0tX2ksMCkpIGNhbGMoMTIwJSp2YXIoLS1faSwwKSksMCBjYWxjKDEwMCUqdmFyKC0tX2ksMCkpLDAgMCwxMDAlIDAsMTAwJSBjYWxjKDEwMCUqdmFyKC0tX2ksMCkpLGNhbGMoMTAwJSAtIDUwJSp2YXIoLS1faSwwKSkgY2FsYygxMjAlKnZhcigtLV9pLDApKSk7XHJcbi8vICAgLS1feTogY2FsYygtMSp2YXIoLS1nKSlcclxuLy8gfVxyXG4vLyAuZ2FsbGVyeSA+IGltZzpudGgtY2hpbGQoMikge1xyXG4vLyAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLGNhbGMoMTAwJSAtIDEyMCUqdmFyKC0tX2ksMCkpIGNhbGMoNTAlKnZhcigtLV9pLDApKSxjYWxjKDEwMCUgLSAxMDAlKnZhcigtLV9pLDApKSAwLDEwMCUgMCwxMDAlIDEwMCUsY2FsYygxMDAlIC0gMTAwJSp2YXIoLS1faSwwKSkgMTAwJSxjYWxjKDEwMCUgLSAxMjAlKnZhcigtLV9pLDApKSBjYWxjKDEwMCUgLSA1MCUqdmFyKC0tX2ksMCkpKTtcclxuLy8gICAtLV94OiB2YXIoLS1nKVxyXG4vLyB9XHJcbi8vIC5nYWxsZXJ5ID4gaW1nOm50aC1jaGlsZCgzKSB7XHJcbi8vICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsY2FsYygxMDAlIC0gNTAlKnZhcigtLV9pLDApKSBjYWxjKDEwMCUgLSAxMjAlKnZhcigtLV9pLDApKSwxMDAlIGNhbGMoMTAwJSAtIDEyMCUqdmFyKC0tX2ksMCkpLDEwMCUgMTAwJSwwIDEwMCUsMCBjYWxjKDEwMCUgLSAxMDAlKnZhcigtLV9pLDApKSxjYWxjKDUwJSp2YXIoLS1faSwwKSkgY2FsYygxMDAlIC0gMTIwJSp2YXIoLS1faSwwKSkpO1xyXG4vLyAgIC0tX3k6IHZhcigtLWcpXHJcbi8vIH1cclxuLy8gLmdhbGxlcnkgPiBpbWc6bnRoLWNoaWxkKDQpIHtcclxuLy8gICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSxjYWxjKDEyMCUqdmFyKC0tX2ksMCkpIGNhbGMoNTAlKnZhcigtLV9pLDApKSxjYWxjKDEwMCUqdmFyKC0tX2ksMCkpIDAsMCAwLDAgMTAwJSxjYWxjKDEwMCUqdmFyKC0tX2ksMCkpIDEwMCUsY2FsYygxMjAlKnZhcigtLV9pLDApKSBjYWxjKDEwMCUgLSA1MCUqdmFyKC0tX2ksMCkpKTtcclxuLy8gICAtLV94OiBjYWxjKC0xKnZhcigtLWcpKVxyXG4vLyB9XHJcblxyXG4vKiBKdW1ib3Ryb24gZmlyc3QgdmVyc2lvbiovXHJcblxyXG4vKkZpcnN0IFR5cGV3cml0dGVyKi9cclxuXHJcbi5teV90ZXh0IGgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJnZXR0ZVwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4vKlNlY29uZCBUeXBld3JpdHRlciovXHJcblxyXG4udHlwZS13cml0dGVyIHtcclxuICBjb2xvcjogIzYzYjFkMztcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJva2tpdHRcIiwgc2VyaWY7XHJcbiAgLyogQmxpbmtpbmcgY3Vyc29yICAgKi9cclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjNjNiMWQzO1xyXG4gIC8qIEFuaW1hdGlvbiAgICovXHJcbiAgYW5pbWF0aW9uOiB0eXBpc3QgMTVzIHN0ZXBzKDMyKSBpbmZpbml0ZSwgY2FyZXQgMC4xNXMgaW5maW5pdGUgc3RlcC1lbmQ7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGNhcmV0IHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2M2IxZDM7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGlzdCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDBjaDtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHdpZHRoOiAzMmNoO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgd2lkdGg6IDMyY2g7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB3aWR0aDogMGNoO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAwY2g7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBYm91dCBJbWcqL1xyXG4uYWJvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hYm91dCBhIHtcclxuICBjb2xvcjogIzYzYjFkMyFpbXBvcnRhbnQ7XHJcbn1cclxuLm15X2luZm9yIGgyLFxyXG5zcGFuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm15X2luZm9yIHNwYW4ge1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5teV9pbmZvciBwIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmdyaWQgaW1nIHtcclxuICBtYXNrOiB1cmwoaHR0cHM6Ly9hc3NldHMuY29kZXBlbi5pby8xMTAxODIyL2NpcmNsZXMtbWFzay13aG9sZS5zdmcpIG5vLXJlcGVhdFxyXG4gICAgY2VudGVyO1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KG1pbigxMDAlLCAzMGNoKSwgMWZyKSk7XHJcbiAgZ2FwOiA1dm1heDtcclxuICB3aWR0aDogbWluKDYwY2gsIDEwMCUpO1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLypUaXRsZSovXHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGNvbG9yOiAjNjNiMWQzO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4udGl0bGUgaDIge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbn1cclxuXHJcbi5yb3RhdGUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi8qSGlzdG9yeSovXHJcbi5oaXN0b3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oaXN0b3J5IC50aXRsZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2xvcjogIzYzYjFkMztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG59XHJcbi8qXHJcbiEhISFcclxuVGhpcyBwZW4gaXMgYmVpbmcgcmVmYWN0b3JlZFxyXG4hISEhXHJcbiovXHJcblxyXG4vKlxyXG49PT09PVxyXG5ERVBFTkRFTkNFU1xyXG49PT09PVxyXG4qL1xyXG5cclxuLnItdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXJUaXRsZU1hcmdpblRvcCwgMCkgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1yVGl0bGVNYXJnaW5Cb3R0b20sIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnA6bm90KFtjbGFzc10pIHtcclxuICBsaW5lLWhlaWdodDogdmFyKC0tY3NzVHlwb2dyYXBoeUxpbmVIZWlnaHQsIDEuNzgpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWNzc1R5cG9ncmFwaHlCYXNpY01hcmdpbiwgMWVtKTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5wOm5vdChbY2xhc3NdKTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLypcclxudGV4dCBjb21wb25lbnRcclxuKi9cclxuXHJcbi50ZXh0IHtcclxuICBkaXNwbGF5OiB2YXIoLS10ZXh0RGlzcGxheSwgaW5saW5lLWZsZXgpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZvbnRTaXplLCAxcmVtKTtcclxufVxyXG5cclxuLypcclxudGltZSBjb21wb25lbnRcclxuKi9cclxuXHJcbi8qXHJcbmNvcmUgc3R5bGVzXHJcbiovXHJcblxyXG4udGltZSB7XHJcbiAgZGlzcGxheTogdmFyKC0tdGltZURpc3BsYXksIGlubGluZS1mbGV4KTtcclxufVxyXG5cclxuLypcclxuZXh0ZW5zaW9uc1xyXG4qL1xyXG5cclxuLnRpbWVfX21vbnRoIHtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tdGltZWxpbmVNb3VudGhNYXJnaW5MZWZ0LCAwLjI1ZW0pO1xyXG59XHJcblxyXG4vKlxyXG5za2luXHJcbiovXHJcblxyXG4udGltZSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2IxZDM7XHJcbiAgZm9udC1zaXplOiB2YXIoLS10aW1lRm9udFNpemUsIDAuNzVyZW0pO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10aW1lRm9udFdlaWdodCwgNzAwKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tdGltZVRleHRUcmFuc2Zvcm0sIHVwcGVyY2FzZSk7XHJcbiAgY29sb3I6IHZhcigtLXRpbWVDb2xvciwgY3VycmVudENvbG9yKTtcclxufVxyXG5cclxuLypcclxuY2FyZCBjb21wb25lbnRcclxuKi9cclxuXHJcbi8qXHJcbmNvcmUgc3R5bGVzXHJcbiovXHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogdmFyKC0tdGltZWxpbmVDYXJkUGFkZGluZywgMS41cmVtIDEuNXJlbSAxLjI1cmVtKTtcclxufVxyXG5cclxuLmNhcmRfX2NvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWNhcmRDb250ZW50TWFyZ2luVG9wLCAwLjVyZW0pO1xyXG59XHJcblxyXG4vKlxyXG5za2luXHJcbiovXHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGltZWxpbmVDYXJkQm9yZGVyUmFkaXVzLCAycHgpO1xyXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS10aW1lbGluZUNhcmRCb3JkZXJMZWZ0V2lkdGgsIDNweCkgc29saWRcclxuICAgIHZhcigtLXRpbWVsaW5lQ2FyZEJvcmRlckxlZnRDb2xvciwgdmFyKC0tdWlUaW1lbGluZU1haW5Db2xvcikpO1xyXG4gIGJveC1zaGFkb3c6IHZhcihcclxuICAgIC0tdGltZWxpbmVDYXJkQm94U2hhZG93LFxyXG4gICAgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcclxuICAgIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNClcclxuICApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWVsaW5lQ2FyZEJhY2tncm91bmRDb2xvciwgI2ZmZik7XHJcbn1cclxuXHJcbi8qXHJcbmV4dGVuc2lvbnNcclxuKi9cclxuXHJcbi5jYXJkX190aXRsZSB7XHJcbiAgLS1yVGl0bGVNYXJnaW5Ub3A6IHZhcigtLWNhcmRUaXRsZU1hcmdpblRvcCwgMXJlbSk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkVGl0bGVGb250U2l6ZSwgMS4yNXJlbSk7XHJcbn1cclxuXHJcbi8qXHJcbj09PT09XHJcbkNPUkUgU1RZTEVTXHJcbj09PT09XHJcbiovXHJcblxyXG4udGltZWxpbmUge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogdmFyKC0tdGltZWxpbmVEaXNwbGF5LCBncmlkKTtcclxuICBncmlkLXJvdy1nYXA6IHZhcigtLXRpbWVsaW5lR3JvdXBzR2FwLCAycmVtKTtcclxufVxyXG5cclxuLypcclxuMS4gSWYgdGltZWxpbmVfX3llYXIgaXNuJ3QgZGlzcGxhZWQgdGhlIGdhcCBiZXR3ZWVuIGl0IGFuZCB0aW1lbGluZV9fY2FyZHMgaXNuJ3QgZGlzcGxheWVkIHRvb1xyXG4qL1xyXG5cclxuLnRpbWVsaW5lX195ZWFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtOyAvKiAxICovXHJcbn1cclxuXHJcbi50aW1lbGluZV9fY2FyZHMge1xyXG4gIGRpc3BsYXk6IHZhcigtLXRpbWVsb25lQ2FyZHNEaXNwbGF5LCBncmlkKTtcclxuICBncmlkLXJvdy1nYXA6IHZhcigtLXRpbWVsb25lQ2FyZHNHYXAsIDEuNXJlbSk7XHJcbn1cclxuXHJcbi8qXHJcbj09PT09XHJcblNLSU5cclxuPT09PT1cclxuKi9cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgLS11aVRpbWVsaW5lTWFpbkNvbG9yOiB2YXIoLS10aW1lbGluZU1haW5Db2xvciwgIzIyMik7XHJcbiAgLS11aVRpbWVsaW5lU2Vjb25kYXJ5Q29sb3I6IHZhcigtLXRpbWVsaW5lU2Vjb25kYXJ5Q29sb3IsICNmZmYpO1xyXG5cclxuICBib3JkZXItbGVmdDogdmFyKC0tdGltZWxpbmVMaW5lV2lkdGgsIDNweCkgc29saWRcclxuICAgIHZhcigtLXRpbWVsaW5lTGluZUJhY2tncm91bmRDb2xvciwgdmFyKC0tdWlUaW1lbGluZU1haW5Db2xvcikpO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50aW1lbGluZV9feWVhciB7XHJcbiAgLS10aW1lUGFkZGluZzogdmFyKC0tdGltZWxpbmVZZWFyUGFkZGluZywgMC41cmVtIDEuNXJlbSk7XHJcbiAgLS10aW1lQ29sb3I6IHZhcigtLXVpVGltZWxpbmVTZWNvbmRhcnlDb2xvcik7XHJcbiAgLS10aW1lQmFja2dyb3VuZENvbG9yOiB2YXIoLS11aVRpbWVsaW5lTWFpbkNvbG9yKTtcclxuICAtLXRpbWVGb250V2VpZ2h0OiB2YXIoLS10aW1lbGluZVllYXJGb250V2VpZ2h0LCA0MDApO1xyXG59XHJcblxyXG4udGltZWxpbmVfX2NhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tdGltZWxpbmVDYXJkTGluZUdhcCwgMXJlbSk7XHJcbn1cclxuXHJcbi8qXHJcbjEuIFN0b3BpbmcgY3V0IGJveCBzaGFkb3dcclxuKi9cclxuXHJcbi50aW1lbGluZV9fY2FyZHMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07IC8qIDEgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTsgLyogMSAqL1xyXG59XHJcblxyXG4udGltZWxpbmVfX2NhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2M2IxZDM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsXHJcbiAgICByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmVfX2NhcmQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IHZhcigtLXRpbWVsaW5lQ2FyZExpbmVXaWR0aCwgMnB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXHJcbiAgICAtLXRpbWVsaW5lQ2FyZExpbmVCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB2YXIoLS11aVRpbWVsaW5lTWFpbkNvbG9yKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogdmFyKC0tdGltZWxpbmVDYXJkTGluZVRvcCwgMXJlbSk7XHJcbiAgbGVmdDogLTUwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLypcclxuPT09PT1cclxuU0VUVElOR1NcclxuPT09PT1cclxuKi9cclxuLyoqL1xyXG4udGltZWxpbmUge1xyXG4gIC0tdGltZWxpbmVNYWluQ29sb3I6ICM2M2IxZDM7XHJcbn1cclxuXHJcbi8qXHJcbj09PT09XHJcbkRFTU9cclxuPT09PT1cclxuKi9cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5wOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdWJzdGFjayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG5cclxuLnItbGluayB7XHJcbiAgLS11aXJMaW5rRGlzcGxheTogdmFyKC0tckxpbmtEaXNwbGF5LCBpbmxpbmUtZmxleCk7XHJcbiAgLS11aXJMaW5rVGV4dENvbG9yOiB2YXIoLS1yTGlua1RleHRDb2xvcik7XHJcbiAgLS11aXJMaW5rVGV4dERlY29yYXRpb246IHZhcigtLXJMaW5rVGV4dERlY29yYXRpb24sIG5vbmUpO1xyXG5cclxuICBkaXNwbGF5OiB2YXIoLS11aXJMaW5rRGlzcGxheSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdWlyTGlua1RleHRDb2xvcikgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLXVpckxpbmtUZXh0RGVjb3JhdGlvbikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTmV3IGhlYWRlciovXHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogMjh2bWluO1xyXG4gIGhlaWdodDogMjh2bWluO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNjNiMWQzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzYzYjFkMztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40Mik7XHJcbiAgfVxyXG59XHJcblxyXG4uc3Bpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbmltYXRpb246IHNwaW4gMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaGFwZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMXMgZWFzZS1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNjAlIDQwJSAzMCUgNzAlIC8gNjAlIDMwJSA3MCUgNDAlO1xyXG4gIGFuaW1hdGlvbjogbW9ycGggOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBhbHRlcm5hdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmJkIHtcclxuICB3aWR0aDogMTQyJTtcclxuICBoZWlnaHQ6IDE0MiU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0yMSU7XHJcbiAgdG9wOiAtMjElO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICMwMDM7XHJcbiAgZm9udC1zaXplOiA1dnc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBhbmltYXRpb246IHNwaW4gMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3JwaCB7XHJcbiAgMCUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDYwJSA2MCUgNDAlIC8gNjAlIDMwJSA3MCUgNDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcclxuICB9XHJcbn1cclxuXHJcbi8qTXkgU2VydmljZXMqL1xyXG4ubXlfc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlfc2VydmljZSBoMSB7XHJcbiAgY29sb3I6ICM2M2IxZDM7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDAuOTtcclxufVxyXG5cclxuLm15X3NlcnZpY2UgaDMge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LWZhbWlseTogXCJSb2traXR0XCIsIHNlcmlmO1xyXG59XHJcbi5teV9zZXJ2aWNlIC5zZXJ2aWNlOmhvdmVyIHtcclxuICBoMyB7XHJcbiAgICBjb2xvcjogIzYzYjFkMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICBmaWxsOiM2M2IxZDMhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLypNeSBTa2lsbHMqL1xyXG4ubXlfc2tpbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDUwcHg7XHJcbn1cclxuLm15X3NraWxsIC50aXRsZSB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbi5teV9za2lsbCBsYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJva2tpdHRcIiwgc2VyaWY7XHJcbn1cclxuOjpuZy1kZWVwIC5tZGMtbGluZWFyLXByb2dyZXNzX19iYXItaW5uZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzYzYjFkMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKlByb2plY3RzKi9cclxuLnByb2plY3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW4haW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvamVjdHMgaDEge1xyXG4gIGNvbG9yOiAjNjNiMWQzO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbn1cclxuXHJcbi8qIFN0eWxlcyBmb3IgdGhlIGFjdGl2ZSB0YWIgbGFiZWwgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1tZGMtdGFiOm5vdCgubWF0LW1kYy10YWItZGlzYWJsZWQpLm1kYy10YWItLWFjdGl2ZVxyXG4gIC5tZGMtdGFiX190ZXh0LWxhYmVsLFxyXG4ubWF0LW1kYy10YWItbGluazpub3QoLm1hdC1tZGMtdGFiLWRpc2FibGVkKS5tZGMtdGFiLS1hY3RpdmVcclxuICAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XHJcbiAgY29sb3I6ICM2M2IxZDMgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICM2M2IxZDMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1kYy10YWJfX3JpcHBsZTo6YmVmb3JlLFxyXG4ubWF0LW1kYy10YWIgLm1hdC1yaXBwbGUtZWxlbWVudCxcclxuLm1hdC1tZGMtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsXHJcbi5tYXQtbWRjLXRhYi1saW5rIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2IxZDMgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICM2M2IxZDMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1tZGMtdGFiIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2plY3RzIC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwdm1pbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogc2tldyg1ZGVnKTtcclxuICAuY2FyZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgaGVpZ2h0OiA3NXZtaW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY2FyZF9faGVhZCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYmFja2dyb3VuZDogIzYzYjFkMztcclxuICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgZmxleC1ncm93OiAxMDtcclxuICAgICAgcGFkZGluZzogdmFyKC0tdGltZWxpbmVDYXJkUGFkZGluZywgMS41cmVtIDAuNXJlbSAxLjI1cmVtKTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZF9faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gMmVtKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNrZXcoLTVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIH1cclxuICAgICY6bm90KDpudGgtY2hpbGQoNSkpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKkNvbnRhY3QqL1xyXG5cclxuLmNvbnRhY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb250YWN0IC5oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jb250YWN0IC5oZWFkaW5nIGgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzQwNDM1NjtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY29udGFjdCAuaGVhZGluZyBoMiBzcGFuIHtcclxuICBjb2xvcjogIzYzYjFkMztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5jb250YWN0IC5oZWFkaW5nIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjNTI1ZjdmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFjdCAubWFpbiB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG4uY29udGFjdCAubWFpbiBoMyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb250YWN0IC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmOTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb250YWN0IGJ1dHRvbi5idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjNjNiMWQzO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY29udGFjdCAubWFpbiAubGVmdCB7XHJcbiAgcGFkZGluZzogNDBweCA2MHB4O1xyXG59XHJcbi5jb250YWN0IC5tYWluIC5yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzYzYjFkMztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmNvbnRhY3QgLm1haW4gLnJpZ2h0IGg0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jb250YWN0IC5tYWluIC5yaWdodCAuaW5mbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4uY29udGFjdCAubWFpbiAucmlnaHQgLmluZm8gaSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb250YWN0IC5tYWluIC5yaWdodCAuaW5mbyBzcGFuIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4uY29udGFjdCAubWFpbiAucmlnaHQgLnNvY2lhbCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uY29udGFjdCAucmlnaHQtaGFuZCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWZ0IHAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJva2tpdHRcIiwgc2VyaWY7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9099:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 8098);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ 7321);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



































class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule],
  imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule]
  });
})();

/***/ }),

/***/ 5274:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ProjectsComponent {}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 2,
  vars: 0,
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map