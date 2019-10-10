module.exports = {
  name: 'rbo-resume',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rbo-resume',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
