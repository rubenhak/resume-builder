import puppeteer from 'puppeteer';

export async function renderPdf(htmlPath: string, pdfPath: string)
{
    const browserFetcher = puppeteer.createBrowserFetcher();
    const revisionInfo = await browserFetcher.download('1095492');
    if (!revisionInfo) {
        throw new Error("Could not find Browser Revision.");
    }

    const browser =await puppeteer.launch({
        executablePath: revisionInfo.executablePath,
        ignoreDefaultArgs: ['--disable-extensions'],
        headless: true,
        args: ['--no-sandbox', "--disabled-setupid-sandbox"]
    });
    // const browser = await puppeteer.launch({ headless: true });
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