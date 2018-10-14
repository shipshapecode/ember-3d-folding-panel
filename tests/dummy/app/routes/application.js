import Route from '@ember/routing/route';
import { htmlSafe } from '@ember/string';

const panelInfo = htmlSafe(`<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum
  aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi
  corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia
  maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa
  esse, aut est repellendus porro, maiores corporis illo!
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum
  aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi
  corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia
  maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa
  esse, aut est repellendus porro, maiores corporis illo!
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quidem, dolor!
  Necessitatibus libero suscipit voluptatum, ex voluptates. Ab, sit nam eum,
  officiis natus sunt totam aperiam id quo sed obcaecati itaque hic quia, facilis
  magni est sequi minima ex placeat commodi et modi eos consectetur recusandae.
  Adipisci quaerat voluptatum dolorem doloribus, ullam molestiae praesentium,
  saepe, voluptate quasi suscipit iure. Ipsam, iste excepturi dolore, explicabo
  numquam debitis ducimus laudantium? Aperiam perferendis accusantium quis magnam,
  odit doloribus, officia nesciunt voluptatum quidem voluptatibus veritatis temporibus
  adipisci dignissimos dolor quod beatae aliquam similique expedita! Distinctio
  rem tempora temporibus molestias veritatis accusamus ipsa pariatur iusto!
</p>`);

export default Route.extend({
  model() {
    return [
      {
        alt: 'Client 1',
        heading: 'Client 1',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 1',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo1.png',
        panelInfo
      },
      {
        alt: 'Client 2',
        heading: 'Client 2',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 2',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo2.png',
        panelInfo
      },
      {
        alt: 'Client 3',
        heading: 'Client 3',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 3',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo3.png',
        panelInfo
      },
      {
        alt: 'Client 4',
        heading: 'Client 4',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 4',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo4.png',
        panelInfo
      }
    ];
  }
});
