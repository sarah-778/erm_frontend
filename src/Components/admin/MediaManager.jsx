import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';

export default function MediaManager() {
  const { content, updateHeroBanner, updateLeaderImage, updateLeaderText, resetContent } = useContent();
  const [activeTab, setActiveTab] = useState('hero');

  // Converts uploaded local file into a usable temporary image preview
  const handleFileUpload = (e, callback) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      callback(tempUrl);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Content & Media Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">
              Visually edit website text and upload new images in real time.
            </p>
          </div>
          {resetContent && (
            <button
              onClick={resetContent}
              className="mt-4 md:mt-0 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-lg border border-rose-200 transition"
            >
              Reset All Content
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 space-x-8 mb-8">
          <button
            onClick={() => setActiveTab('hero')}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'hero'
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Hero & Banners
          </button>
          <button
            onClick={() => setActiveTab('leaders')}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'leaders'
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Team & Leadership Content
          </button>
        </div>

        {/* TAB 1: HERO & BANNERS */}
        {activeTab === 'hero' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Hero Background Media</h2>
              <p className="text-xs text-slate-500">Preview and change the active banner image.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Visual Banner Preview */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-52 flex items-center justify-center">
                {content?.heroBanner ? (
                  <img
                    src={content.heroBanner}
                    alt="Hero Banner Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-slate-400 text-sm">No image uploaded</span>
                )}
                <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                  Active Image
                </span>
              </div>

              {/* Action Controls */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Replace Hero Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, updateHeroBanner)}
                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LEADERSHIP TEXT & PHOTOS */}
        {activeTab === 'leaders' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900">Leadership Profiles</h2>
              <p className="text-xs text-slate-500">Edit member names, roles, bio descriptions, and profile photos.</p>
            </div>

            <div className="space-y-6">
              {content?.leaders?.map((leader) => (
                <div
                  key={leader.id}
                  className="p-6 border border-slate-200 rounded-2xl bg-slate-50/50 flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Photo Section */}
                  <div className="flex flex-col items-center space-y-3">
                    {leader.avatarUrl ? (
                      <img
                        src={leader.avatarUrl}
                        alt={leader.name}
                        className="w-24 h-24 rounded-2xl object-cover ring-2 ring-emerald-500/20 shadow-sm"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-2xl bg-slate-800 text-white font-bold flex items-center justify-center text-xl shadow-sm">
                        {leader.initials || '??'}
                      </div>
                    )}
                    <label className="block text-center cursor-pointer">
                      <span className="text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
                        Upload Photo
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileUpload(e, (url) => updateLeaderImage(leader.id, url))
                        }
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Text Content Inputs */}
                  <div className="flex-1 space-y-4 w-full">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={leader.name}
                          onChange={(e) =>
                            updateLeaderText && updateLeaderText(leader.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Role / Job Title</label>
                        <input
                          type="text"
                          value={leader.role}
                          onChange={(e) =>
                            updateLeaderText && updateLeaderText(leader.id, 'role', e.target.value)
                          }
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Biography / Description</label>
                      <textarea
                        rows="3"
                        value={leader.bio || ''}
                        onChange={(e) =>
                          updateLeaderText && updateLeaderText(leader.id, 'bio', e.target.value)
                        }
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}