export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ '**/__tests__/specs/(cars|integrations)/**/*.[jt]s?(x)' ],
  setupFilesAfterEnv: [ './src/__tests__/mocks/prisma.ts', './src/__tests__/setupFiles.ts' ]
};