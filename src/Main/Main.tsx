import * as React from "react";

require("!style!css!./Main.scss");
require('pdfjs-dist/build/pdf.combined');
require('pdfjs-dist/web/compatibility');

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
