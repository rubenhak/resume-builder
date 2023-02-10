import { ResumeEducation } from "../types";

export class ResumeEducationImpl implements ResumeEducation
{
    private _data: ResumeEducation;

    constructor(data: ResumeEducation)
    {
        if (data.startDate) {
            data.startDate = new Date(data.startDate);
        }
        if (data.endDate) {
            data.endDate = new Date(data.endDate);
        }
        
        data.highlights = data.highlights ?? [];

        this._data = data;
    }

    get institution()
    {
        return this._data.institution;
    }

    get logo()
    {
        return this._data.logo;
    }

    get url()
    {
        return this._data.url;
    }

    get hasUrl() {
        if (this.url) {
            return true;
        }
        return false;
    }

    get area()
    {
        return this._data.area;
    }

    get studyType()
    {
        return this._data.studyType;
    }

    get infoText()
    {
        if (this.studyType) {
            return `${this.studyType}, ${this.area}`;
        }
        return this.area;
    }

    get highlights() {
        return this._data.highlights;
    }

    get startDate()
    {
        return this._data.startDate;
    }
    get endDate()
    {
        return this._data.endDate;
    }

    get dateRangeStr()
    {
        if (this.endDate)
        {
            const startStr = dateToString(this.startDate);
            const endStr = dateToString(this.endDate);
            if (startStr == endStr) {
                return startStr;
            }

            return `${startStr} - ${endStr}`;
        }

        return `${dateToString(this.startDate)} - Present`;
    }
}

function dateToString(date?: Date)
{
    if (!date) {
        return '';
    }
    
    var year = date.getFullYear();
    return `${year}`;
}