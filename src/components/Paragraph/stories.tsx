import { Meta, Story } from '@storybook/react/types-6-0';
import { Paragraph, ParagraphProps } from '.';

export default {
  title: 'Paragraph',
  component: Paragraph,
  args: {
    children: 'Text of paragraph',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: Story<ParagraphProps> = (args) => <Paragraph {...args} />;
export const Dark: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
