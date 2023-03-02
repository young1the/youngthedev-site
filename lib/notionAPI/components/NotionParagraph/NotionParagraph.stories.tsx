import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotionParagraph from "./NotionParagraph";

export default {
  title: "text/NotionParagraph",
  component: NotionParagraph,
} as ComponentMeta<typeof NotionParagraph>;

const Template: ComponentStory<typeof NotionParagraph> = (args) => (
  <NotionParagraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "문단입니다",
};
