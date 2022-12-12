import Head from "next/head";

export default function PlayerBioLayout({children}) {
    const {last_name} = {...children.props}
    return (
        <>
        <Head>
        <title>All Things Ball - {last_name}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href='../../myfavicon.svg' type='image/svg+xml'/>
        </Head>
        {children}
        </>
    )
}