import { rule, map, FromKeyParam, ToKeyParam, ModifierParam } from 'karabiner.ts';

/**
 * Swaps a key's base state and shifted state.
 * @param keyCode - The key code to swap (e.g. 'semicolon')
 * @param modifier - The modifier that triggers the shifted state (e.g. 'left_shift')
 * @param description - The description of the mapping
 */
export function swapKeys(keyCode: FromKeyParam & ToKeyParam, modifier: ModifierParam, description: string) {
  return rule(description).manipulators([
    map(keyCode, modifier, 'caps_lock').to(keyCode),
    map(keyCode, null, 'caps_lock').to(keyCode, modifier)
  ]);
}

/**
 * Swaps Command and Option for Arrow keys for word vs line navigation.
 * @param direction - The arrow key direction.
 */
export function swapArrows(direction: 'left' | 'right') {
  const key = `${direction}_arrow` as FromKeyParam & ToKeyParam;
  
  return [
    rule(`Cmd + ${direction} arrow to Option + ${direction} arrow`).manipulators([
      map(key, ['command', 'shift']).to(key, ['left_option', 'left_shift']),
      map(key, 'command').to(key, 'left_option')
    ]),
    rule(`Option + ${direction} arrow to Cmd + ${direction} arrow`).manipulators([
      map(key, ['option', 'shift']).to(key, ['left_command', 'left_shift']),
      map(key, 'option').to(key, 'left_command')
    ])
  ];
}

/**
 * Adds Windows PC-Style Home/End keys mappings.
 */
export function pcStyleHomeEnd() {
  return rule('PC-Style Home/End Keys').manipulators([
    // Ctrl + Home/End -> Document start/end
    map('home', 'control', 'shift').to('up_arrow', 'left_command'),
    map('end', 'control', 'shift').to('down_arrow', 'left_command'),
    
    // Cmd + Home/End -> Document start/end (since Cmd acts like Ctrl)
    map('home', 'command', 'shift').to('up_arrow', 'left_command'),
    map('end', 'command', 'shift').to('down_arrow', 'left_command'),
    
    // Home/End -> Line start/end
    map('home', null, 'shift').to('left_arrow', 'left_command'),
    map('end', null, 'shift').to('right_arrow', 'left_command')
  ]);
}
