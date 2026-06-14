import { complexModifications, Rule, RuleBuilder } from "karabiner.ts";
import { chromeRules } from "./rules/chrome.js";
import { hhkbRules } from "./rules/hhkb.js";
import { reduceUsPainRules } from "./rules/reduce-us-pain.js";
import { globalRules } from "./rules/global.js";
import { homedir } from "os";

const homeDir = Bun.env["HOME"] || homedir();
const outputDir = `${homeDir}/.config/karabiner/assets/complex_modifications`;

async function writeRuleFile(
  title: string,
  filename: string,
  rules: Array<Rule | RuleBuilder>,
) {
  const compiled = complexModifications(rules);
  const content = {
    title: title,
    rules: compiled.rules,
  };
  const filePath = `${outputDir}/${filename}`;
  await Bun.write(filePath, JSON.stringify(content, null, 2));
  console.log(`Generated ${filename}`);
}

await Promise.all([
  writeRuleFile("Chrome いえい", "chrome.json", [chromeRules()]),
  writeRuleFile("HHKB", "hhkb.json", [hhkbRules()]),
  writeRuleFile(
    "Reduce a pain of US keyboard layout",
    "reduce_a_pain_of_US_keyboard_layout.json",
    [reduceUsPainRules()],
  ),
  writeRuleFile("Global Config", "global.json", globalRules()),
]);
