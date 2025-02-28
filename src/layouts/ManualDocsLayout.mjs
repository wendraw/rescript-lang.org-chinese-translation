// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Url from "../common/Url.mjs";
import * as Next from "../bindings/Next.mjs";
import * as React from "react";
import * as Markdown from "../components/Markdown.mjs";
import * as Constants from "../common/Constants.mjs";
import * as DocsLayout from "./DocsLayout.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

var tocData = (require('index_data/manual_latest_toc.json'));

var LatestLayout = DocsLayout.Make({
      tocData: tocData
    });

var tocData$1 = (require('index_data/manual_latest_toc_cn.json'));

var LatestCnLayout = DocsLayout.Make({
      tocData: tocData$1
    });

var tocData$2 = (require('index_data/manual_v800_toc.json'));

var V800Layout = DocsLayout.Make({
      tocData: tocData$2
    });

var tocData$3 = (require('index_data/manual_v900_toc.json'));

var V900Layout = DocsLayout.Make({
      tocData: tocData$3
    });

function ManualDocsLayout$Latest(Props) {
  var langOpt = Props.lang;
  var frontmatter = Props.frontmatter;
  var componentsOpt = Props.components;
  var children = Props.children;
  var lang = langOpt !== undefined ? langOpt : /* English */0;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var router = Next.Router.useRouter(undefined);
  var route = router.route;
  var url = Url.parse(route);
  var version = url.version;
  var version$1 = typeof version === "number" ? "latest" : version._0;
  var breadcrumbs_0 = {
    name: "Docs",
    href: "/docs/" + version$1
  };
  var breadcrumbs_1 = {
    hd: {
      name: "Language Manual",
      href: "/docs/manual/" + (version$1 + "/introduction")
    },
    tl: /* [] */0
  };
  var breadcrumbs = {
    hd: breadcrumbs_0,
    tl: breadcrumbs_1
  };
  var title = "Language Manual";
  var version$2 = "latest";
  if (lang) {
    var tmp = {
      breadcrumbs: breadcrumbs,
      title: title,
      metaTitleCategory: "ReScript Language Manual",
      version: version$2,
      availableVersions: Constants.allManualVersions,
      components: components,
      theme: "Reason",
      children: children
    };
    if (frontmatter !== undefined) {
      tmp.frontmatter = Caml_option.valFromOption(frontmatter);
    }
    return React.createElement(LatestCnLayout.make, tmp);
  }
  var tmp$1 = {
    breadcrumbs: breadcrumbs,
    title: title,
    metaTitleCategory: "ReScript Language Manual",
    version: version$2,
    availableVersions: Constants.allManualVersions,
    components: components,
    theme: "Reason",
    children: children
  };
  if (frontmatter !== undefined) {
    tmp$1.frontmatter = Caml_option.valFromOption(frontmatter);
  }
  return React.createElement(LatestLayout.make, tmp$1);
}

var Latest = {
  make: ManualDocsLayout$Latest
};

function ManualDocsLayout$V900(Props) {
  var frontmatter = Props.frontmatter;
  var componentsOpt = Props.components;
  var children = Props.children;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var router = Next.Router.useRouter(undefined);
  var route = router.route;
  var url = Url.parse(route);
  var version = url.version;
  var version$1 = typeof version === "number" ? "latest" : version._0;
  var breadcrumbs_0 = {
    name: "Docs",
    href: "/docs/" + version$1
  };
  var breadcrumbs_1 = {
    hd: {
      name: "Language Manual",
      href: "/docs/manual/" + (version$1 + "/introduction")
    },
    tl: /* [] */0
  };
  var breadcrumbs = {
    hd: breadcrumbs_0,
    tl: breadcrumbs_1
  };
  var tmp = {
    breadcrumbs: breadcrumbs,
    title: "Language Manual",
    metaTitleCategory: "ReScript Language Manual",
    version: version$1,
    availableVersions: Constants.allManualVersions,
    components: components,
    theme: "Reason",
    children: children
  };
  if (frontmatter !== undefined) {
    tmp.frontmatter = Caml_option.valFromOption(frontmatter);
  }
  return React.createElement(V900Layout.make, tmp);
}

var V900 = {
  make: ManualDocsLayout$V900
};

function ManualDocsLayout$V800(Props) {
  var frontmatter = Props.frontmatter;
  var componentsOpt = Props.components;
  var children = Props.children;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var router = Next.Router.useRouter(undefined);
  var route = router.route;
  var url = Url.parse(route);
  var version = url.version;
  var version$1 = typeof version === "number" ? "latest" : version._0;
  var breadcrumbs_0 = {
    name: "Docs",
    href: "/docs/" + version$1
  };
  var breadcrumbs_1 = {
    hd: {
      name: "Language Manual",
      href: "/docs/manual/" + (version$1 + "/introduction")
    },
    tl: /* [] */0
  };
  var breadcrumbs = {
    hd: breadcrumbs_0,
    tl: breadcrumbs_1
  };
  var version$2 = "v8.0.0";
  var latestUrl = "/" + (url.base.join("/") + ("/latest/" + url.pagepath.join("/")));
  var match = Constants.allManualVersions.find(function (param) {
        return param[0] === version$2;
      });
  var label = match !== undefined ? match[1] : version$2;
  var additionalText;
  additionalText = "(These docs are equivalent to the old BuckleScript docs before the ReScript rebrand)";
  var warnBanner = React.createElement("div", {
        className: "mb-10"
      }, React.createElement(Markdown.Info.make, {
            children: React.createElement(Markdown.P.make, {
                  children: null
                }, "You are currently looking at the " + (label + " docs (Reason v3.6 syntax edition). You can find the latest manual page "), React.createElement(Markdown.A.make, {
                      href: latestUrl,
                      children: "here"
                    }), ".", React.createElement("p", {
                      className: "text-14 mt-2"
                    }, additionalText))
          }));
  var tmp = {
    breadcrumbs: breadcrumbs,
    title: "Language Manual",
    metaTitleCategory: "ReScript Language Manual",
    version: version$2,
    availableVersions: Constants.allManualVersions,
    components: components,
    theme: "Reason",
    children: null
  };
  if (frontmatter !== undefined) {
    tmp.frontmatter = Caml_option.valFromOption(frontmatter);
  }
  return React.createElement(V800Layout.make, tmp, warnBanner, children);
}

var V800 = {
  make: ManualDocsLayout$V800
};

export {
  LatestLayout ,
  LatestCnLayout ,
  V800Layout ,
  V900Layout ,
  Latest ,
  V900 ,
  V800 ,
}
/* LatestLayout Not a pure module */
