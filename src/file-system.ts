import * as Path from 'path';
import * as fs from 'fs';
import * as YAML from 'yaml'

import { spawn } from 'child_process';


export async function readFileContents(path: string, baseDir?: string)
{
    if (baseDir) {
        path = Path.join(baseDir, path);
    }
    if (!fs.existsSync(path)) {
        return "";
    }
    return await fs.promises.readFile(path, { encoding: 'utf-8' })
}

export async function readFileJson(path: string, baseDir?: string)
{
    const contents = await readFileContents(path, baseDir);
    return JSON.parse(contents);
}

export async function readFileYAML(path: string, baseDir?: string)
{
    const contents = await readFileContents(path, baseDir);
    return YAML.parse(contents);
}

export async function deleteDirectory(path: string, baseDir?: string)
{
    if (baseDir) {
        path = Path.join(baseDir, path);
    }
    
    console.log(`DELETING: ${path}...`);
}

export async function mkdirMinusP(dir: string)
{
    await fs.promises.mkdir(dir, { recursive: true })
}

export async function writeFileContents(contents: string, file: string)
{
    console.log("Writing to: ", file);

    const dir = Path.dirname(file);
    // console.log("Dir: ", dir);
    await mkdirMinusP(dir);

    await fs.promises.writeFile(file, contents, { encoding: 'utf8' })
}

export async function writeFileJson(contents: object, file: string)
{
    await writeFileContents(JSON.stringify(contents, null, 4), file);
}

export async function writeBinaryFileContents(contents: Uint8Array|string, file: string)
{
    console.log("Writing Binary to: ", file);

    const dir = Path.dirname(file);
    await fs.promises.mkdir(dir, { recursive: true })

    await fs.promises.writeFile(file, contents, { encoding: 'binary' })
}

export async function executeShellScript(scriptPath: string)
{
    console.log("Executing Shell Script: ", scriptPath);

    await fs.promises.chmod(scriptPath, 0o755);

    return new Promise((resolve, reject) => {
        const script = spawn('bash', [scriptPath]);

        script.stdout.on('data', (data) => {
            console.log(`>>>> ${data}`);
        });
    
        script.stderr.on('data', (data) => {
            console.error(`>>>> ${data}`);
        });
    
        script.on('close', (code) => {
            if (code === 0) {
                console.log(`*** [executeShellScript] Completed: ${scriptPath}`);
                resolve(0);
            } else {
                console.log(`*** [executeShellScript] ERROR RUNNING: ${scriptPath}. Exit Code: ${code}`);
                reject();
            }
        });
    })

}