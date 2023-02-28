import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoText from "./LogoText";

export default {
  title: "text/LogoText",
  component: LogoText,
} as ComponentMeta<typeof LogoText>;

const Template: ComponentStory<typeof LogoText> = () => <LogoText />;

export const Default = Template.bind({});
