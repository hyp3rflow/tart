import ScheduleItem from '.';

export const Template = {
  args: {
    schedule: {
      title: 'Lorem Ipsum',
      startTimestamp: new Date(),
      endTimestamp: new Date(),
    },
  },
};

export default {
  title: 'main/ScheduleItem',
  component: ScheduleItem,
};
