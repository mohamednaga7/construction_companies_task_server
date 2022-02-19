import { Request, Response } from 'express';
import { ICompany } from '../../models/company.model';
import { Specialty } from '../../models/Specialty.enum';

export type GetCompaniesQuery = {
	page: number;
	limit: number;
	companyName?: string;
	specialties?: Specialty[];
};

export type GetCompaniesResponse = Response<
	{ companies: ICompany[]; pagesCount: number } | { message: string }
>;

export type IGetCompaniesRequest = Request<{}, any, any, GetCompaniesQuery>;
