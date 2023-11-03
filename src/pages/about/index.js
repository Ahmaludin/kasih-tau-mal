import MetaHead from '@/components/MetaHead';
import styles from '../../styles/staticPage.module.scss';

export default function About() {
  return (
    <>
      <MetaHead
        title="About"
        description="Tentang website kasihtaumal"
        url={`${process.env.WEB_URL}about`}
      />

      <section className={styles.container}>
        <div className={styles.content}>
          <h1>TENTANG KASIHTAUMAL</h1>
          <br />
          <p>
            Sebuah website yang memberi konten artikel untuk pembaca yang
            membutuhkan segala informasi.
          </p>
          <br />
          <p>
            Dari banyak kategori artikel, pembaca bisa melakukan filtering
            artikel yang ingin dibaca. Melalui kategori entertainment pembaca
            bisa mengetahui informasi terkini dalam bidang hiburan di Indonesia
            maupun luar negeri.
          </p>
          <br />
          <p>
            Begitupun pembaca yang menyukai video game bisa melihat artikel
            seputar dunia gaming di sini.
          </p>
          <br />
          <p>
            Gunakan fitur pencarian untuk mencari artikel yang sesuai keinginan.
          </p>
          <br />
          <p>
            Jangan sampai ketinggalan informasi, masukan nama dan email pada
            section subscribe di halaman utama, maka pembaca akan menerima email
            pembaharuan artikel nantinya.
          </p>
        </div>
      </section>
    </>
  );
}
