const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.astro') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('apps/landing/src');

// We also need to add `leading-tight` to all h2 and h1 if missing, or replace `leading-relaxed` / missing with `leading-tight`.
// Actually, let's inject industry standard typography classes.

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Swap RGBA colors
  content = content.replaceAll('rgba(0,229,255', '__TEMP_RGBA_');
  content = content.replaceAll('rgba(138,43,226', 'rgba(0,229,255');
  content = content.replaceAll('__TEMP_RGBA_', 'rgba(138,43,226');
  
  // Also fix button text for the Primary Button (Purple background shouldn't have dark text now, it should be white, or very light)
  // `<button class="bg-[#8A2BE2] text-[#1A1A24]` -> `<button class="bg-purple-600 dark:bg-[#8A2BE2] text-white`
  content = content.replaceAll('bg-[#8A2BE2] text-[#1A1A24]', 'bg-purple-600 dark:bg-[#8A2BE2] text-white');
  
  // Fix H1 leading
  content = content.replaceAll(/h1 class="(.*?)"/g, (match, p1) => {
      let cls = p1.replace('leading-tight', 'leading-none').replace('leading-relaxed', 'leading-none');
      if (!cls.includes('leading-none') && !cls.includes('leading-tight')) cls += ' leading-none';
      return `h1 class="${cls}"`;
  });
  
  // Fix H2 leading
  content = content.replaceAll(/h2 class="(.*?)"/g, (match, p1) => {
      let cls = p1.replace('leading-relaxed', 'leading-tight');
      if (!cls.includes('leading-[') && !cls.includes('leading-tight') && !cls.includes('leading-none')) cls += ' leading-tight';
      return `h2 class="${cls}"`;
  });

  // Ensure button padding is standard `px-6 py-2.5` or similar, but the developer has `px-8 py-4` which is valid for large hero CTA.
  
  fs.writeFileSync(file, content);
});

console.log('Polished UI and swapped RGBA globally');
