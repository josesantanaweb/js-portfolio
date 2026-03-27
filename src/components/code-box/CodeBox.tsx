'use client'

const CodeBox = () => {
    return (
        <div className="bg-background border-stroke flex h-[370px] w-1/2 overflow-hidden rounded-2xl border flex-col">
            <div className="bg-surface flex h-14 w-full justify-between px-4">
                <div className="flex items-center gap-2">
                    <span className="bg-error h-3 w-3 rounded-full" />
                    <span className="bg-warning h-3 w-3 rounded-full" />
                    <span className="bg-success h-3 w-3 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    <p className="text-muted font-mono text-sm font-semibold">
                        Portfolio.tsx
                    </p>
                </div>
            </div>
            <div className="flex h-full w-full p-6 gap-6">
                <div className="flex h-full flex-col gap-4">
                    <p className="text-muted font-mono text-sm">01</p>
                    <p className="text-muted font-mono text-sm">02</p>
                    <p className="text-muted font-mono text-sm">03</p>
                    <p className="text-muted font-mono text-sm">04</p>
                    <p className="text-muted font-mono text-sm">05</p>
                    <p className="text-muted font-mono text-sm">06</p>
                    <p className="text-muted font-mono text-sm">07</p>
                    <p className="text-muted font-mono text-sm">08</p>
                </div>
                <div className="flex h-full flex-col gap-4">
                    <p className="text-muted font-mono text-sm">const developer = {`{`}</p>
                    <p className="text-muted font-mono text-sm">02</p>
                    <p className="text-muted font-mono text-sm">03</p>
                    <p className="text-muted font-mono text-sm">04</p>
                    <p className="text-muted font-mono text-sm">05</p>
                    <p className="text-muted font-mono text-sm">06</p>
                    <p className="text-muted font-mono text-sm">07</p>
                    <p className="text-muted font-mono text-sm">08</p>
                </div>
            </div>
        </div>
    )
}

export default CodeBox
