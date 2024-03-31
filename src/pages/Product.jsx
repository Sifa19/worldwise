import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img className={styles.image} src="./assets/img-1.jpg" alt="image" />
        <div>
          <h2>About WorldWide</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            esse, mollitia nesciunt hic odio alias tenetur perferendis
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            eveniet rerum molestias! Nulla accusamus laborum dolores! Aspernatur
            animi commodi illum illo aliquid repudiandae
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
