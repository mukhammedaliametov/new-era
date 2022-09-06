import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import ModalContextProvider from "../HOC/ModalContext";
import { About, Contacts, Equipment, Software, Welcome } from "../sections";

const Home: NextPage = () => {
    return (
        <ModalContextProvider>
            <Layout>
                <Head>
                    <title>
                        ПРОДУКТ - СИСТЕМЫ GPS МОНИТОРИНГА ТРАНСПОРТА ЭТО ГОТОВЫЕ
                        РЕШЕНИЯ, ПРЕДНАЗНАЧЕННЫЕ ДЛЯ ОПТИМИЗАЦИИ ЗАТРАТ И
                        ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ИСПОЛЬЗОВАНИЯ ВАШЕГО АВТОПАРКА
                    </title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                </Head>

                <main className="font-body">
                    <Welcome />
                    <About />
                    <Software />
                    <Equipment />
                    <Contacts />
                </main>
            </Layout>
        </ModalContextProvider>
    );
};

export default Home;
