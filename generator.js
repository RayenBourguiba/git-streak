const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { imageToMatrix } = require('./image-to-art');

require('dotenv').config();

const IMAGE_PATH = process.env.IMAGE_PATH;
const REPO = process.env.REPO_NAME;
const START_DATE = new Date(process.env.START_DATE);

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function commitOnDate(date, times) {
    const formattedDate = date.toISOString();
    for (let i = 0; i < times; i++) {
        fs.appendFileSync('README.md', '.');
        execSync(`git add README.md`);
        execSync(
            `set "GIT_AUTHOR_DATE=${formattedDate}" && set "GIT_COMMITTER_DATE=${formattedDate}" && git commit --allow-empty -m "pixel"`
        );
    }
}

async function generateCommits() {
    if (!fs.existsSync(IMAGE_PATH)) {
        throw new Error(`Image file "${IMAGE_PATH}" not found`);
    }

    const art = await imageToMatrix(IMAGE_PATH);

    fs.mkdirSync(REPO);
    process.chdir(REPO);
    execSync('git init');
    fs.writeFileSync('README.md', '# GitHub Art\n');
    execSync('git add README.md && git commit -m "initial commit"');

    let dayIndex = 0;
    for (let col = 0; col < art[0].length; col++) {
        for (let row = 0; row < art.length; row++) {
            const commits = art[row][col];
            const commitDate = addDays(START_DATE, dayIndex);
            commitOnDate(commitDate, commits);
            dayIndex++;
        }
        dayIndex += (7 - art.length);
    }

    console.log('Commits generated! Now push to GitHub.');
}

generateCommits().catch(err => {
    console.error('Error generating commits:', err);
});