import { Module } from '@nestjs/common';

import * as Modules from 'src/modules';

@Module({
  imports: [
    ...Object.values(Modules),
  ]
})
export class ApplicationModule {};