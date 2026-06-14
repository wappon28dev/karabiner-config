import { rule, map } from 'karabiner.ts';

export function reduceUsPainRules() {
  return rule('f19/f20 to IME')
    .manipulators([
      map('f19', 'any').to('japanese_eisuu'),
      map('f20', 'any').to('japanese_kana')
    ]);
}
