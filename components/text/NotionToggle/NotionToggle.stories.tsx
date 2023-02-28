import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotionToggle from "./NotionToggle";

export default {
  title: "text/NotionToggle",
  component: NotionToggle,
} as ComponentMeta<typeof NotionToggle>;

const Template: ComponentStory<typeof NotionToggle> = (args) => (
  <NotionToggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "토글입니다",
  children: ["자식1", "자식2", "자식3"],
};
