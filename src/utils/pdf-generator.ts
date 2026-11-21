import puppeteer from 'puppeteer';

export async function renderPdf(htmlPath: string, pdfPath: string)
{
    // Puppeteer downloads a matching Chrome on install. Set PUPPETEER_EXECUTABLE_PATH
    // to use a system browser instead (the Docker image does this).
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
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