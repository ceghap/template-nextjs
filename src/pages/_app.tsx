import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';

import { Layout } from '@/components/layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
