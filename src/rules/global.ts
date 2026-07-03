import { rule, map, ifApp, toKey } from "karabiner.ts";
import { swapKeys, swapArrows, pcStyleHomeEnd } from "./utils.js";

export function globalRules() {
  return [
    swapKeys("semicolon", "left_shift", "Swap colon/semicolon"),

    swapKeys("quote", "left_shift", "Swap quote/double_quote"),

    swapKeys("equal_sign", "left_shift", "Swap plus/equal"),

    rule("Cmd + Shift + Q to Cmd + W").manipulators([
      map("q", "⌘⇧").to("w", "⌘"),
    ]),

    rule(
      "Cmd + Shift + Q to Cmd + Shift + W in VSCode",
      ifApp("^com\\.microsoft\\.VSCode$"),
    ).manipulators([map("q", "⌘⇧").to("w", "⌘⇧")]),

    rule("Cmd (+ Shift) + Tab -> Ctrl (+ Shift) + Tab").manipulators([
      map("tab", "⌘⇧").to("tab", "⌃⇧"),
      map("tab", "⌘").to("tab", "⌃"),
    ]),

    rule("Single Cmd to Option + Space").manipulators([
      map("left_command")
        .to("left_command")
        .toIfAlone([
          toKey("spacebar", "left_option"),
          toKey("japanese_eisuu", undefined, { lazy: true }),
        ]),
    ]),

    rule("Cmd + Backspace to Option + Backspace").manipulators([
      map("delete_or_backspace", "⌘").to("delete_or_backspace", "⌥"),
    ]),
    rule("Option + Backspace to Cmd + Backspace").manipulators([
      map("delete_or_backspace", "⌥").to("delete_or_backspace", "⌘"),
    ]),

    ...swapArrows("left"),
    ...swapArrows("right"),

    pcStyleHomeEnd(),

    rule("Ctrl + Backspace to Cmd + Backspace").manipulators([
      map("delete_or_backspace", "⌃").to("delete_or_backspace", "⌘"),
    ]),
  ];
}
