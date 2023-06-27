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
  consts: [[1, "container-fluid"], [1, "card"], [1, "row", "mb-4"], [1, "col-md-4", "col-sm-11", "col-xs-11"], [1, "footer-text", "pull-left"], [1, "d-flex", "my_logo"], ["src", "../../assets/images/LogoN2.png", "alt", ""], [1, "card-text"], [1, "social", "mt-2", "mb-3"], [1, "fa", "fa-facebook-official", "fa-lg"], [1, "fa", "fa-instagram", "fa-lg"], [1, "fa", "fa-twitter", "fa-lg"], [1, "fa", "fa-linkedin-square", "fa-lg"], [1, "fa", "fa-facebook"], [1, "col-md-2", "col-sm-1", "col-xs-1", "mb-2"], [1, "col-md-2", "col-sm-4", "col-xs-4"], [1, "heading"], [1, "divider", "mb-4"], [1, "row", 2, "font-size", "10px"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "pull-left"], [1, "fa", "fa-copyright"]],
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
  consts: [["s", "", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 3, "scroll"], [1, "container-fluid"], [1, "d-flex", "justify-content-between"], [1, "my_logo"], ["src", "../../assets/images/LogoN2.png", "alt", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "d-flex", "justify-content-end"], [1, "nav-item"], ["routerLinkActive", "router-link-active", "routerLink", "home", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "router-link-active", "routerLink", "about", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "router-link-active", "routerLink", "projects", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "router-link-active", "routerLink", "contact", 1, "nav-link", 3, "routerLinkActiveOptions"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9)(13, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9)(16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Education & Work Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9)(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "a", 13);
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
  styles: [".nav-link[_ngcontent-%COMP%] {\n  padding: 6px 20px !important;\n  color: white !important;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 18px;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: #63B1D3 !important;\n  font-weight: bold;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 20px;\n  background-color: transparent !important;\n  position: fixed;\n  z-index: 100000;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  flex-grow: 0 !important;\n}\n\n.my_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 70px;\n}\n\n.my_title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-left: 10px;\n}\n\n.my_title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  font-weight: bolder;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #63B1D3 !important;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background-color: black !important;\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDQSx5QkFBQTtBQUVBOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xyXG4gIHBhZGRpbmc6IDZweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2M0IxRDMgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDAwMDtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teV9sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4ubXlfdGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLm15X3RpdGxlIGEge1xyXG4gIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhOmhvdmVye1xyXG5jb2xvcjogIzYzQjFEMyFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItaW52ZXJzZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);






function HomeComponent_p_302_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_305_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_306_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please provide a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_309_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomeComponent_p_310_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Your message can't exceed 250 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class HomeComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.contactForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(250)]]
    });
  }
  ngOnInit() {
    console.log(this.contactForm.value);
  }
  Send() {
    console.log(this.contactForm.value);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 342,
  vars: 6,
  consts: [[1, "jumbotron", "container-fluid", "d-flex", "flex-column", "align-items-center"], [1, "my_video"], ["loop", "true", 3, "canplay", "loadedmetadata"], ["myVideo", ""], ["src", "../../assets/images/video1.mp4", "type", "video/mp4"], [1, "my_info"], [1, "d-flex", "justify-content-center", "pb-4"], [1, "box"], [1, "spin-container"], [1, "shape"], [1, "bd"], [1, "my_text", "pt-5"], [1, "type-writter", "pt-3"], [1, "about", "container-fluid", "pt-5", "pb-5"], [1, "row", "pt-5"], [1, "col-lg-5"], [1, "grid"], ["src", "../../assets/images/bg1.jpg", "alt", ""], [1, "col-lg-2", "title"], [1, "rotate"], [1, "col-lg-5", "my_infor"], [1, "pb-2"], [1, "history", "container-fluid", "pt-5", "pb-5"], [1, "row", "pt-5", "pb-5"], [1, "col-lg-10"], [1, "page"], [1, "timeline"], [1, "timeline__group"], ["aria-hidden", "true", 1, "timeline__year", "time"], [1, "timeline__cards"], [1, "timeline__card", "card"], [1, "card__header"], ["datetime", "2008-02-02", 1, "time"], [1, "time__month"], [1, "card__content"], ["datetime", "2008-07-14", 1, "time"], [1, "my_service", "pt-5", "pb-5"], [1, "pb-5"], [1, "d-flex", "justify-content-around", "pt-5"], [1, "service"], ["src", "../../assets/images/wb-design.svg", "alt", ""], [1, "pt-5"], ["src", "../../assets/images/graphic-designN.svg", "alt", ""], ["src", "../../assets/images/ui-uxN.svg", "alt", ""], ["src", "../../assets/images/app-developmentN.svg", "alt", ""], [1, "my_skill", "container-fluid"], [1, "col-lg-5", "ps-5", "pe-5"], ["for", ""], ["mode", "determinate", "value", "99"], ["mode", "determinate", "value", "70"], ["mode", "determinate", "value", "60"], [1, "projects", "pt-5"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center"], ["label", "All"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container"], [1, "card"], ["src", "../../assets/images/cook-love.png"], [1, "card__head"], ["href", "https://turkana99.github.io/cook-love/home"], ["src", "../../assets/images/trendist.png"], ["href", "https://turkana99.github.io/Trendist/home"], ["src", "../../assets/images/home-pet.png"], ["href", "https://turkana99.github.io/homepet/"], ["src", "../../assets/images/vibrant.png"], ["href", ""], ["src", "../../assets/images/tm-course.png"], ["label", "Angular"], ["src", "../../assets/images/treaveller.png"], ["href", "https://turkana99.github.io/Traveller/"], ["label", "Bootstrap"], ["label", "HTML/CSS"], ["src", "../../assets/images/book.png"], ["href", "https://turkana99.github.io/book-publisher/"], ["src", "../../assets/images/online.png"], ["href", "https://turkana99.github.io/online-updates/"], ["src", "../../assets/images/northgate.png"], ["href", "https://turkana99.github.io/northgate-states/"], ["src", "../../assets/images/winslow.png"], ["href", "https://turkana99.github.io/winslow-news/"], ["src", "../../assets/images/freemont.png"], ["href", "https://turkana99.github.io//freemont/"], [1, "container", "ps-5"], ["src", "../../assets/images/best.png"], ["href", "https://turkana99.github.io//best-release/"], ["src", "../../assets/images/beechtown.png"], ["href", "https://turkana99.github.io//beechtown-paper/"], ["src", "../../assets/images/nordiv.png"], ["href", "https://turkana99.github.io/nordic/"], ["src", "../../assets/images/beoreo.png"], ["href", "https://turkana99.github.io//beoreo/"], ["src", "../../assets/images/beauty.png"], ["href", "https://turkana99.github.io//beauty/"], ["label", "JS"], ["id", "contact", 1, "contact", "pt-5"], [1, "container-fluid", "pt-5"], [1, "main", "wow", "fadeInUp", 2, "visibility", "visible", "animation-name", "fadeInUp"], [1, "row"], [1, "col-lg-7", "left"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-sm-6"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], [4, "ngIf"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "form-group"], ["rows", "5", "id", "comment", "placeholder", "Message", "formControlName", "message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block"], [1, "col-lg-3", "right-hand"], [1, "right"], [1, "info", "d-flex", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["aria-hidden", "true", 1, "fa", "fa-chrome"], ["aria-hidden", "true", 1, "fa", "fa-phone"], [1, "social"], ["href", "https://github.com/Turkana99"], [1, "fa-brands", "fa-github"], ["href", "https://www.linkedin.com/in/turkana-mammadova-b39b07232"], [1, "fa-brands", "fa-linkedin"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "video", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("canplay", function HomeComponent_Template_video_canplay_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.play());
      })("loadedmetadata", function HomeComponent_Template_video_loadedmetadata_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.muted = true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your browser does not support HTML5 video. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My name is Turkana Mammadova");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "h2", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I am a Designer and Software Developer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18)(24, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20)(29, "div")(30, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hello! I\u2019m Turkana Mammadova");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and graphic design tools such as Photoshop and Illustrator. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span")(35, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Age:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span")(40, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " mmmmadova.turkana@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span")(45, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Phone:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " +994 70 404 55 06");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span")(50, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Azerbaijan, Baku");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span")(55, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Avialable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22)(60, "div", 23)(61, "div", 24)(62, "div", 25)(63, "div", 26)(64, "div", 27)(65, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "2016 - 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29)(68, "div", 30)(69, "header", 31)(70, "time", 32)(71, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Azerbaijan State Oil and Industry University");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34)(74, "p")(75, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Faculty: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Information Texnology Management - Computer Science ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27)(79, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "2020 - 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29)(82, "div", 30)(83, "header", 31)(84, "time", 35)(85, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "GTSolutions Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34)(88, "p")(89, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Position: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Designer And Software Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18)(93, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Education");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Work Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36)(98, "h1", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "My Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 38)(101, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Web Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Graphic Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "UI/UX");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Software Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 45)(118, "div", 14)(119, "div", 46)(120, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "HMTL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "mat-progress-bar", 48)(123, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "mat-progress-bar", 48)(127, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "JAVASCRIPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "mat-progress-bar", 49)(131, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "JQUERY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "mat-progress-bar", 50)(135, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "BOOTSTRAP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "mat-progress-bar", 48)(139, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 18)(141, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "My");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46)(146, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "TYPESCRIPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "mat-progress-bar", 49)(149, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "ANGULAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "mat-progress-bar", 49)(153, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "FIGMA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "mat-progress-bar", 48)(157, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "ADOBE PHOTOSHOP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "mat-progress-bar", 49)(161, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "ADOBE ILLUSTRATOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "mat-progress-bar", 49)(165, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 51)(167, "h1", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "My Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div")(170, "mat-tab-group", 52)(171, "mat-tab", 53)(172, "div", 54)(173, "div", 55)(174, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 58)(177, "a", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Cook-Love");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 58)(182, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Trendist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 58)(187, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "HomePet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 58)(192, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Vibrant");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 58)(197, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "TM-Course");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-tab", 67)(200, "div", 54)(201, "div", 55)(202, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 58)(205, "a", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Cook-Love");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 58)(210, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Trendist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 58)(215, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Vibrant");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 58)(220, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "TM-Course");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 58)(225, "a", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "TM-Course");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "mat-tab", 70)(228, "div", 54)(229, "div", 55)(230, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 58)(233, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "HomePet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-tab", 71)(236, "div", 54)(237, "div", 55)(238, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 58)(241, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Book Publisher");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 58)(246, "a", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Online-Updates");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 58)(251, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Northgate-States");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 58)(256, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Winslow-News");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "img", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 58)(261, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Freemont");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 54)(264, "div", 82)(265, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 58)(268, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Best Release");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "img", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 58)(273, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Beechtown Paper");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 58)(278, "a", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Nordic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 58)(283, "a", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Beoreo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "img", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 58)(288, "a", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "The Beauty");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "mat-tab", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "section", 94)(292, "div", 95)(293, "div", 96)(294, "div", 97)(295, "div", 98)(296, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "form", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_298_listener() {
        return ctx.Send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 100)(300, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](302, HomeComponent_p_302_Template, 2, 0, "p", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](305, HomeComponent_p_305_Template, 2, 0, "p", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](306, HomeComponent_p_306_Template, 2, 0, "p", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "textarea", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](309, HomeComponent_p_309_Template, 2, 0, "p", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](310, HomeComponent_p_310_Template, 2, 0, "p", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "button", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Send Now!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 18)(315, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 108)(320, "div", 109)(321, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Contact Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Azerbaijan, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Baku");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "+994 70 404 55 06 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "mmmmadova.turkana@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 114)(338, "a", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](298);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["name"].errors == null ? null : ctx.contactForm.controls["name"].errors["required"]) && (ctx.contactForm.controls["name"].dirty && ctx.contactForm.controls["name"].invalid || ctx.contactForm.controls["name"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["email"].errors == null ? null : ctx.contactForm.controls["email"].errors["required"]) && (ctx.contactForm.controls["email"].dirty && ctx.contactForm.controls["email"].invalid || ctx.contactForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["email"].errors == null ? null : ctx.contactForm.controls["email"].errors["email"]) && (ctx.contactForm.controls["email"].dirty && ctx.contactForm.controls["email"].invalid || ctx.contactForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["message"].errors == null ? null : ctx.contactForm.controls["message"].errors["required"]) && (ctx.contactForm.controls["message"].dirty && ctx.contactForm.controls["message"].invalid || ctx.contactForm.controls["message"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls["message"].errors == null ? null : ctx.contactForm.controls["message"].errors["maxlength"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["body[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  background-color: black;\n  overflow-x: hidden !important;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 740px;\n  padding: 0px !important;\n  position: relative;\n  overflow-x: hidden !important;\n  overflow-y: hidden !important;\n}\n\n.my_video[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  overflow-y: hidden !important;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n#myVideo[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  margin: 0px !important;\n  overflow-y: hidden !important;\n}\n\n.my_info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 26%;\n  left: 35%;\n  text-align: center !important;\n}\n\n\n\n\n\n\n\n.my_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 30px;\n  font-family: \"Courgette\", cursive;\n}\n\n\n\n.type-writter[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-size: 1.6rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n  font-family: \"Rokkitt\", serif;\n  \n\n  border-right: 3px solid #63b1d3;\n  \n\n  animation: _ngcontent-%COMP%_typist 15s steps(32) infinite, _ngcontent-%COMP%_caret 0.15s infinite step-end;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_caret {\n  0%, 100% {\n    border-color: transparent;\n  }\n  50% {\n    border-color: #63b1d3;\n  }\n}\n@keyframes _ngcontent-%COMP%_typist {\n  0% {\n    width: 0ch;\n  }\n  30% {\n    width: 32ch;\n  }\n  80% {\n    width: 32ch;\n  }\n  90% {\n    width: 0ch;\n  }\n  100% {\n    width: 0ch;\n  }\n}\n\n\n.about[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.my_infor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.my_infor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n\n.my_infor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  line-height: 40px;\n  font-family: \"Open Sans\", sans-serif;\n  opacity: 0.8;\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-mask: url(https://assets.codepen.io/1101822/circles-mask-whole.svg) no-repeat center;\n          mask: url(https://assets.codepen.io/1101822/circles-mask-whole.svg) no-repeat center;\n  max-width: 100%;\n  display: block;\n  aspect-ratio: 1;\n  object-fit: cover;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30ch), 1fr));\n  gap: 5vmax;\n  width: min(60ch, 100%);\n  margin-inline: auto;\n  padding: 30px;\n}\n\n\n\n.title[_ngcontent-%COMP%] {\n  display: grid;\n  height: 70vh;\n  color: #63b1d3;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: max-content max-content;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 100px;\n  margin: 0;\n  writing-mode: vertical-lr;\n  text-align: center;\n  line-height: 0.9;\n}\n\n.rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n\n\n.history[_ngcontent-%COMP%] {\n  background-color: black;\n  overflow-x: hidden;\n}\n\n.history[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 60vh;\n  padding-right: 80px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.r-title[_ngcontent-%COMP%] {\n  margin-top: var(--rTitleMarginTop, 0) !important;\n  margin-bottom: var(--rTitleMarginBottom, 0) !important;\n}\n\np[_ngcontent-%COMP%]:not([class]) {\n  line-height: var(--cssTypographyLineHeight, 1.78);\n  margin-top: var(--cssTypographyBasicMargin, 1em);\n  margin-bottom: 0;\n}\n\np[_ngcontent-%COMP%]:not([class]):first-child {\n  margin-top: 0;\n}\n\n\n\n\n\n.text[_ngcontent-%COMP%] {\n  display: var(--textDisplay, inline-flex);\n  font-size: var(--textFontSize, 1rem);\n}\n\n\n\n\n\n\n\n\n\n.time[_ngcontent-%COMP%] {\n  display: var(--timeDisplay, inline-flex);\n}\n\n\n\n\n\n.time__month[_ngcontent-%COMP%] {\n  margin-left: var(--timelineMounthMarginLeft, 0.25em);\n}\n\n\n\n\n\n.time[_ngcontent-%COMP%] {\n  padding: var(--timePadding, 0.25rem 1.25rem 0.25rem);\n  background-color: #63b1d3;\n  font-size: var(--timeFontSize, 0.75rem);\n  font-weight: var(--timeFontWeight, 700);\n  text-transform: var(--timeTextTransform, uppercase);\n  color: var(--timeColor, currentColor);\n}\n\n\n\n\n\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);\n}\n\n.card__content[_ngcontent-%COMP%] {\n  margin-top: var(--cardContentMarginTop, 0.5rem);\n}\n\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  border-radius: var(--timelineCardBorderRadius, 2px);\n  border-left: var(--timelineCardBorderLeftWidth, 3px) solid var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));\n  box-shadow: var(--timelineCardBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24));\n  background-color: var(--timelineCardBackgroundColor, #fff);\n}\n\n\n\n\n\n.card__title[_ngcontent-%COMP%] {\n  --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);\n  font-size: var(--cardTitleFontSize, 1.25rem);\n}\n\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  display: var(--timelineDisplay, grid);\n  grid-row-gap: var(--timelineGroupsGap, 2rem);\n}\n\n\n\n\n\n.timeline__year[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem; \n\n}\n\n.timeline__cards[_ngcontent-%COMP%] {\n  display: var(--timeloneCardsDisplay, grid);\n  grid-row-gap: var(--timeloneCardsGap, 1.5rem);\n}\n\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  --uiTimelineMainColor: var(--timelineMainColor, #222);\n  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);\n  border-left: var(--timelineLineWidth, 3px) solid var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n}\n\n.timeline__year[_ngcontent-%COMP%] {\n  --timePadding: var(--timelineYearPadding, 0.5rem 1.5rem);\n  --timeColor: var(--uiTimelineSecondaryColor);\n  --timeBackgroundColor: var(--uiTimelineMainColor);\n  --timeFontWeight: var(--timelineYearFontWeight, 400);\n}\n\n.timeline__card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: var(--timelineCardLineGap, 1rem);\n}\n\n\n\n\n\n.timeline__cards[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-top: 0.25rem; \n\n  padding-bottom: 0.25rem; \n\n}\n\n.timeline__card[_ngcontent-%COMP%] {\n  background-color: black;\n  border: 1px solid #63b1d3;\n  color: white;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px !important;\n}\n\n.timeline__card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: var(--timelineCardLineWidth, 2px);\n  background-color: var(--timelineCardLineBackgroundColor, var(--uiTimelineMainColor));\n  position: absolute;\n  top: var(--timelineCardLineTop, 1rem);\n  left: -50%;\n  z-index: -1;\n}\n\n\n\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  --timelineMainColor: #63b1d3;\n}\n\n\n\n\n\n\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n\np[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 0px 80px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.substack[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  background-color: #fff;\n  width: 100%;\n  max-width: 480px;\n  height: 280px;\n  margin: 1rem auto;\n}\n\n.r-link[_ngcontent-%COMP%] {\n  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);\n  --uirLinkTextColor: var(--rLinkTextColor);\n  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);\n  display: var(--uirLinkDisplay) !important;\n  color: var(--uirLinkTextColor) !important;\n  -webkit-text-decoration: var(--uirLinkTextDecoration) !important;\n          text-decoration: var(--uirLinkTextDecoration) !important;\n}\n\n\n\n.box[_ngcontent-%COMP%] {\n  width: 28vmin;\n  height: 28vmin;\n  border: 1px dashed #63b1d3;\n  position: relative;\n}\n.box[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  border: 1px dashed #63b1d3;\n  transform: scale(1.42);\n}\n\n.spin-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  animation: _ngcontent-%COMP%_spin 12s ease-in-out infinite alternate;\n  position: relative;\n}\n\n.shape[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: border-radius 1s ease-out;\n  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;\n  animation: _ngcontent-%COMP%_morph 8s ease-in-out infinite both alternate;\n  position: absolute;\n  overflow: hidden;\n  z-index: 5;\n}\n\n.bd[_ngcontent-%COMP%] {\n  width: 142%;\n  height: 142%;\n  position: absolute;\n  left: -21%;\n  top: -21%;\n  background: url('bg1.jpg');\n  background-size: 100%;\n  background-position: center center;\n  display: flex;\n  color: #003;\n  font-size: 5vw;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  text-transform: uppercase;\n  animation: _ngcontent-%COMP%_spin 12s ease-in-out infinite alternate-reverse;\n  opacity: 1;\n  z-index: 2;\n}\n\n@keyframes _ngcontent-%COMP%_morph {\n  0% {\n    border-radius: 40% 60% 60% 40%/60% 30% 70% 40%;\n  }\n  100% {\n    border-radius: 40% 60%;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n\n.my_service[_ngcontent-%COMP%] {\n  background-color: black;\n  text-align: center;\n  padding: 0px 200px;\n}\n\n.my_service[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-size: 80px;\n  margin: 0;\n  text-align: center;\n  line-height: 0.9;\n}\n\n.my_service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 24px;\n  font-family: \"Rokkitt\", serif;\n}\n\n.my_service[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #63b1d3 !important;\n}\n\n\n\n.my_skill[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 100px 50px;\n}\n\n.my_skill[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.my_skill[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  padding-bottom: 15px;\n  font-family: \"Rokkitt\", serif;\n}\n\n  .mdc-linear-progress__bar-inner {\n  border-color: #63b1d3 !important;\n}\n\n\n\n.projects[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: black;\n  color: white;\n}\n\n.projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-size: 80px;\n  margin: 0;\n  text-align: center;\n  line-height: 0.9;\n}\n\n\n\n  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%] {\n  color: #63b1d3 !important;\n  border-color: #63b1d3 !important;\n}\n\n  .mdc-tab__ripple::before, .mat-mdc-tab[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mdc-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mdc-tab-link[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #63b1d3 !important;\n  border-color: #63b1d3 !important;\n}\n\n  .mat-mdc-tab .mdc-tab__text-label {\n  color: white !important;\n}\n\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10vmin;\n  overflow: hidden;\n  transform: skew(5deg);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex: 1;\n  transition: all 1s ease-in-out;\n  height: 75vmin;\n  position: relative;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__head[_ngcontent-%COMP%] {\n  color: black;\n  background: #63b1d3;\n  padding: 0.5em;\n  transform: rotate(-90deg);\n  transform-origin: 0% 0%;\n  transition: all 0.5s ease-in-out;\n  min-width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 1em;\n  white-space: nowrap;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  flex-grow: 10;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card__head[_ngcontent-%COMP%] {\n  text-align: center;\n  top: calc(100% - 2em);\n  color: white;\n  background: rgba(0, 0, 0, 0.5);\n  font-size: 2em;\n  transform: rotate(0deg) skew(-5deg);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: all 1s ease-in-out;\n  filter: grayscale(100%);\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:nth-child(5)) {\n  margin-right: 1em;\n}\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white !important;\n}\n\n\n\n.contact[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #404356;\n  margin: 0;\n  margin-bottom: 15px;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #63b1d3;\n  font-weight: 300;\n}\n\n.contact[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #525f7f;\n  line-height: 26px;\n  margin: 0;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  background: black;\n  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.08);\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  margin: 0;\n  margin-bottom: 20px;\n}\n\n.contact[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 25px;\n  font-size: 13px;\n  margin-bottom: 10px;\n  background: #f8f8f9;\n  border: 0;\n  border-radius: 5px;\n}\n\n.contact[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 15px;\n  background: #63b1d3;\n  color: #ffffff;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding: 40px 60px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  background: #63b1d3;\n  background-size: cover;\n  padding: 60px;\n  color: #ffffff;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 30px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #ffffff;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  margin-left: 15px;\n}\n\n.contact[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 30px;\n  color: #ffffff;\n  margin-right: 20px;\n}\n\n.contact[_ngcontent-%COMP%]   .right-hand[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: red;\n  font-style: italic;\n  font-family: \"Rokkitt\", serif;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUFJRjs7QUFEQSwyQkFBQTtBQWtEQSwyQkFBQTtBQUVBLG9CQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBL0NGOztBQWtEQSxxQkFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtBQWhERjs7QUFtREEsY0FBQTtBQUNBO0VBQ0U7SUFFRSx5QkFBQTtFQWpERjtFQW1EQTtJQUNFLHFCQUFBO0VBakRGO0FBQ0Y7QUFvREE7RUFDRTtJQUNFLFVBQUE7RUFsREY7RUFvREE7SUFDRSxXQUFBO0VBbERGO0VBb0RBO0lBQ0UsV0FBQTtFQWxERjtFQW9EQTtJQUNFLFVBQUE7RUFsREY7RUFvREE7SUFDRSxVQUFBO0VBbERGO0FBQ0Y7QUFxREEsYUFBQTtBQUNBO0VBQ0UsdUJBQUE7QUFuREY7O0FBcURBOztFQUVFLFlBQUE7QUFsREY7O0FBb0RBO0VBQ0UsaUJBQUE7QUFqREY7O0FBbURBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQWhERjs7QUFtREE7RUFDRSw0RkFBQTtVQUFBLG9GQUFBO0VBR0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFsREY7O0FBcURBO0VBQ0UsYUFBQTtFQUNBLHFFQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBbERGOztBQXFEQSxRQUFBO0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFuREY7O0FBc0RBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbkRGOztBQXNEQTtFQUNFLHlCQUFBO0FBbkRGOztBQXNEQSxVQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBbkRGOztBQXFEQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWxERjs7QUFxREE7Ozs7Q0FBQTtBQU1BOzs7O0NBQUE7QUFNQTtFQUNFLGdEQUFBO0VBQ0Esc0RBQUE7QUFwREY7O0FBdURBO0VBQ0UsaURBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0FBcERGOztBQXVEQTtFQUNFLGFBQUE7QUFwREY7O0FBdURBOztDQUFBO0FBSUE7RUFDRSx3Q0FBQTtFQUNBLG9DQUFBO0FBckRGOztBQXdEQTs7Q0FBQTtBQUlBOztDQUFBO0FBSUE7RUFDRSx3Q0FBQTtBQXZERjs7QUEwREE7O0NBQUE7QUFJQTtFQUNFLG9EQUFBO0FBeERGOztBQTJEQTs7Q0FBQTtBQUlBO0VBQ0Usb0RBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxtREFBQTtFQUNBLHFDQUFBO0FBekRGOztBQTREQTs7Q0FBQTtBQUlBOztDQUFBO0FBSUE7RUFDRSwwREFBQTtBQTNERjs7QUE4REE7RUFDRSwrQ0FBQTtBQTNERjs7QUE4REE7O0NBQUE7QUFJQTtFQUNFLG1EQUFBO0VBQ0EseUhBQUE7RUFFQSwwR0FBQTtFQUtBLDBEQUFBO0FBakVGOztBQW9FQTs7Q0FBQTtBQUlBO0VBQ0Usa0RBQUE7RUFDQSw0Q0FBQTtBQWxFRjs7QUFxRUE7Ozs7Q0FBQTtBQU1BO0VBQ0UscUNBQUE7RUFDQSw0Q0FBQTtBQW5FRjs7QUFzRUE7O0NBQUE7QUFJQTtFQUNFLHNCQUFBLEVBQUEsTUFBQTtBQXBFRjs7QUF1RUE7RUFDRSwwQ0FBQTtFQUNBLDZDQUFBO0FBcEVGOztBQXVFQTs7OztDQUFBO0FBTUE7RUFDRSxxREFBQTtFQUNBLCtEQUFBO0VBRUEsK0dBQUE7RUFFQSxpQkFBQTtFQUNBLHNCQUFBO0FBdkVGOztBQTBFQTtFQUNFLHdEQUFBO0VBQ0EsNENBQUE7RUFDQSxpREFBQTtFQUNBLG9EQUFBO0FBdkVGOztBQTBFQTtFQUNFLGtCQUFBO0VBQ0EsNkNBQUE7QUF2RUY7O0FBMEVBOztDQUFBO0FBSUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBLEVBQUEsTUFBQTtFQUNBLHVCQUFBLEVBQUEsTUFBQTtBQXhFRjs7QUEyRUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9HQUFBO0FBeEVGOztBQTJFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxvRkFBQTtFQUlBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQTNFRjs7QUErRUE7Ozs7Q0FBQTtBQUtBLEdBQUE7QUFDQTtFQUNFLDRCQUFBO0FBNUVGOztBQStFQTs7OztDQUFBO0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTdFRjs7QUFnRkE7RUFDRSxnQkFBQTtBQTdFRjs7QUFnRkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE3RUY7O0FBZ0ZBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQTdFRjs7QUFnRkE7RUFDRSxrREFBQTtFQUNBLHlDQUFBO0VBQ0EseURBQUE7RUFFQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0VBQUE7VUFBQSx3REFBQTtBQTlFRjs7QUFpRkEsY0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBL0VGO0FBaUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQS9FSjs7QUFtRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7QUFoRkY7O0FBbUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQWhGRjs7QUFtRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQWhGRjs7QUFtRkE7RUFDRTtJQUNFLDhDQUFBO0VBaEZGO0VBa0ZBO0lBQ0Usc0JBQUE7RUFoRkY7QUFDRjtBQW1GQTtFQUNFO0lBQ0Usd0JBQUE7RUFqRkY7QUFDRjtBQW9GQSxjQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFsRkY7O0FBcUZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxGRjs7QUFxRkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQWxGRjs7QUFxRkU7RUFDRSx5QkFBQTtBQWxGSjs7QUFzRkEsWUFBQTtBQUNBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQW5GRjs7QUFxRkE7RUFDRSxZQUFBO0FBbEZGOztBQW9GQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBakZGOztBQW1GQTtFQUNFLGdDQUFBO0FBaEZGOztBQW1GQSxXQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBaEZGOztBQW1GQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFoRkY7O0FBbUZBLG9DQUFBO0FBQ0E7O0VBSUUseUJBQUE7RUFDQSxnQ0FBQTtBQWxGRjs7QUFvRkE7Ozs7RUFJRSxvQ0FBQTtFQUNBLGdDQUFBO0FBakZGOztBQW1GQTtFQUNFLHVCQUFBO0FBaEZGOztBQW1GQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFoRkY7QUFpRkU7RUFDRSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEvRUo7QUFnRkk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTlFTjtBQWlGSTtFQUNFLGFBQUE7QUEvRU47QUFnRk07RUFDRSxvQkFBQTtBQTlFUjtBQWdGTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7QUE5RVI7QUFpRkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQS9FTjtBQWlGSTtFQUNFLGlCQUFBO0FBL0VOO0FBa0ZFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQWhGSjs7QUFxRkEsVUFBQTtBQUVBO0VBQ0UsdUJBQUE7QUFuRkY7O0FBcUZBO0VBQ0UsbUJBQUE7QUFsRkY7O0FBb0ZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQWpGRjs7QUFtRkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFoRkY7O0FBa0ZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQS9FRjs7QUFpRkE7RUFDRSxpQkFBQTtFQUNBLDhDQUFBO0FBOUVGOztBQWdGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUE3RUY7O0FBK0VBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBNUVGOztBQThFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEzRUY7O0FBOEVBO0VBQ0Usa0JBQUE7QUEzRUY7O0FBNkVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBMUVGOztBQTRFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBekVGOztBQTJFQTtFQUNFLG1CQUFBO0FBeEVGOztBQTBFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBdkVGOztBQXlFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0RUY7O0FBd0VBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBckVGOztBQXVFQTtFQUNFLHVCQUFBO0FBcEVGOztBQXVFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBcEVGIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3NDBweDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15X3ZpZGVvIHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuI215VmlkZW8ge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teV9pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNiU7XHJcbiAgbGVmdDogMzUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBKdW1ib3Ryb24gZmlyc3QgdmVyc2lvbiovXHJcblxyXG4vLyAuYmVzaWRle1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuLy8gfVxyXG5cclxuLy8gLmdhbGxlcnkge1xyXG4vLyAgIC0tZzogOHB4OyAgIC8qIHRoZSBnYXAgKi9cclxuLy8gICAtLXM6IDQwMHB4OyAvKiB0aGUgc2l6ZSAqL1xyXG5cclxuLy8gICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG4vLyAuZ2FsbGVyeSA+IGltZyB7XHJcbi8vICAgZ3JpZC1hcmVhOiAxLzE7XHJcbi8vICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgIGFzcGVjdC1yYXRpbzogMTtcclxuLy8gICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tX3gsMCksdmFyKC0tX3ksMCkpO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB6LWluZGV4OiAwO1xyXG4vLyAgIHRyYW5zaXRpb246IC4zcywgei1pbmRleCAwcyAuM3M7XHJcbi8vIH1cclxuLy8gLmdhbGxlcnkgaW1nOmhvdmVyIHtcclxuLy8gICAtLV9pOiAxO1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycywgY2xpcC1wYXRoIC4zcyAuMnMsIHotaW5kZXggMHM7XHJcbi8vIH1cclxuLy8gLmdhbGxlcnk6aG92ZXIgaW1nIHtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xyXG4vLyB9XHJcbi8vIC5nYWxsZXJ5ID4gaW1nOm50aC1jaGlsZCgxKSB7XHJcbi8vICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsY2FsYyg1MCUqdmFyKC0tX2ksMCkpIGNhbGMoMTIwJSp2YXIoLS1faSwwKSksMCBjYWxjKDEwMCUqdmFyKC0tX2ksMCkpLDAgMCwxMDAlIDAsMTAwJSBjYWxjKDEwMCUqdmFyKC0tX2ksMCkpLGNhbGMoMTAwJSAtIDUwJSp2YXIoLS1faSwwKSkgY2FsYygxMjAlKnZhcigtLV9pLDApKSk7XHJcbi8vICAgLS1feTogY2FsYygtMSp2YXIoLS1nKSlcclxuLy8gfVxyXG4vLyAuZ2FsbGVyeSA+IGltZzpudGgtY2hpbGQoMikge1xyXG4vLyAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLGNhbGMoMTAwJSAtIDEyMCUqdmFyKC0tX2ksMCkpIGNhbGMoNTAlKnZhcigtLV9pLDApKSxjYWxjKDEwMCUgLSAxMDAlKnZhcigtLV9pLDApKSAwLDEwMCUgMCwxMDAlIDEwMCUsY2FsYygxMDAlIC0gMTAwJSp2YXIoLS1faSwwKSkgMTAwJSxjYWxjKDEwMCUgLSAxMjAlKnZhcigtLV9pLDApKSBjYWxjKDEwMCUgLSA1MCUqdmFyKC0tX2ksMCkpKTtcclxuLy8gICAtLV94OiB2YXIoLS1nKVxyXG4vLyB9XHJcbi8vIC5nYWxsZXJ5ID4gaW1nOm50aC1jaGlsZCgzKSB7XHJcbi8vICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsY2FsYygxMDAlIC0gNTAlKnZhcigtLV9pLDApKSBjYWxjKDEwMCUgLSAxMjAlKnZhcigtLV9pLDApKSwxMDAlIGNhbGMoMTAwJSAtIDEyMCUqdmFyKC0tX2ksMCkpLDEwMCUgMTAwJSwwIDEwMCUsMCBjYWxjKDEwMCUgLSAxMDAlKnZhcigtLV9pLDApKSxjYWxjKDUwJSp2YXIoLS1faSwwKSkgY2FsYygxMDAlIC0gMTIwJSp2YXIoLS1faSwwKSkpO1xyXG4vLyAgIC0tX3k6IHZhcigtLWcpXHJcbi8vIH1cclxuLy8gLmdhbGxlcnkgPiBpbWc6bnRoLWNoaWxkKDQpIHtcclxuLy8gICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSxjYWxjKDEyMCUqdmFyKC0tX2ksMCkpIGNhbGMoNTAlKnZhcigtLV9pLDApKSxjYWxjKDEwMCUqdmFyKC0tX2ksMCkpIDAsMCAwLDAgMTAwJSxjYWxjKDEwMCUqdmFyKC0tX2ksMCkpIDEwMCUsY2FsYygxMjAlKnZhcigtLV9pLDApKSBjYWxjKDEwMCUgLSA1MCUqdmFyKC0tX2ksMCkpKTtcclxuLy8gICAtLV94OiBjYWxjKC0xKnZhcigtLWcpKVxyXG4vLyB9XHJcblxyXG4vKiBKdW1ib3Ryb24gZmlyc3QgdmVyc2lvbiovXHJcblxyXG4vKkZpcnN0IFR5cGV3cml0dGVyKi9cclxuXHJcbi5teV90ZXh0IGgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJnZXR0ZVwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4vKlNlY29uZCBUeXBld3JpdHRlciovXHJcblxyXG4udHlwZS13cml0dGVyIHtcclxuICBjb2xvcjogIzYzYjFkMztcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJva2tpdHRcIiwgc2VyaWY7XHJcbiAgLyogQmxpbmtpbmcgY3Vyc29yICAgKi9cclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjNjNiMWQzO1xyXG4gIC8qIEFuaW1hdGlvbiAgICovXHJcbiAgYW5pbWF0aW9uOiB0eXBpc3QgMTVzIHN0ZXBzKDMyKSBpbmZpbml0ZSwgY2FyZXQgMC4xNXMgaW5maW5pdGUgc3RlcC1lbmQ7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGNhcmV0IHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2M2IxZDM7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGlzdCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDBjaDtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHdpZHRoOiAzMmNoO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgd2lkdGg6IDMyY2g7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB3aWR0aDogMGNoO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAwY2g7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBYm91dCBJbWcqL1xyXG4uYWJvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5teV9pbmZvciBoMixcclxuc3BhbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5teV9pbmZvciBzcGFuIHtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxufVxyXG4ubXlfaW5mb3IgcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5ncmlkIGltZyB7XHJcbiAgbWFzazogdXJsKGh0dHBzOi8vYXNzZXRzLmNvZGVwZW4uaW8vMTEwMTgyMi9jaXJjbGVzLW1hc2std2hvbGUuc3ZnKSBuby1yZXBlYXRcclxuICAgIGNlbnRlcjtcclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFzcGVjdC1yYXRpbzogMTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oMTAwJSwgMzBjaCksIDFmcikpO1xyXG4gIGdhcDogNXZtYXg7XHJcbiAgd2lkdGg6IG1pbig2MGNoLCAxMDAlKTtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi8qVGl0bGUqL1xyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBjb2xvcjogIzYzYjFkMztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnRpdGxlIGgyIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMC45O1xyXG59XHJcblxyXG4ucm90YXRlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4vKkhpc3RvcnkqL1xyXG4uaGlzdG9yeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5oaXN0b3J5IC50aXRsZSB7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiEhISFcclxuVGhpcyBwZW4gaXMgYmVpbmcgcmVmYWN0b3JlZFxyXG4hISEhXHJcbiovXHJcblxyXG4vKlxyXG49PT09PVxyXG5ERVBFTkRFTkNFU1xyXG49PT09PVxyXG4qL1xyXG5cclxuLnItdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXJUaXRsZU1hcmdpblRvcCwgMCkgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1yVGl0bGVNYXJnaW5Cb3R0b20sIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnA6bm90KFtjbGFzc10pIHtcclxuICBsaW5lLWhlaWdodDogdmFyKC0tY3NzVHlwb2dyYXBoeUxpbmVIZWlnaHQsIDEuNzgpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWNzc1R5cG9ncmFwaHlCYXNpY01hcmdpbiwgMWVtKTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5wOm5vdChbY2xhc3NdKTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLypcclxudGV4dCBjb21wb25lbnRcclxuKi9cclxuXHJcbi50ZXh0IHtcclxuICBkaXNwbGF5OiB2YXIoLS10ZXh0RGlzcGxheSwgaW5saW5lLWZsZXgpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZvbnRTaXplLCAxcmVtKTtcclxufVxyXG5cclxuLypcclxudGltZSBjb21wb25lbnRcclxuKi9cclxuXHJcbi8qXHJcbmNvcmUgc3R5bGVzXHJcbiovXHJcblxyXG4udGltZSB7XHJcbiAgZGlzcGxheTogdmFyKC0tdGltZURpc3BsYXksIGlubGluZS1mbGV4KTtcclxufVxyXG5cclxuLypcclxuZXh0ZW5zaW9uc1xyXG4qL1xyXG5cclxuLnRpbWVfX21vbnRoIHtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tdGltZWxpbmVNb3VudGhNYXJnaW5MZWZ0LCAwLjI1ZW0pO1xyXG59XHJcblxyXG4vKlxyXG5za2luXHJcbiovXHJcblxyXG4udGltZSB7XHJcbiAgcGFkZGluZzogdmFyKC0tdGltZVBhZGRpbmcsIDAuMjVyZW0gMS4yNXJlbSAwLjI1cmVtKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMWQzO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGltZUZvbnRTaXplLCAwLjc1cmVtKTtcclxuICBmb250LXdlaWdodDogdmFyKC0tdGltZUZvbnRXZWlnaHQsIDcwMCk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHZhcigtLXRpbWVUZXh0VHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xyXG4gIGNvbG9yOiB2YXIoLS10aW1lQ29sb3IsIGN1cnJlbnRDb2xvcik7XHJcbn1cclxuXHJcbi8qXHJcbmNhcmQgY29tcG9uZW50XHJcbiovXHJcblxyXG4vKlxyXG5jb3JlIHN0eWxlc1xyXG4qL1xyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXRpbWVsaW5lQ2FyZFBhZGRpbmcsIDEuNXJlbSAxLjVyZW0gMS4yNXJlbSk7XHJcbn1cclxuXHJcbi5jYXJkX19jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1jYXJkQ29udGVudE1hcmdpblRvcCwgMC41cmVtKTtcclxufVxyXG5cclxuLypcclxuc2tpblxyXG4qL1xyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRpbWVsaW5lQ2FyZEJvcmRlclJhZGl1cywgMnB4KTtcclxuICBib3JkZXItbGVmdDogdmFyKC0tdGltZWxpbmVDYXJkQm9yZGVyTGVmdFdpZHRoLCAzcHgpIHNvbGlkXHJcbiAgICB2YXIoLS10aW1lbGluZUNhcmRCb3JkZXJMZWZ0Q29sb3IsIHZhcigtLXVpVGltZWxpbmVNYWluQ29sb3IpKTtcclxuICBib3gtc2hhZG93OiB2YXIoXHJcbiAgICAtLXRpbWVsaW5lQ2FyZEJveFNoYWRvdyxcclxuICAgIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXHJcbiAgICAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aW1lbGluZUNhcmRCYWNrZ3JvdW5kQ29sb3IsICNmZmYpO1xyXG59XHJcblxyXG4vKlxyXG5leHRlbnNpb25zXHJcbiovXHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIC0tclRpdGxlTWFyZ2luVG9wOiB2YXIoLS1jYXJkVGl0bGVNYXJnaW5Ub3AsIDFyZW0pO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZFRpdGxlRm9udFNpemUsIDEuMjVyZW0pO1xyXG59XHJcblxyXG4vKlxyXG49PT09PVxyXG5DT1JFIFNUWUxFU1xyXG49PT09PVxyXG4qL1xyXG5cclxuLnRpbWVsaW5lIHtcclxuICBkaXNwbGF5OiB2YXIoLS10aW1lbGluZURpc3BsYXksIGdyaWQpO1xyXG4gIGdyaWQtcm93LWdhcDogdmFyKC0tdGltZWxpbmVHcm91cHNHYXAsIDJyZW0pO1xyXG59XHJcblxyXG4vKlxyXG4xLiBJZiB0aW1lbGluZV9feWVhciBpc24ndCBkaXNwbGFlZCB0aGUgZ2FwIGJldHdlZW4gaXQgYW5kIHRpbWVsaW5lX19jYXJkcyBpc24ndCBkaXNwbGF5ZWQgdG9vXHJcbiovXHJcblxyXG4udGltZWxpbmVfX3llYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07IC8qIDEgKi9cclxufVxyXG5cclxuLnRpbWVsaW5lX19jYXJkcyB7XHJcbiAgZGlzcGxheTogdmFyKC0tdGltZWxvbmVDYXJkc0Rpc3BsYXksIGdyaWQpO1xyXG4gIGdyaWQtcm93LWdhcDogdmFyKC0tdGltZWxvbmVDYXJkc0dhcCwgMS41cmVtKTtcclxufVxyXG5cclxuLypcclxuPT09PT1cclxuU0tJTlxyXG49PT09PVxyXG4qL1xyXG5cclxuLnRpbWVsaW5lIHtcclxuICAtLXVpVGltZWxpbmVNYWluQ29sb3I6IHZhcigtLXRpbWVsaW5lTWFpbkNvbG9yLCAjMjIyKTtcclxuICAtLXVpVGltZWxpbmVTZWNvbmRhcnlDb2xvcjogdmFyKC0tdGltZWxpbmVTZWNvbmRhcnlDb2xvciwgI2ZmZik7XHJcblxyXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS10aW1lbGluZUxpbmVXaWR0aCwgM3B4KSBzb2xpZFxyXG4gICAgdmFyKC0tdGltZWxpbmVMaW5lQmFja2dyb3VuZENvbG9yLCB2YXIoLS11aVRpbWVsaW5lTWFpbkNvbG9yKSk7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lX195ZWFyIHtcclxuICAtLXRpbWVQYWRkaW5nOiB2YXIoLS10aW1lbGluZVllYXJQYWRkaW5nLCAwLjVyZW0gMS41cmVtKTtcclxuICAtLXRpbWVDb2xvcjogdmFyKC0tdWlUaW1lbGluZVNlY29uZGFyeUNvbG9yKTtcclxuICAtLXRpbWVCYWNrZ3JvdW5kQ29sb3I6IHZhcigtLXVpVGltZWxpbmVNYWluQ29sb3IpO1xyXG4gIC0tdGltZUZvbnRXZWlnaHQ6IHZhcigtLXRpbWVsaW5lWWVhckZvbnRXZWlnaHQsIDQwMCk7XHJcbn1cclxuXHJcbi50aW1lbGluZV9fY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS10aW1lbGluZUNhcmRMaW5lR2FwLCAxcmVtKTtcclxufVxyXG5cclxuLypcclxuMS4gU3RvcGluZyBjdXQgYm94IHNoYWRvd1xyXG4qL1xyXG5cclxuLnRpbWVsaW5lX19jYXJkcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTsgLyogMSAqL1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtOyAvKiAxICovXHJcblxyXG59XHJcbi50aW1lbGluZV9fY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjNiMWQzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZV9fY2FyZDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogdmFyKC0tdGltZWxpbmVDYXJkTGluZVdpZHRoLCAycHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcihcclxuICAgIC0tdGltZWxpbmVDYXJkTGluZUJhY2tncm91bmRDb2xvcixcclxuICAgIHZhcigtLXVpVGltZWxpbmVNYWluQ29sb3IpXHJcbiAgKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiB2YXIoLS10aW1lbGluZUNhcmRMaW5lVG9wLCAxcmVtKTtcclxuICBsZWZ0OiAtNTAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5cclxuLypcclxuPT09PT1cclxuU0VUVElOR1NcclxuPT09PT1cclxuKi9cclxuLyoqL1xyXG4udGltZWxpbmUge1xyXG4gIC0tdGltZWxpbmVNYWluQ29sb3I6ICM2M2IxZDM7XHJcbn1cclxuXHJcbi8qXHJcbj09PT09XHJcbkRFTU9cclxuPT09PT1cclxuKi9cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5wOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICBwYWRkaW5nOiAwcHggODBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdWJzdGFjayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG5cclxuLnItbGluayB7XHJcbiAgLS11aXJMaW5rRGlzcGxheTogdmFyKC0tckxpbmtEaXNwbGF5LCBpbmxpbmUtZmxleCk7XHJcbiAgLS11aXJMaW5rVGV4dENvbG9yOiB2YXIoLS1yTGlua1RleHRDb2xvcik7XHJcbiAgLS11aXJMaW5rVGV4dERlY29yYXRpb246IHZhcigtLXJMaW5rVGV4dERlY29yYXRpb24sIG5vbmUpO1xyXG5cclxuICBkaXNwbGF5OiB2YXIoLS11aXJMaW5rRGlzcGxheSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdWlyTGlua1RleHRDb2xvcikgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLXVpckxpbmtUZXh0RGVjb3JhdGlvbikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTmV3IGhlYWRlciovXHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogMjh2bWluO1xyXG4gIGhlaWdodDogMjh2bWluO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNjNiMWQzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzYzYjFkMztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40Mik7XHJcbiAgfVxyXG59XHJcblxyXG4uc3Bpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbmltYXRpb246IHNwaW4gMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaGFwZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMXMgZWFzZS1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNjAlIDQwJSAzMCUgNzAlIC8gNjAlIDMwJSA3MCUgNDAlO1xyXG4gIGFuaW1hdGlvbjogbW9ycGggOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBhbHRlcm5hdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmJkIHtcclxuICB3aWR0aDogMTQyJTtcclxuICBoZWlnaHQ6IDE0MiU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0yMSU7XHJcbiAgdG9wOiAtMjElO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICMwMDM7XHJcbiAgZm9udC1zaXplOiA1dnc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBhbmltYXRpb246IHNwaW4gMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3JwaCB7XHJcbiAgMCUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDYwJSA2MCUgNDAlIC8gNjAlIDMwJSA3MCUgNDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcclxuICB9XHJcbn1cclxuXHJcbi8qTXkgU2VydmljZXMqL1xyXG4ubXlfc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBweCAyMDBweDtcclxufVxyXG5cclxuLm15X3NlcnZpY2UgaDEge1xyXG4gIGNvbG9yOiAjNjNiMWQzO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbn1cclxuXHJcbi5teV9zZXJ2aWNlIGgzIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ra2l0dFwiLCBzZXJpZjtcclxufVxyXG4ubXlfc2VydmljZSAuc2VydmljZTpob3ZlciB7XHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICM2M2IxZDMgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qTXkgU2tpbGxzKi9cclxuLm15X3NraWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xyXG59XHJcbi5teV9za2lsbCAudGl0bGUge1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG4ubXlfc2tpbGwgbGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJSb2traXR0XCIsIHNlcmlmO1xyXG59XHJcbjo6bmctZGVlcCAubWRjLWxpbmVhci1wcm9ncmVzc19fYmFyLWlubmVyIHtcclxuICBib3JkZXItY29sb3I6ICM2M2IxZDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLypQcm9qZWN0cyovXHJcbi5wcm9qZWN0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdHMgaDEge1xyXG4gIGNvbG9yOiAjNjNiMWQzO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbn1cclxuXHJcbi8qIFN0eWxlcyBmb3IgdGhlIGFjdGl2ZSB0YWIgbGFiZWwgKi9cclxuOjpuZy1kZWVwIC5tYXQtbWRjLXRhYjpub3QoLm1hdC1tZGMtdGFiLWRpc2FibGVkKS5tZGMtdGFiLS1hY3RpdmVcclxuICAubWRjLXRhYl9fdGV4dC1sYWJlbCxcclxuLm1hdC1tZGMtdGFiLWxpbms6bm90KC5tYXQtbWRjLXRhYi1kaXNhYmxlZCkubWRjLXRhYi0tYWN0aXZlXHJcbiAgLm1kYy10YWJfX3RleHQtbGFiZWwge1xyXG4gIGNvbG9yOiAjNjNiMWQzICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjNiMWQzICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tZGMtdGFiX19yaXBwbGU6OmJlZm9yZSxcclxuLm1hdC1tZGMtdGFiIC5tYXQtcmlwcGxlLWVsZW1lbnQsXHJcbi5tYXQtbWRjLXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXJpcHBsZS1lbGVtZW50LFxyXG4ubWF0LW1kYy10YWItbGluayAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMWQzICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjNiMWQzICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtbWRjLXRhYiAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyAuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHZtaW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2Zvcm06IHNrZXcoNWRlZyk7XHJcbiAgLmNhcmQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgIGhlaWdodDogNzV2bWluO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNhcmRfX2hlYWQge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2M2IxZDM7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTA7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmRfX2hlYWQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDJlbSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBza2V3KC01ZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAmOm5vdCg6bnRoLWNoaWxkKDUpKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qQ29udGFjdCovXHJcblxyXG4uY29udGFjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvbnRhY3QgLmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNvbnRhY3QgLmhlYWRpbmcgaDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNDA0MzU2O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jb250YWN0IC5oZWFkaW5nIGgyIHNwYW4ge1xyXG4gIGNvbG9yOiAjNjNiMWQzO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLmNvbnRhY3QgLmhlYWRpbmcgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM1MjVmN2Y7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWN0IC5tYWluIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMDgpO1xyXG59XHJcbi5jb250YWN0IC5tYWluIGgzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmNvbnRhY3QgLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY5O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbnRhY3QgYnV0dG9uLmJ0biB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM2M2IxZDM7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb250YWN0IC5tYWluIC5sZWZ0IHtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbn1cclxuLmNvbnRhY3QgLm1haW4gLnJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kOiM2M2IxZDM7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiA2MHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb250YWN0IC5tYWluIC5yaWdodCBoNCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uY29udGFjdCAubWFpbiAucmlnaHQgLmluZm8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLmNvbnRhY3QgLm1haW4gLnJpZ2h0IC5pbmZvIGkge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdCAubWFpbiAucmlnaHQgLmluZm8gc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbnRhY3QgLm1haW4gLnJpZ2h0IC5zb2NpYWwgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmNvbnRhY3QgLnJpZ2h0LWhhbmR7XHJcbiAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQgcHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LWZhbWlseTogXCJSb2traXR0XCIsIHNlcmlmO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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