import * as Funders from "./endpoints/funders.js"
import * as Journals from "./endpoints/journals.js"
import * as Licenses from "./endpoints/licenses.js"
import * as Members from "./endpoints/members.js"
import * as Prefixes from "./endpoints/prefix.js"
import * as Types from "./endpoints/types.js"
import * as Works from "./endpoints/works.js"
import { _fetch } from "./utils/_fetch.js"

export * from "./definitions/enums.js"
export * from "./definitions/interfaces.js"

export class CrossrefClient {
	protected _url: string = "https://api.crossref.org"
	protected _plusToken: string = ""
	protected _mailto: string = ""
	protected _debug: boolean = false

	constructor(
		mailto: string = "",
		plusToken: string = "",
		debug: boolean = false,
	) {
		this._plusToken = plusToken
		this._mailto = mailto
		this._debug = debug
	}

	public ping = () => "pong"

	protected _fetch = _fetch

	// funders
	public funders = Funders.funders
	public funder = Funders.funder
	public fundersWorks = Funders.fundersWorks

	// journals
	public journals = Journals.journals
	public journal = Journals.journal
	public journalWorks = Journals.journalWorks

	// works
	public works = Works.works
	public work = Works.work
	public worksAgency = Works.worksAgency

	// prefixes
	public prefix = Prefixes.prefix
	public prefixWorks = Prefixes.prefixWorks

	// members
	public member = Members.member
	public members = Members.members
	public memberWorks = Members.memberWorks

	// types
	public type = Types.type
	public types = Types.types
	public typeWorks = Types.typeWorks

	// licenses
	public licenses = Licenses.licenses
}
