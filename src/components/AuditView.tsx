import React, { useState } from 'react';
import { 
  AUDIT_SUMMARY, 
  AUDIT_ISSUES, 
  TOP_KEYWORDS, 
  DIRECTORY_PLAYBOOK, 
  GENERATED_SCHEMA_JSON,
  AuditIssue
} from '../data/auditData';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Compass, 
  Printer, 
  Code2, 
  BookOpen, 
  Award, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface AuditViewProps {
  onSwitchToWebsite: () => void;
  onOpenBooking: () => void;
}

export const AuditView: React.FC<AuditViewProps> = ({ onSwitchToWebsite, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'issues' | 'keywords' | 'schema' | 'directories' | 'copywriting'>('issues');
  const [issueFilter, setIssueFilter] = useState<'all' | 'critical' | 'high' | 'medium'>('all');
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [keywordCategory, setKeywordCategory] = useState<string>('all');

  const filteredIssues = issueFilter === 'all'
    ? AUDIT_ISSUES
    : AUDIT_ISSUES.filter(i => i.severity === issueFilter);

  const filteredKeywords = keywordCategory === 'all'
    ? TOP_KEYWORDS
    : TOP_KEYWORDS.filter(k => k.category === keywordCategory);

  const handleCopySchema = () => {
    const codeString = `<script type="application/ld+json">\n${JSON.stringify(GENERATED_SCHEMA_JSON, null, 2)}\n</script>`;
    navigator.clipboard.writeText(codeString);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-10 md:py-16 bg-stone-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Header Banner */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-xl inline-block shadow-xs">
                  <img
                    src="/images/logo.png"
                    alt="Talk Aid Counselling Services Logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">
                    Practice Diagnostic & SEO Blueprint
                  </span>
                  <span className="text-sm font-medium text-stone-200">
                    Raksha Patel · Registered Member MBACP
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="py-1.5 px-3 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-stone-200 text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
                <button
                  onClick={onSwitchToWebsite}
                  className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>View Redesigned Site</span>
                </button>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-display leading-tight mb-3">
              Web Visibility & Client Acquisition Blueprint
            </h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-8">
              Prepared for <span className="text-white font-semibold">Talk Aid Counselling Services</span> (<span className="text-emerald-300 font-mono text-xs">{AUDIT_SUMMARY.currentUrl}</span>). Below is your step-by-step roadmap to achieve top Google rankings in Leicester, establish unwavering client trust, and fill your caseload.
            </p>

            {/* Scorecard Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-emerald-900/50 border border-emerald-800/60 rounded-2xl p-4">
                <span className="text-[11px] text-emerald-300 font-medium uppercase tracking-wider block mb-1">
                  Current Web Score
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold font-serif-display text-rose-300">42</span>
                  <span className="text-xs text-stone-400">/ 100</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1">Impacted by insecure HTTP</p>
              </div>

              <div className="bg-emerald-900/50 border border-emerald-800/60 rounded-2xl p-4">
                <span className="text-[11px] text-emerald-300 font-medium uppercase tracking-wider block mb-1">
                  Local SEO Visibility
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold font-serif-display text-amber-300">35</span>
                  <span className="text-xs text-stone-400">/ 100</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1">Missing Schema & Oadby Map</p>
              </div>

              <div className="bg-emerald-900/50 border border-emerald-800/60 rounded-2xl p-4">
                <span className="text-[11px] text-emerald-300 font-medium uppercase tracking-wider block mb-1">
                  Client Conversion
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold font-serif-display text-amber-300">45</span>
                  <span className="text-xs text-stone-400">/ 100</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1">No online inquiry scheduler</p>
              </div>

              <div className="bg-emerald-900/50 border border-emerald-800/60 rounded-2xl p-4">
                <span className="text-[11px] text-emerald-300 font-medium uppercase tracking-wider block mb-1">
                  Potential Growth
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold font-serif-display text-emerald-300">3.5x</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1">Client inquiry expansion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Audit Areas */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-stone-200 mb-8 shadow-xs">
          <button
            onClick={() => setActiveTab('issues')}
            className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'issues' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Audit Findings & Fixes ({AUDIT_ISSUES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('keywords')}
            className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'keywords' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Local Keyword Masterlist</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'schema' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Schema.org JSON-LD Code</span>
          </button>

          <button
            onClick={() => setActiveTab('directories')}
            className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'directories' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Directory & Map Playbook</span>
          </button>

          <button
            onClick={() => setActiveTab('copywriting')}
            className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'copywriting' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Copywriting Transformation</span>
          </button>
        </div>

        {/* TAB 1: ISSUES & ACTIONABLE FIXES */}
        {activeTab === 'issues' && (
          <div className="space-y-6">
            {/* Filter buttons */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-xl font-bold text-stone-900 font-serif-display">
                Detailed Diagnostic & Prioritised Recommendations
              </h2>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-stone-500 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Severity:
                </span>
                {(['all', 'critical', 'high', 'medium'] as const).map(sev => (
                  <button
                    key={sev}
                    onClick={() => setIssueFilter(sev)}
                    className={`py-1 px-2.5 rounded-lg font-medium capitalize transition-all ${
                      issueFilter === sev ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {filteredIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-xs transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        issue.severity === 'critical'
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : issue.severity === 'high'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-stone-100 text-stone-700'
                      }`}>
                        {issue.severity} Priority
                      </span>
                      <span className="text-xs text-stone-400">·</span>
                      <span className="text-xs font-medium text-stone-600">{issue.category}</span>
                    </div>

                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Effort: {issue.effort}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 font-serif-display mb-3">
                    {issue.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="font-bold text-stone-700 uppercase tracking-wider block mb-1">
                        Current Website Reality:
                      </span>
                      <p className="text-stone-600 leading-relaxed">
                        {issue.currentWebsiteObservation}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100">
                      <span className="font-bold text-rose-900 uppercase tracking-wider block mb-1">
                        Why This Costs You Clients:
                      </span>
                      <p className="text-stone-700 leading-relaxed">
                        {issue.impactOnClients}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                    <span className="font-bold text-emerald-900 text-xs uppercase tracking-wider block mb-1">
                      Actionable Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                      {issue.actionableSolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: KEYWORD MASTERLIST */}
        {activeTab === 'keywords' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-stone-900 font-serif-display">
                  Local & High-Intent Keyword Opportunities
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Target these exact search queries on your homepage, service landing pages, and meta tags.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs flex-wrap">
                {['all', 'Local High-Intent', 'Condition-Specific', 'Professional Supervision'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setKeywordCategory(cat)}
                    className={`py-1 px-2.5 rounded-lg font-medium transition-all ${
                      keywordCategory === cat ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Queries' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Target Keyword</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Est. UK Volume</th>
                      <th className="py-3 px-4">SEO Difficulty</th>
                      <th className="py-3 px-4">Target Page</th>
                      <th className="py-3 px-4">Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {filteredKeywords.map((kw, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-stone-900 font-mono">
                          {kw.keyword}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-medium">
                            {kw.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-emerald-800">
                          {kw.monthlyUKVolume}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-md font-semibold ${
                            kw.competition === 'Low' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {kw.competition}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-stone-600">
                          {kw.targetPage}
                        </td>
                        <td className="py-3.5 px-4 text-stone-800 font-medium max-w-xs">
                          {kw.recommendation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-200/60 border border-stone-300 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-stone-900 block mb-1">Local SEO Golden Rule for Private Practices:</span>
              People rarely search general terms like &quot;counselling&quot;. They search for <span className="font-semibold text-stone-900">[Specific Problem] + [Town]</span> (e.g. &quot;anxiety therapist Oadby&quot;) or <span className="font-semibold text-stone-900">[Credential] + [City]</span> (e.g. &quot;BACP counsellor Leicester&quot;). Optimising separate sections for each problem immediately captures these motivated clients.
            </div>
          </div>
        )}

        {/* TAB 3: SCHEMA.ORG CODE GENERATOR */}
        {activeTab === 'schema' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-stone-900 font-serif-display">
                  Schema.org JSON-LD Structured Data
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Paste this snippet inside the <code className="bg-stone-100 px-1 py-0.5 rounded">&lt;head&gt;</code> of your website to appear in Google Maps, local snippets, and rich results.
                </p>
              </div>

              <button
                onClick={handleCopySchema}
                className="py-2 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
              >
                {copiedSchema ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSchema ? 'Copied to Clipboard!' : 'Copy JSON-LD Code'}</span>
              </button>
            </div>

            <div className="bg-stone-900 rounded-2xl p-6 text-stone-300 font-mono text-xs overflow-x-auto shadow-md border border-stone-800">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-stone-800 text-[11px] text-stone-500">
                <span>Format: application/ld+json</span>
                <span>Entity: MedicalBusiness / Psychotherapy</span>
              </div>
              <pre className="text-emerald-400">
{`<script type="application/ld+json">
${JSON.stringify(GENERATED_SCHEMA_JSON, null, 2)}
</script>`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">Exact Postal Coordinates</span>
                <p className="text-stone-600">
                  Ties your exact latitude & longitude (Oadby, LE2 5UH) to Google Maps proximity algorithms.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">Pricing Catalog</span>
                <p className="text-stone-600">
                  Explicitly informs search bots of session rates (£60–£90), qualifying searchers by budget.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">Medical Speciality Classification</span>
                <p className="text-stone-600">
                  Categorised under Psychotherapy & Mental Health rather than general unclassified business.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DIRECTORY PLAYBOOK */}
        {activeTab === 'directories' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900 font-serif-display">
                UK Therapist Directory & Referral Roadmap
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Directories dominate search results for UK therapy. Securing these high-authority citations will drive immediate client calls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DIRECTORY_PLAYBOOK.map((dir, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:border-emerald-700/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-base text-stone-900 font-serif-display">
                        {dir.platform}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                        dir.tier === 'Essential' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-700'
                      }`}>
                        {dir.tier}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-emerald-800 mb-2">
                      Cost: {dir.cost}
                    </p>

                    <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                      {dir.whyItMatters}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-stone-100 mb-4">
                      <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                        Optimization Checklist:
                      </span>
                      {dir.setupTips.map((tip, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-stone-500 flex items-center justify-between">
                    <span>Reference:</span>
                    <span className="font-medium text-stone-800">{dir.linkExample}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: COPYWRITING TRANSFORMATION */}
        {activeTab === 'copywriting' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900 font-serif-display">
                Therapist Copywriting Makeover: From Jargon to Connection
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Counselling clients reach out when they feel seen and safe. Transforming textbook clinical jargon into warm, conversational reassurance dramatically lifts inquiry rates.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs">
                <h3 className="font-semibold text-sm text-stone-900 mb-4 font-serif-display">
                  1. The Homepage Headline & Hero
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-rose-800 uppercase tracking-wider block mb-1">
                      Traditional Clinical Phrasing:
                    </span>
                    <p className="text-stone-600 italic">
                      &quot;Welcome to Talk Aid Counselling Services. I am a qualified integrative psychotherapist offering talking therapy in Oadby.&quot;
                    </p>
                    <p className="text-[11px] text-stone-500 mt-2">
                      Focus is entirely on the therapist; offers no emotional mirror for the client&apos;s pain.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <span className="font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                      High-Converting Empathetic Phrasing:
                    </span>
                    <p className="text-stone-900 font-medium">
                      &quot;A calm, confidential space to heal, understand yourself, and move forward. Professional therapy in Oadby, Leicester and online across the UK.&quot;
                    </p>
                    <p className="text-[11px] text-stone-600 mt-2">
                      Speaks directly to the emotional outcome the client is craving.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs">
                <h3 className="font-semibold text-sm text-stone-900 mb-4 font-serif-display">
                  2. First Contact & Call-to-Action
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-rose-800 uppercase tracking-wider block mb-1">
                      Traditional Clinical Phrasing:
                    </span>
                    <p className="text-stone-600 italic">
                      &quot;Please email info@talkaidcounsellingservices.co.uk or ring 07983 680550 to schedule an assessment session.&quot;
                    </p>
                    <p className="text-[11px] text-stone-500 mt-2">
                      High barrier: an anxious client dreads an unknown &quot;assessment&quot; or opening an email client.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <span className="font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                      High-Converting Empathetic Phrasing:
                    </span>
                    <p className="text-stone-900 font-medium">
                      &quot;Taking the first step can feel daunting. Book a free 15-minute introductory phone call to share what brings you to therapy, ask any questions, and see if working together feels right—with zero pressure.&quot;
                    </p>
                    <p className="text-[11px] text-stone-600 mt-2">
                      De-risks the first interaction; dissolves performance anxiety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs">
                <h3 className="font-semibold text-sm text-stone-900 mb-4 font-serif-display">
                  3. Explaining Pricing & Confidentiality
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-rose-800 uppercase tracking-wider block mb-1">
                      Traditional Clinical Phrasing:
                    </span>
                    <p className="text-stone-600 italic">
                      &quot;Fees are £60 – £90. Confidentiality is maintained according to professional ethical codes.&quot;
                    </p>
                    <p className="text-[11px] text-stone-500 mt-2">
                      Dry, procedural, and misses an opportunity to address budget questions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <span className="font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                      High-Converting Empathetic Phrasing:
                    </span>
                    <p className="text-stone-900 font-medium">
                      &quot;Clear, honest fees with no hidden costs: Young People £60, Adults £60–£90, Couples £90. Everything you share is strictly confidential within our private room, with free on-street parking in Oadby.&quot;
                    </p>
                    <p className="text-[11px] text-stone-600 mt-2">
                      Combines fee transparency with physical reassurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA to switch back */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-stone-200 text-center shadow-xs">
          <h3 className="text-2xl font-normal text-stone-900 font-serif-display mb-2">
            Experience these recommendations in action
          </h3>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mb-6">
            We built a complete, production-grade redesign of Talk Aid Counselling Services implementing every single SEO, conversion, and trust principle outlined above.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onSwitchToWebsite}
              className="py-3 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Explore The Redesigned Client Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBooking}
              className="py-3 px-5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors cursor-pointer"
            >
              Test The Consultation Booking Flow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
