import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";

export default {
  title: "text/Title",
  component: Title,
  args: {
    value: "Title",
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
