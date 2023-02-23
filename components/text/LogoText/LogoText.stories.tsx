import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoText from "./LogoText";

export default {
  title: "text/LogoText",
  component: LogoText,
  argTypes: {},
} as ComponentMeta<typeof LogoText>;

const Template: ComponentStory<typeof LogoText> = () => <LogoText />;

export const Light = Template.bind({});
Light.args = {};
