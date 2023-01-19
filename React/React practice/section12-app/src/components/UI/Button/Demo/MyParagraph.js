import React from "react";

const DemoOutput = (props) => {
    console.log('MyParagraph RUNNING')
    return <p>{props.children ? 'This is new!' : ''}</p>
};

export default DemoOutput;
