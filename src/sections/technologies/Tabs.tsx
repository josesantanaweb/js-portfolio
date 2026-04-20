'use client'

const TABS = [
  {
    label: 'Frontend',
    value: 'frontend',
  },
  {
    label: 'Backend',
    value: 'backend',
  },
]

type TabValue = 'frontend' | 'backend'

interface TabsProps {
  activeTab: TabValue
  onTabChange: (value: TabValue) => void
}

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const indicatorTranslate = activeTab === 'frontend' ? '0%' : '100%'

  return (
    <div className="relative flex items-center h-13 border border-stroke rounded-full p-1 w-[260px] bg-canvas">
      <span
        className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${indicatorTranslate})` }}
      />
      {TABS.map((tab) => (
        <button
          key={tab.value}
          className={`relative z-10 flex items-center justify-center h-full rounded-full w-full cursor-pointer transition-colors duration-300 ${
            activeTab === tab.value ? 'text-white' : 'text-muted'
          }`}
          onClick={() => onTabChange(tab.value as TabValue)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
