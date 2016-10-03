import * as React from "react";
import { render } from "react-dom";

import Main from './Main';

render(
    <Main compiler="TypeScript" framework="Sridatta and friends..." />,
    document.getElementById('root'))
