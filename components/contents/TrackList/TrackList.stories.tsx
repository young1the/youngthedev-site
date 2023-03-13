import { ComponentStory, ComponentMeta } from "@storybook/react";

import TrackList from "./TrackList";

export default {
  title: "content/TrackList",
  component: TrackList,
  args: {
    trackList: ["Hello", "World"],
  },
} as ComponentMeta<typeof TrackList>;

const Template: ComponentStory<typeof TrackList> = (args) => (
  <TrackList {...args} />
);

export const Default = Template.bind({});
