import type { SortOrder, WorkSelectOptions, WorkSortOptions } from "./enums.js"

export type HttpResponse<T> =
	| ({
			ok: true
			content: T
	  } & Response)
	| ({
			ok: false
			content: undefined
	  } & Response)

export interface SearchQueryParams {
	query: string
	filter?: string
	rows: number
	offset: number
}

export interface QueryWorksParams {
	offset?: number
	order?: SortOrder
	query?: string
	queryAffiliation?: string
	queryAuthor?: string
	queryBibliography?: string
	queryChair?: string
	queryContainerTitle?: string
	queryContributor?: string
	queryDegree?: string
	queryDescription?: string
	queryEditor?: string
	queryEventAcronym?: string
	queryEventName?: string
	queryEventSponsor?: string
	queryEventTheme?: string
	queryFunderName?: string
	queryPublisherLocation?: string
	queryPublisherName?: string
	queryStandardsBodyAcronym?: string
	queryStandardsBodyName?: string
	queryTitle?: string
	queryTranslator?: string
	rows?: number
	sort?: WorkSortOptions
	select?: WorkSelectOptions[]
	sample?: number
}

export interface Item<T> {
	status: string
	messageType: string
	messageVersion: string
	message: T
}

export interface Items<T> {
	status: string
	messageType: string
	messageVersion: string
	message: {
		itemsPerPage: number
		query: {
			startIndex: number
			searchTerms: string | null
		}
		totalResults: number
		items: T[]
	}
}

export interface Funders {
	id: string
	location: string
	name: string
	altNames: string[]
	uri: string
	replaces: unknown[]
	replacedBy: unknown[]
	tokens: string[]
}

export interface Funder extends Funders {
	hierarchyNames: { [k: string]: string }
	workCount: number
	descendants: unknown[]
	descendantWorkCount: number
}

export interface DateObj {
	dateParts: number[][]
	dateTime: Date
	timestamp: number
}

export interface Author {
	given: string
	family: string
	sequence: string
	affiliation: unknown[]
	ORCID?: string
	authenticatedOrcid?: boolean
}

export interface WorksFunder {
	DOI?: string
	name: string
	doiAssertedBy?: string
}

export interface Link {
	URL: string
	contentType: string
	contentVersion: string
	intendedApplication: string
}

export interface DateParts {
	dateParts: number[][]
}

export interface WorkUpdate {
	updated: {
		dateParts: number[][]
		dateTime: Date
		timestamp: number
	}
	DOI: string
	type: string
	label: string
}

export interface WorkInstitution {
	name: string
	place: string[]
	department: string[]
	acronym: string[]
}

export interface WorkStandardsBody {
	name: string
	acronym: string[]
}

export interface WorkClinicalTrialNumber {
	clinicalTrialNumber: string
	registry: string
	type: string
}

export interface WorkReview {
	type: string
	runningNumber: string
	revisionRound: string
	stage: string
	competingInterestStatement: string
	recommendation: string
	language: string
}

export interface WorkFreeToRead {
	startDate: DateParts
	endDate: DateParts
}

export interface Work {
	abstract?: string
	accepted?: DateParts
	alternativeId?: string[]
	approved?: DateParts
	archive?: string[]
	articleNumber?: string
	assertion?: Assertion[]
	author: Author[]
	chair?: Author[]
	clinicalTrialNumber?: WorkClinicalTrialNumber[]
	componentNumber?: string
	containerTitle?: string[]
	contentCreated?: DateParts
	contentDomain: {
		crossmarkRestriction: boolean
		domain: unknown[]
	}
	contentUpdated: DateParts
	created: DateObj
	degree?: string
	deposited: DateObj
	DOI: string
	editionNumber?: string
	editor?: Author[]
	freeToRead?: WorkFreeToRead
	funder: WorksFunder[]
	groupTitle?: string[]
	indexed: DateObj
	institution: WorkInstitution
	isReferencedByCount: number
	ISBN?: string[]
	isbnnType?: IssnType[]
	ISSN?: string[]
	issnType?: IssnType[]
	issue: string
	issued: DateParts
	journalIssue?: {
		issue: number
		publishedOnline: DateParts
	}
	language?: string
	license?: License[]
	link: Link[]
	member: string
	originalTitle?: string[]
	page: string
	partNumber?: string
	posted?: DateParts
	prefix: string
	published?: DateParts
	publishedOnline?: DateParts
	publishedOther?: DateParts
	publishedPrint?: DateParts
	publisher: string
	publisherLocation?: string
	reference?: Reference[]
	referenceCount: number
	referencesCount: number
	relation?: any
	resource: { primary: { URL: string } }
	review?: WorkReview
	score: number
	shortContainerTitle: string
	shortTitle?: string[]
	source: string
	standardsBody?: WorkStandardsBody[]
	subject?: string[]
	subtitle?: string[]
	subtype?: string
	title: string[]
	translator?: Author[]
	type: string
	updatePolicy?: string
	updateTo?: WorkUpdate[]
	URL: string
	volume?: string
}

export interface CoverageType {
	lastStatusCheckTime: Date
	affiliations: number
	abstracts: number
	orcids: number
	licenses: number
	references: number
	funders: number
	similarityChecking: number
	awardNumbers: number
	rorIds: number
	updatePolicies: number
	resourceLinks: number
	descriptions: number
}

export interface Coverage {
	affiliationsCurrent: number
	similarityCheckingCurrent: number
	descriptionsCurrent: number
	rorIdsCurrent: number
	fundersBackfile: number
	licensesBackfile: number
	fundersCurrent: number
	affiliationsBackfile: number
	resourceLinksBackfile: number
	orcidsBackfile: number
	updatePoliciesCurrent: number
	rorIdsBackfile: number
	orcidsCurrent: number
	similarityCheckingBackfile: number
	referencesBackfile: number
	descriptionsBackfile: number
	awardNumbersBackfile: number
	updatePoliciesBackfile: number
	licensesCurrent: number
	awardNumbersCurrent: number
	abstractsBackfile: number
	resourceLinksCurrent: number
	abstractsCurrent: number
	referencesCurrent: number
}

export interface Flags {
	depositsAbstractsCurrent: boolean
	depositsOrcidsCurrent: boolean
	deposits: boolean
	depositsAffiliationsBackfile: boolean
	depositsUpdatePoliciesBackfile: boolean
	depositsSimilarityCheckingBackfile: boolean
	depositsAwardNumbersCurrent: boolean
	depositsResourceLinksCurrent: boolean
	depositsRorIdsCurrent: boolean
	depositsArticles: boolean
	depositsAffiliationsCurrent: boolean
	depositsFundersCurrent: boolean
	depositsReferencesBackfile: boolean
	depositsRorIdsBackfile: boolean
	depositsAbstractsBackfile: boolean
	depositsLicensesBackfile: boolean
	depositsAwardNumbersBackfile: boolean
	depositsDescriptionsCurrent: boolean
	depositsReferencesCurrent: boolean
	depositsResourceLinksBackfile: boolean
	depositsDescriptionsBackfile: boolean
	depositsOrcidsBackfile: boolean
	depositsFundersBackfile: boolean
	depositsUpdatePoliciesCurrent: boolean
	depositsSimilarityCheckingCurrent: boolean
	depositsLicensesCurrent: boolean
}

export interface Journal {
	lastStatusCheckTime: Date
	counts: {
		currentDois: number
		backfileDois: number
		totalDois: number
	}
	breakdowns: {
		doisByIssuedYear: number[][]
	}
	publisher: string
	coverage: Coverage
	title: string
	subjects: {
		ASJC: number
		name: string
	}[]
	coverageType: {
		all: CoverageType
		backfile: CoverageType
		current: CoverageType
	}
	flags: Flags
	ISSN: string[]
	issnType: unknown[]
}

export interface Agency {
	DOI: string
	agency: {
		id: string
		label: string
	}
}

export interface License {
	start: unknown
	contentVersion: string
	delayInDays: number
	URL: string
}

export interface Reference {
	key: string
	doiAssertedBy: string
	firstPage: string
	DOI: string
	articleTitle: string
	volume: string
	author: string
	year: string
	journalTitle: string
}

export interface IssnType {
	value: string
	type: string
}

export interface Assertion {
	value: string
	name: string
	label: string
}

export interface Prefix {
	member: string
	name: string
	prefix: string
}

export interface Member {
	lastStatusCheckTime: Date
	primaryName: string
	counts: {
		currentDois: number
		backfileDois: number
		totalDois: number
	}
	breakdowns: { doisByIssuedYear: unknown[] }
	prefixes: string[]
	coverage: Coverage
	prefix: Prefix[]
	id: number
	tokens: string[]
	countsType: { all: Counts; backfile: Counts; current: Counts }
	coverageType: {
		all: CoverageType
		backfile: CoverageType
		current: CoverageType
	}
	flags: Flags
	location: string
	names: string[]
}

export interface Counts {
	journalArticle: number
	book: number
	bookChapter: number
	referenceBook: number
	postedContent: number
	journalIssue: number
	editedBook: number
}

export interface Type {
	id: string
	label: string
}

export interface LicenseSearchResult {
	URL: string
	workCount: number
}
