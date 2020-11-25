import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'lnngle-eav',
      entities: ['../**/*.entity{.ts,.js}'],
      useUnifiedTopology: true,
      synchronize: true,
    }),
  },
];
