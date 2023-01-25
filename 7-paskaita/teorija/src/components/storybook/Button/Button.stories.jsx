import React from "react";
import Button from "./Button";

export default {
  title: 'Components/Button',
  component: Button
}

export const Primary = () => <Button type="primary">Primary</Button>
export const Secondary = () => <Button type="secondary">Secondary</Button>