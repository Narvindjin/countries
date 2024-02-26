import 'styled-components';
import { ThemeTemplate } from '../theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeTemplate {}
  }