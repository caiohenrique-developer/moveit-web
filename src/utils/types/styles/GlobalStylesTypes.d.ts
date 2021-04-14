/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';
import { useThemeMode } from '../../../hooks/useThemeMode';

// Globals styles
const { styleProps } = useThemeMode();

export type Theme = typeof styleProps;

export module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
