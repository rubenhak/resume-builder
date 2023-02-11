import puppeteer from 'puppeteer';

export async function renderPdf(htmlPath: string, pdfPath: string)
{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(htmlPath, {
        waitUntil: 'networkidle2'
    });
    await page.pdf({ 
        path: pdfPath,
        margin: {
            top: 40,
            bottom: 40,
            left: 40,
            right: 40,
        }
    });
   
    await browser.close();
}