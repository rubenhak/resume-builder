import _ from 'the-lodash';
import * as Path from 'path';
import { renderPdf } from '../../utils/pdf-generator';

import { executeGenerateHtml } from '../generate/command';

export async function executeGeneratePDF(resumePath: string)
{
    const htmlResult = await executeGenerateHtml(resumePath, {
        htlmFileName: "print.html",
        printable: true
    });

    const outputPdfFilePath = Path.resolve(htmlResult.resumeDir, 'resume.pdf');

    console.log('Rendering PDF...');
    const absHtmlPath = Path.resolve(htmlResult.outputHtmlPath);
    console.log(`Input Path: ${absHtmlPath}`)
    console.log(`Output Path: ${outputPdfFilePath}`)
    await renderPdf(`file://${absHtmlPath}`, outputPdfFilePath);

    console.log('Done.');
}