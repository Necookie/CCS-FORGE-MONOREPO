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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Convert default shadows to Glow Doctrine
  // Let's replace generic `shadow-sm`, `shadow-md`, `shadow-lg` without colored overrides if they exist in cards.
  // Actually, some elements use `shadow-sm dark:shadow-none`. We should leave them or remove them in favor of borders.
  // The guide says: "Eliminate standard, muddy black drop-shadows."
  content = content.replaceAll('shadow-md', 'shadow-[0_0_15px_rgba(138,43,226,0.15)]');
  content = content.replaceAll('shadow-sm dark:shadow-none', 'shadow-none');
  content = content.replaceAll('shadow-sm', '');
  content = content.replaceAll('hover:shadow-lg dark:hover:shadow-', 'hover:shadow-');
  
  // Convert standard pill/buttons rounding to `rounded-xl` to match the macro/micro radius doctrine 
  content = content.replaceAll('rounded-full px-8 py-4', 'rounded-xl px-8 py-4'); // Hero Buttons
  content = content.replaceAll('rounded-full px-5 py-2', 'rounded-xl px-5 py-2'); // Navbar SignIn
  content = content.replaceAll('rounded-full px-3 py-1', 'rounded-xl px-3 py-1'); // Tags in Archive/Arena
  content = content.replaceAll('rounded-full px-4 py-2', 'rounded-xl px-4 py-2'); // Pill in Hero/Footer
  content = content.replaceAll('rounded-full border border-slate-200', 'rounded-xl border border-slate-200'); // Navbar Toggle
  content = content.replaceAll('rounded-full px-6 py-3', 'rounded-xl px-6 py-3'); // Scan Roster button
  
  // Convert Hero CTA styling to match the primary Purple directive and hover lift
  // The Hero primary button is `bg-purple-600 dark:bg-[...] text-white ...`
  // Make sure it has `hover:-translate-y-1`
  if(content.includes('bg-purple-600') && content.includes('Authenticate // Enter')) {
     if(!content.includes('hover:-translate-y-1')) {
         content = content.replace('hover:scale-[1.03]', 'hover:-translate-y-1 hover:scale-[1.02]');
     }
  }

  // Ensure 'w-8 h-8 rounded-full' icons are also rounded-xl for consistency
  content = content.replaceAll('w-8 h-8 rounded-full bg-slate-50', 'w-8 h-8 rounded-xl bg-slate-50');
  
  // Enforce hairline borders globally 
  // 'border border-slate-200 dark:border-white/5' is standard.
  // Check if some places are missing dark:border-white/5 or using white/10
  content = content.replaceAll('dark:border-white/10', 'dark:border-white/5');

  // Ensure the Archive Timeline "System Log // Legacy" pill is matched
  // It has 'inline-flex max-w-fit px-3 py-1 bg-purple-500/10 ... rounded-full'. We already hit `px-3 py-1` above.

  // Save the polished file
  fs.writeFileSync(file, content);
});

console.log('UI/UX Compliance Pass Complete');
