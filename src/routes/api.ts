import { Router } from 'express';
import { companiesRouter } from './companies/companies.routes';

const api = Router();

api.use('/companies', companiesRouter);

export { api };
