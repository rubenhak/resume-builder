import * as Path from 'path';

export class PathResolver
{
    get rootBuildDir()
    {
        const MY_BUILD_DIR = Path.join(__dirname, '..');
        return MY_BUILD_DIR;
    }

}