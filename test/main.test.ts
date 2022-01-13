import {
  App,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../src/imagebuilder';

describe('TestCdkConstructsStack', () => {
  test('synthesizes the way we expect', () => {
    const myStack = new MyStack(new App(), 'TestCdkConstructsStack');
    const template = Template.fromStack(myStack);

    template.hasResourceProperties('AWS::ImageBuilder::Component', {
      Tags: {
        'component-0': 'helloworld.yaml',
      },
      Name: 'component-helloworld-yaml',
    });

    template.hasResourceProperties('AWS::ImageBuilder::ImageRecipe', {
      ParentImage: 'arn:aws:imagebuilder:ap-southeast-2:aws:image/amazon-linux-2-x86/x.x.x',
    });
  });
});