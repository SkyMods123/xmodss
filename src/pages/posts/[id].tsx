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
                                                    <div className="min-w-0">
                                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                                            <h1 className="truncate text-xl font-bold sm:text-2xl">ESP (Free)</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <a aria-label="Search for game" className="hover:text-green-500 hover:underline" href="https://rscripts.net/scripts?q=Dead%20Rails%20Alpha">Dead Rails Alpha</a>
                                                <span>•</span>
                                                <div className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3.5 w-3.5">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    2 days ago
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
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default SinglePage;
