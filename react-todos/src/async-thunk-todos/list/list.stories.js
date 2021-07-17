import List from "./list";

export default {
  title: "Todos/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  todos: [
    { id: 1, text: "Learn Storybook", done: true },
    { id: 2, text: "Look for a job", done: false },
    { id: 3, text: "Forget everything" },
  ],
};
