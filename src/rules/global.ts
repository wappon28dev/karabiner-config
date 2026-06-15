import { rule, map, ifApp, toKey } from "karabiner.ts";
import { swapKeys, swapArrows, pcStyleHomeEnd } from "./utils.js";

export function globalRules() {
  return [
    // 1. Swap colon/semicolon
    swapKeys("semicolon", "left_shift", "Swap colon/semicolon"),

    // 2. Swap quote/double_quote
    swapKeys("quote", "left_shift", "Swap quote/double_quote"),

    // 3. Swap plus/equal
    swapKeys("equal_sign", "left_shift", "Swap plus/equal"),

    // 4. Cmd + Shift + Q to Cmd + W
    rule("Cmd + Shift + Q to Cmd + W").manipulators([
      map("q", "⌘⇧").to("w", "⌘"),
    ]),

    // 5. Cmd + Shift + Q to Cmd + Shift + W in VSCode
    rule(
      "Cmd + Shift + Q to Cmd + Shift + W in VSCode",
      ifApp("^com\\.microsoft\\.VSCode$"),
    ).manipulators([map("q", "⌘⇧").to("w", "⌘⇧")]),

    // 6. Cmd (+ Shift) + Tab -> Ctrl (+ Shift) + Tab
    rule("Cmd (+ Shift) + Tab -> Ctrl (+ Shift) + Tab").manipulators([
      map("tab", "⌘⇧").to("tab", "⌃⇧"),
      map("tab", "⌘").to("tab", "⌃"),
    ]),

    // 7. Single Cmd to Cmd + Space
    rule("Single Cmd to Cmd + Space").manipulators([
      map("left_command")
        .to("left_command")
        .toIfAlone([
          toKey("spacebar", "left_command"),
          toKey("japanese_eisuu", undefined, { lazy: true }),
        ]),
    ]),

    // 8. Swap Cmd + Backspace and Option + Backspace
    rule("Cmd + Backspace to Option + Backspace").manipulators([
      map("delete_or_backspace", "⌘").to("delete_or_backspace", "⌥"),
    ]),
    rule("Option + Backspace to Cmd + Backspace").manipulators([
      map("delete_or_backspace", "⌥").to("delete_or_backspace", "⌘"),
    ]),

    // 9. Arrow keys command/option swaps
    ...swapArrows("left"),
    ...swapArrows("right"),

    // 10. PC-Style Home/End Keys
    pcStyleHomeEnd(),

    // 11. Ctrl + Backspace to Cmd + Backspace
    rule("Ctrl + Backspace to Cmd + Backspace").manipulators([
      map("delete_or_backspace", "⌃").to("delete_or_backspace", "⌘"),
    ]),
  ];
}
