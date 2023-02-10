import { ResumeSubProject, ResumeWork } from "../types";
import { ResumeSubProjectImpl } from "./sub-project";

export class ResumeWorkImpl implements ResumeWork
{
    private _data: ResumeWork;
    private _projects: ResumeSubProject[];

    constructor(data: ResumeWork)
    {
        this._data = data;
        this._projects = (data.projects ?? []).map(x => new ResumeSubProjectImpl(x));
    }

    get company()
    {
        return this._data.company;
    }

    get logo()
    {
        return this._data.logo;
    }

    get url()
    {
        return this._data.url;
    }

    get shouldShowURL()
    {
        if (this.url) {
            if (this.url.startsWith('https://github.com')) {
                return true;
            }
        }
        return false;
    }

    get role()
    {
        return this._data.role;
    }

    get startDate()
    {
        return this._data.startDate;
    }
    get endDate()
    {
        return this._data.endDate;
    }
    get summary()
    {
        return this._data.summary;
    }

    get projects()
    {
        return this._projects;
    }

    get highlights()
    {
        return this._data.highlights;
    }
    
    get used()
    {
        return this._data.used;
    }

    get dateRangeStr()
    {
        if (this.endDate)
        {
            return `${dateToString(this.startDate)} - ${dateToString(this.endDate)}`
        }
        return `${dateToString(this.startDate)} - Present`;
    }
}

function dateToString(date: Date)
{
    var year = date.getFullYear();
    var month = date.toLocaleString('default', { month: 'short' });
    return `${month}, ${year}`;
}