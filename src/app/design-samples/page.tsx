const designs = [
  "Editorial Red",
  "Midnight Technology",
  "Clean Corporate",
  "Afro-Futurist Minimal",
  "Conversion Bento",
  "Creative Portfolio Canvas",
  "Nigerian Luxury",
  "Blue Digital Growth",
  "Monochrome Brutalist",
  "Human-Centered Studio",
];

export default function DesignSamplesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-[1800px]">
        <header className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Website Designer Nigeria
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl">Homepage design samples</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Click any image to open the original full-resolution design in a new tab.
          </p>
        </header>

        <div className="grid gap-10">
          {designs.map((name, index) => {
            const number = index + 1;
            const imageUrl = `/design-samples/design-${number}.png`;

            return (
              <section key={name} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                      Design {number}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">{name}</h2>
                  </div>
                  <a
                    href={imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-red-500"
                  >
                    Open full resolution
                  </a>
                </div>
                <a href={imageUrl} target="_blank" rel="noreferrer" className="block">
                  {/* Native image keeps the preview simple and links directly to the original file. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={`Design ${number}: ${name}`}
                    className="h-auto w-full cursor-zoom-in"
                  />
                </a>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}








