// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Url from "../common/Url.mjs";
import * as Next from "../bindings/Next.mjs";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Markdown from "../components/Markdown.mjs";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as ApiMarkdown from "../components/ApiMarkdown.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as SidebarLayout from "./SidebarLayout.mjs";
import * as VersionSelect from "../components/VersionSelect.mjs";

var allApiVersions = [
  [
    "latest",
    "v8.2.0"
  ],
  [
    "v8.0.0",
    "< v8.2.0"
  ]
];

function ApiLayout$OldDocsWarning(Props) {
  var version = Props.version;
  var route = Props.route;
  var url = Url.parse(route);
  var latestUrl = "/" + (url.base.join("/") + ("/latest/" + url.pagepath.join("/")));
  var match = allApiVersions.find(function (param) {
        return param[0] === version;
      });
  var label = match !== undefined ? match[1] : version;
  var additionalText = version === "v8.0.0" ? "(These docs cover all versions between v3 to v8 and are equivalent to the old BuckleScript docs before the rebrand)" : "";
  return React.createElement("div", {
              className: "mb-10"
            }, React.createElement(Markdown.Info.make, {
                  children: React.createElement(Markdown.P.make, {
                        children: null
                      }, "You are currently looking at the " + (label + " docs (Reason v3.6 syntax edition). You can find the latest API docs "), React.createElement(Markdown.A.make, {
                            href: latestUrl,
                            children: "here"
                          }), ".", React.createElement("p", {
                            className: "text-14 mt-2"
                          }, additionalText))
                }));
}

var OldDocsWarning = {
  make: ApiLayout$OldDocsWarning
};

function makeBreadcrumbs(prefix, route) {
  var url = Url.parse(route);
  var match = Belt_Array.reduce(url.pagepath.slice(1), [
        prefix.href,
        []
      ], (function (acc, path) {
          var ret = acc[1];
          var href = acc[0] + ("/" + path);
          ret.push({
                name: Url.prettyString(path),
                href: href
              });
          return [
                  href,
                  ret
                ];
        }));
  return Belt_List.fromArray(Belt_Array.concat([prefix], match[1]));
}

function ApiLayout(Props) {
  var breadcrumbs = Props.breadcrumbs;
  var categories = Props.categories;
  var titleOpt = Props.title;
  var version = Props.version;
  var activeToc = Props.activeToc;
  var componentsOpt = Props.components;
  var children = Props.children;
  var title = titleOpt !== undefined ? titleOpt : "";
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : ApiMarkdown.$$default;
  var router = Next.Router.useRouter(undefined);
  var route = router.route;
  var match = React.useState(function () {
        return false;
      });
  var setSidebarOpen = match[1];
  var isSidebarOpen = match[0];
  var toggleSidebar = function (param) {
    Curry._1(setSidebarOpen, (function (prev) {
            return !prev;
          }));
  };
  React.useEffect((function () {
          var events = router.events;
          var onChangeComplete = function (_url) {
            Curry._1(setSidebarOpen, (function (param) {
                    return false;
                  }));
          };
          Curry._2(Next.Router.Events.on, events, {
                NAME: "routeChangeComplete",
                VAL: onChangeComplete
              });
          Curry._2(Next.Router.Events.on, events, {
                NAME: "hashChangeComplete",
                VAL: onChangeComplete
              });
          return (function (param) {
                    Curry._2(Next.Router.Events.off, events, {
                          NAME: "routeChangeComplete",
                          VAL: onChangeComplete
                        });
                    Curry._2(Next.Router.Events.off, events, {
                          NAME: "hashChangeComplete",
                          VAL: onChangeComplete
                        });
                  });
        }), []);
  var tmp;
  if (version !== undefined) {
    var onChange = function (evt) {
      evt.preventDefault();
      var version = evt.target.value;
      var url = Url.parse(route);
      var targetUrl = "/" + (url.base.join("/") + ("/" + (version + ("/" + url.pagepath.join("/")))));
      Next.Router.push(router, targetUrl);
    };
    tmp = React.createElement(VersionSelect.make, {
          onChange: onChange,
          version: version,
          availableVersions: allApiVersions
        });
  } else {
    tmp = null;
  }
  var preludeSection = React.createElement("div", {
        className: "flex justify-between text-fire font-medium items-baseline"
      }, title, tmp);
  var tmp$1 = {
    categories: categories,
    route: route,
    preludeSection: preludeSection,
    isOpen: isSidebarOpen,
    toggle: toggleSidebar
  };
  if (activeToc !== undefined) {
    tmp$1.activeToc = Caml_option.valFromOption(activeToc);
  }
  var sidebar = React.createElement(SidebarLayout.Sidebar.make, tmp$1);
  var pageTitle;
  if (breadcrumbs !== undefined && breadcrumbs) {
    var match$1 = breadcrumbs.tl;
    if (match$1) {
      var match$2 = match$1.tl;
      var module_ = match$1.hd;
      pageTitle = match$2 ? (
          match$2.tl ? "API" : module_.name + ("." + match$2.hd.name)
        ) : module_.name;
    } else {
      pageTitle = "API";
    }
  } else {
    pageTitle = "API";
  }
  var tmp$2 = {
    metaTitle: pageTitle + " | ReScript API",
    theme: "Reason",
    components: components,
    sidebarState: [
      isSidebarOpen,
      setSidebarOpen
    ],
    sidebar: sidebar,
    children: children
  };
  if (breadcrumbs !== undefined) {
    tmp$2.breadcrumbs = Caml_option.valFromOption(breadcrumbs);
  }
  return React.createElement(SidebarLayout.make, tmp$2);
}

var make = ApiLayout;

export {
  OldDocsWarning ,
  makeBreadcrumbs ,
  make ,
}
/* Next Not a pure module */
