import { ResumeWork } from "../types";

export class ResumeWorkImpl implements ResumeWork
{
    private _data: ResumeWork;

    constructor(data: ResumeWork)
    {
        this._data = data;
    }

    get company()
    {
        return this._data.company;
    }

    get logo()
    {
        return this._data.logo;
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
        return this._data.projects;
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