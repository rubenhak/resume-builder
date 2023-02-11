import _ from 'the-lodash';
import * as Path from 'path';
import * as ejs from 'ejs';
import * as shelljs from 'shelljs';
import { loadResumeSpec } from '../../loader';
import { writeFileContents } from '../../file-system';
import { renderPdf } from '../../utils/pdf-generator';
import { PathResolver } from '../../path-resolver';

import { executeGenerateHtml } from '../generate/command';

export async function executeGeneratePDF(resumePath: string)
{
    const htmlResult = await executeGenerateHtml(resumePath, {
        htlmFileName: "index-tmp.html",
        printable: true
    });

    const outputPdfFilePath = Path.resolve(htmlResult.resumeDir, 'resume.pdf');

    console.log('Rendering PDF...');
    const absHtmlPath = Path.resolve(htmlResult.outputHtmlPath);
    console.log(`Input Path: ${absHtmlPath}`)
    console.log(`Output Path: ${outputPdfFilePath}`)
    await renderPdf(`file://${absHtmlPath}`, outputPdfFilePath);

    await shelljs.rm(absHtmlPath);

    console.log('Done.');
}