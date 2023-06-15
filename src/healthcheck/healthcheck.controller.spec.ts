import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckController } from './healthcheck.controller';
import { HttpStatus } from '@nestjs/common';
import * as httpMocks from 'node-mocks-http';

describe('HealthcheckController', () => {
  let healthcheckController: HealthcheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
    }).compile();

    healthcheckController = app.get<HealthcheckController>(
      HealthcheckController,
    );
    await app.init();
  });

  describe('healthcheck', () => {
    it('should return 204 No Content', () => {
      const req = httpMocks.createRequest();
      req.res = httpMocks.createResponse();
      healthcheckController.healthcheck(req.res);
      expect(req.res.statusCode).toBe(HttpStatus.NO_CONTENT);
    });
  });
});
