import React from "react";
import Heading from "./";

export default {
    title: "components/Heading",
    component: Heading
};

export const h1 = () => <Heading as="h1">Heading</Heading>;
export const h2 = () => <Heading as="h2">Heading</Heading>;
export const h3 = () => <Heading as="h3">Heading</Heading>;
export const h4 = () => <Heading as="h4">Heading</Heading>;
export const h5 = () => <Heading as="h5">Heading</Heading>;
export const h6 = () => <Heading as="h6">Heading</Heading>;