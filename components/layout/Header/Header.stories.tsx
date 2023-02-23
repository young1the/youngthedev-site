import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "layout/Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {};
