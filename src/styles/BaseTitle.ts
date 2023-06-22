import { css } from "styled-components";
import Fadein from "./Fadein";


const BaseTitle = css`
    opacity: 0;
    margin: 20px;
    font-size: 2em;
    font-weight: bold;
    animation: ${Fadein} 2s forwards;
`

export default BaseTitle