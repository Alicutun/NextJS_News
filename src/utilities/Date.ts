// format YYYY-MM-DD HH:MM::SS
export const formatTimeArticle = (time: any) => {
	const format = new Date(time).toISOString().slice(0, 19).replace("T", " ");
	return format;
};
// format YYYY-MM-DD (list Article)
export const formatTimeListArticle = (time: any) => {
	const format = new Date(time).toISOString().slice(0, 10).replace("T", " ");
	return format;
};
