import { NxDeployItBaseOptions } from '../../adapter/base.adapter.model';

export interface NxDeployItDeployBuilderSchema extends NxDeployItBaseOptions {
  noBuild?: boolean;
  nonInteractive?: boolean;
}
