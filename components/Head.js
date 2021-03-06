import Head from 'next/head'

export async function getServerSideProps(context) {
    const {time,title} = context && context.query || {};
    return {
        props: {
            time,
            title
        }
    }
}
export default function Header(content) {
    const {time,title}={}
    return (
        <Head>
            <link rel="stylesheet" href="//at.alicdn.com/t/font_2614575_0k9272p6cclf.css"/>
            <link rel="shortcut icon" type="image/png" href="favicon.png"/>
            {/*<meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={description}/>
            <title>{time?(time+' | '):''}{title}</title>*/}
            {/*<title>{time?(time+' | '):''}{title}</title>*/}
            <title>{title?(time?(time+' | '):''+title):'精美壁纸 | 必应'}</title>
        </Head>
    )
}

