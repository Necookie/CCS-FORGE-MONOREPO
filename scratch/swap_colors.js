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

const files = walk('apps/platform/src').concat(['packages/config-tailwind/tailwind.config.ts']);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Swap Tailwind color names
  content = content.replaceAll('cyan-', '__TEMP_CYAN_');
  content = content.replaceAll('purple-', 'cyan-');
  content = content.replaceAll('__TEMP_CYAN_', 'purple-');
  
  // Swap Hex codes
  content = content.replaceAll('#00E5FF', '__TEMP_HEX_');
  content = content.replaceAll('#8A2BE2', '#00E5FF');
  content = content.replaceAll('__TEMP_HEX_', '#8A2BE2');
  
  // Swap ArenaSection string literals (if any)
  content = content.replaceAll("'teal'", "'__TEMP_TEAL__'");
  content = content.replaceAll("'purple'", "'teal'");
  content = content.replaceAll("'__TEMP_TEAL__'", "'purple'");

  content = content.replaceAll("teal:", "__TEMP_TEAL_KEY__:");
  content = content.replaceAll("purple:", "teal:");
  content = content.replaceAll("__TEMP_TEAL_KEY__:", "purple:");
  
  fs.writeFileSync(file, content);
});

console.log('Swapped colors successfully in ' + files.length + ' files');
