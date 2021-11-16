import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
const config: Options = {
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    dbName: 'itop-prueba',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.js'],
    metadataProvider: TsMorphMetadataProvider
}

export default config;