import React, { useEffect } from 'react';
const puppeteer = require('puppeteer');

export default function Example ()  {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        // Create a new Puppeteer browser instance
        const browser = await puppeteer.launch();

        // Create a new page instance in the browser
        const page = await browser.newPage();

        // Navigate to the website you want to fetch content from
        await page.goto('https://webrazzi.com/');

        // Use Puppeteer to extract the posts from the website
        const posts = await page.evaluate(() => {
            const postElements = document.querySelectorAll('.post-item');
            return [...postElements].map((postElement) => postElement.innerText);
        });

        // Update the state with the extracted posts
        setPosts(posts);

        // Close the browser instance when you're done
        await browser.close();
    }, []);

    return (
        <div className="grid">
            {posts.map((post) => (
                // Use a CSS grid layout to display the posts in a grid
                <div className="grid-item">{post}</div>
            ))}
        </div>
    );
}
