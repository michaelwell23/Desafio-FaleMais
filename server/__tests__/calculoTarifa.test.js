import request from 'supertest';
import app from '../src/app';

describe('TafiraController', () => {
  it('Testando Calculo de tarifa', async () => {
    const response = await request(app).post('/tarifa').send({
      dddOrigem: 11,
      dddDestino: 18,
      duracao: 10,
      plano: 30,
    });

    expect(response.body).toBe(0.0, 9.0);
  });

