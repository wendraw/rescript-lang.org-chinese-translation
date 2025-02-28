let numeric = [
  (1, "Suspicious-looking start-of-comment mark."),
  (2, "Suspicious-looking end-of-comment mark."),
  (3, "Deprecated feature."),
  (
    4,
    "Fragile pattern matching: matching that will remain complete even if additional constructors are added to one of the variant types matched.",
  ),
  (5, "Partially applied function: expression whose result has function type and is ignored."),
  (6, "Label omitted in function application."),
  (8, "Partial match: missing cases in pattern-matching."),
  (9, "Missing fields in a record pattern."),
  (
    10,
    "Expression on the left-hand side of a sequence that doesn't have type \"unit\" (and that is not a function, see warning number 5).",
  ),
  (11, "Redundant case in a pattern matching (unused match case)."),
  (12, "Redundant sub-pattern in a pattern-matching."),
  (14, "Illegal backslash escape in a string constant."),
  (16, "Unerasable optional argument."),
  (20, "Unused function argument."),
  (21, "Non-returning statement."),
  (23, "Useless record \"with\" clause."),
  (24, "Bad module name: the source file name is not a valid ReScript module name."),
  (
    26,
    "Suspicious unused variable: unused variable that is bound with \"let\" or \"as\", and doesn't start with an underscore (\"_\") character.",
  ),
  (
    27,
    "Innocuous unused variable: unused variable that is not bound with \"let\" nor \"as\", and doesn't start with an underscore (\"_\") character.",
  ),
  (28, "Wildcard pattern given as argument to a constant constructor."),
  (29, "Unescaped end-of-line in a string constant (non-portable code)."),
  (30, "Two labels or constructors of the same name are defined in two mutually recursive types."),
  (32, "Unused value declaration."),
  (33, "Unused open statement."),
  (34, "Unused type declaration."),
  (35, "Unused for-loop index."),
  (36, "Unused ancestor variable."),
  (37, "Unused constructor."),
  (38, "Unused extension constructor."),
  (39, "Unused rec flag."),
  (43, "Nonoptional label applied as optional."),
  (44, "Open statement shadows an already defined identifier."),
  (45, "Open statement shadows an already defined label or constructor."),
  (46, "Error in environment variable."),
  (47, "Illegal attribute payload."),
  (48, "Implicit elimination of optional arguments."),
  (49, "Absent cmi file when looking up module alias."),
  (50, "Unexpected documentation comment."),
  (52, "Fragile constant pattern."),
  (53, "Attribute cannot appear in this context"),
  (54, "Attribute used more than once on an expression"),
  (56, "Unreachable case in a pattern-matching (based on type information)."),
  (57, "Ambiguous or-pattern variables under guard"),
  (59, "Assignment to non-mutable value"),
  (60, "Unused module declaration"),
  (61, "Unboxable type in primitive declaration"),
  (62, "Type constraint on GADT type declaration"),
  (101, "Unused bs attributes"),
  (102, "Polymorphic comparison introduced (maybe unsafe)"),
  (103, "Fragile FFI definitions"),
  (104, "bs.deriving warning with customized message "),
  (
    105,
    "External name is inferred from val name is unsafe from refactoring when changing value name",
  ),
  (106, "Unimplemented primitive used:"),
  (107, "Integer literal exceeds the range of representable integers of type int"),
  (108, "Uninterpreted delimiters (for unicode)"),
  (109, "Toplevel expression has unit type"),
]

let numericCn = [
  (1, "看起来很可疑的注释开启标记。"),
  (2, "看起来很可疑的注释结尾标记。"),
  (3, "已被废弃的特性"),
  (
    4,
    "脆弱的模式匹配：即使在匹配的某个变体类型上增加了额外的构造函数，匹配仍然完整。",
  ),
  (5, "部分应用的函数：表达式的类型为函数且被忽略了。  "),
  (6, "函数调用时省略忽略了标签"),
  (8, "部分匹配：部分模式未被匹配到"),
  (9, "记录模式中有未被匹配到的字段"),
  (
    10,
    "序列左侧的表达式的类型不为\"unit\"（也不为函数，请看5号警告）",
  ),
  (11, "模式匹配中有冗余的分支（不会被用到的分支）"),
  (12, "模式匹配中有冗余的子模式"),
  (14, "字符串常量中有非法的转义字符"),
  (16, "不可擦除的可选参数。"),
  (20, "未被使用的函数参数"),
  (21, "不会返回的语句"),
  (23, "记录存在没有用到的“with”。"),
  (24, "不良的模块名：源代码的文件名不是有效的 ReScript 模块名。"),
  (
    26,
    "可疑的未使用变量：未使用的变量，与 \"let\" 或 \"as\" 绑定，并且不以下划线 (\"_\") 字符开头。",
  ),
  (
    27,
    "无害的未使用变量：未与 \"let\" 或 \"as\" 绑定的未使用变量，并且不以下划线 (\"_\") 字符开头。",
  ),
  (28, "通配符模式作为常量构造函数的参数给出。"),
  (29, "字符串常量中未转义的换行符（不可移植代码）。"),
  (30, "在两个相互递归的类型中定义了两个同名的标签或构造函数。"),
  (32, "未被使用的值声明。"),
  (33, "未被使用的 open 语句。"),
  (34, "未被使用的类型声明。"),
  (35, "未被使用的 for 循环下标"),
  (37, "未被使用的构造器。"),
  (38, "未被使用的扩展构造器"),
  (39, "未被使用的 rec 标记"),
  (43, "非可选标签作为可选标签应用。"),
  (44, "Open 语句了隐藏已定义的标识符。"),
  (45, "Open 语句隐藏已定义的标签或构造函数。"),
  (46, "环境变量错误。"),
  (47, "非法属性装载（payload）。"),
  (48, "可选参数被隐式消除。"),
  (49, "查找模块别名时缺少 cmi 文件。"),
  (52, "脆弱的常量模式。"),
  (53, "属性不能出现在当前上下文中"),
  (54, "属性被使用了多于一次"),
  (56, "不可达的模式分支 (基于类型信息得出的结论)。"),
  (57, "在使用模式守卫（guard）的情况下使用了有歧义的 \"or\" 模式"),
  (59, "对不可变的值进行赋值"),
  (60, "未使用的模块声明"),
  (61, "不可拆箱的基本类型"),
  (62, "通用代数数据类型（GADT）存在类型约束"),
  (101, "未被使用的 \"bs\" 属性"),
  (102, "使用了多态比较（可能不安全）"),
  (103, "脆弱的 FFI 定义"),
  (104, "bs.deriving 的自定义警告信息"),
  (
    105,
    "external 的名称是从 val 中推断出来的，该名称在更改值名称时对重构是不安全的",
  ),
  (106, "使用了未实现的基本类型"),
  (107, "整数字面值超出了类型 int 可表达的范围"),
  (108, "未解释的分隔符（用于 unicode）"),
  (109, "顶层表达式的类型为 unit"),
]

let letterAll = numeric->Belt.Array.map(fst)

// we keep the original variable name `letter` like in warnings.ml
let _letter = l =>
  switch l {
  | "a" => letterAll
  /* | "b" => [||] */
  | "c" => [1, 2]
  | "d" => [3]
  | "e" => [4]
  | "f" => [5]
  /* | "g" => [||] */
  /* | "h" => [||] */
  /* | "i" => [||] */
  /* | "j" => [||] */
  | "k" => [32, 33, 34, 35, 36, 37, 38, 39]
  | "l" => [6]
  | "m" => [7]
  /* | "n" => [||] */
  /* | "o" => [||] */
  | "p" => [8]
  /* | "q" => [||] */
  | "r" => [9]
  | "s" => [10]
  /* | "t" => [||] */
  | "u" => [11, 12]
  | "v" => [13]
  /* | "w" => [||] */
  | "x" => [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30]
  | "y" => [26]
  | "z" => [27]
  | _ => []
  }

let letterDescriptions = [("a", "All flags")]

let getDescription = (num: int, numeric: array<(int, string)>): option<string> =>
  numeric->Js.Array2.find(((n, _)) => num === n)->Belt.Option.map(((_, desc)) => desc)

// return all key / description pairs by language
let lookupAll = (): array<(string, string)> => {
  open LangUtil
  let router = Next.Router.useRouter()
  let url = router.route->Url.parse
  let lang = whichLang(url)
  numeric->Belt.Array.map(
    ((num, desc)) => (
      Belt.Int.toString(num),
      switch lang {
      | English => desc
      | Chinese => switch getDescription(num, numericCn) {
        | Some(desc) => desc
        | None => desc
        }
      }
    )
  )
}

// str: a...z or a string number, returns (numStr, description)
let lookup = (str: string): array<(string, string)> =>
  switch Belt.Int.fromString(str) {
  | Some(num) =>
    switch getDescription(num, numeric) {
    | Some(description) => [(str, description)]
    | None => []
    }
  | None =>
    /* str */
    /* ->Js.String2.toLowerCase */
    /* ->letter */
    /* ->Belt.Array.reduce([||], (acc, num) => { */
    /* switch (getDescription(num)) { */
    /* | Some(description) => */
    /* Js.Array2.push(acc, (Belt.Int.toString(num), description)) */
    /* ->ignore; */
    /* acc; */
    /* | None => acc */
    /* } */
    /* }); */
    let search = str->Js.String2.toLowerCase
    Belt.Array.keep(letterDescriptions, ((l, _)) => l === search)
  }

// matches all numbers that start with str
let fuzzyLookup = (str: string): array<(string, string)> => {
  let letters = Belt.Array.keep(letterDescriptions, ((l, _)) => l->Js.String2.startsWith(str))

  let numbers =
    numeric
    ->Belt.Array.keep(((n, _)) => Belt.Int.toString(n)->Js.String2.startsWith(str))
    ->Belt.Array.map(((n, desc)) => (Belt.Int.toString(n), desc))

  Belt.Array.concat(letters, numbers)
}

module Parser = {
  type token = {
    enabled: bool,
    flag: string,
  }

  exception InvalidInput(string)

  type state =
    | ParseFlag({modifier: string, acc: string})
    | ParseModifier

  let isModifier = str => str === "+" || str === "-"

  let parseExn = (input: string): array<token> => {
    let ret = []

    let pos = ref(0)

    let state = ref(ParseModifier)
    let last = Js.String2.length(input) - 1

    while pos.contents <= last {
      let cur = Js.String2.get(input, pos.contents)
      let newState = switch state.contents {
      | ParseModifier =>
        if cur === "+" || cur === "-" {
          ParseFlag({modifier: cur, acc: ""})
        } else {
          raise(InvalidInput("Expected '+' or '-' on pos " ++ Belt.Int.toString(pos.contents)))
        }
      | ParseFlag({modifier, acc}) =>
        let next = if pos.contents + 1 < last {
          Js.String2.get(input, pos.contents + 1)
        } else {
          cur
        }

        if cur->isModifier {
          raise(
            InvalidInput(
              "'+' and '-' not allowed in flag name on pos " ++ Belt.Int.toString(pos.contents),
            ),
          )
        } else if next === "+" || (next === "-" || pos.contents >= last) {
          let token = {enabled: modifier === "+", flag: acc ++ cur}
          Js.Array2.push(ret, token)->ignore
          ParseModifier
        } else {
          ParseFlag({modifier: modifier, acc: acc ++ cur})
        }
      }

      state := newState
      pos := pos.contents + 1
    }

    // Last sanity check for the edge case where there
    // might be a tangling empty flag
    switch state.contents {
    | ParseFlag({modifier, acc: ""}) =>
      raise(
        InvalidInput(
          "Expected flag name after '" ++
          (modifier ++
          ("' on pos " ++ Belt.Int.toString(pos.contents))),
        ),
      )
    | _ => ()
    }

    ret
  }

  let parse = (input: string): result<array<token>, string> =>
    try Ok(parseExn(input)) catch {
    | InvalidInput(str) => Error(str)
    }

  /* // other will override flags within base */
  let merge = (base: array<token>, other: array<token>) => {
    let dict = Js.Array2.copy(base)->Belt.Array.map(token => (token.flag, token))->Js.Dict.fromArray

    Belt.Array.forEach(other, token => dict->Js.Dict.set(token.flag, token))

    Js.Dict.values(dict)->Js.Array2.sortInPlaceWith((t1, t2) => {
      open Js.Float
      let f1 = t1.flag
      let f2 = t2.flag
      switch (f1->fromString->isNaN, f2->fromString->isNaN) {
      | (false, false)
      | (true, true) =>
        Js.String2.localeCompare(f1, f2)->Belt.Float.toInt
      | (true, false) => -1
      | (false, true) => 1
      }
    })
  }

  // Creates a compiler compatible warning flag string
  let tokensToString = tokens => {
    tokens
    ->Js.Array2.map(token => {
      let modifier = token.enabled ? "+" : "-"
      modifier ++ token.flag
    })
    ->Js.Array2.joinWith("")
  }
}
