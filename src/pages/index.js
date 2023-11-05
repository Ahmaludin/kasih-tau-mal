import Header from '@/components/Header';
import HomeArticles from '@/components/HomeArticles';
import Subscribe from '@/components/Subscribe';
import CategoriesHome from '@/components/CategoriesHome';
import MetaHead from '@/components/MetaHead';

export default function Home() {
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
        <HomeArticles />
      </main>
    </>
  );
}

// IDEA LISTS

// di halaman article, di tengah konten dibuat box rekomendasi artikle yang berhubungan dengan artikle tsb berdasarkan label, di backend data nya dikirim bareng dengan artikel tsb

// di halaman article bagian bawah buat related article
