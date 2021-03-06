import {
  App,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../src/imagebuilder';

describe('TestCdkConstructsStack', () => {
  test('synthesizes the way we expect', () => {
    const myStack = new MyStack(new App(), 'TestCdkConstructsStack', {
      env: {
        region: 'ap-southeast-2',
      },
    });
    const template = Template.fromStack(myStack);

    template.hasResourceProperties('AWS::ImageBuilder::Component', {
      Tags: {
        'component-0': 'helloworld.yaml',
      },
      Name: 'component-helloworld-yaml',
    });

    template.hasResourceProperties('AWS::ImageBuilder::ImageRecipe', {
      ParentImage: 'arn:aws:imagebuilder:ap-southeast-2:aws:image/amazon-linux-2-x86/x.x.x',
      Components: [
        {
          ComponentArn: {
            'Fn::GetAtt': [
              'ImageBuilderComponenthelloworldyaml785EB055',
              'Arn',
            ],
          },
        },
        {
          ComponentArn: 'arn:aws:imagebuilder:ap-southeast-2:aws:component/reboot-linux/1.0.1/1',
        },
      ],
    });

    template.hasResourceProperties('AWS::ImageBuilder::DistributionConfiguration', {
      Distributions: [
        {
          AmiDistributionConfiguration: {
            name: 'test-ami-{{imagebuilder:buildDate}}',
          },
          Region: 'ap-southeast-2',
        },
      ],
      Name: 'test-123',
    });
  });
});