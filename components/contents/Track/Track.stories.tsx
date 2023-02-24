import { ComponentStory, ComponentMeta } from "@storybook/react";

import Track from "./Track";

export default {
  title: "content/Track",
  component: Track,
  args: {
    order: "1",
    title: "Intro",
  },
} as ComponentMeta<typeof Track>;

const Template: ComponentStory<typeof Track> = (args) => <Track {...args} />;

export const Light = Template.bind({});
