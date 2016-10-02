import * as React from "react";
import { render } from "react-dom";

import {Hello} from './Hello';

render(
    <Hello compiler="TypeScript" framework="Sridatta and friends..." />,
    document.getElementById('root'))
