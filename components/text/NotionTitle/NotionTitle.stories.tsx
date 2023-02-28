import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotionTitle from "./NotionTitle";

export default {
  title: "text/NotionTitle",
  component: NotionTitle,
} as ComponentMeta<typeof NotionTitle>;

const Template: ComponentStory<typeof NotionTitle> = (args) => (
  <NotionTitle {...args} />
);

export const Light = Template.bind({});
Light.args = {
  value: "타이틀입니다",
};
