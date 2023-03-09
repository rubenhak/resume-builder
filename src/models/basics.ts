import { ResumeBasics } from "../types";

export class ResumeBasicsImpl implements ResumeBasics
{
    private _data: ResumeBasics;
    private _github?: string;
    private _linkedIn?: string;

    constructor(data: ResumeBasics)
    {
        this._data = data;
        for(const x of data.social ?? [])
        {
            if (x.startsWith('github.com')) {
                this._github = x;
            } else if (x.startsWith('linkedin.com')) {
                this._linkedIn = x;
            }
        }
    }

    get name() {
        return this._data.name;
    }

    get tagline() {
        return this._data.tagline;
    }

    get photo() {
        return this._data.photo;
    }

    get location() {
        return this._data.location;
    }

    get email() {
        return this._data.email;
    }

    get hasEmail() {
        return isPresent(this.email);
    }

    get phone() {
        return this._data.phone;
    }
    
    get social() {
        return this._data.social;
    }

    get gitHub() {
        return this._github;
    }
    get hasGitHub() {
        return isPresent(this.gitHub);
    }

    get linkedIn() {
        return this._linkedIn;
    }
    get hasLinkedIn() {
        return isPresent(this.linkedIn);
    }

}

function isPresent(str?: string)
{
    if (str) {
        if(str.length > 0) {
            return true;
        }
    }
    return false;
}
