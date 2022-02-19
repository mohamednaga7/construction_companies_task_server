import * as fs from 'fs';
const { readFile } = fs.promises;
import { join } from 'path';
import { Specialty } from './Specialty.enum';

export interface ICompany {
	id: string;
	companyName: string;
	logo: string;
	specialty: Specialty;
	city: string;
}

export async function getCompanies(
	page: number,
	limit: number,
	companyName?: string,
	specialties?: Specialty[]
) {
	let companies = JSON.parse(
		await readFile(join(__dirname, 'companies.json'), 'utf8')
	) as ICompany[];

	if (companyName) {
		companies = companies.filter((company) =>
			company.companyName.toLowerCase().includes(companyName.toLowerCase())
		);
	}

	if (specialties) {
		companies = companies.filter((company) =>
			specialties.includes(company.specialty)
		);
	}

	const companiesCount = companies.length;
	const pagesCount = Math.ceil(companiesCount / limit);

	const start = (page - 1) * limit;
	const end = page * limit;
	return { companies: companies.slice(start, end), pagesCount };
}
