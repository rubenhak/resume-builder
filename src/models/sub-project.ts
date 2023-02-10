import { ResumeSubProject } from "../types";

export class ResumeSubProjectImpl implements ResumeSubProject
{
    private _data: ResumeSubProject;

    constructor(data: ResumeSubProject)
    {
        this._data = data;
    }

    get summary()
    {
        return this._data.summary;
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

    get used()
    {
        return this._data.used;
    }
}
