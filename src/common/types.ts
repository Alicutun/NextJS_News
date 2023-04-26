export interface IDataArticle {
	clickCount: number;
	createDate: string;
	details: any;
	editDate: string;
	id: number;
	jobId: string;
	publishAt: string;
	shareCount?: number;
	status: string;
	user?: any;
	userId: number;
}

export interface IDataSearchAllTopic {
	articles: IDataArticle[];
	topic: string;
}

export interface IDataSearchTotalTopic {
	topic: string;
	total: number;
}

export interface IDaTaTopic {
	id: number;
	code: string;
	name: string;
}

export interface IDataSocket {
	symbol: string;
	price: string;
	percent: string;
}

export interface IItemArticle {
	id: number;
	img: string;
	title: string;
	editDate: string;
	content: string;
	valueSearch?: string;
}

export interface IListArticle {
	listArticle: IDataArticle[];
	page: any;
	setPage: any;
	total: number;
	valueSearch?: any;
}

export interface IDataTopic {
	data: IDataArticle[];
	total: number;
}
