// css 모듈화 자동 변경 코드
// npx jscodeshift -t codemods/convert-css-module.js src/components 입력시 적용
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const isValidIdentifier = name => /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(name);

  root.find(j.JSXAttribute, { name: { name: "className" } }).forEach(path => {
    const attr = path.node;
    const val = attr.value;

    if (val && (val.type === "Literal" || val.type === "StringLiteral")) {
      const className = val.value.trim();
      if (className.includes(" ")) return; // 여러 클래스는 건너뜀

      // dot 표기가 가능하면 style.foo, 아니면 style["foo-bar"]
      const member = isValidIdentifier(className)
        ? j.memberExpression(j.identifier("style"), j.identifier(className))
        : j.memberExpression(
            j.identifier("style"),
            j.stringLiteral(className),
            /* computed */ true,
          );

      attr.value = j.jsxExpressionContainer(member);
      // 더 이상 코드 필요 없음 — 여기서 끝.
    }
  });

  return root.toSource({ quote: "double" });
}
