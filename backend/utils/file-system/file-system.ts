import RNFS from 'react-native-fs';

const storageLocation = RNFS.DocumentDirectoryPath + "/";


export async function writeFileRaw(path: string, data: string): Promise<void> {
    const fullPath = storageLocation + path;

    return new Promise(function(resolve, reject) {
        RNFS.writeFile(fullPath, data, 'utf8')
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

export async function readFileRaw(path: string): Promise<string> {
    const fullPath = storageLocation + path;

    return new Promise(function(resolve, reject) {
        RNFS.readFile(fullPath, 'utf8')
            .then(fileContent => resolve(fileContent))
            .catch(error => reject(error));
    });
}

export async function appendFileRaw(path: string, data: string): Promise<void> {
    const fullPath = storageLocation + path;

    return new Promise(function(resolve, reject) {
        RNFS.appendFile(fullPath, data, 'utf8')
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

export async function writeFile(path: string, data: object): Promise<void> {
    const fullPath = storageLocation + path;
    const json = JSON.stringify(data);

    return new Promise(function(resolve, reject) {
        RNFS.writeFile(fullPath, json, 'utf8')
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

export async function readFile(path: string): Promise<object> {
    const fullPath = storageLocation + path;

    return new Promise(function(resolve, reject) {
        RNFS.readFile(fullPath, 'utf8')
            .then(fileContent => resolve(JSON.parse(fileContent)))
            .catch(error => reject(error));
    });
}

export async function appendFile(path: string, data: object): Promise<void> {
    const fullPath = storageLocation + path;
    const json = JSON.stringify(data);

    return new Promise(function(resolve, reject) {
        RNFS.appendFile(fullPath, json, 'utf8')
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

export async function exists(path: string): Promise<boolean> {
    const fullPath = storageLocation + path;

    return new Promise(function(resolve, reject) {
        RNFS.exists(fullPath)
            .then(exists => resolve(exists))
            .catch(error => reject(error));
    });
}

export async function deleteFile(path: string): Promise<void> {
    const fullPath = storageLocation + path;

    return new Promise(function(resolve, reject) {
        RNFS.unlink(fullPath)
            .then(() => resolve())
            .catch(error => reject(error));
    });
}
