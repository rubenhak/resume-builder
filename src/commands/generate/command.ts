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

    const MY_BUILD_DIR = Path.join(__dirname, '..', '..', '..');

    const templatePath = Path.join(MY_BUILD_DIR, 'views/pages/index.ejs');
    const html = await ejs.renderFile(templatePath, renderData)

    const outputFile = Path.join(resumeDir, 'index.html');
    writeFileContents(html, outputFile);

    console.log('Copying public assets...')
    shelljs.cp('-rf', Path.join(MY_BUILD_DIR, 'public/*'), resumeDir);
    console.log('Done.');
}