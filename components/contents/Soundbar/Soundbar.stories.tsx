import { ComponentStory, ComponentMeta } from "@storybook/react";

import Soundbar from "./Soundbar";

export default {
  title: "content/Soundbar",
  component: Soundbar,
} as ComponentMeta<typeof Soundbar>;

const Template: ComponentStory<typeof Soundbar> = () => <Soundbar />;

export const Light = Template.bind({});
