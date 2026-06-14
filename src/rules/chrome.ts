import { rule, map, ifApp } from "karabiner.ts";

export function chromeRules() {
  return rule(
    "Cmd + D でタブ復活防止",
    ifApp("^com\\.google\\.Chrome$"),
  ).manipulators([
    map("d", "⌘")
      .to("w", "⌘⇧", { lazy: true })
      .to("n", "⌘", { lazy: true })
      .to("w", "⌘", { lazy: true }),
  ]);
}
