import { ImageBuilder } from '@cloudadder/cdk-ec2-imagebuilder';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new ImageBuilder(this, 'ImageBuilder', {
      componentsFolder: './src/components',
      amiName: 'test-ami',
      id: 'test-123',
      subnetId: 'subnet-12345',
      securityGroupIds: ['sg-12345'],
      version: '1.0.0',
    });
  }
}