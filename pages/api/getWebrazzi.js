const puppeteer = require("puppeteer")
const cheerio = require("cheerio")
const chrome = require("chrome-aws-lambda")

const exePath =
    process.platform === "win32"
        ? "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
        : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

const getOptions = async () => {
    let options
    if (process.env.NODE_ENV === "production") {
        options = {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
        }
    } else {
        options = {
            args: [],
            executablePath: exePath,
            headless: true,
        }
    }
    return options
}

const getWebrazzi = async (req, res) => {
    const titleSelector = ".post-title"
    const urlSelector = ".post-title a"
    const properties = req.body.properties

    try {
        const options = await getOptions()
        const browser = await puppeteer.launch(options)
        const page = await browser.newPage()
        await page.setRequestInterception(true)
        page.on("request", (request) => {
            if (request.resourceType() === "document") {
                request.continue()
            } else {
                request.abort()
            }
        })

        await page.goto("https://webrazzi.com/haberler/", { timeout: 0 }).then(async (response) => { })
        const html = await page.evaluate(() => {
            return document.querySelector("body").innerHTML
        })
        const $ = cheerio.load(html)

        // create empty result set, assume selectors will return same number of results
        let result = []
        for (let i = 0; i < $(titleSelector).length; i++) {
            result.push({})
        }

        // fill result set by parsing the html for each property selector
        $(titleSelector).each((i, elem) => {
            result[i].title = $(elem).text()
        })
        $(urlSelector).each((i, elem) => {
            let href = $(elem).attr("href")
            if (href.charAt(0) === "/") href = "https://webrazzi.com/haberler/" + href
            result[i].url = href
        })
        await browser.close()
        res.status(200).json({ statusCode: 200, result })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export default getWebrazzi

export const config = {
    api: {
        externalResolver: true,
    },
}