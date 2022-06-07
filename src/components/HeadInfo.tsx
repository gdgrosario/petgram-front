import Head from 'next/head';

interface HeadInfoProps {
  title: string;
  description?: string;
}

export const HeadInfo = ({
  title,
  description = 'Bienvenido a petgram',
}: HeadInfoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
