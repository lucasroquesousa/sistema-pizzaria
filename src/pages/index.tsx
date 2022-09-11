import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logoimg from "../../public/Group 180.png";
import styles from "../../styles/Home.module.scss";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sênior - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoimg} alt="Logo Pizzaria" />
        <div className={styles.login}>
          <form>
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={true}>
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
