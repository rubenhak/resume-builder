import _ from 'the-lodash';
import * as Path from 'path';
import * as ejs from 'ejs';
import * as shelljs from 'shelljs';
import { loadResumeSpec } from '../../loader';
import { writeFileContents } from '../../file-system';

export async function executeGenerate(resumePath: string)
{
    const resumeSpec = await loadResumeSpec(resumePath);
    console.log(resumeSpec);

    const resumeDir = Path.dirname(resumePath);

    const renderData = {
        resume: resumeSpec,
        isStaticOutput: true 
    }
    const templatePath = './build/views/pages/index.ejs';
    const html = await ejs.renderFile(templatePath, renderData)
    // console.log(html);

    const outputFile = Path.join(resumeDir, 'index.html');
    writeFileContents(html, outputFile);

    console.log('Copying public assets...')
    shelljs.cp('-rf', './build/public/*', resumeDir);
}