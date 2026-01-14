import { readFile } from 'fs/promises';
import { join } from 'path';

function CreateSVGDataURL(svgContent) {
  let cleanedSvg = svgContent
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\t/g, " ") 
    .replace(/>\s+</g, "><") 
    .trim();                     

  const encodedSvg = encodeURIComponent(cleanedSvg);
  const dataUrlPrefix = 'data:image/svg+xml;charset=UTF-8,';

  return dataUrlPrefix + encodedSvg;
}

async function GetSVGData(relativePath) {
  try {
    const filePath = join(process.cwd(), relativePath); 
    const svgContent = await readFile(filePath, { encoding: 'utf8' });
    const dataUrl = CreateSVGDataURL(svgContent);
    
    return dataUrl;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

const svgFilePath = 'src/assets/express.svg'; 

async function runExample() {
  try {
    const dataUrl = await GetSVGData(svgFilePath);
    console.log(dataUrl);
  } catch (e) {
    console.log(e.message);
  }
}

runExample();