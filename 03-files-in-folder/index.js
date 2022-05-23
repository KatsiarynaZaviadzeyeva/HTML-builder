const fs = require('fs/promises');
const path = require('path');
const { stat } = require('fs');
const { execPath } = require('process');

const dir = path.join(__dirname, 'secret-folder');

const readFolder = async() => {
    try {
        const items = await fs.readdir(dir, { withFileTypes: true });
        for (const item of items) {
            if (item.isFile) {
                let parts = path.parse(item.name);
                const name = path.join(dir, item.name);
                stat(name, (error, stats) => {
                    console.log(parts.base + ' - ' + parts.ext + ' - ' + stats.size / 1000 + 'kb');
                });

            }
        };
    } catch (error) {
        console.log(error);
    }
}
readFolder();