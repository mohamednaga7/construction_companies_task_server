import { IGetCompaniesRequest, GetCompaniesResponse } from './companies.types';
import { getCompanies } from '../../models/company.model';

export const httpGetCompanies = async (
	req: IGetCompaniesRequest,
	res: GetCompaniesResponse
) => {
	const { page, limit, companyName, specialties } = req.query;
	try {
		const { companies, pagesCount } = await getCompanies(
			page,
			limit,
			companyName,
			specialties
		);
		res.status(200).json({ companies, pagesCount });
	} catch (e) {
		return res.status(500).json({ message: 'Error fetching companies' });
	}
};
