import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./LogoText";

export default {
  title: "button/Heading",
  component: Heading,
  argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = () => <Heading />;

export const Light = Template.bind({});
Light.args = {};
