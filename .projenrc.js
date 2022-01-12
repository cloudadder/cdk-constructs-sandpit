const { AwsCdkTypeScriptApp, awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp ({
  cdkVersion: '2.5.0',
  defaultReleaseBranch: 'main',
  dependabot: true,
  dependabotOptions: {
    scheduleInterval: 'weekly',
  },
  deps: ['@cloudadder/cdk-ec2-imagebuilder'],
  gitignore: [
    '*.DS_Store',
  ],
  name: '@cloudadder/cdk-constructs-sandpit',
  release: true,
  releaseToNpm: false,

  // cdkDependencies: undefined,  /* Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  // deps: [],                    /* Runtime dependencies of this module. */
  // description: undefined,      /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                 /* Build dependencies for this module. */
  // packageName: undefined,      /* The "name" in package.json. */
  // release: undefined,          /* Add release management to this project. */
});
project.synth();