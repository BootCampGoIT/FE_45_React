import React from "react";
import paris from "../../images/main/photo4.jpg";
import tools from "../../data/tools/tools.json"; //[]
import toys from "../../data/toys/toys.json";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";

const Main = () => {
  return (
    <main>
      <Section title='Toys' isNew={true}>
        <ProductList arr={toys} />
      </Section>
      <Section title='Tools'>
        <ProductList arr={tools} />
      </Section>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores
        fugit consequuntur ducimus cumque nobis, aspernatur beatae assumenda,
        optio quae rem numquam, quaerat ullam. Saepe est obcaecati delectus
        eligendi, itaque dignissimos veritatis non iste voluptatibus fugit
        temporibus voluptatum dolor, labore velit dolore cupiditate. Assumenda
        delectus porro excepturi? Harum dolore, fuga cum excepturi accusantium
        suscipit hic dignissimos aliquid. Consequatur, placeat harum quidem odio
        inventore doloremque animi officia ut commodi error itaque nam sint
        totam, eveniet laborum! Exercitationem deserunt blanditiis tempore
        accusamus itaque quidem corporis ipsum possimus cum! Tenetur autem
        perspiciatis magnam iure blanditiis iusto nemo hic, sapiente nulla
        repellendus? Reprehenderit, culpa?
      </p>
      <img src={paris} alt='Hello Paris' /> */}
    </main>
  );
};

export default Main;

// true && console.log("Hello");
// true && console.log("By");
