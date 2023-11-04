import Header from '@/components/Header';
import HomeArticles from '@/components/HomeArticles';
import Subscribe from '@/components/Subscribe';
import CategoriesHome from '@/components/CategoriesHome';
import MetaHead from '@/components/MetaHead';

export default function Home(props) {
  return (
    <>
      <MetaHead
        title="Kasihtuamal - Blog informasi terkini"
        description="Memberitahu segala informasi melalui artikel yang bisa anda baca disini."
        url={process.env.WEB_URL}
      />

      <main>
        <Header />
        <CategoriesHome />
        <Subscribe />
        <HomeArticles data={props.data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_HOST}articles-home?page=1`);
  const data = await response.json();

  return { props: { data } };
}

// buat icon search di search comp
// cek dan benerin search page
// masalah image sizes

// IDEA LISTS

// di halaman article, di tengah konten dibuat box rekomendasi artikle yang berhubungan dengan artikle tsb berdasarkan label, di backend data nya dikirim bareng dengan artikel tsb

// di halaman article bagian bawah buat related article
