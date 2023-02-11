import _ from 'the-lodash';
import * as Path from 'path';
import * as ejs from 'ejs';
import * as shelljs from 'shelljs';
import { loadResumeSpec } from '../../loader';
import { writeFileContents } from '../../file-system';
import { PathResolver } from '../../path-resolver';

const pathResolver = new PathResolver();

export async function executeGenerateHtml(resumePath: string, options: GenerateHtmlOptions)
{
    const resumeSpec = await loadResumeSpec(resumePath);
    console.log(resumeSpec);

    const resumeDir = Path.dirname(resumePath);

    const renderData = {
        resume: resumeSpec,
        isStaticOutput: true,
        printable: options.printable,
    }

    const templatePath = Path.join(pathResolver.rootBuildDir, 'views/pages/index.ejs');
    const html = await ejs.renderFile(templatePath, renderData)

    const outputFile = Path.join(resumeDir, options.htlmFileName);
    writeFileContents(html, outputFile);

    console.log('Copying public assets...')
    shelljs.cp('-rf', Path.join(pathResolver.rootBuildDir, 'public/*'), resumeDir);

    console.log('Done.');

    const result : GenerateHtmlResult = {
        resumeDir: resumeDir,
        outputHtmlPath: outputFile,
    };
    return result;
}

export interface GenerateHtmlOptions
{
    htlmFileName: string,
    printable: boolean,
}

export interface GenerateHtmlResult
{
    resumeDir: string,
    outputHtmlPath: string,
}