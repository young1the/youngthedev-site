import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotionLink from "./NotionLink";

export default {
  title: "text/NotionLink",
  component: NotionLink,
} as ComponentMeta<typeof NotionLink>;

const Template: ComponentStory<typeof NotionLink> = (args) => (
  <NotionLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: {
    url: "https://github.com",
  },
};
