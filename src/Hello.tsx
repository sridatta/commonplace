import * as React from "react";
require('pdfjs-dist/build/pdf.combined');
require('pdfjs-dist/web/compatibility');

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
