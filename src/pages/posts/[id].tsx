import Head from 'next/head';

const SinglePage = ()=>{
    return(
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preload" as="image" href="https://rscripts.net/logo.svg" />
                <link rel="stylesheet" href="/src/styles/0d7c83ff46c8f2cd.css" />
                <link rel="stylesheet" href="/src/styles/e27b94790ece9e59.css" />
                <link rel="stylesheet" href="/src/styles/4932d2e513585f8a.css" />
            </Head>
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
        </>
    )
}
export default SinglePage
