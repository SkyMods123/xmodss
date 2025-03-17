import Head from 'next/head';

const SinglePage = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preload" as="image" href="https://rscripts.net/logo.svg" />
                <link rel="stylesheet" href="/src/styles/0d7c83ff46c8f2cd.css" />
                <link rel="stylesheet" href="/src/styles/e27b94790ece9e59.css" />
                <link rel="stylesheet" href="/src/styles/4932d2e513585f8a.css" />
            </Head>
            <body className="bg-background __className_3a0388 min-h-screen">
                <div className="coverimg absolute -top-[380px] hidden h-[50rem] w-full opacity-30 blur-[2px] md:block">
                    <img alt="background coverart" fetchpriority="high" loading="eager" width="135" height="160" decoding="async" data-nimg="1" className="h-[800px] w-full object-cover object-top" style={{ color: 'transparent' }} />
                </div>
                <div className="absolute -top-[370px] hidden h-[50rem] w-full bg-gradient-to-b from-gray-200/40 to-white dark:from-muted/20 dark:to-background md:block"></div>
                <div className="min-h-screen bg-background">
                    <main className="container px-4 py-6 lg:px-14">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="z-10 space-y-6 lg:col-span-2">
                                <header className="!mt-0">
                                    <div className="rounded-lg border text-card-foreground shadow-sm bg-card/70 backdrop-blur-sm">
                                        <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="flex min-w-0 items-center gap-3">
                                                        <img alt="Game icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="flex-shrink-0 rounded-lg" style={{ color: 'transparent' }} />
                                                        <div className="min-w-0">
                                                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                                                <h1 className="truncate text-xl font-bold sm:text-2xl">ESP (Free)</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                                <section className="script-description">
                                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                                <h2>Description</h2>
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0 space-y-4">
                                            <div className="description prose prose-invert max-w-none">
                                                <h2>ESP</h2>
                                            </div>
                                            <div className="mt-4 flex flex-col gap-4 sm:flex-row"></div>
                                        </div>
                                    </div>
                                </section>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 col-span-2 transition-colors duration-200 hover:bg-accent">
                                        <span className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy mr-2 h-4 w-4">
                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                            </svg>
                                            Download
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <aside className="script-similar-scripts lg:col-span-1">
                                <div className="rounded-lg border text-card-foreground shadow-sm sticky top-20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                    <div className="flex flex-col space-y-1.5 p-6 pb-3">
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            <h2>Similar Scripts</h2>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
            </body>
        </>
    );
}

export default SinglePage;
