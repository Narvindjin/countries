import {css} from 'styled-components'
import { TRANS_TIME } from './theme'

const fontNormal = css`
    font-weight: 600
`

const fontBold = css`
    font-weight: 800;
`

const fontLight = css`
    font-weight: 300;
`

const textNormal = css`
    font-size: 1.4rem;
`

const textNormalDetail = css`
    font-size: 1.6rem;
`

const blockMargin = css`
    margin-top: 0;
    margin-bottom: 100px;
`

const hoverFadeOut = css`
    transition: opacity ${TRANS_TIME} ease;
    opacity: 1;

    @media (hover: hover) {
        &:hover {
            opacity: 0.7
        }
    };

    &:focus-visible {
        opacity: 0.7;
    }
`

const visuallyHidden = css`
    position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
    
      white-space: nowrap;
    
      border: 0;
    
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
`

export {fontNormal, fontLight, textNormal, textNormalDetail, fontBold, blockMargin, hoverFadeOut, visuallyHidden}