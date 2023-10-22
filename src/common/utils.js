export function redirectTo(url, options) {
  const { target, features } = options;

  window.open(url, target ?? "_self", features);

  return null;
}

export function transformAsciiImage(ascii, fontSize) {
  return (
    <span
      style={{
        fontSize,
      }}
      dangerouslySetInnerHTML={{ __html: ascii }}
    />
  );
}
