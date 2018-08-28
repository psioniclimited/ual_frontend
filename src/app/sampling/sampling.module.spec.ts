import { SamplingModule } from './sampling.module';

describe('SamplingModule', () => {
  let samplingModule: SamplingModule;

  beforeEach(() => {
    samplingModule = new SamplingModule();
  });

  it('should create an instance', () => {
    expect(samplingModule).toBeTruthy();
  });
});
