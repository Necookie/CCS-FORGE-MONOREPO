const fs = require('fs');
const path = require('path');

const files = [
  'apps/platform/src/layouts/PlatformLayout.astro',
  'apps/platform/src/components/dashboard/OperativeSnapshot.astro',
  'apps/platform/src/components/dashboard/DailyQuestBanner.astro',
  'apps/platform/src/components/dashboard/TrendingQuests.astro',
  'apps/platform/src/components/dashboard/CommunityFeed.astro',
  'apps/platform/src/pages/index.astro',
  'apps/platform/src/pages/armory.astro',
  'apps/platform/src/pages/quests.astro',
  'apps/platform/src/pages/registry.astro'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replaceAll('bg-[#1A1A24]/70', 'bg-slate-50/70 dark:bg-[#1A1A24]/70');
  content = content.replaceAll('bg-[#1A1A24]/50', 'bg-slate-50/50 dark:bg-[#1A1A24]/50');
  content = content.replaceAll('bg-[#252634]/90', 'bg-white/80 dark:bg-[#252634]/90');
  content = content.replaceAll('bg-[#252634]/80', 'bg-white/80 dark:bg-[#252634]/80');
  content = content.replaceAll('bg-[#252634]/50', 'bg-white/50 dark:bg-[#252634]/50');
  content = content.replaceAll('bg-[#1A1A24]', 'bg-slate-50 dark:bg-[#1A1A24]');
  content = content.replaceAll('bg-[#252634]', 'bg-white dark:bg-[#252634]');
  content = content.replaceAll('bg-[#0F0F16]', 'bg-slate-50 dark:bg-[#0F0F16]');
  
  // White opacity elements
  content = content.replaceAll('bg-white/5', 'bg-slate-100 dark:bg-white/5');
  content = content.replaceAll('hover:bg-white/5', 'hover:bg-slate-100 dark:hover:bg-white/5');
  
  // Text Colors
  // Do not replace text-white inside DailyQuestBanner where from-purple-600 exists... 
  // We'll replace it generally but DailyQuest may need manual fixing if it gets broken.
  content = content.replaceAll('text-white', 'text-slate-900 dark:text-white');
  content = content.replaceAll('text-slate-300', 'text-slate-800 dark:text-slate-300');
  content = content.replaceAll('text-slate-400', 'text-slate-600 dark:text-[#A0A0B0]');
  
  // Fix hover states
  content = content.replaceAll('hover:text-white', 'hover:text-slate-900 dark:hover:text-white');
  
  // Borders
  content = content.replaceAll('border-white/5', 'border-slate-200 dark:border-white/5');
  content = content.replaceAll('border-white/10', 'border-slate-300 dark:border-white/10');
  content = content.replaceAll('hover:border-white/10', 'hover:border-slate-300 dark:hover:border-white/10');
  content = content.replaceAll('hover:border-white/30', 'hover:border-slate-300 dark:hover:border-white/30');

  // Fix Navbar Logo sizing
  content = content.replace('w-8 h-8 rounded-xl overflow-hidden', 'w-9 h-9 rounded-xl overflow-hidden');

  fs.writeFileSync(file, content);
});

console.log('Platform Light Mode transition completed.');
