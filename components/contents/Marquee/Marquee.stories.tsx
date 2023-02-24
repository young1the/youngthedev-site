import { ComponentStory, ComponentMeta } from "@storybook/react";

import Marquee from "./Marquee";

export default {
  title: "content/Marquee",
  component: Marquee,
} as ComponentMeta<typeof Marquee>;

const Template: ComponentStory<typeof Marquee> = (args) => (
  <Marquee {...args} />
);

export const Light = Template.bind({});
Light.args = {
  value: "infinite marquee",
};
