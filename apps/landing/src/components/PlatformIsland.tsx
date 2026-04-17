import React, { useState } from 'react';
import { Button, Card } from '@forge/ui';
import type { User, Challenge } from '@forge/database';

export const PlatformIsland = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenges'>('overview');

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-20">
      <div className="flex gap-4 mb-8">
        <Button 
          onClick={() => setActiveTab('overview')}
          className={activeTab === 'overview' ? '' : 'bg-transparent text-white shadow-none hover:shadow-none hover:bg-white/5 border border-white/10'}
        >
          Overview
        </Button>
        <Button 
          onClick={() => setActiveTab('challenges')}
          className={activeTab === 'challenges' ? '' : 'bg-transparent text-white shadow-none hover:shadow-none hover:bg-white/5 border border-white/10'}
        >
          Challenges
        </Button>
      </div>

      <Card>
        <h2 className="text-2xl font-bold text-white mb-4">
          {activeTab === 'overview' ? 'Command Center Overview' : 'Available Challenges'}
        </h2>
        <div className="text-gray-400">
          {activeTab === 'overview' ? (
             <p>Welcome to your authenticated portal. System status is operational.</p>
          ) : (
             <p>No active challenges detected. Check back later.</p>
          )}
        </div>
      </Card>
    </div>
  );
};