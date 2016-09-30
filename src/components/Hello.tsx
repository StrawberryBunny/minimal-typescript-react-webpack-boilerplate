import * as React from 'react';
import * as styles from './hello.css';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render(){
        return <p className={styles.hello}>Hello from {this.props.compiler} and {this.props.framework}!</p>;
        //return <p>Hello from {this.props.compiler} and {this.props.framework}!</p>;
    }
}