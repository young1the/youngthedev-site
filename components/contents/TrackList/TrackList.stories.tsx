import { ComponentStory, ComponentMeta } from "@storybook/react";

import TrackList from "./TrackList";

export default {
  title: "content/TrackList",
  component: TrackList,
} as ComponentMeta<typeof TrackList>;

const Template: ComponentStory<typeof TrackList> = () => <TrackList />;

export const Light = Template.bind({});
