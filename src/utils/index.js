export const getCurrentDate = () => {
	const date = new Date();
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	return `${year}-${month}-${day}`
}