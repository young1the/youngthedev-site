import { ComponentStory, ComponentMeta } from "@storybook/react";

import ThemeButton from "./ThemeButton";

export default {
  title: "button/ThemeButton",
  component: ThemeButton,
  argTypes: {},
} as ComponentMeta<typeof ThemeButton>;

const Template: ComponentStory<typeof ThemeButton> = (args) => (
  <ThemeButton {...args} />
);

export const Light = Template.bind({});
Light.args = {};
