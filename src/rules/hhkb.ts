import { rule, map, ifDevice } from "karabiner.ts";

export function hhkbRules() {
  return rule(
    "Left/Right Option to IME",
    ifDevice({ vendor_id: 1278 }),
  ).manipulators([
    map("left_option", null, "any")
      .parameters({ "basic.to_if_held_down_threshold_milliseconds": 50 })
      .to("left_option", undefined, { lazy: true })
      .toIfHeldDown("left_option")
      .toIfAlone("japanese_eisuu"),
    map("right_option", null, "any")
      .parameters({ "basic.to_if_held_down_threshold_milliseconds": 50 })
      .to("right_option", undefined, { lazy: true })
      .toIfHeldDown("right_option")
      .toIfAlone("japanese_kana"),
  ]);
}
