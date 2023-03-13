import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalBackDrop from "./ModalBackDrop";

export default {
  title: "layout/ModalBackDrop",
  component: ModalBackDrop,
} as ComponentMeta<typeof ModalBackDrop>;

const Template: ComponentStory<typeof ModalBackDrop> = (args) => (
  <ModalBackDrop {...args} />
);

export const Default = Template.bind({});
