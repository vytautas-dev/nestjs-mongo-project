import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { HealthcheckController } from '../src/healthcheck/healthcheck.controller';

describe('HealthcheckController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/healthcheck (GET)', () => {
    return request(app.getHttpServer()).get('/healthcheck').expect(204);
  });
});
