export function classNames(
  cls: string,
  mods: Record<string, boolean>,
  additional: string[]
) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
