import { httpGetCompanies } from './companies.controller';
import { Router } from 'express';

const companiesRouter = Router();

companiesRouter.get('/', httpGetCompanies);

export { companiesRouter };
