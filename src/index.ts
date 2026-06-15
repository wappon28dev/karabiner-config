import { writeToProfile } from "karabiner.ts";
import { chromeRules } from "./rules/chrome.js";
import { hhkbRules } from "./rules/hhkb.js";
import { reduceUsPainRules } from "./rules/reduce-us-pain.js";
import { globalRules } from "./rules/global.js";

// Write directly to the active profile in karabiner.json
writeToProfile("Default profile", [
  chromeRules(),
  hhkbRules(),
  reduceUsPainRules(),
  ...globalRules(),
]);
console.log("✓ Profile Default profile updated directly in karabiner.json");
